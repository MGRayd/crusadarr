// utils/rosterParser.js
export const parseRoster = (rosterText) => {
  const lines = rosterText.split('\n');
  const unitRegex = /\((\d+) points\)/;

  let parsedUnits = [];
  let currentCategory = '';
  let currentUnit = null;

  const validCategories = [
    "CHARACTERS", 
    "BATTLELINE", 
    "DEDICATED TRANSPORTS", 
    "OTHER DATASHEETS", 
    "ALLIED UNITS"
  ];

  lines.forEach((line) => {
    line = line.trim();

    if (validCategories.includes(line)) {
      currentCategory = line;

    } else if (unitRegex.test(line) && currentCategory) {
      // If we have a previous unit, add it to the array
      if (currentUnit) {
        parsedUnits.push(currentUnit);
      }

      const pointsMatch = line.match(unitRegex);
      const points = pointsMatch ? parseInt(pointsMatch[1]) : 0;
      const unitName = line.replace(unitRegex, '').trim();
      const unitId = `${unitName}-${parsedUnits.length}`;

      currentUnit = {
        id: unitId,
        name: unitName,
        points: points,
        type: currentCategory, // Changed from category to type to match UI expectations
        unitsKilled: '',      // Changed from kills to unitsKilled to match UI expectations
        destroyed: false,
        agenda: '',
        agendaCompleted: false,
        equipment: []         // Added equipment array
      };

    } else if (currentUnit && (
      line.startsWith('•') || 
      line.startsWith('×') ||
      line.startsWith('x') ||
      /^\d+x/.test(line) ||
      line.startsWith('-')
    )) {
      // Parse equipment lines
      const equipment = line.replace(/^[•×x\-\d]+/, '').trim();
      if (equipment) {
        currentUnit.equipment.push(equipment);
      }
    }
  });

  // Don't forget to add the last unit
  if (currentUnit) {
    parsedUnits.push(currentUnit);
  }

  console.log('Parsed units:', parsedUnits);
  return parsedUnits;
};
