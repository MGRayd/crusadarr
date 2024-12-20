import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

const calculateTotalScore = (roundPoints, paintedBonus) => {
  const totalRoundPoints = roundPoints.reduce((total, points) => total + points, 0);
  const totalScore = totalRoundPoints + (paintedBonus ? 10 : 0);
  return Math.min(totalScore, 100);

};

export const exportTwoPlayerToPDF = async ({
  units,
  commandPointsPlayer1,
  commandPointsPlayer2,
  roundPointsPlayer1,
  roundPointsPlayer2,
  paintedBonusPlayer1,
  paintedBonusPlayer2,
  gameDate,
  customFileName,
  player1Name,
  player2Name,
  player1FactionLogo,
  player2FactionLogo,

}) => {

  const doc = new jsPDF();
  const margin = 20;
  let y = margin;

  // Format date to UK format (DD-MM-YYYY)
  const formattedDate = new Date(gameDate).toLocaleDateString('en-GB');
  
  // Add header with game name (if provided) and date
  doc.setFontSize(20);
  if (customFileName) {
    doc.text(customFileName, margin, y);
    y += 10;
    doc.setFontSize(14);
    doc.text(`Game Date: ${formattedDate}`, margin, y);
    y += 20;
  } else {
    doc.setFontSize(14);
    doc.text(`Game Date: ${formattedDate}`, margin, y);
    y += 20;
  }

  // Add player names and faction logos in a VS format
  const pageWidth = doc.internal.pageSize.width;
  const logoWidth = 30;
  const logoHeight = 30;
  
  // Player 1 side
  if (player1FactionLogo) {
    try {
      const img1 = await loadImage(player1FactionLogo);
      doc.addImage(img1, 'PNG', margin, y, logoWidth, logoHeight);
    } catch (error) {
      console.error('Error loading player 1 faction icon:', error);
    }
  }
  doc.setFontSize(20);
  doc.text(player1Name, margin + logoWidth + 5, y + 20);
  
  // Center "VS" text
  doc.text("VS", pageWidth / 2, y + 15, { align: 'center' });
  
  // Player 2 side
  if (player2FactionLogo) {
    try {
      const img2 = await loadImage(player2FactionLogo);
      doc.addImage(img2, 'PNG', pageWidth - margin - logoWidth, y, logoWidth, logoHeight);
    } catch (error) {
      console.error('Error loading player 2 faction icon:', error);
    }
  }
  doc.text(player2Name, pageWidth - margin - logoWidth - doc.getTextWidth(player2Name) - 5, y + 20);
  
  y += 40;

  // Calculate total scores
  const player1Total = calculateTotalScore(roundPointsPlayer1, paintedBonusPlayer1);
  const player2Total = calculateTotalScore(roundPointsPlayer2, paintedBonusPlayer2);

  // Create combined game summary table
  const gameData = [
    ['Round', `${player1Name} VP`, `${player2Name} VP`],
    ...roundPointsPlayer1.map((_, index) => [
      `Round ${index + 1}`,
      roundPointsPlayer1[index],
      roundPointsPlayer2[index]
    ]),
    ['Painted Bonus', paintedBonusPlayer1 ? 10 : 0, paintedBonusPlayer2 ? 10 : 0],
    ['Command Points Remaining', commandPointsPlayer1, commandPointsPlayer2],
    ['Total Score', player1Total, player2Total]
  ];

  doc.autoTable({
    startY: y,
    head: [gameData[0]],
    body: gameData.slice(1),
    styles: {
      fontSize: 12,
      cellPadding: 8,
      halign: 'center'
    },
    headStyles: {
      fillColor: [66, 66, 66],
      textColor: [255, 255, 255]
    },
    alternateRowStyles: {
      fillColor: [240, 240, 240]
    },
    columnStyles: {
      0: { fontStyle: 'bold' }
    },
    // Highlight winning score
    didDrawCell: (data) => {
      if (data.row.index === gameData.length - 2 && data.column.index > 0) {
        const score = data.cell.text[0];
        const otherScore = data.column.index === 1 ? player2Total : player1Total;
        if (parseInt(score) > parseInt(otherScore)) {
          doc.setFillColor(63, 81, 181); // Material UI primary blue color
          doc.setTextColor(255, 255, 255);
          doc.rect(data.cell.x, data.cell.y, data.cell.width, data.cell.height, 'F');
          doc.text(score.toString(), data.cell.x + data.cell.width / 2, data.cell.y + data.cell.height / 2, {
            align: 'center',
            baseline: 'middle'
          });
        }
      }
    }
  });

  // Add new page for roster
  if (units.length > 0) {
    doc.addPage();
    y = margin;
    
    // Add roster header
    doc.setFontSize(16);
    doc.text("Army Roster", margin, y);
    y += 10;

    // Units table with automatic page breaks
    doc.autoTable({
      startY: y,
      head: [['Unit Name', 'Points', 'Kills', 'Status', 'Agenda']],
      body: units.map(unit => [
        unit.name,
        unit.points,
        unit.kills,
        unit.destroyed ? 'Destroyed' : 'Active',
        unit.agenda ? `${unit.agenda}${unit.agendaCompleted ? ' (Completed)' : ''}` : '-'
      ]),
      styles: { 
        fontSize: 10, 
        cellPadding: 5,
        overflow: 'linebreak'  // Ensures text wraps instead of being cut off
      },
      headStyles: {
        fillColor: [66, 66, 66],
        textColor: [255, 255, 255]
      },
      alternateRowStyles: {
        fillColor: [240, 240, 240]
      },
      // Enable automatic page breaks for long rosters
      willDrawPage: (data) => {
        // Reset header style on new pages
        doc.setFontSize(16);
        doc.text("Army Roster (continued)", margin, margin);
      }
    });
  }

  // Generate filename and save
  const filename = customFileName 
    ? `${customFileName}.pdf`
    : `crusade_report_${formattedDate.replace(/\//g, '-')}.pdf`;

  doc.save(filename);
};

const loadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });

};


