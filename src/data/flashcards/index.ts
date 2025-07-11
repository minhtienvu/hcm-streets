import { flashcards_1_100, type Flashcard } from './flashcards_1_100';
import { flashcards_101_200 } from './flashcards_101_200';
import { flashcards_201_300 } from './flashcards_201_300';
import { flashcards_301_400 } from './flashcards_301_400';
import { flashcards_401_500 } from './flashcards_401_500';
import { flashcards_501_600 } from './flashcards_501_600';
import { flashcards_601_700 } from './flashcards_601_700';
import { flashcards_701_800 } from './flashcards_701_800';
import { flashcards_801_900 } from './flashcards_801_900';
import { flashcards_901_1000 } from './flashcards_901_1000';

// Import other flashcard sets as they are created
// import { flashcards_201_300 } from './flashcards_201_300';
// etc...

// Export the Flashcard interface
export type { Flashcard };

// Combine all flashcard sets
export const allFlashcards: Array<Flashcard> = [
  ...flashcards_1_100,
  ...flashcards_101_200,
  ...flashcards_201_300,
  ...flashcards_301_400,
  ...flashcards_401_500,
  ...flashcards_501_600,
  ...flashcards_601_700,
  ...flashcards_701_800,
  ...flashcards_801_900,
  ...flashcards_901_1000
];

// Utility function to get flashcards by ID range
export const getFlashcardsByRange = (startId: number, endId: number): Flashcard[] => {
  return allFlashcards.filter(card => card.id >= startId && card.id <= endId);
};

// Utility function to get flashcards by district
export const getFlashcardsByDistrict = (district: string): Flashcard[] => {
  return allFlashcards.filter(card => card.district === district);
};

// Utility function to get flashcards by category
export const getFlashcardsByCategory = (category: 'street' | 'place'): Flashcard[] => {
  return allFlashcards.filter(card => card.category === category);
};

// Utility function to get total number of flashcards
export const getTotalFlashcards = (): number => {
  return allFlashcards.length;
}; 
