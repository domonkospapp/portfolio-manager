import { Paper, Table, TableBody, TableContainer, TableHead } from '@mui/material';
import { Position } from '@portfolio-manager/portfolio/models';
import PositionHeader from './components/PositionHeader';
import PositionRow from './components/PositionRow';
import './PositionList.module.css';

export interface PositionListProps {
  positions: Position[],
  getCurrentPrice: (ticker: string) => number
  updateFrequency_ms?: number
}

export const PositionList = (props: PositionListProps) => {
  const {positions, getCurrentPrice, updateFrequency_ms } = props
  return (
      <TableContainer component={Paper}>
      <Table aria-label="position table">
        <TableHead>
          <PositionHeader/>
        </TableHead>
        <TableBody>
          {
            positions.map(position =>
              <PositionRow
                key={position.ticker}
                position={position}
                getCurrentPrice={getCurrentPrice}
                updateFrequency_ms={updateFrequency_ms}
              />
            )
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
