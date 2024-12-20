import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage({ onSubmit, player1Name, player2Name, player1Faction, player2Faction }) {
  const navigate = useNavigate();
  const [playerMode, setPlayerMode] = useState(() => {
    return (player1Name && player2Name) ? '2' : '1';
  });
  const [p1Name, setP1Name] = useState('');
  const [p2Name, setP2Name] = useState('');
  const [p1Faction, setP1Faction] = useState('');
  const [p2Faction, setP2Faction] = useState('');

  const hasExistingGame = player1Name && player2Name && player1Faction && player2Faction;

  useEffect(() => {
    setP1Name(player1Name || '');
    setP2Name(player2Name || '');
    setP1Faction(player1Faction || '');
    setP2Faction(player2Faction || '');
  }, [player1Name, player2Name, player1Faction, player2Faction]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (playerMode === '2' && p1Name.trim() && p2Name.trim() && p1Faction && p2Faction) {
      onSubmit(p1Name.trim(), p2Name.trim(), p1Faction, p2Faction);
      navigate('/game');
    }
  };

  const handleReturnToGame = () => {
    navigate('/game');
  };

  return (
    <div>
      <h1>CRUSADARR</h1>
      <h2>Beta 1.7</h2>
      <div className="player-select">
        <button 
          className={playerMode === '1' ? 'active' : ''} 
          onClick={() => setPlayerMode('1')}
        >
          1 PLAYER
        </button>
        {hasExistingGame ? (
          <button 
            className="active"
            onClick={handleReturnToGame}
          >
            RETURN TO GAME
          </button>
        ) : (
          <button 
            className={playerMode === '2' ? 'active' : ''} 
            onClick={() => setPlayerMode('2')}
          >
            2 PLAYERS
          </button>
        )}
      </div>

      {playerMode === '2' && !hasExistingGame && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Player 1 Name:
              <input
                type="text"
                value={p1Name}
                onChange={(e) => setP1Name(e.target.value)}
                required
              />
            </label>
            <label>
              Player 1 Faction:
              <select 
                value={p1Faction} 
                onChange={(e) => setP1Faction(e.target.value)}
                required
              >
                <option value="">Select Faction</option>
                <option value="X">X</option>
                <option value="O">O</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Player 2 Name:
              <input
                type="text"
                value={p2Name}
                onChange={(e) => setP2Name(e.target.value)}
                required
              />
            </label>
            <label>
              Player 2 Faction:
              <select 
                value={p2Faction} 
                onChange={(e) => setP2Faction(e.target.value)}
                required
              >
                <option value="">Select Faction</option>
                <option value="X">X</option>
                <option value="O">O</option>
              </select>
            </label>
          </div>
          <button type="submit">START THE GAME</button>
        </form>
      )}

      {playerMode === '1' && (
        <div>
          {/* Single player content */}
          <button onClick={handleSubmit}>START THE GAME</button>
        </div>
      )}

      <div className="rule-buttons">
        <button className="rule-button">CRUSADE RULES</button>
        <button className="rule-button">HOUSE RULES</button>
        <button className="rule-button">MISSIONS</button>
        <button className="rule-button">DICE ROLLER</button>
      </div>
    </div>
  );
}

export default HomePage; 