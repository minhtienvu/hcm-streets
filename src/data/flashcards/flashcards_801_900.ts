import type { Flashcard } from './flashcards_1_100';

export const flashcards_801_900: Flashcard[] = [
  {
    id: 801,
    question: {
      en: "What is the most famous street for traditional medicine shops in District 5?",
      vi: "Con phố nổi tiếng nhất về cửa hàng thuốc đông y ở Quận 5 là gì?"
    },
    answer: {
      en: "Luu Van Lang Street",
      vi: "Đường Lưu Văn Lang"
    },
    category: "street",
    district: "District 5",
    additionalInfo: {
      en: "Known for its traditional Chinese medicine shops and herbal stores",
      vi: "Nổi tiếng với các cửa hàng thuốc đông y và cửa hàng thảo dược"
    }
  }
  // ... Add more flashcards to reach 900 ...
];

// Export a function to get flashcards by ID range
export const getFlashcardsByRange = (startId: number, endId: number): Flashcard[] => {
  return flashcards_801_900.filter(card => card.id >= startId && card.id <= endId);
}; 
