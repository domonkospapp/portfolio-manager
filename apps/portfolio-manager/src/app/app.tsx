import { Position } from '@portfolio-manager/portfolio/models';
import { PositionList } from '@portfolio-manager/portfolio/ui-components';
import { useEffect, useState } from 'react';


export const App = () => {
  const [positions, setPositions] = useState<Position[]>();

  useEffect(() => {
    fetch('/api/transactions').then(
      res => res.json()).then(positions => positions.map(Position.build)).then(setPositions
    );
  }, []);

  const getCurrentPrice = (ticker: string) => {
    return 100 + Math.floor(Math.random() * 100)
  }




  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to Portfolio Manager!</h1>
      </div>
      {positions && <PositionList positions={positions} getCurrentPrice={getCurrentPrice} />}
    </>
  );
};

export default App;
