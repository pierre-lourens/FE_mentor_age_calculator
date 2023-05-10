import { ResultLabels } from '../constants';
import ResultHeading from './ResultHeading';

const Tile = () => {
  return (
    <>
      <ResultHeading label={ResultLabels.YEARS} number={3} />
      <ResultHeading label={ResultLabels.MONTHS} number={10} />
      <ResultHeading label={ResultLabels.DAYS} number={20} />
    </>
  );
};

export default Tile;
