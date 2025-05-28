import type { Flashcard } from './flashcards_1_100';

export const flashcards_701_800: Flashcard[] = [
  {
    id: 701,
    question: {
      en: "What is the most famous street for gold shops in District 5?",
      vi: "Con phố nổi tiếng nhất về cửa hàng vàng ở Quận 5 là gì?"
    },
    answer: {
      en: "Tran Hung Dao Street",
      vi: "Đường Trần Hưng Đạo"
    },
    category: "street",
    district: "District 5",
    additionalInfo: {
      en: "Known for its concentration of gold shops and jewelry stores in Chinatown",
      vi: "Nổi tiếng với sự tập trung của các cửa hàng vàng và trang sức ở khu phố Tàu"
    }
  }
  // ... Add more flashcards to reach 800 ...
];

// Export a function to get flashcards by ID range
export const getFlashcardsByRange = (startId: number, endId: number): Flashcard[] => {
  return flashcards_701_800.filter(card => card.id >= startId && card.id <= endId);
}; 
