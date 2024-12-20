import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App2Player({ player1Name, player2Name, player1Faction, player2Faction }) {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [p1Faction, setP1Faction] = useState('');
  const [p2Faction, setP2Faction] = useState('');
  const [scores, setScores] = useState(Array(9).fill(null));
  const [isPlayer1Next, setIsPlayer1Next] = useState(true);
  const [winner, setWinner] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (player1Name && player2Name && player1Faction && player2Faction) {
      setPlayer1(player1Name);
      setPlayer2(player2Name);
      setP1Faction(player1Faction);
      setP2Faction(player2Faction);
    }
  }, [player1Name, player2Name, player1Faction, player2Faction]);

  const handleReset = () => {
    setPlayer1('');
    setPlayer2('');
    setScores(Array(9).fill(null));
    setIsPlayer1Next(true);
    setWinner(null);
    // Clear all localStorage items
    localStorage.removeItem('player1Name');
    localStorage.removeItem('player2Name');
    localStorage.removeItem('player1Faction');
    localStorage.removeItem('player2Faction');
    // Navigate to home after reset
    navigate('/');
  };

  return (
    <div>
      {/* Render your component here */}
    </div>
  );
}

export default App2Player; 