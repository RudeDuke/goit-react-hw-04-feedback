import { useState } from 'react';
import { FeedbackOptions, Notification, Section, Statistics } from 'components';

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });
  
  const { good, neutral, bad } = feedback;

  const handleFeedback = event => {
    const option = event.target.textContent;
    setFeedback(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
    event.target.blur(); 
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const { good } = feedback;
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  const options = Object.keys(feedback); 

  return (
    <div className="container">
      <Section title="Please leave your feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleFeedback} />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification text="There is no feedback" />
        ) : (
          <>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
            <Notification text="Thanks for your feedback!" />
          </>
        )}
      </Section>
    </div>
  );
};

export default App;
