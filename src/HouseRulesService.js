// HouseRulesService.js
const SHEET_ID = '1FcWUZRyqEWs-y8rTywrl036-MD4Jdz9hJ-7IKeNySqI';
const API_KEY = import.meta.env.VITE_API_KEY; // Accessing the API Key from .env
const RANGE = 'Rules!A2:D';

console.log("API_KEY", API_KEY);

export async function fetchGameRules() {
  try {
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`
    );
    const data = await response.json();
    return data.values || []; // Return the rows data
  } catch (error) {
    console.error("Error fetching data from Google Sheets:", error);
    return [];
  }
}
