import { clearData } from './localStorageUtil';

export const resetData = ({
  setUnits,
  setCommandPoints,
  setRosterText,
  setRoundPoints,
  setPaintedBonus,
  setGameDate,
  setCustomFileName,
  setPlayerName,
  setPlayerFaction,
  setCommandPointsPlayer1,
  setCommandPointsPlayer2,
  setRoundPointsPlayer1,
  setRoundPointsPlayer2,
  setPaintedBonusPlayer1,
  setPaintedBonusPlayer2,
  setPlayer1Name,
  setPlayer2Name,
  setPlayer1Faction,
  setPlayer2Faction

}) => {
  if (setUnits) setUnits([]);
  if (setCommandPoints) setCommandPoints(0);
  if (setRosterText) setRosterText("");
  if (setRoundPoints) setRoundPoints(Array(5).fill(0));
  if (setPaintedBonus) setPaintedBonus(false);
  if (setGameDate) setGameDate("");
  if (setCustomFileName) setCustomFileName("");
  if (setPlayerName) setPlayerName("");
  if (setPlayerFaction) setPlayerFaction("");
  if (setCommandPointsPlayer1) setCommandPointsPlayer1(0);
  if (setCommandPointsPlayer2) setCommandPointsPlayer2(0);
  if (setRoundPointsPlayer1) setRoundPointsPlayer1(Array(5).fill(0));
  if (setRoundPointsPlayer2) setRoundPointsPlayer2(Array(5).fill(0));
  if (setPaintedBonusPlayer1) setPaintedBonusPlayer1(false);
  if (setPaintedBonusPlayer2) setPaintedBonusPlayer2(false);
  if (setPlayer1Name) setPlayer1Name("");
  if (setPlayer2Name) setPlayer2Name("");
  if (setPlayer1Faction) setPlayer1Faction("");
  if (setPlayer2Faction) setPlayer2Faction("");

  localStorage.removeItem('units');
  localStorage.removeItem('commandPoints');
  localStorage.removeItem('rosterText');
  localStorage.removeItem('roundPoints');
  localStorage.removeItem('paintedBonus');
  localStorage.removeItem('gameDate');
  localStorage.removeItem('customFileName');
  localStorage.removeItem('playerName');
  localStorage.removeItem('playerFaction');
  localStorage.removeItem('commandPointsPlayer1');
  localStorage.removeItem('commandPointsPlayer2');
  localStorage.removeItem('roundPointsPlayer1');
  localStorage.removeItem('roundPointsPlayer2');
  localStorage.removeItem('paintedBonusPlayer1');
  localStorage.removeItem('paintedBonusPlayer2');
  localStorage.removeItem('player1Name');
  localStorage.removeItem('player2Name');
  localStorage.removeItem('player1Faction');
  localStorage.removeItem('player2Faction');

};
