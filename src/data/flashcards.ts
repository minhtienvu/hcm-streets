export interface Flashcard {
  id: number;
  question: {
    en: string;
    vi: string;
  };
  answer: {
    en: string;
    vi: string;
  };
  category: 'street' | 'place';
  district: string;
  additionalInfo?: {
    en: string;
    vi: string;
  };
}

export const flashcards: Flashcard[] = [
  // District 1 - Historical and Cultural Sites
  {
    id: 1,
    question: {
      en: "Where is Ben Thanh Market located?",
      vi: "Chợ Bến Thành nằm ở đâu?"
    },
    answer: {
      en: "District 1",
      vi: "Quận 1"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "One of the oldest surviving structures in Ho Chi Minh City, built in 1912. Originally a small market by the Ben Nghe River, it was moved to its current location in 1859.",
      vi: "Một trong những công trình cổ nhất còn sót lại ở Thành phố Hồ Chí Minh, được xây dựng năm 1912. Ban đầu là một khu chợ nhỏ bên sông Bến Nghé, sau đó được di dời đến vị trí hiện tại vào năm 1859."
    }
  },
  {
    id: 2,
    question: {
      en: "Which district is Nguyen Hue Walking Street in?",
      vi: "Phố đi bộ Nguyễn Huệ nằm ở quận nào?"
    },
    answer: {
      en: "District 1",
      vi: "Quận 1"
    },
    category: "street",
    district: "District 1",
    additionalInfo: {
      en: "A famous pedestrian street in the heart of Ho Chi Minh City. It was originally a canal before being filled in 1887 to become a boulevard.",
      vi: "Một con phố đi bộ nổi tiếng ở trung tâm Thành phố Hồ Chí Minh. Ban đầu là một con kênh, sau đó được lấp vào năm 1887 để trở thành đại lộ."
    }
  },
  {
    id: 3,
    question: {
      en: "Where is the Notre-Dame Cathedral Basilica of Saigon?",
      vi: "Nhà thờ Đức Bà Sài Gòn nằm ở đâu?"
    },
    answer: {
      en: "District 1",
      vi: "Quận 1"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Built between 1863 and 1880, it's one of the most iconic landmarks in the city. The cathedral's bricks were imported from Marseille, France.",
      vi: "Được xây dựng từ năm 1863 đến 1880, đây là một trong những biểu tượng nổi tiếng nhất của thành phố. Gạch xây nhà thờ được nhập khẩu từ Marseille, Pháp."
    }
  },
  {
    id: 4,
    question: {
      en: "Which district is the Saigon Central Post Office in?",
      vi: "Bưu điện Trung tâm Sài Gòn nằm ở quận nào?"
    },
    answer: {
      en: "District 1",
      vi: "Quận 1"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Built between 1886-1891, it's one of the oldest buildings in Ho Chi Minh City. Designed by Gustave Eiffel, it features a unique blend of Gothic and Renaissance architecture.",
      vi: "Được xây dựng từ năm 1886-1891, đây là một trong những tòa nhà cổ nhất ở Thành phố Hồ Chí Minh. Được thiết kế bởi Gustave Eiffel, tòa nhà có kiến trúc độc đáo kết hợp giữa Gothic và Phục hưng."
    }
  },
  {
    id: 5,
    question: {
      en: "Where is Dong Khoi Street located?",
      vi: "Đường Đồng Khởi nằm ở đâu?"
    },
    answer: {
      en: "District 1",
      vi: "Quận 1"
    },
    category: "street",
    district: "District 1",
    additionalInfo: {
      en: "One of the most famous shopping streets in the city, known for its luxury boutiques. It was originally called Rue Catinat during French colonial times.",
      vi: "Một trong những con phố mua sắm nổi tiếng nhất thành phố, nổi tiếng với các cửa hàng thời trang cao cấp. Thời Pháp thuộc, con phố này có tên là Rue Catinat."
    }
  },
  // ... continuing with more flashcards, each with both English and Vietnamese text
];
