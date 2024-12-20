// Add TypeScript or PropTypes for better type safety
interface Unit {
  id: string;
  name: string;
  kills: number;
  deaths: number;
  // ... other properties
}

interface PlayerState {
  name: string;
  faction: {
    name: string;
    logo: string;
  };
  commandPoints: number;
  roundPoints: number[];
  paintedBonus: boolean;
} 