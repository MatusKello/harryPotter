import React, { useState, useEffect } from 'react';
import { Button, Modal, Typography, Box, Card } from '@mui/material';
import trivia from '../Data/Trivia';
import Translation from './Translation';
import { triviaOptionSwitch } from '../helpers';
import RegisterForm from '../components/RegisterForm';

const TriviaQuestions = () => {
  const [open, setOpen] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answerStatus, setAnswerStatus] = useState(null); // State to track answer status
  const [correctCount, setCorrectCount] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [leaderboard, setLeaderboard] = useState([
    { name: 'Matus Kello', score: 10 },
    { name: 'Andrej Bla', score: 15 },
    { name: 'Adam Lolo', score: 8 },
    { name: 'Patricia Meh', score: 18 },
  ]);

  const handleBgColorChange = (index) => {
    return selectedOption === index && answerStatus === true
      ? 'green'
      : answerStatus === false
      ? 'red'
      : 'white'; // Set background color based on answer status
  };

  /*   useEffect(() => {
    // Load trivia progress from localStorage
    const triviaProgress = JSON.parse(localStorage.getItem('triviaProgress'));
    if (triviaProgress) {
      setCurrentQuestionIndex(triviaProgress.currentQuestionIndex);
      setCorrectCount(triviaProgress.correctCount);
      setLeaderboard(triviaProgress.leaderboard);
    }
  }, []);

  useEffect(() => {
    // Save trivia progress to localStorage whenever it changes
    localStorage.setItem(
      'triviaProgress',
      JSON.stringify({
        currentQuestionIndex,
        correctCount,
        leaderboard,
      })
    );
  }, [currentQuestionIndex, correctCount, leaderboard]); */

  // Load last answered question index from localStorage
  useEffect(() => {
    const lastQuestionIndex = localStorage.getItem('lastQuestionIndex');
    if (lastQuestionIndex !== null) {
      setCurrentQuestionIndex(parseInt(lastQuestionIndex));
    }
  }, []);

  const handleClose = () => setOpen(false);
  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setCorrectCount(0);
  };

  const handleAnswer = (selectedOption, index) => {
    setSelectedOption(index);
    const currentQuestion = trivia[currentQuestionIndex];
    const correctAnswer = currentQuestion.answer;

    // Check if the selected option matches the correct answer
    const isCorrect = selectedOption === correctAnswer;

    if (isCorrect) {
      setCorrectCount((prevCount) => prevCount + 1);
    }
    // Set answer status
    setAnswerStatus(isCorrect);

    // Update last answered question index in localStorage
    localStorage.setItem('lastQuestionIndex', String(currentQuestionIndex));

    // Move to the next question after 1 second
    setTimeout(() => {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setAnswerStatus(null); // Reset answer status
    }, 1000);
  };

  const onSubmitCallback = (data) => {
    const newEntry = {
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      score: correctCount,
    };
    setLeaderboard([...leaderboard, newEntry]);
  };

  return (
    <Box>
      <Box
        sx={{
          mb: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Button variant='contained' onClick={() => setOpen(true)}>
          Start Trivia
        </Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-title'
        aria-describedby='modal-description'
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            padding: '20px',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'white',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            {currentQuestionIndex < trivia.length && (
              <Typography id='modal-title' variant='h6' component='h2'>
                {`Question: ${currentQuestionIndex + 1}`}
              </Typography>
            )}

            {currentQuestionIndex < trivia.length && (
              <Typography id='modal-title' variant='h6' component='h2'>
                {`${currentQuestionIndex + 1} / ${trivia.length}`}
              </Typography>
            )}
          </Box>
          {currentQuestionIndex < trivia.length ? (
            <div>
              <Translation
                text={trivia[currentQuestionIndex].question}
                typographyProps={{
                  sx: { color: (theme) => theme.palette.primary.main },
                }}
              />
              <>
                {trivia[currentQuestionIndex].options.map((option, index) => (
                  <Card
                    sx={{
                      my: 2,
                      px: 4,
                      py: 2,
                      display: 'flex',
                      alignItems: 'center',
                      cursor: 'pointer',
                      bgcolor: handleBgColorChange(index),
                      transition: 'background-color 0.5s', // Add transition for smoother effect
                    }}
                    key={index}
                    onClick={() => handleAnswer(option, index)}
                  >
                    {triviaOptionSwitch(index)}
                    <Translation
                      text={option}
                      typographyProps={{
                        sx: { ml: 1 },
                      }}
                    />
                  </Card>
                ))}
              </>
            </div>
          ) : (
            <div>
              <Typography
                gutterBottom
              >{`Correct answers: ${correctCount}`}</Typography>
              <Typography id='modal-description'>
                {correctCount >= 17
                  ? 'True Potter fan'
                  : correctCount >= 12
                  ? 'Stupefy!'
                  : 'Avada Kedavra mudblood!'}
              </Typography>
              <RegisterForm
                onSubmitCallback={onSubmitCallback}
                setOpen={setOpen}
              />
            </div>
          )}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Button onClick={handleClose}>Close</Button>
            <Button variant='contained' onClick={handleReset}>
              Try again
            </Button>
          </Box>
        </Box>
      </Modal>
      <Card
        sx={{
          background: (theme) => theme.palette.tertiary.light,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100%',
        }}
      >
        <Typography variant='h4' gutterBottom>
          Leaderboard
        </Typography>
        {leaderboard.map((entry, index) => (
          <Typography key={index}>
            {`${index + 1}. ${entry.name} - ${entry.score} - ${
              entry.email ? entry.email : ''
            }`}{' '}
          </Typography>
        ))}
      </Card>
    </Box>
  );
};

export default TriviaQuestions;
