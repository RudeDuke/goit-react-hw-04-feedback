import PropTypes from 'prop-types';
import { StatList } from './Statistics.styled';

const Statistics = ({ feedback, total, positivePercentage }) => {
  const feedbackTypes = [
    ...Object.entries(feedback).map(([key, value]) => ({
      label: key[0].toUpperCase() + key.slice(1),
      value,
    })),
    { label: 'Total', value: total },
    { label: 'Positive feedback', value: `${positivePercentage}%` },
  ];

  return (
    <StatList>
      {feedbackTypes.map(({ label, value }, index) => {
        const className =
          index >= feedbackTypes.length - 2
            ? `feedback-stat ${label.toLowerCase().replace(' ', '-')}`
            : 'feedback-stat';
        return (
          <li className={className} key={label}>
            <span className="label">{label}:</span>
            <span className="value">{value}</span>
          </li>
        );
      })}
    </StatList>
  );
};

Statistics.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
