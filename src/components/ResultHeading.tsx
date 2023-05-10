import { ResultLabels } from '../constants';

type Props = {
  label: ResultLabels;
  number: number;
};

const ResultHeading = ({ label, number }: Props) => {
  return (
    <p>
      {number} {label}
    </p>
  );
};

export default ResultHeading;
