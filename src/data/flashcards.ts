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
  // District 1 - Additional Historical Sites
  {
    id: 6,
    question: {
      en: "Where is the Reunification Palace located?",
      vi: "Dinh Độc Lập nằm ở đâu?"
    },
    answer: {
      en: "District 1",
      vi: "Quận 1"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Formerly known as Independence Palace, it was the site of the end of the Vietnam War when a North Vietnamese tank crashed through its gates in 1975.",
      vi: "Trước đây được gọi là Dinh Độc Lập, đây là nơi đánh dấu kết thúc Chiến tranh Việt Nam khi một xe tăng Bắc Việt đâm vào cổng vào năm 1975."
    }
  },
  {
    id: 7,
    question: {
      en: "Which district is the Ho Chi Minh City Museum of Fine Arts in?",
      vi: "Bảo tàng Mỹ thuật Thành phố Hồ Chí Minh nằm ở quận nào?"
    },
    answer: {
      en: "District 1",
      vi: "Quận 1"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Housed in a beautiful colonial building from 1929, it showcases Vietnamese art from different periods.",
      vi: "Được đặt trong một tòa nhà thuộc địa đẹp từ năm 1929, nơi đây trưng bày nghệ thuật Việt Nam qua các thời kỳ khác nhau."
    }
  },
  {
    id: 8,
    question: {
      en: "Where is the Saigon Opera House located?",
      vi: "Nhà hát Thành phố Hồ Chí Minh nằm ở đâu?"
    },
    answer: {
      en: "District 1",
      vi: "Quận 1"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Built in 1897, it's one of the most beautiful examples of French colonial architecture in the city.",
      vi: "Được xây dựng năm 1897, đây là một trong những ví dụ đẹp nhất về kiến trúc thuộc địa Pháp trong thành phố."
    }
  },
  {
    id: 9,
    question: {
      en: "Which district is the Bitexco Financial Tower in?",
      vi: "Tòa nhà Bitexco Financial Tower nằm ở quận nào?"
    },
    answer: {
      en: "District 1",
      vi: "Quận 1"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Completed in 2010, it was the tallest building in Vietnam until 2018. Its design is inspired by a lotus bud.",
      vi: "Hoàn thành năm 2010, đây là tòa nhà cao nhất Việt Nam cho đến năm 2018. Thiết kế của nó được lấy cảm hứng từ nụ sen."
    }
  },
  {
    id: 10,
    question: {
      en: "Where is the Saigon Centre located?",
      vi: "Trung tâm thương mại Saigon Centre nằm ở đâu?"
    },
    answer: {
      en: "District 1",
      vi: "Quận 1"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "A modern shopping complex that combines traditional Vietnamese architecture with contemporary design.",
      vi: "Một khu phức hợp mua sắm hiện đại kết hợp kiến trúc truyền thống Việt Nam với thiết kế đương đại."
    }
  },
  // District 2 - Residential Areas
  {
    id: 11,
    question: {
      en: "Where is the Thao Dien Pearl residential area located?",
      vi: "Khu dân cư Thảo Điền Pearl nằm ở đâu?"
    },
    answer: {
      en: "District 2",
      vi: "Quận 2"
    },
    category: "place",
    district: "District 2",
    additionalInfo: {
      en: "A luxury residential complex in the heart of Thao Dien, known for its high-end apartments and villas.",
      vi: "Một khu phức hợp dân cư cao cấp ở trung tâm Thảo Điền, nổi tiếng với các căn hộ và biệt thự cao cấp."
    }
  },
  {
    id: 12,
    question: {
      en: "Which district is the Masteri Thao Dien residential area in?",
      vi: "Khu dân cư Masteri Thảo Điền nằm ở quận nào?"
    },
    answer: {
      en: "District 2",
      vi: "Quận 2"
    },
    category: "place",
    district: "District 2",
    additionalInfo: {
      en: "A modern residential complex featuring luxury apartments with river views and extensive amenities.",
      vi: "Một khu phức hợp dân cư hiện đại với các căn hộ cao cấp có view sông và nhiều tiện ích."
    }
  },
  {
    id: 13,
    question: {
      en: "Where is the International School of Ho Chi Minh City located?",
      vi: "Trường Quốc tế Thành phố Hồ Chí Minh nằm ở đâu?"
    },
    answer: {
      en: "District 2",
      vi: "Quận 2"
    },
    category: "place",
    district: "District 2",
    additionalInfo: {
      en: "One of the oldest international schools in Vietnam, offering education from early years to high school.",
      vi: "Một trong những trường quốc tế lâu đời nhất tại Việt Nam, cung cấp giáo dục từ mầm non đến trung học phổ thông."
    }
  },
  {
    id: 14,
    question: {
      en: "Which district is the British International School in?",
      vi: "Trường Quốc tế Anh nằm ở quận nào?"
    },
    answer: {
      en: "District 2",
      vi: "Quận 2"
    },
    category: "place",
    district: "District 2",
    additionalInfo: {
      en: "A leading international school offering the British curriculum and International Baccalaureate program.",
      vi: "Một trường quốc tế hàng đầu cung cấp chương trình giảng dạy Anh và chương trình Tú tài Quốc tế."
    }
  },
  {
    id: 15,
    question: {
      en: "Where is the Sala Urban Area located?",
      vi: "Khu đô thị Sala nằm ở đâu?"
    },
    answer: {
      en: "District 2",
      vi: "Quận 2"
    },
    category: "place",
    district: "District 2",
    additionalInfo: {
      en: "A modern urban development featuring residential, commercial, and recreational spaces along the Saigon River.",
      vi: "Một khu đô thị hiện đại bao gồm không gian dân cư, thương mại và giải trí dọc theo sông Sài Gòn."
    }
  },
  // District 3 - Embassies and Cultural Sites
  {
    id: 16,
    question: {
      en: "Where is the US Consulate General located?",
      vi: "Tổng Lãnh sự quán Hoa Kỳ nằm ở đâu?"
    },
    answer: {
      en: "District 3",
      vi: "Quận 3"
    },
    category: "place",
    district: "District 3",
    additionalInfo: {
      en: "The US diplomatic mission in Ho Chi Minh City, providing consular services to American citizens and visa services to Vietnamese citizens.",
      vi: "Cơ quan ngoại giao Hoa Kỳ tại Thành phố Hồ Chí Minh, cung cấp dịch vụ lãnh sự cho công dân Mỹ và dịch vụ visa cho công dân Việt Nam."
    }
  },
  {
    id: 17,
    question: {
      en: "Which district is the British Consulate General in?",
      vi: "Tổng Lãnh sự quán Anh nằm ở quận nào?"
    },
    answer: {
      en: "District 3",
      vi: "Quận 3"
    },
    category: "place",
    district: "District 3",
    additionalInfo: {
      en: "The British diplomatic mission in Ho Chi Minh City, handling consular affairs and promoting UK-Vietnam relations.",
      vi: "Cơ quan ngoại giao Anh tại Thành phố Hồ Chí Minh, xử lý các vấn đề lãnh sự và thúc đẩy quan hệ Anh-Việt Nam."
    }
  },
  {
    id: 18,
    question: {
      en: "Where is the Ho Chi Minh City Photography Museum located?",
      vi: "Bảo tàng Nhiếp ảnh Thành phố Hồ Chí Minh nằm ở đâu?"
    },
    answer: {
      en: "District 3",
      vi: "Quận 3"
    },
    category: "place",
    district: "District 3",
    additionalInfo: {
      en: "A museum dedicated to preserving and showcasing the history of photography in Vietnam, featuring both historical and contemporary works.",
      vi: "Một bảo tàng dành riêng cho việc bảo tồn và trưng bày lịch sử nhiếp ảnh tại Việt Nam, giới thiệu cả tác phẩm lịch sử và đương đại."
    }
  },
  {
    id: 19,
    question: {
      en: "Which district is the Southern Women's Museum in?",
      vi: "Bảo tàng Phụ nữ Nam Bộ nằm ở quận nào?"
    },
    answer: {
      en: "District 3",
      vi: "Quận 3"
    },
    category: "place",
    district: "District 3",
    additionalInfo: {
      en: "A museum dedicated to preserving and showcasing the role of women in Southern Vietnam's history and culture.",
      vi: "Một bảo tàng dành riêng cho việc bảo tồn và trưng bày vai trò của phụ nữ trong lịch sử và văn hóa Nam Bộ."
    }
  },
  {
    id: 20,
    question: {
      en: "Where is the War Remnants Museum located?",
      vi: "Bảo tàng Chứng tích Chiến tranh nằm ở đâu?"
    },
    answer: {
      en: "District 3",
      vi: "Quận 3"
    },
    category: "place",
    district: "District 3",
    additionalInfo: {
      en: "Formerly known as the Museum of Chinese and American War Crimes, it documents the effects of the Vietnam War.",
      vi: "Trước đây được gọi là Bảo tàng Tội ác Chiến tranh Trung Quốc và Mỹ, nơi đây lưu giữ tài liệu về hậu quả của Chiến tranh Việt Nam."
    }
  },
  // District 4 - Seafood and Local Culture
  {
    id: 21,
    question: {
      en: "Where is the Oc Dao Seafood Restaurant located?",
      vi: "Nhà hàng Hải sản Ốc Đào nằm ở đâu?"
    },
    answer: {
      en: "District 4",
      vi: "Quận 4"
    },
    category: "place",
    district: "District 4",
    additionalInfo: {
      en: "A popular seafood restaurant known for its fresh seafood dishes and authentic Vietnamese flavors.",
      vi: "Một nhà hàng hải sản nổi tiếng với các món hải sản tươi ngon và hương vị Việt Nam đích thực."
    }
  },
  {
    id: 22,
    question: {
      en: "Which district is Quan Oc Oanh restaurant in?",
      vi: "Quán Ốc Oanh nằm ở quận nào?"
    },
    answer: {
      en: "District 4",
      vi: "Quận 4"
    },
    category: "place",
    district: "District 4",
    additionalInfo: {
      en: "A famous local seafood restaurant specializing in various types of snails and shellfish dishes.",
      vi: "Một nhà hàng hải sản địa phương nổi tiếng chuyên về các món ốc và hải sản có vỏ."
    }
  },
  {
    id: 23,
    question: {
      en: "Where is the Xom Chieu Market located?",
      vi: "Chợ Xóm Chiếu nằm ở đâu?"
    },
    answer: {
      en: "District 4",
      vi: "Quận 4"
    },
    category: "place",
    district: "District 4",
    additionalInfo: {
      en: "A traditional local market known for its fresh seafood and local produce, offering an authentic Vietnamese market experience.",
      vi: "Một chợ truyền thống địa phương nổi tiếng với hải sản tươi và sản phẩm địa phương, mang đến trải nghiệm chợ Việt Nam đích thực."
    }
  },
  {
    id: 24,
    question: {
      en: "Which district is the Ho Chi Minh City Port in?",
      vi: "Cảng Thành phố Hồ Chí Minh nằm ở quận nào?"
    },
    answer: {
      en: "District 4",
      vi: "Quận 4"
    },
    category: "place",
    district: "District 4",
    additionalInfo: {
      en: "One of the busiest ports in Vietnam, handling a significant portion of the country's maritime trade.",
      vi: "Một trong những cảng biển bận rộn nhất Việt Nam, xử lý một phần đáng kể thương mại hàng hải của đất nước."
    }
  },
  {
    id: 25,
    question: {
      en: "Where is the Khanh Hoi Bridge located?",
      vi: "Cầu Khánh Hội nằm ở đâu?"
    },
    answer: {
      en: "District 4",
      vi: "Quận 4"
    },
    category: "place",
    district: "District 4",
    additionalInfo: {
      en: "A historic bridge connecting District 4 to District 1, offering scenic views of the Saigon River.",
      vi: "Một cây cầu lịch sử kết nối Quận 4 với Quận 1, mang đến tầm nhìn đẹp ra sông Sài Gòn."
    }
  },
  // District 5 - Chinatown and Cultural Heritage
  {
    id: 26,
    question: {
      en: "Where is the Nghia An Hoi Quan Temple located?",
      vi: "Chùa Nghĩa An Hội Quán nằm ở đâu?"
    },
    answer: {
      en: "District 5",
      vi: "Quận 5"
    },
    category: "place",
    district: "District 5",
    additionalInfo: {
      en: "A historic Chinese temple built in the 19th century, known for its beautiful architecture and cultural significance.",
      vi: "Một ngôi chùa Trung Hoa lịch sử được xây dựng vào thế kỷ 19, nổi tiếng với kiến trúc đẹp và ý nghĩa văn hóa."
    }
  },
  {
    id: 27,
    question: {
      en: "Which district is the Tam Son Hoi Quan Temple in?",
      vi: "Chùa Tam Sơn Hội Quán nằm ở quận nào?"
    },
    answer: {
      en: "District 5",
      vi: "Quận 5"
    },
    category: "place",
    district: "District 5",
    additionalInfo: {
      en: "One of the oldest Chinese temples in Ho Chi Minh City, featuring traditional Chinese architecture and religious artifacts.",
      vi: "Một trong những ngôi chùa Trung Hoa lâu đời nhất tại Thành phố Hồ Chí Minh, có kiến trúc Trung Hoa truyền thống và các hiện vật tôn giáo."
    }
  },
  {
    id: 28,
    question: {
      en: "Where is the Kim Bien Market located?",
      vi: "Chợ Kim Biên nằm ở đâu?"
    },
    answer: {
      en: "District 5",
      vi: "Quận 5"
    },
    category: "place",
    district: "District 5",
    additionalInfo: {
      en: "A wholesale market specializing in Chinese herbs, traditional medicine, and various goods from China.",
      vi: "Một chợ bán buôn chuyên về dược liệu Trung Quốc, thuốc đông y và các mặt hàng từ Trung Quốc."
    }
  },
  {
    id: 29,
    question: {
      en: "Which district is the Soai Kinh Lam Market in?",
      vi: "Chợ Soái Kinh Lâm nằm ở quận nào?"
    },
    answer: {
      en: "District 5",
      vi: "Quận 5"
    },
    category: "place",
    district: "District 5",
    additionalInfo: {
      en: "A traditional market in Chinatown known for its wide variety of goods and authentic Chinese atmosphere.",
      vi: "Một chợ truyền thống ở khu phố Tàu nổi tiếng với nhiều loại hàng hóa và không khí Trung Hoa đích thực."
    }
  },
  {
    id: 30,
    question: {
      en: "Where is the Cha Tam Church located?",
      vi: "Nhà thờ Cha Tam nằm ở đâu?"
    },
    answer: {
      en: "District 5",
      vi: "Quận 5"
    },
    category: "place",
    district: "District 5",
    additionalInfo: {
      en: "A historic Catholic church built in 1900, featuring a unique blend of Western and Chinese architectural styles.",
      vi: "Một nhà thờ Công giáo lịch sử được xây dựng năm 1900, có sự kết hợp độc đáo giữa kiến trúc phương Tây và Trung Hoa."
    }
  },
  // District 6 - Markets and Local Culture
  {
    id: 31,
    question: {
      en: "Where is the Binh Tay Market located?",
      vi: "Chợ Bình Tây nằm ở đâu?"
    },
    answer: {
      en: "District 6",
      vi: "Quận 6"
    },
    category: "place",
    district: "District 6",
    additionalInfo: {
      en: "The largest wholesale market in Ho Chi Minh City, known for its wide variety of goods and traditional architecture.",
      vi: "Chợ bán buôn lớn nhất Thành phố Hồ Chí Minh, nổi tiếng với nhiều loại hàng hóa và kiến trúc truyền thống."
    }
  },
  {
    id: 32,
    question: {
      en: "Which district is the An Dong Market in?",
      vi: "Chợ An Đông nằm ở quận nào?"
    },
    answer: {
      en: "District 6",
      vi: "Quận 6"
    },
    category: "place",
    district: "District 6",
    additionalInfo: {
      en: "A large wholesale market specializing in textiles, clothing, and fashion accessories.",
      vi: "Một chợ bán buôn lớn chuyên về vải vóc, quần áo và phụ kiện thời trang."
    }
  },
  {
    id: 33,
    question: {
      en: "Where is the Phu Lam Pagoda located?",
      vi: "Chùa Phú Lâm nằm ở đâu?"
    },
    answer: {
      en: "District 6",
      vi: "Quận 6"
    },
    category: "place",
    district: "District 6",
    additionalInfo: {
      en: "A historic Buddhist temple known for its beautiful architecture and peaceful atmosphere.",
      vi: "Một ngôi chùa Phật giáo lịch sử nổi tiếng với kiến trúc đẹp và không khí thanh bình."
    }
  },
  {
    id: 34,
    question: {
      en: "Which district is the Phu Lam Park in?",
      vi: "Công viên Phú Lâm nằm ở quận nào?"
    },
    answer: {
      en: "District 6",
      vi: "Quận 6"
    },
    category: "place",
    district: "District 6",
    additionalInfo: {
      en: "A popular local park offering recreational facilities and green spaces for the community.",
      vi: "Một công viên địa phương phổ biến cung cấp các cơ sở giải trí và không gian xanh cho cộng đồng."
    }
  },
  {
    id: 35,
    question: {
      en: "Where is the Phu Lam Cultural Center located?",
      vi: "Trung tâm Văn hóa Phú Lâm nằm ở đâu?"
    },
    answer: {
      en: "District 6",
      vi: "Quận 6"
    },
    category: "place",
    district: "District 6",
    additionalInfo: {
      en: "A community center hosting cultural events, performances, and activities for local residents.",
      vi: "Một trung tâm cộng đồng tổ chức các sự kiện văn hóa, biểu diễn và hoạt động cho cư dân địa phương."
    }
  },
  // District 7 - Modern Development and International Community
  {
    id: 36,
    question: {
      en: "Where is the Australian International School located?",
      vi: "Trường Quốc tế Úc nằm ở đâu?"
    },
    answer: {
      en: "District 7",
      vi: "Quận 7"
    },
    category: "place",
    district: "District 7",
    additionalInfo: {
      en: "A leading international school offering the Australian curriculum and International Baccalaureate program.",
      vi: "Một trường quốc tế hàng đầu cung cấp chương trình giảng dạy Úc và chương trình Tú tài Quốc tế."
    }
  },
  {
    id: 37,
    question: {
      en: "Which district is the European International School in?",
      vi: "Trường Quốc tế Châu Âu nằm ở quận nào?"
    },
    answer: {
      en: "District 7",
      vi: "Quận 7"
    },
    category: "place",
    district: "District 7",
    additionalInfo: {
      en: "An international school offering European curriculum and multiple language programs.",
      vi: "Một trường quốc tế cung cấp chương trình giảng dạy Châu Âu và nhiều chương trình ngôn ngữ."
    }
  },
  {
    id: 38,
    question: {
      en: "Where is SC VivoCity located?",
      vi: "SC VivoCity nằm ở đâu?"
    },
    answer: {
      en: "District 7",
      vi: "Quận 7"
    },
    category: "place",
    district: "District 7",
    additionalInfo: {
      en: "One of the largest shopping malls in Ho Chi Minh City, featuring international brands and entertainment facilities.",
      vi: "Một trong những trung tâm thương mại lớn nhất Thành phố Hồ Chí Minh, có các thương hiệu quốc tế và cơ sở giải trí."
    }
  },
  {
    id: 39,
    question: {
      en: "Which district is Crescent Mall in?",
      vi: "Crescent Mall nằm ở quận nào?"
    },
    answer: {
      en: "District 7",
      vi: "Quận 7"
    },
    category: "place",
    district: "District 7",
    additionalInfo: {
      en: "A luxury shopping mall in Phu My Hung, known for its upscale retail stores and dining options.",
      vi: "Một trung tâm thương mại cao cấp ở Phú Mỹ Hưng, nổi tiếng với các cửa hàng bán lẻ và nhà hàng cao cấp."
    }
  },
  {
    id: 40,
    question: {
      en: "Where is the Crescent Lake located?",
      vi: "Hồ Crescent nằm ở đâu?"
    },
    answer: {
      en: "District 7",
      vi: "Quận 7"
    },
    category: "place",
    district: "District 7",
    additionalInfo: {
      en: "A man-made lake surrounded by restaurants and cafes, creating a popular entertainment area in Phu My Hung.",
      vi: "Một hồ nhân tạo được bao quanh bởi các nhà hàng và quán cà phê, tạo thành khu vực giải trí phổ biến ở Phú Mỹ Hưng."
    }
  },
  // District 8 - Markets and Local Culture
  {
    id: 41,
    question: {
      en: "Where is the Ba Chieu Market located?",
      vi: "Chợ Bà Chiểu nằm ở đâu?"
    },
    answer: {
      en: "District 8",
      vi: "Quận 8"
    },
    category: "place",
    district: "District 8",
    additionalInfo: {
      en: "A traditional local market known for its fresh produce, seafood, and daily necessities.",
      vi: "Một chợ truyền thống địa phương nổi tiếng với thực phẩm tươi, hải sản và các nhu yếu phẩm hàng ngày."
    }
  },
  {
    id: 42,
    question: {
      en: "Which district is the Binh Dong Market in?",
      vi: "Chợ Bình Đông nằm ở quận nào?"
    },
    answer: {
      en: "District 8",
      vi: "Quận 8"
    },
    category: "place",
    district: "District 8",
    additionalInfo: {
      en: "A large wholesale market specializing in textiles and clothing, serving both retail and wholesale customers.",
      vi: "Một chợ bán buôn lớn chuyên về vải vóc và quần áo, phục vụ cả khách hàng bán lẻ và bán buôn."
    }
  },
  {
    id: 43,
    question: {
      en: "Where is the Phu Dinh Cultural Center located?",
      vi: "Trung tâm Văn hóa Phú Định nằm ở đâu?"
    },
    answer: {
      en: "District 8",
      vi: "Quận 8"
    },
    category: "place",
    district: "District 8",
    additionalInfo: {
      en: "A community center hosting cultural events, performances, and activities for local residents.",
      vi: "Một trung tâm cộng đồng tổ chức các sự kiện văn hóa, biểu diễn và hoạt động cho cư dân địa phương."
    }
  },
  {
    id: 44,
    question: {
      en: "Which district is the Phu Dinh Park in?",
      vi: "Công viên Phú Định nằm ở quận nào?"
    },
    answer: {
      en: "District 8",
      vi: "Quận 8"
    },
    category: "place",
    district: "District 8",
    additionalInfo: {
      en: "A local park offering recreational facilities and green spaces for the community.",
      vi: "Một công viên địa phương cung cấp các cơ sở giải trí và không gian xanh cho cộng đồng."
    }
  },
  {
    id: 45,
    question: {
      en: "Where is the Phu Dinh Pagoda located?",
      vi: "Chùa Phú Định nằm ở đâu?"
    },
    answer: {
      en: "District 8",
      vi: "Quận 8"
    },
    category: "place",
    district: "District 8",
    additionalInfo: {
      en: "A historic Buddhist temple known for its traditional architecture and religious significance.",
      vi: "Một ngôi chùa Phật giáo lịch sử nổi tiếng với kiến trúc truyền thống và ý nghĩa tôn giáo."
    }
  },
  // District 9 - Technology and Innovation
  {
    id: 46,
    question: {
      en: "Where is the Quang Trung Software City located?",
      vi: "Khu Công nghệ Phần mềm Quang Trung nằm ở đâu?"
    },
    answer: {
      en: "District 9",
      vi: "Quận 9"
    },
    category: "place",
    district: "District 9",
    additionalInfo: {
      en: "A major technology park housing numerous IT companies and software development firms.",
      vi: "Một khu công nghệ lớn tập trung nhiều công ty CNTT và công ty phát triển phần mềm."
    }
  },
  {
    id: 47,
    question: {
      en: "Which district is the Saigon Hi-Tech Park in?",
      vi: "Khu Công nghệ cao Sài Gòn nằm ở quận nào?"
    },
    answer: {
      en: "District 9",
      vi: "Quận 9"
    },
    category: "place",
    district: "District 9",
    additionalInfo: {
      en: "A state-of-the-art technology park focusing on high-tech manufacturing and research.",
      vi: "Một khu công nghệ cao hiện đại tập trung vào sản xuất và nghiên cứu công nghệ cao."
    }
  },
  {
    id: 48,
    question: {
      en: "Where is the FPT University located?",
      vi: "Đại học FPT nằm ở đâu?"
    },
    answer: {
      en: "District 9",
      vi: "Quận 9"
    },
    category: "place",
    district: "District 9",
    additionalInfo: {
      en: "A private university specializing in technology and business education, part of the FPT Corporation.",
      vi: "Một trường đại học tư thục chuyên về công nghệ và kinh doanh, thuộc Tập đoàn FPT."
    }
  },
  {
    id: 49,
    question: {
      en: "Which district is the Vietnam National University - Ho Chi Minh City in?",
      vi: "Đại học Quốc gia Thành phố Hồ Chí Minh nằm ở quận nào?"
    },
    answer: {
      en: "District 9",
      vi: "Quận 9"
    },
    category: "place",
    district: "District 9",
    additionalInfo: {
      en: "One of Vietnam's leading universities, with a focus on technology and research.",
      vi: "Một trong những trường đại học hàng đầu Việt Nam, tập trung vào công nghệ và nghiên cứu."
    }
  },
  {
    id: 50,
    question: {
      en: "Where is the Long Thanh My Park located?",
      vi: "Công viên Long Thạnh Mỹ nằm ở đâu?"
    },
    answer: {
      en: "District 9",
      vi: "Quận 9"
    },
    category: "place",
    district: "District 9",
    additionalInfo: {
      en: "A large park offering recreational facilities and green spaces for the local community.",
      vi: "Một công viên lớn cung cấp các cơ sở giải trí và không gian xanh cho cộng đồng địa phương."
    }
  },
  // District 10 - Education and Healthcare
  {
    id: 51,
    question: {
      en: "Where is the Ho Chi Minh City University of Technology located?",
      vi: "Đại học Bách khoa Thành phố Hồ Chí Minh nằm ở đâu?"
    },
    answer: {
      en: "District 10",
      vi: "Quận 10"
    },
    category: "place",
    district: "District 10",
    additionalInfo: {
      en: "One of Vietnam's leading technical universities, offering programs in engineering and technology.",
      vi: "Một trong những trường đại học kỹ thuật hàng đầu Việt Nam, cung cấp các chương trình về kỹ thuật và công nghệ."
    }
  },
  {
    id: 52,
    question: {
      en: "Which district is the Ho Chi Minh City University of Medicine and Pharmacy in?",
      vi: "Đại học Y Dược Thành phố Hồ Chí Minh nằm ở quận nào?"
    },
    answer: {
      en: "District 10",
      vi: "Quận 10"
    },
    category: "place",
    district: "District 10",
    additionalInfo: {
      en: "A prestigious medical university training doctors, pharmacists, and healthcare professionals.",
      vi: "Một trường đại học y khoa uy tín đào tạo bác sĩ, dược sĩ và chuyên gia y tế."
    }
  },
  {
    id: 53,
    question: {
      en: "Where is the Children's Hospital 1 located?",
      vi: "Bệnh viện Nhi đồng 1 nằm ở đâu?"
    },
    answer: {
      en: "District 10",
      vi: "Quận 10"
    },
    category: "place",
    district: "District 10",
    additionalInfo: {
      en: "One of the largest and most modern children's hospitals in Vietnam, providing specialized pediatric care.",
      vi: "Một trong những bệnh viện nhi lớn nhất và hiện đại nhất Việt Nam, cung cấp dịch vụ chăm sóc nhi khoa chuyên biệt."
    }
  },
  {
    id: 54,
    question: {
      en: "Which district is the Eye Hospital in?",
      vi: "Bệnh viện Mắt nằm ở quận nào?"
    },
    answer: {
      en: "District 10",
      vi: "Quận 10"
    },
    category: "place",
    district: "District 10",
    additionalInfo: {
      en: "A specialized hospital providing eye care and treatment, equipped with modern medical facilities.",
      vi: "Một bệnh viện chuyên khoa cung cấp dịch vụ chăm sóc và điều trị mắt, được trang bị cơ sở vật chất y tế hiện đại."
    }
  },
  {
    id: 55,
    question: {
      en: "Where is the Le Hong Phong High School located?",
      vi: "Trường Trung học Phổ thông Chuyên Lê Hồng Phong nằm ở đâu?"
    },
    answer: {
      en: "District 10",
      vi: "Quận 10"
    },
    category: "place",
    district: "District 10",
    additionalInfo: {
      en: "One of the most prestigious high schools in Vietnam, known for its academic excellence and specialized programs.",
      vi: "Một trong những trường trung học phổ thông uy tín nhất Việt Nam, nổi tiếng với thành tích học tập xuất sắc và các chương trình chuyên biệt."
    }
  }
  // ... continuing with more flashcards, each with both English and Vietnamese text
];
