import { useState } from 'react';
import './Quiz.css';
import { useNavigate } from 'react-router-dom';

const Quiz = ({ onResult }) => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
  });
  const [error, setError] = useState('');

  const handleChange = (question, category) => {
    setAnswers((prev) => ({
      ...prev,
      [question]: category,
    }));
  };

  const handleSubmit = () => {
    const incomplete = Object.values(answers).some((answer) => answer === '');

    if (incomplete) {
      setError('Please answer all questions before submitting.');
      return;
    }

    setError('');

    const points = {
      Theatre: 0,
      Art: 0,
      History: 0,
    };

    Object.values(answers).forEach((category) => {
      if (points[category] !== undefined) {
        points[category] += 1;
      }
    });

    const maxPoints = Math.max(...Object.values(points));
    const tiedCategories = Object.keys(points).filter(
      (category) => points[category] === maxPoints
    );
    const bestCategory =
      tiedCategories[Math.floor(Math.random() * tiedCategories.length)];

    let recommendation = '';

    if (bestCategory === 'Theatre') {
      recommendation = 'Shakespeare Globe';
    } else if (bestCategory === 'Art') {
      recommendation = 'Van Gogh Experience';
    } else if (bestCategory === 'History') {
      recommendation = 'British Museum';
    }

    if (onResult) {
      onResult(recommendation);
    }

    navigate(`/art-and-culture?category=${bestCategory}`);
  };

  return (
    <>
      <div className='quiz'>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
          Welcome to our Quiz!
        </h2>

        <div>
          <p>What vibe are you in the mood for?</p>
          <label>
            <input
              type="radio"
              name="q1"
              value="Theatre"
              checked={answers.q1 === 'Theatre'}
              onChange={() => handleChange('q1', 'Theatre')}
            />
            A bit of drama!
          </label>
          <label>
            <input
              type="radio"
              name="q1"
              value="Art"
              checked={answers.q1 === 'Art'}
              onChange={() => handleChange('q1', 'Art')}
            />
            Inspirational and creative
          </label>
          <label>
            <input
              type="radio"
              name="q1"
              value="History"
              checked={answers.q1 === 'History'}
              onChange={() => handleChange('q1', 'History')}
            />
            Knowledge and facts
          </label>
        </div>

        <div>
          <p>What pace do you typically enjoy?</p>
          <label>
            <input
              type="radio"
              name="q2"
              value="History"
              checked={answers.q2 === 'History'}
              onChange={() => handleChange('q2', 'History')}
            />
            Slow and thoughtful
          </label>
          <label>
            <input
              type="radio"
              name="q2"
              value="Theatre"
              checked={answers.q2 === 'Theatre'}
              onChange={() => handleChange('q2', 'Theatre')}
            />
            Exciting and fast
          </label>
          <label>
            <input
              type="radio"
              name="q2"
              value="Art"
              checked={answers.q2 === 'Art'}
              onChange={() => handleChange('q2', 'Art')}
            />
            Relaxed and laid-back
          </label>
        </div>

        <div>
          <p>What is the most important aspect you would want from an activity?</p>
          <label>
            <input
              type="radio"
              name="q3"
              value="History"
              checked={answers.q3 === 'History'}
              onChange={() => handleChange('q3', 'History')}
            />
            Learning
          </label>
          <label>
            <input
              type="radio"
              name="q3"
              value="Theatre"
              checked={answers.q3 === 'Theatre'}
              onChange={() => handleChange('q3', 'Theatre')}
            />
            Entertainment
          </label>
          <label>
            <input
              type="radio"
              name="q3"
              value="Art"
              checked={answers.q3 === 'Art'}
              onChange={() => handleChange('q3', 'Art')}
            />
            Inspiration
          </label>
        </div>

        <div>
          <p>What is your favourite time of day?</p>
          <label>
            <input
              type="radio"
              name="q4"
              value="History"
              checked={answers.q4 === 'History'}
              onChange={() => handleChange('q4', 'History')}
            />
           Morning
          </label>
          <label>
            <input
              type="radio"
              name="q4"
              value="Theatre"
              checked={answers.q4 === 'Theatre'}
              onChange={() => handleChange('q4', 'Theatre')}
            />
            Evening
          </label>
          <label>
            <input
              type="radio"
              name="q4"
              value="Art"
              checked={answers.q4 === 'Art'}
              onChange={() => handleChange('q4', 'Art')}
            />
            Afternoon
          </label>
        </div>

        <div>
          <p>What kind of atmosphere do you prefer the most?</p>
          <label>
            <input
              type="radio"
              name="q5"
              value="History"
              checked={answers.q5 === 'History'}
              onChange={() => handleChange('q5', 'History')}
            />
           Spacious with grand halls.
          </label>
          <label>
            <input
              type="radio"
              name="q5"
              value="Theatre"
              checked={answers.q5 === 'Theatre'}
              onChange={() => handleChange('q5', 'Theatre')}
            />
            Dark rooms lit by lighting.
          </label>
          <label>
            <input
              type="radio"
              name="q5"
              value="Art"
              checked={answers.q5 === 'Art'}
              onChange={() => handleChange('q5', 'Art')}
            />
            Bright and colourful.
          </label>
        </div>

        {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}

        <div className='button-row'>
          <button
            className='submit-button'
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>

      <button
        className='go-back-button'
        onClick={() => navigate('/art-and-culture')}
      >
        Go Back
      </button>
    </>
  );
};

export default Quiz;
