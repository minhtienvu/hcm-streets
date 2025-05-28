import { useState } from 'react';
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
import { flashcards } from './data/flashcards';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [category, setCategory] = useState<'all' | 'street' | 'place'>('all');
  const [district, setDistrict] = useState<string>('all');

  const districts = Array.from(new Set(flashcards.map(card => card.district)));
  const filteredCards = flashcards.filter(card => 
    (category === 'all' || card.category === category) &&
    (district === 'all' || card.district === district)
  );

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredCards.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredCards.length) % filteredCards.length);
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
              <Typography variant="body1">
                Card {currentIndex + 1} of {filteredCards.length}
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        {filteredCards.length > 0 ? (
          <>
            <Flashcard flashcard={filteredCards[currentIndex]} />
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
              <Button 
                variant="contained" 
                onClick={handlePrevious}
                disabled={currentIndex === 0}
              >
                Previous
              </Button>
              <Button 
                variant="contained" 
                onClick={handleNext}
                disabled={currentIndex === filteredCards.length - 1}
              >
                Next
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
