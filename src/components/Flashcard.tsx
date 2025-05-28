import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { Flashcard as FlashcardType } from '../data/flashcards';

interface FlashcardProps {
  flashcard: FlashcardType;
}

export const Flashcard: React.FC<FlashcardProps> = ({ flashcard }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Box
      sx={{
        perspective: '1000px',
        width: '100%',
        maxWidth: '400px',
        height: '250px',
        margin: '20px auto',
        cursor: 'pointer',
      }}
      onClick={flipCard}
    >
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Front of card */}
        <Card
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f5f5f5',
            boxShadow: 3,
          }}
        >
          <CardContent>
            <Typography variant="h5" component="div" align="center">
              {flashcard.question.en}
            </Typography>
            <Typography variant="subtitle1" component="div" align="center" sx={{ mt: 1, color: 'text.secondary' }}>
              {flashcard.question.vi}
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
              Click to see answer
            </Typography>
          </CardContent>
        </Card>

        {/* Back of card */}
        <Card
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#e3f2fd',
            boxShadow: 3,
          }}
        >
          <CardContent>
            <Typography variant="h5" component="div" align="center">
              {flashcard.answer.en}
            </Typography>
            <Typography variant="subtitle1" component="div" align="center" sx={{ mt: 1, color: 'text.secondary' }}>
              {flashcard.answer.vi}
            </Typography>
            {flashcard.additionalInfo && (
              <>
                <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
                  {flashcard.additionalInfo.en}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 1 }}>
                  {flashcard.additionalInfo.vi}
                </Typography>
              </>
            )}
            <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
              Click to flip back
            </Typography>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
}; 
