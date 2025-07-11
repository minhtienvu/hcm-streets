import { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  AppBar, 
  Toolbar, 
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Paper
} from '@mui/material';
import { Flashcard } from './components/Flashcard';
import { allFlashcards as flashcards } from './data/flashcards/index';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [category, setCategory] = useState<'all' | 'street' | 'place'>('all');
  const [district, setDistrict] = useState<string>('all');

  const districts = Array.from(new Set(flashcards.map(card => card.district)));
  const filteredCards = flashcards.filter(card => 
    (category === 'all' || card.category === category) &&
    (district === 'all' || card.district === district)
  );

  // Reset to first card when filters change
  useEffect(() => {
    setCurrentIndex(0);
  }, [category, district]);

  const handleNext = () => {
    // Generate a random index from all available filtered cards
    const randomIndex = Math.floor(Math.random() * filteredCards.length);
    setCurrentIndex(randomIndex);
  };

  const handlePrevious = () => {
    // Generate a random index from all available filtered cards
    const randomIndex = Math.floor(Math.random() * filteredCards.length);
    setCurrentIndex(randomIndex);
  };

  const handleRandomCard = () => {
    // Generate a random index from all available filtered cards
    const randomIndex = Math.floor(Math.random() * filteredCards.length);
    setCurrentIndex(randomIndex);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            HCM Streets & Places Flashcards
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Paper sx={{ p: 3, mb: 3 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                  value={category}
                  label="Category"
                  onChange={(e) => setCategory(e.target.value as 'all' | 'street' | 'place')}
                >
                  <MenuItem value="all">All Categories</MenuItem>
                  <MenuItem value="street">Streets</MenuItem>
                  <MenuItem value="place">Places</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel>District</InputLabel>
                <Select
                  value={district}
                  label="District"
                  onChange={(e) => setDistrict(e.target.value)}
                >
                  <MenuItem value="all">All Districts</MenuItem>
                  {districts.map((d) => (
                    <MenuItem key={d} value={d}>{d}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="body1" align="center">
                Total Cards: {filteredCards.length}
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        {filteredCards.length > 0 ? (
          <>
            <Flashcard flashcard={filteredCards[currentIndex]} />
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 6, mb: 4 }}>
              <Button 
                variant="contained" 
                onClick={handlePrevious}
                disabled={filteredCards.length <= 1}
              >
                Random Card
              </Button>
              <Button 
                variant="contained" 
                onClick={handleNext}
                disabled={filteredCards.length <= 1}
              >
                Next Random
              </Button>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <Button 
                variant="outlined" 
                onClick={handleRandomCard}
                size="small"
              >
                🎲 Get Random Card
              </Button>
            </Box>
          </>
        ) : (
          <Typography variant="h6" align="center" sx={{ mt: 4 }}>
            No flashcards match the selected filters
          </Typography>
        )}
      </Container>
    </Box>
  );
}

export default App;
