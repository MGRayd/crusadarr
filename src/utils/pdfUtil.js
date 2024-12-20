// src/utils/pdfUtil.js
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { calculateTotalScore } from './scoreUtil';

export const exportToPDF = async ({
  units,
  commandPoints,
  roundPoints,
  paintedBonus,
  gameDate,
  customFileName,
  playerName,
  playerFaction
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

  // Add player name and faction logo
  const logoWidth = 30;
  const logoHeight = 30;
  
  if (playerFaction?.icon) {
    try {
      const img = await loadImage(playerFaction.icon);
      doc.addImage(img, 'PNG', margin, y, logoWidth, logoHeight);
      doc.setFontSize(20);
      doc.text(playerName, margin + logoWidth + 5, y + 20);
    } catch (error) {
      console.error('Error loading faction icon:', error);
      // If logo fails, just show the name
      doc.setFontSize(20);
      doc.text(playerName, margin, y + 20);
    }
  } else if (playerName) {
    doc.setFontSize(20);
    doc.text(playerName, margin, y + 20);
  }
  
  y += 40;

  // Create game summary table
  const gameData = [
    ['Round', 'Victory Points'],
    ...roundPoints.map((points, index) => [`Round ${index + 1}`, points]),
    ['Painted Bonus', paintedBonus ? 10 : 0],
    ['Command Points Remaining', commandPoints],
    ['Total Score', calculateTotalScore(roundPoints, paintedBonus)]
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
        overflow: 'linebreak'
      },
      headStyles: {
        fillColor: [66, 66, 66],
        textColor: [255, 255, 255]
      },
      alternateRowStyles: {
        fillColor: [240, 240, 240]
      },
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
