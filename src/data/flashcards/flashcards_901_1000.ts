import type { Flashcard } from './flashcards_1_100';

export const flashcards_901_1000: Flashcard[] = [
  {
    id: 901,
    question: {
      en: "What is the most famous street for musical instruments in District 1?",
      vi: "Con phố nổi tiếng nhất về nhạc cụ ở Quận 1 là gì?"
    },
    answer: {
      en: "Nguyen Thien Thuat Street",
      vi: "Đường Nguyễn Thiện Thuật"
    },
    category: "street",
    district: "District 1",
    additionalInfo: {
      en: "Known as 'Music Street', it's famous for its collection of musical instrument shops",
      vi: "Được gọi là 'Phố Nhạc', nổi tiếng với tập hợp các cửa hàng nhạc cụ"
    }
  }
  // ... Add more flashcards to reach 1000 ...
];

// Export a function to get flashcards by ID range
export const getFlashcardsByRange = (startId: number, endId: number): Flashcard[] => {
  return flashcards_901_1000.filter(card => card.id >= startId && card.id <= endId);
}; 
