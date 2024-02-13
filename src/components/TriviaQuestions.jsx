import React, { useState, useEffect } from 'react';
import {
  Button,
  Modal,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
} from '@mui/material';
import trivia from '../Data/Trivia';
import { useTranslation } from 'react-i18next';
import Translation from './Translation';

const TriviaQuestions = () => {
  const [open, setOpen] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answerStatus, setAnswerStatus] = useState(null); // State to track answer status
  const { t } = useTranslation();
  // Load last answered question index from localStorage
  useEffect(() => {
    const lastQuestionIndex = localStorage.getItem('lastQuestionIndex');
    if (lastQuestionIndex !== null) {
      setCurrentQuestionIndex(parseInt(lastQuestionIndex));
    }
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAnswer = (selectedOption) => {
    const currentQuestion = trivia[currentQuestionIndex];
    const correctAnswer = currentQuestion.answer;

    // Check if the selected option matches the correct answer
    const isCorrect = selectedOption === correctAnswer;

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

  return (
    <div>
      <Button onClick={handleOpen}>Start Trivia</Button>
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
            transform: 'translate(-50%, -50%)',
            bgcolor:
              answerStatus === true
                ? 'green'
                : answerStatus === false
                ? 'red'
                : 'white', // Set background color based on answer status
            padding: '20px',
            transition: 'background-color 0.5s', // Add transition for smoother effect
          }}
        >
          <Typography id='modal-title' variant='h6' component='h2'>
            Trivia Question
          </Typography>
          {currentQuestionIndex < trivia.length ? (
            <div>
              <Translation
                text={trivia[currentQuestionIndex].question}
                typographyProps={{
                  sx: { color: (theme) => theme.palette.primary.main },
                }}
              />
              <List>
                {trivia[currentQuestionIndex].options.map((option, index) => (
                  <ListItem
                    button
                    key={index}
                    onClick={() => handleAnswer(option)}
                  >
                    <ListItemText primary={t(option)} />
                  </ListItem>
                ))}
              </List>
            </div>
          ) : (
            <Typography id='modal-description'>
              End of trivia questions.
            </Typography>
          )}
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default TriviaQuestions;
