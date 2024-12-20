import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import App2Player from './components/App2Player';

function App() {
  const [player1Name, setPlayer1Name] = useState(() => {
    return localStorage.getItem('player1Name') || '';
  });
  const [player2Name, setPlayer2Name] = useState(() => {
    return localStorage.getItem('player2Name') || '';
  });
  const [player1Faction, setPlayer1Faction] = useState(() => {
    return localStorage.getItem('player1Faction') || '';
  });
  const [player2Faction, setPlayer2Faction] = useState(() => {
    return localStorage.getItem('player2Faction') || '';
  });

  const handlePlayerSubmit = (p1Name, p2Name, p1Faction, p2Faction) => {
    setPlayer1Name(p1Name);
    setPlayer2Name(p2Name);
    setPlayer1Faction(p1Faction);
    setPlayer2Faction(p2Faction);
    
    localStorage.setItem('player1Name', p1Name);
    localStorage.setItem('player2Name', p2Name);
    localStorage.setItem('player1Faction', p1Faction);
    localStorage.setItem('player2Faction', p2Faction);
  };

  const clearPlayerData = () => {
    setPlayer1Name('');
    setPlayer2Name('');
    setPlayer1Faction('');
    setPlayer2Faction('');
    localStorage.removeItem('player1Name');
    localStorage.removeItem('player2Name');
    localStorage.removeItem('player1Faction');
    localStorage.removeItem('player2Faction');
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                onSubmit={handlePlayerSubmit}
                onModeChange={clearPlayerData}
                player1Name={player1Name}
                player2Name={player2Name}
                player1Faction={player1Faction}
                player2Faction={player2Faction}
              />
            } 
          />
          <Route 
            path="/game" 
            element={
              <App2Player 
                player1Name={player1Name}
                player2Name={player2Name}
                player1Faction={player1Faction}
                player2Faction={player2Faction}
              />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 