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

export const flashcards_1_100: Flashcard[] = [
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
  {
    id: 16,
    question: {
      en: "Where is the Saigon Central Post Office located?",
      vi: "Bưu điện Trung tâm Sài Gòn nằm ở đâu?"
    },
    answer: {
      en: "District 1",
      vi: "Quận 1"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "A beautiful French colonial building designed by Gustave Eiffel, still functioning as a post office today",
      vi: "Một tòa nhà thuộc địa Pháp đẹp được thiết kế bởi Gustave Eiffel, vẫn hoạt động như một bưu điện ngày nay"
    }
  },
  {
    id: 17,
    question: {
      en: "Which district is the Notre Dame Cathedral in?",
      vi: "Nhà thờ Đức Bà nằm ở quận nào?"
    },
    answer: {
      en: "District 1",
      vi: "Quận 1"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Built between 1863 and 1880, it's one of the most iconic landmarks in Ho Chi Minh City",
      vi: "Được xây dựng từ năm 1863 đến 1880, đây là một trong những địa danh mang tính biểu tượng nhất của Thành phố Hồ Chí Minh"
    }
  },
  {
    id: 18,
    question: {
      en: "Where is the War Remnants Museum located?",
      vi: "Bảo tàng Chứng tích Chiến tranh nằm ở đâu?"
    },
    answer: {
      en: "District 1",
      vi: "Quận 1"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Formerly known as the Museum of American War Crimes, it documents the Vietnam War from a Vietnamese perspective",
      vi: "Trước đây được gọi là Bảo tàng Tội ác Chiến tranh Mỹ, nơi đây ghi lại Chiến tranh Việt Nam từ góc nhìn của người Việt Nam"
    }
  },
  {
    id: 19,
    question: {
      en: "Which district is the Saigon Opera House in?",
      vi: "Nhà hát Thành phố nằm ở quận nào?"
    },
    answer: {
      en: "District 1",
      vi: "Quận 1"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Built in 1897, it's one of the most beautiful examples of French colonial architecture in Vietnam",
      vi: "Được xây dựng năm 1897, đây là một trong những ví dụ đẹp nhất về kiến trúc thuộc địa Pháp tại Việt Nam"
    }
  },
  {
    id: 20,
    question: {
      en: "Where is the People's Committee Building located?",
      vi: "Trụ sở Ủy ban Nhân dân Thành phố nằm ở đâu?"
    },
    answer: {
      en: "District 1",
      vi: "Quận 1"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Formerly the Hotel de Ville, it's a beautiful French colonial building that serves as the city's government headquarters",
      vi: "Trước đây là Hotel de Ville, đây là một tòa nhà thuộc địa Pháp đẹp đẽ phục vụ như trụ sở chính quyền thành phố"
    }
  },
  {
    id: 21,
    question: {
      en: "Which district is the Mariamman Hindu Temple in?",
      vi: "Đền Hindu Mariamman nằm ở quận nào?"
    },
    answer: {
      en: "District 1",
      vi: "Quận 1"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Built in the late 19th century, it's the only Hindu temple in Ho Chi Minh City",
      vi: "Được xây dựng vào cuối thế kỷ 19, đây là ngôi đền Hindu duy nhất tại Thành phố Hồ Chí Minh"
    }
  },
  {
    id: 22,
    question: {
      en: "Where is the Thien Hau Temple located?",
      vi: "Chùa Bà Thiên Hậu nằm ở đâu?"
    },
    answer: {
      en: "District 1",
      vi: "Quận 1"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Built in 1760, it's one of the oldest Chinese temples in the city, dedicated to the sea goddess Mazu",
      vi: "Được xây dựng năm 1760, đây là một trong những ngôi chùa Trung Hoa cổ nhất thành phố, thờ nữ thần biển Mazu"
    }
  },
  {
    id: 23,
    question: {
      en: "Which district is the Jade Emperor Pagoda in?",
      vi: "Chùa Ngọc Hoàng nằm ở quận nào?"
    },
    answer: {
      en: "District 1",
      vi: "Quận 1"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Built in 1909, it's one of the most atmospheric temples in the city, dedicated to the Jade Emperor",
      vi: "Được xây dựng năm 1909, đây là một trong những ngôi chùa có không khí nhất thành phố, thờ Ngọc Hoàng"
    }
  },
  {
    id: 24,
    question: {
      en: "Where is the Saigon Zoo and Botanical Gardens located?",
      vi: "Thảo Cầm Viên Sài Gòn nằm ở đâu?"
    },
    answer: {
      en: "District 1",
      vi: "Quận 1"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Established in 1865, it's one of the oldest zoos in the world and the largest in Vietnam",
      vi: "Được thành lập năm 1865, đây là một trong những vườn thú lâu đời nhất thế giới và lớn nhất Việt Nam"
    }
  },
  {
    id: 25,
    question: {
      en: "Which district is the Museum of Vietnamese History in?",
      vi: "Bảo tàng Lịch sử Việt Nam nằm ở quận nào?"
    },
    answer: {
      en: "District 1",
      vi: "Quận 1"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Built in 1929, it houses artifacts from Vietnam's history, from prehistoric times to the present",
      vi: "Được xây dựng năm 1929, nơi đây lưu giữ các hiện vật từ lịch sử Việt Nam, từ thời tiền sử đến hiện tại"
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
      en: "A prestigious international school offering British curriculum education in Ho Chi Minh City.",
      vi: "Một trường quốc tế uy tín cung cấp giáo dục theo chương trình Anh tại Thành phố Hồ Chí Minh."
    }
  },
  {
    id: 15,
    question: {
      en: "Where is the American International School located?",
      vi: "Trường Quốc tế Mỹ nằm ở đâu?"
    },
    answer: {
      en: "District 2",
      vi: "Quận 2"
    },
    category: "place",
    district: "District 2",
    additionalInfo: {
      en: "One of the leading international schools in Vietnam, offering American curriculum education.",
      vi: "Một trong những trường quốc tế hàng đầu tại Việt Nam, cung cấp giáo dục theo chương trình Mỹ."
    }
  },
  {
    id: 26,
    question: {
      en: "What is the most famous street for luxury shopping in District 1?",
      vi: "Con phố nổi tiếng nhất về mua sắm cao cấp ở Quận 1 là gì?"
    },
    answer: {
      en: "Dong Khoi Street",
      vi: "Đường Đồng Khởi"
    },
    category: "street",
    district: "District 1",
    additionalInfo: {
      en: "Known as the 'Champs-Élysées of Saigon', it's lined with luxury boutiques and high-end restaurants",
      vi: "Được gọi là 'Champs-Élysées của Sài Gòn', con phố này có nhiều cửa hàng thời trang cao cấp và nhà hàng sang trọng"
    }
  },
  {
    id: 27,
    question: {
      en: "Which street in District 1 is famous for its nightlife?",
      vi: "Con phố nào ở Quận 1 nổi tiếng về cuộc sống về đêm?"
    },
    answer: {
      en: "Bui Vien Street",
      vi: "Đường Bùi Viện"
    },
    category: "street",
    district: "District 1",
    additionalInfo: {
      en: "Known as the 'Backpacker Street', it's famous for its bars, clubs, and street food",
      vi: "Được gọi là 'Phố Tây Ba Lô', nổi tiếng với các quán bar, câu lạc bộ và ẩm thực đường phố"
    }
  },
  {
    id: 28,
    question: {
      en: "What is the most famous street for street food in District 1?",
      vi: "Con phố nổi tiếng nhất về ẩm thực đường phố ở Quận 1 là gì?"
    },
    answer: {
      en: "Nguyen Hue Street",
      vi: "Đường Nguyễn Huệ"
    },
    category: "street",
    district: "District 1",
    additionalInfo: {
      en: "A pedestrian street that transforms into a food paradise in the evening with many street food vendors",
      vi: "Một con phố đi bộ biến thành thiên đường ẩm thực vào buổi tối với nhiều quán ăn đường phố"
    }
  },
  {
    id: 29,
    question: {
      en: "Which street in District 1 is known for its flower market?",
      vi: "Con phố nào ở Quận 1 nổi tiếng về chợ hoa?"
    },
    answer: {
      en: "Nguyen Hue Street",
      vi: "Đường Nguyễn Huệ"
    },
    category: "street",
    district: "District 1",
    additionalInfo: {
      en: "Home to the famous Nguyen Hue Flower Street, especially vibrant during Tet (Lunar New Year)",
      vi: "Nơi có Đường Hoa Nguyễn Huệ nổi tiếng, đặc biệt sôi động trong dịp Tết Nguyên đán"
    }
  },
  {
    id: 30,
    question: {
      en: "What is the most famous street for coffee shops in District 1?",
      vi: "Con phố nổi tiếng nhất về quán cà phê ở Quận 1 là gì?"
    },
    answer: {
      en: "Le Loi Street",
      vi: "Đường Lê Lợi"
    },
    category: "street",
    district: "District 1",
    additionalInfo: {
      en: "Known for its concentration of both traditional and modern coffee shops",
      vi: "Nổi tiếng với sự tập trung của cả quán cà phê truyền thống và hiện đại"
    }
  },
  {
    id: 31,
    question: {
      en: "Which street in District 1 is famous for its bookstores?",
      vi: "Con phố nào ở Quận 1 nổi tiếng về nhà sách?"
    },
    answer: {
      en: "Nguyen Hue Street",
      vi: "Đường Nguyễn Huệ"
    },
    category: "street",
    district: "District 1",
    additionalInfo: {
      en: "Home to several major bookstores including Fahasa, the largest bookstore chain in Vietnam",
      vi: "Nơi có nhiều nhà sách lớn bao gồm Fahasa, chuỗi nhà sách lớn nhất Việt Nam"
    }
  },
  {
    id: 32,
    question: {
      en: "What is the most famous street for art galleries in District 1?",
      vi: "Con phố nổi tiếng nhất về phòng trưng bày nghệ thuật ở Quận 1 là gì?"
    },
    answer: {
      en: "Dong Khoi Street",
      vi: "Đường Đồng Khởi"
    },
    category: "street",
    district: "District 1",
    additionalInfo: {
      en: "Known for its concentration of art galleries showcasing both traditional and contemporary Vietnamese art",
      vi: "Nổi tiếng với sự tập trung của các phòng trưng bày nghệ thuật trưng bày cả nghệ thuật truyền thống và đương đại Việt Nam"
    }
  },
  {
    id: 33,
    question: {
      en: "Which street in District 1 is known for its antique shops?",
      vi: "Con phố nào ở Quận 1 nổi tiếng về cửa hàng đồ cổ?"
    },
    answer: {
      en: "Le Cong Kieu Street",
      vi: "Đường Lê Công Kiều"
    },
    category: "street",
    district: "District 1",
    additionalInfo: {
      en: "Known as 'Antique Street', it's famous for its shops selling antiques and collectibles",
      vi: "Được gọi là 'Phố Đồ Cổ', nổi tiếng với các cửa hàng bán đồ cổ và đồ sưu tầm"
    }
  },
  {
    id: 34,
    question: {
      en: "What is the most famous street for tailor shops in District 1?",
      vi: "Con phố nổi tiếng nhất về tiệm may ở Quận 1 là gì?"
    },
    answer: {
      en: "Le Loi Street",
      vi: "Đường Lê Lợi"
    },
    category: "street",
    district: "District 1",
    additionalInfo: {
      en: "Known for its concentration of tailor shops offering custom-made clothing at reasonable prices",
      vi: "Nổi tiếng với sự tập trung của các tiệm may cung cấp quần áo may đo với giá phải chăng"
    }
  },
  {
    id: 35,
    question: {
      en: "Which street in District 1 is famous for its jewelry shops?",
      vi: "Con phố nào ở Quận 1 nổi tiếng về cửa hàng trang sức?"
    },
    answer: {
      en: "Nguyen Hue Street",
      vi: "Đường Nguyễn Huệ"
    },
    category: "street",
    district: "District 1",
    additionalInfo: {
      en: "Known for its concentration of jewelry shops selling both traditional and modern designs",
      vi: "Nổi tiếng với sự tập trung của các cửa hàng trang sức bán cả thiết kế truyền thống và hiện đại"
    }
  },
  {
    id: 36,
    question: {
      en: "What is the most famous market in District 1?",
      vi: "Chợ nổi tiếng nhất ở Quận 1 là gì?"
    },
    answer: {
      en: "Ben Thanh Market",
      vi: "Chợ Bến Thành"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Built in 1912, it's the most famous market in Ho Chi Minh City, known for its clock tower and diverse goods",
      vi: "Được xây dựng năm 1912, đây là chợ nổi tiếng nhất Thành phố Hồ Chí Minh, nổi tiếng với tháp đồng hồ và hàng hóa đa dạng"
    }
  },
  {
    id: 37,
    question: {
      en: "Which shopping mall in District 1 is known for its luxury brands?",
      vi: "Trung tâm mua sắm nào ở Quận 1 nổi tiếng với các thương hiệu cao cấp?"
    },
    answer: {
      en: "Takashimaya Vietnam",
      vi: "Takashimaya Việt Nam"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "A Japanese department store featuring high-end international brands and a gourmet food court",
      vi: "Một cửa hàng bách hóa Nhật Bản có các thương hiệu quốc tế cao cấp và khu ẩm thực gourmet"
    }
  },
  {
    id: 38,
    question: {
      en: "What is the most famous night market in District 1?",
      vi: "Chợ đêm nổi tiếng nhất ở Quận 1 là gì?"
    },
    answer: {
      en: "Ben Thanh Night Market",
      vi: "Chợ Đêm Bến Thành"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Located next to Ben Thanh Market, it's famous for its street food, souvenirs, and lively atmosphere",
      vi: "Nằm cạnh Chợ Bến Thành, nổi tiếng với ẩm thực đường phố, đồ lưu niệm và không khí sôi động"
    }
  },
  {
    id: 39,
    question: {
      en: "Which shopping mall in District 1 has the largest cinema complex?",
      vi: "Trung tâm mua sắm nào ở Quận 1 có rạp chiếu phim lớn nhất?"
    },
    answer: {
      en: "Vincom Center Landmark 81",
      vi: "Vincom Center Landmark 81"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Features a modern cinema complex with multiple screens and premium seating options",
      vi: "Có khu phức hợp rạp chiếu phim hiện đại với nhiều màn hình và lựa chọn ghế ngồi cao cấp"
    }
  },
  {
    id: 40,
    question: {
      en: "What is the most famous street market in District 1?",
      vi: "Chợ đường phố nổi tiếng nhất ở Quận 1 là gì?"
    },
    answer: {
      en: "Nguyen Hue Flower Street Market",
      vi: "Chợ Đường Hoa Nguyễn Huệ"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "A seasonal market that appears during Tet (Lunar New Year), featuring beautiful flower displays and decorations",
      vi: "Một chợ theo mùa xuất hiện trong dịp Tết Nguyên đán, trưng bày hoa và trang trí đẹp mắt"
    }
  },
  {
    id: 41,
    question: {
      en: "Which shopping mall in District 1 is known for its food court?",
      vi: "Trung tâm mua sắm nào ở Quận 1 nổi tiếng với khu ẩm thực?"
    },
    answer: {
      en: "Saigon Centre",
      vi: "Saigon Centre"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Features a diverse food court with both local and international cuisine options",
      vi: "Có khu ẩm thực đa dạng với cả món ăn địa phương và quốc tế"
    }
  },
  {
    id: 42,
    question: {
      en: "What is the most famous market for electronics in District 1?",
      vi: "Chợ nổi tiếng nhất về điện tử ở Quận 1 là gì?"
    },
    answer: {
      en: "Saigon Square",
      vi: "Saigon Square"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Known for its wide selection of electronics, gadgets, and accessories at competitive prices",
      vi: "Nổi tiếng với nhiều lựa chọn điện tử, thiết bị và phụ kiện với giá cạnh tranh"
    }
  },
  {
    id: 43,
    question: {
      en: "Which shopping mall in District 1 is known for its rooftop garden?",
      vi: "Trung tâm mua sắm nào ở Quận 1 nổi tiếng với khu vườn trên mái?"
    },
    answer: {
      en: "Saigon Centre",
      vi: "Saigon Centre"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Features a beautiful rooftop garden with city views, restaurants, and a relaxing atmosphere",
      vi: "Có khu vườn trên mái đẹp với view thành phố, nhà hàng và không khí thư giãn"
    }
  },
  {
    id: 44,
    question: {
      en: "What is the most famous market for souvenirs in District 1?",
      vi: "Chợ nổi tiếng nhất về đồ lưu niệm ở Quận 1 là gì?"
    },
    answer: {
      en: "Ben Thanh Market",
      vi: "Chợ Bến Thành"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Known for its wide selection of traditional Vietnamese souvenirs, handicrafts, and local products",
      vi: "Nổi tiếng với nhiều lựa chọn đồ lưu niệm truyền thống Việt Nam, thủ công mỹ nghệ và sản phẩm địa phương"
    }
  },
  {
    id: 45,
    question: {
      en: "Which shopping mall in District 1 is known for its art exhibitions?",
      vi: "Trung tâm mua sắm nào ở Quận 1 nổi tiếng với triển lãm nghệ thuật?"
    },
    answer: {
      en: "Diamond Plaza",
      vi: "Diamond Plaza"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Regularly hosts art exhibitions and cultural events in its public spaces",
      vi: "Thường xuyên tổ chức triển lãm nghệ thuật và sự kiện văn hóa tại không gian công cộng"
    }
  },
  {
    id: 46,
    question: {
      en: "What is the most famous luxury hotel in District 1?",
      vi: "Khách sạn sang trọng nổi tiếng nhất ở Quận 1 là gì?"
    },
    answer: {
      en: "Hotel Continental Saigon",
      vi: "Khách sạn Continental Sài Gòn"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Built in 1880, it's one of the oldest hotels in Vietnam and was featured in Graham Greene's 'The Quiet American'",
      vi: "Được xây dựng năm 1880, đây là một trong những khách sạn lâu đời nhất Việt Nam và được đề cập trong 'Người Mỹ Trầm Lặng' của Graham Greene"
    }
  },
  {
    id: 47,
    question: {
      en: "Which hotel in District 1 is known for its rooftop bar?",
      vi: "Khách sạn nào ở Quận 1 nổi tiếng với quầy bar trên sân thượng?"
    },
    answer: {
      en: "Rex Hotel",
      vi: "Khách sạn Rex"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Famous for its rooftop bar that was a popular meeting place for journalists during the Vietnam War",
      vi: "Nổi tiếng với quầy bar trên sân thượng từng là nơi gặp gỡ phổ biến của các phóng viên trong Chiến tranh Việt Nam"
    }
  },
  {
    id: 48,
    question: {
      en: "What is the most famous boutique hotel in District 1?",
      vi: "Khách sạn boutique nổi tiếng nhất ở Quận 1 là gì?"
    },
    answer: {
      en: "Hotel des Arts Saigon",
      vi: "Khách sạn Hotel des Arts Sài Gòn"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "A luxury boutique hotel known for its art deco design and rooftop infinity pool",
      vi: "Một khách sạn boutique sang trọng nổi tiếng với thiết kế art deco và hồ bơi vô cực trên sân thượng"
    }
  },
  {
    id: 49,
    question: {
      en: "Which hotel in District 1 is known for its French colonial architecture?",
      vi: "Khách sạn nào ở Quận 1 nổi tiếng với kiến trúc thuộc địa Pháp?"
    },
    answer: {
      en: "Majestic Hotel",
      vi: "Khách sạn Majestic"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Built in 1925, it's one of the most beautiful examples of French colonial architecture in the city",
      vi: "Được xây dựng năm 1925, đây là một trong những ví dụ đẹp nhất về kiến trúc thuộc địa Pháp trong thành phố"
    }
  },
  {
    id: 50,
    question: {
      en: "What is the most famous business hotel in District 1?",
      vi: "Khách sạn doanh nhân nổi tiếng nhất ở Quận 1 là gì?"
    },
    answer: {
      en: "Sheraton Saigon Hotel & Towers",
      vi: "Khách sạn Sheraton Sài Gòn & Towers"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Known for its business facilities, conference rooms, and central location in the business district",
      vi: "Nổi tiếng với cơ sở vật chất dành cho doanh nhân, phòng hội nghị và vị trí trung tâm trong khu kinh doanh"
    }
  },
  {
    id: 51,
    question: {
      en: "Which hotel in District 1 is known for its spa services?",
      vi: "Khách sạn nào ở Quận 1 nổi tiếng với dịch vụ spa?"
    },
    answer: {
      en: "Park Hyatt Saigon",
      vi: "Khách sạn Park Hyatt Sài Gòn"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Features a luxurious spa offering traditional Vietnamese and international treatments",
      vi: "Có spa sang trọng cung cấp các liệu pháp truyền thống Việt Nam và quốc tế"
    }
  },
  {
    id: 52,
    question: {
      en: "What is the most famous hotel for its river views in District 1?",
      vi: "Khách sạn nổi tiếng nhất với view sông ở Quận 1 là gì?"
    },
    answer: {
      en: "Riverside Hotel",
      vi: "Khách sạn Riverside"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Located along the Saigon River, offering panoramic views of the city's waterfront",
      vi: "Nằm dọc theo sông Sài Gòn, mang đến tầm nhìn toàn cảnh bờ sông của thành phố"
    }
  },
  {
    id: 53,
    question: {
      en: "Which hotel in District 1 is known for its historical significance?",
      vi: "Khách sạn nào ở Quận 1 nổi tiếng với ý nghĩa lịch sử?"
    },
    answer: {
      en: "Caravelle Hotel",
      vi: "Khách sạn Caravelle"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Built in 1959, it was the first international hotel in Saigon and housed many foreign correspondents during the war",
      vi: "Được xây dựng năm 1959, đây là khách sạn quốc tế đầu tiên ở Sài Gòn và là nơi ở của nhiều phóng viên nước ngoài trong chiến tranh"
    }
  },
  {
    id: 54,
    question: {
      en: "What is the most famous hotel for its restaurants in District 1?",
      vi: "Khách sạn nổi tiếng nhất với nhà hàng ở Quận 1 là gì?"
    },
    answer: {
      en: "InterContinental Saigon",
      vi: "Khách sạn InterContinental Sài Gòn"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Known for its diverse dining options, including Vietnamese, Italian, and international cuisine",
      vi: "Nổi tiếng với nhiều lựa chọn ẩm thực, bao gồm món ăn Việt Nam, Ý và quốc tế"
    }
  },
  {
    id: 55,
    question: {
      en: "Which hotel in District 1 is known for its art collection?",
      vi: "Khách sạn nào ở Quận 1 nổi tiếng với bộ sưu tập nghệ thuật?"
    },
    answer: {
      en: "Hotel des Arts Saigon",
      vi: "Khách sạn Hotel des Arts Sài Gòn"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Features an extensive collection of contemporary Vietnamese art throughout its public spaces",
      vi: "Có bộ sưu tập phong phú về nghệ thuật đương đại Việt Nam trong không gian công cộng"
    }
  },
  {
    id: 56,
    question: {
      en: "What is the most famous park in District 1?",
      vi: "Công viên nổi tiếng nhất ở Quận 1 là gì?"
    },
    answer: {
      en: "Tao Dan Park",
      vi: "Công viên Tao Đàn"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Known as the 'Lung of Saigon', it's one of the largest parks in the city center, popular for morning exercises",
      vi: "Được gọi là 'Lá phổi của Sài Gòn', đây là một trong những công viên lớn nhất ở trung tâm thành phố, phổ biến cho tập thể dục buổi sáng"
    }
  },
  {
    id: 57,
    question: {
      en: "Which park in District 1 is known for its flower displays?",
      vi: "Công viên nào ở Quận 1 nổi tiếng với trưng bày hoa?"
    },
    answer: {
      en: "September 23 Park",
      vi: "Công viên 23/9"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Features beautiful flower gardens and is a popular spot for photography, especially during Tet",
      vi: "Có vườn hoa đẹp và là địa điểm phổ biến cho chụp ảnh, đặc biệt trong dịp Tết"
    }
  },
  {
    id: 58,
    question: {
      en: "What is the most famous square in District 1?",
      vi: "Quảng trường nổi tiếng nhất ở Quận 1 là gì?"
    },
    answer: {
      en: "Nguyen Hue Walking Street",
      vi: "Phố đi bộ Nguyễn Huệ"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "A pedestrian square that hosts major events and celebrations, with the City Hall at one end",
      vi: "Một quảng trường đi bộ tổ chức các sự kiện và lễ kỷ niệm lớn, với Tòa thị chính ở một đầu"
    }
  },
  {
    id: 59,
    question: {
      en: "Which park in District 1 is known for its exercise equipment?",
      vi: "Công viên nào ở Quận 1 nổi tiếng với thiết bị tập thể dục?"
    },
    answer: {
      en: "Le Van Tam Park",
      vi: "Công viên Lê Văn Tám"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Features outdoor exercise equipment and is popular for morning and evening workouts",
      vi: "Có thiết bị tập thể dục ngoài trời và phổ biến cho tập luyện buổi sáng và tối"
    }
  },
  {
    id: 60,
    question: {
      en: "What is the most famous garden in District 1?",
      vi: "Khu vườn nổi tiếng nhất ở Quận 1 là gì?"
    },
    answer: {
      en: "Botanical Gardens",
      vi: "Thảo Cầm Viên"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Established in 1865, it's one of the oldest botanical gardens in Asia, combining a zoo and plant collections",
      vi: "Được thành lập năm 1865, đây là một trong những vườn thực vật lâu đời nhất châu Á, kết hợp vườn thú và bộ sưu tập thực vật"
    }
  },
  {
    id: 61,
    question: {
      en: "Which park in District 1 is known for its chess players?",
      vi: "Công viên nào ở Quận 1 nổi tiếng với người chơi cờ?"
    },
    answer: {
      en: "Tao Dan Park",
      vi: "Công viên Tao Đàn"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Famous for its large chess community, where players gather daily for matches",
      vi: "Nổi tiếng với cộng đồng chơi cờ lớn, nơi người chơi tụ tập hàng ngày để đấu cờ"
    }
  },
  {
    id: 62,
    question: {
      en: "What is the most famous park for bird watching in District 1?",
      vi: "Công viên nổi tiếng nhất để ngắm chim ở Quận 1 là gì?"
    },
    answer: {
      en: "Botanical Gardens",
      vi: "Thảo Cầm Viên"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Home to various bird species and a popular spot for bird watching enthusiasts",
      vi: "Là nơi sinh sống của nhiều loài chim và là địa điểm phổ biến cho người yêu thích ngắm chim"
    }
  },
  {
    id: 63,
    question: {
      en: "Which park in District 1 is known for its cultural events?",
      vi: "Công viên nào ở Quận 1 nổi tiếng với sự kiện văn hóa?"
    },
    answer: {
      en: "Nguyen Hue Walking Street",
      vi: "Phố đi bộ Nguyễn Huệ"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Regularly hosts cultural performances, festivals, and public celebrations",
      vi: "Thường xuyên tổ chức biểu diễn văn hóa, lễ hội và lễ kỷ niệm công cộng"
    }
  },
  {
    id: 64,
    question: {
      en: "What is the most famous park for photography in District 1?",
      vi: "Công viên nổi tiếng nhất để chụp ảnh ở Quận 1 là gì?"
    },
    answer: {
      en: "September 23 Park",
      vi: "Công viên 23/9"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Known for its beautiful landscaping, flower displays, and iconic city views",
      vi: "Nổi tiếng với cảnh quan đẹp, trưng bày hoa và tầm nhìn biểu tượng của thành phố"
    }
  },
  {
    id: 65,
    question: {
      en: "Which park in District 1 is known for its historical monuments?",
      vi: "Công viên nào ở Quận 1 nổi tiếng với tượng đài lịch sử?"
    },
    answer: {
      en: "Tao Dan Park",
      vi: "Công viên Tao Đàn"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Features several historical monuments and is home to the famous 'Birdcage' cafe",
      vi: "Có nhiều tượng đài lịch sử và là nơi có quán cà phê 'Lồng Chim' nổi tiếng"
    }
  },
  {
    id: 66,
    question: {
      en: "What is the most famous museum in District 1?",
      vi: "Bảo tàng nổi tiếng nhất ở Quận 1 là gì?"
    },
    answer: {
      en: "War Remnants Museum",
      vi: "Bảo tàng Chứng tích Chiến tranh"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Formerly known as the Museum of American War Crimes, it documents the Vietnam War from a Vietnamese perspective",
      vi: "Trước đây được gọi là Bảo tàng Tội ác Chiến tranh Mỹ, nơi đây ghi lại Chiến tranh Việt Nam từ góc nhìn của người Việt Nam"
    }
  },
  {
    id: 67,
    question: {
      en: "Which museum in District 1 is known for its art collection?",
      vi: "Bảo tàng nào ở Quận 1 nổi tiếng với bộ sưu tập nghệ thuật?"
    },
    answer: {
      en: "Ho Chi Minh City Museum of Fine Arts",
      vi: "Bảo tàng Mỹ thuật Thành phố Hồ Chí Minh"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Housed in a beautiful colonial building, it showcases Vietnamese art from different periods",
      vi: "Được đặt trong một tòa nhà thuộc địa đẹp, nơi đây trưng bày nghệ thuật Việt Nam qua các thời kỳ khác nhau"
    }
  },
  {
    id: 68,
    question: {
      en: "What is the most famous historical museum in District 1?",
      vi: "Bảo tàng lịch sử nổi tiếng nhất ở Quận 1 là gì?"
    },
    answer: {
      en: "Museum of Vietnamese History",
      vi: "Bảo tàng Lịch sử Việt Nam"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Built in 1929, it houses artifacts from Vietnam's history, from prehistoric times to the present",
      vi: "Được xây dựng năm 1929, nơi đây lưu giữ các hiện vật từ lịch sử Việt Nam, từ thời tiền sử đến hiện tại"
    }
  },
  {
    id: 69,
    question: {
      en: "Which museum in District 1 is known for its revolutionary history?",
      vi: "Bảo tàng nào ở Quận 1 nổi tiếng với lịch sử cách mạng?"
    },
    answer: {
      en: "Ho Chi Minh City Museum",
      vi: "Bảo tàng Thành phố Hồ Chí Minh"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Housed in the former Gia Long Palace, it showcases the city's history and revolutionary struggle",
      vi: "Được đặt trong Dinh Gia Long cũ, nơi đây trưng bày lịch sử thành phố và cuộc đấu tranh cách mạng"
    }
  },
  {
    id: 70,
    question: {
      en: "What is the most famous cultural center in District 1?",
      vi: "Trung tâm văn hóa nổi tiếng nhất ở Quận 1 là gì?"
    },
    answer: {
      en: "Saigon Opera House",
      vi: "Nhà hát Thành phố"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Built in 1897, it's one of the most beautiful examples of French colonial architecture and hosts cultural performances",
      vi: "Được xây dựng năm 1897, đây là một trong những ví dụ đẹp nhất về kiến trúc thuộc địa Pháp và tổ chức các buổi biểu diễn văn hóa"
    }
  },
  {
    id: 71,
    question: {
      en: "Which museum in District 1 is known for its traditional medicine collection?",
      vi: "Bảo tàng nào ở Quận 1 nổi tiếng với bộ sưu tập y học cổ truyền?"
    },
    answer: {
      en: "Fito Museum",
      vi: "Bảo tàng Fito"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "The first museum of traditional Vietnamese medicine, showcasing ancient medical tools and practices",
      vi: "Bảo tàng y học cổ truyền Việt Nam đầu tiên, trưng bày dụng cụ và phương pháp y học cổ xưa"
    }
  },
  {
    id: 72,
    question: {
      en: "What is the most famous exhibition center in District 1?",
      vi: "Trung tâm triển lãm nổi tiếng nhất ở Quận 1 là gì?"
    },
    answer: {
      en: "Saigon Exhibition and Convention Center",
      vi: "Trung tâm Triển lãm và Hội nghị Sài Gòn"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "The largest exhibition center in the city, hosting major trade shows and events",
      vi: "Trung tâm triển lãm lớn nhất thành phố, tổ chức các hội chợ thương mại và sự kiện lớn"
    }
  },
  {
    id: 73,
    question: {
      en: "Which museum in District 1 is known for its military history?",
      vi: "Bảo tàng nào ở Quận 1 nổi tiếng với lịch sử quân sự?"
    },
    answer: {
      en: "Ho Chi Minh City Museum",
      vi: "Bảo tàng Thành phố Hồ Chí Minh"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Features exhibits on the city's military history, including the Vietnam War period",
      vi: "Có các triển lãm về lịch sử quân sự của thành phố, bao gồm thời kỳ Chiến tranh Việt Nam"
    }
  },
  {
    id: 74,
    question: {
      en: "What is the most famous art gallery in District 1?",
      vi: "Phòng trưng bày nghệ thuật nổi tiếng nhất ở Quận 1 là gì?"
    },
    answer: {
      en: "Galerie Quynh",
      vi: "Galerie Quynh"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "One of the leading contemporary art galleries in Vietnam, showcasing both local and international artists",
      vi: "Một trong những phòng trưng bày nghệ thuật đương đại hàng đầu Việt Nam, trưng bày cả nghệ sĩ địa phương và quốc tế"
    }
  },
  {
    id: 75,
    question: {
      en: "Which cultural institution in District 1 is known for its traditional music performances?",
      vi: "Tổ chức văn hóa nào ở Quận 1 nổi tiếng với biểu diễn âm nhạc truyền thống?"
    },
    answer: {
      en: "Saigon Opera House",
      vi: "Nhà hát Thành phố"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Regularly hosts traditional Vietnamese music performances, including cai luong and traditional opera",
      vi: "Thường xuyên tổ chức biểu diễn âm nhạc truyền thống Việt Nam, bao gồm cải lương và opera truyền thống"
    }
  },
  {
    id: 76,
    question: {
      en: "What is the most famous rooftop restaurant in District 1?",
      vi: "Nhà hàng trên sân thượng nổi tiếng nhất ở Quận 1 là gì?"
    },
    answer: {
      en: "EON51 Restaurant",
      vi: "Nhà hàng EON51"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Located on the 51st floor of Bitexco Financial Tower, offering panoramic views of the city",
      vi: "Nằm trên tầng 51 của Tòa nhà Bitexco, mang đến tầm nhìn toàn cảnh thành phố"
    }
  },
  {
    id: 77,
    question: {
      en: "Which restaurant in District 1 is known for its French cuisine?",
      vi: "Nhà hàng nào ở Quận 1 nổi tiếng với ẩm thực Pháp?"
    },
    answer: {
      en: "La Villa French Restaurant",
      vi: "Nhà hàng Pháp La Villa"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Award-winning French restaurant in a colonial villa, known for its authentic French dishes",
      vi: "Nhà hàng Pháp đoạt giải thưởng trong biệt thự thuộc địa, nổi tiếng với các món ăn Pháp chính thống"
    }
  },
  {
    id: 78,
    question: {
      en: "What is the most famous street food area in District 1?",
      vi: "Khu ẩm thực đường phố nổi tiếng nhất ở Quận 1 là gì?"
    },
    answer: {
      en: "Ben Thanh Night Market",
      vi: "Chợ đêm Bến Thành"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Famous for its variety of local street food, from pho to banh mi and fresh seafood",
      vi: "Nổi tiếng với nhiều loại ẩm thực đường phố địa phương, từ phở đến bánh mì và hải sản tươi sống"
    }
  },
  {
    id: 79,
    question: {
      en: "Which restaurant in District 1 is known for its Vietnamese royal cuisine?",
      vi: "Nhà hàng nào ở Quận 1 nổi tiếng với ẩm thực cung đình Việt Nam?"
    },
    answer: {
      en: "Temple Club",
      vi: "Temple Club"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Housed in a restored temple, serving traditional Vietnamese royal dishes in an elegant setting",
      vi: "Được đặt trong một ngôi đền được phục hồi, phục vụ các món ăn cung đình truyền thống Việt Nam trong không gian sang trọng"
    }
  },
  {
    id: 80,
    question: {
      en: "What is the most famous seafood restaurant in District 1?",
      vi: "Nhà hàng hải sản nổi tiếng nhất ở Quận 1 là gì?"
    },
    answer: {
      en: "Quan An Ngon",
      vi: "Quán Ăn Ngon"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Known for its fresh seafood and traditional Vietnamese dishes in a beautiful colonial setting",
      vi: "Nổi tiếng với hải sản tươi sống và các món ăn truyền thống Việt Nam trong không gian thuộc địa đẹp mắt"
    }
  },
  {
    id: 81,
    question: {
      en: "Which restaurant in District 1 is known for its rooftop bar?",
      vi: "Nhà hàng nào ở Quận 1 nổi tiếng với quầy bar trên sân thượng?"
    },
    answer: {
      en: "Chill Skybar",
      vi: "Chill Skybar"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Located on the 26th floor of AB Tower, offering stunning city views and craft cocktails",
      vi: "Nằm trên tầng 26 của Tòa nhà AB, mang đến tầm nhìn tuyệt đẹp của thành phố và các loại cocktail thủ công"
    }
  },
  {
    id: 82,
    question: {
      en: "What is the most famous vegetarian restaurant in District 1?",
      vi: "Nhà hàng chay nổi tiếng nhất ở Quận 1 là gì?"
    },
    answer: {
      en: "Hum Vegetarian Restaurant",
      vi: "Nhà hàng chay Hum"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Known for its creative vegetarian dishes and peaceful garden setting",
      vi: "Nổi tiếng với các món chay sáng tạo và không gian vườn yên bình"
    }
  },
  {
    id: 83,
    question: {
      en: "Which restaurant in District 1 is known for its fusion cuisine?",
      vi: "Nhà hàng nào ở Quận 1 nổi tiếng với ẩm thực fusion?"
    },
    answer: {
      en: "Xu Restaurant Lounge",
      vi: "Nhà hàng Xu Restaurant Lounge"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Combines Vietnamese and French culinary traditions in a modern setting",
      vi: "Kết hợp truyền thống ẩm thực Việt Nam và Pháp trong không gian hiện đại"
    }
  },
  {
    id: 84,
    question: {
      en: "What is the most famous coffee shop in District 1?",
      vi: "Quán cà phê nổi tiếng nhất ở Quận 1 là gì?"
    },
    answer: {
      en: "Cafe Apartment",
      vi: "Chung cư Cafe"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "A unique concept where an entire apartment building is filled with different coffee shops",
      vi: "Một khái niệm độc đáo nơi toàn bộ tòa nhà chung cư được lấp đầy bởi các quán cà phê khác nhau"
    }
  },
  {
    id: 85,
    question: {
      en: "Which restaurant in District 1 is known for its traditional Vietnamese breakfast?",
      vi: "Nhà hàng nào ở Quận 1 nổi tiếng với bữa sáng truyền thống Việt Nam?"
    },
    answer: {
      en: "Pho Hoa Pasteur",
      vi: "Phở Hòa Pasteur"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "One of the oldest and most famous pho restaurants in Saigon, known for its beef pho",
      vi: "Một trong những nhà hàng phở lâu đời và nổi tiếng nhất ở Sài Gòn, nổi tiếng với phở bò"
    }
  },
  {
    id: 86,
    question: {
      en: "What is the most famous luxury shopping mall in District 1?",
      vi: "Trung tâm mua sắm sang trọng nổi tiếng nhất ở Quận 1 là gì?"
    },
    answer: {
      en: "Takashimaya Vietnam",
      vi: "Takashimaya Việt Nam"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Japanese department store known for its luxury brands and high-end shopping experience",
      vi: "Cửa hàng bách hóa Nhật Bản nổi tiếng với các thương hiệu sang trọng và trải nghiệm mua sắm cao cấp"
    }
  },
  {
    id: 87,
    question: {
      en: "Which shopping center in District 1 is known for its electronics market?",
      vi: "Trung tâm mua sắm nào ở Quận 1 nổi tiếng với chợ điện tử?"
    },
    answer: {
      en: "Saigon Square",
      vi: "Saigon Square"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Famous for its electronics, gadgets, and affordable shopping options",
      vi: "Nổi tiếng với điện tử, thiết bị và các lựa chọn mua sắm giá cả phải chăng"
    }
  },
  {
    id: 88,
    question: {
      en: "What is the most famous fashion street in District 1?",
      vi: "Con phố thời trang nổi tiếng nhất ở Quận 1 là gì?"
    },
    answer: {
      en: "Dong Khoi Street",
      vi: "Đường Đồng Khởi"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Known for its luxury boutiques, fashion stores, and high-end shopping experience",
      vi: "Nổi tiếng với các cửa hàng thời trang sang trọng và trải nghiệm mua sắm cao cấp"
    }
  },
  {
    id: 89,
    question: {
      en: "Which shopping center in District 1 is known for its art exhibitions?",
      vi: "Trung tâm mua sắm nào ở Quận 1 nổi tiếng với triển lãm nghệ thuật?"
    },
    answer: {
      en: "Diamond Plaza",
      vi: "Diamond Plaza"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Regularly hosts art exhibitions and cultural events in addition to shopping",
      vi: "Thường xuyên tổ chức triển lãm nghệ thuật và sự kiện văn hóa bên cạnh mua sắm"
    }
  },
  {
    id: 90,
    question: {
      en: "What is the most famous antique market in District 1?",
      vi: "Chợ đồ cổ nổi tiếng nhất ở Quận 1 là gì?"
    },
    answer: {
      en: "Le Cong Kieu Street",
      vi: "Đường Lê Công Kiều"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Known as Antique Street, famous for its collection of antiques and collectibles",
      vi: "Được gọi là Phố Đồ Cổ, nổi tiếng với bộ sưu tập đồ cổ và đồ sưu tầm"
    }
  },
  {
    id: 91,
    question: {
      en: "Which shopping center in District 1 is known for its rooftop garden?",
      vi: "Trung tâm mua sắm nào ở Quận 1 nổi tiếng với vườn trên sân thượng?"
    },
    answer: {
      en: "Saigon Centre",
      vi: "Saigon Centre"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Features a beautiful rooftop garden and diverse shopping options",
      vi: "Có vườn trên sân thượng đẹp và nhiều lựa chọn mua sắm đa dạng"
    }
  },
  {
    id: 92,
    question: {
      en: "What is the most famous jewelry street in District 1?",
      vi: "Con phố trang sức nổi tiếng nhất ở Quận 1 là gì?"
    },
    answer: {
      en: "Nguyen Hue Street",
      vi: "Đường Nguyễn Huệ"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Known for its concentration of jewelry shops and gold stores",
      vi: "Nổi tiếng với nhiều cửa hàng trang sức và tiệm vàng"
    }
  },
  {
    id: 93,
    question: {
      en: "Which shopping center in District 1 is known for its food court?",
      vi: "Trung tâm mua sắm nào ở Quận 1 nổi tiếng với khu ẩm thực?"
    },
    answer: {
      en: "Vincom Center",
      vi: "Vincom Center"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Features a diverse food court with both local and international cuisine",
      vi: "Có khu ẩm thực đa dạng với cả ẩm thực địa phương và quốc tế"
    }
  },
  {
    id: 94,
    question: {
      en: "What is the most famous book street in District 1?",
      vi: "Con phố sách nổi tiếng nhất ở Quận 1 là gì?"
    },
    answer: {
      en: "Nguyen Van Binh Book Street",
      vi: "Đường Sách Nguyễn Văn Bình"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "A pedestrian street dedicated to books, cafes, and cultural activities",
      vi: "Con phố đi bộ dành riêng cho sách, quán cà phê và hoạt động văn hóa"
    }
  },
  {
    id: 95,
    question: {
      en: "Which shopping center in District 1 is known for its cinema complex?",
      vi: "Trung tâm mua sắm nào ở Quận 1 nổi tiếng với khu phức hợp rạp chiếu phim?"
    },
    answer: {
      en: "Vincom Center Landmark 81",
      vi: "Vincom Center Landmark 81"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Home to the largest cinema complex in the city with multiple screens",
      vi: "Nơi có khu phức hợp rạp chiếu phim lớn nhất thành phố với nhiều màn hình"
    }
  },
  {
    id: 96,
    question: {
      en: "What is the most famous flower market in District 1?",
      vi: "Chợ hoa nổi tiếng nhất ở Quận 1 là gì?"
    },
    answer: {
      en: "Nguyen Hue Flower Street",
      vi: "Đường Hoa Nguyễn Huệ"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Famous for its seasonal flower displays, especially during Tet festival",
      vi: "Nổi tiếng với các triển lãm hoa theo mùa, đặc biệt là trong dịp Tết"
    }
  },
  {
    id: 97,
    question: {
      en: "Which shopping center in District 1 is known for its luxury brands?",
      vi: "Trung tâm mua sắm nào ở Quận 1 nổi tiếng với các thương hiệu sang trọng?"
    },
    answer: {
      en: "Saigon Centre",
      vi: "Saigon Centre"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Home to many international luxury brands and high-end fashion boutiques",
      vi: "Nơi có nhiều thương hiệu sang trọng quốc tế và cửa hàng thời trang cao cấp"
    }
  },
  {
    id: 98,
    question: {
      en: "What is the most famous souvenir market in District 1?",
      vi: "Chợ đồ lưu niệm nổi tiếng nhất ở Quận 1 là gì?"
    },
    answer: {
      en: "Ben Thanh Market",
      vi: "Chợ Bến Thành"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Famous for its wide variety of souvenirs, handicrafts, and local products",
      vi: "Nổi tiếng với nhiều loại đồ lưu niệm, thủ công mỹ nghệ và sản phẩm địa phương"
    }
  },
  {
    id: 99,
    question: {
      en: "Which shopping center in District 1 is known for its art galleries?",
      vi: "Trung tâm mua sắm nào ở Quận 1 nổi tiếng với phòng trưng bày nghệ thuật?"
    },
    answer: {
      en: "Diamond Plaza",
      vi: "Diamond Plaza"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Features several art galleries showcasing contemporary Vietnamese art",
      vi: "Có nhiều phòng trưng bày nghệ thuật trưng bày nghệ thuật đương đại Việt Nam"
    }
  },
  {
    id: 100,
    question: {
      en: "What is the most famous night market in District 1?",
      vi: "Chợ đêm nổi tiếng nhất ở Quận 1 là gì?"
    },
    answer: {
      en: "Ben Thanh Night Market",
      vi: "Chợ đêm Bến Thành"
    },
    category: "place",
    district: "District 1",
    additionalInfo: {
      en: "Famous for its street food, souvenirs, and vibrant night atmosphere",
      vi: "Nổi tiếng với ẩm thực đường phố, đồ lưu niệm và không khí sôi động về đêm"
    }
  }
];

// Export a function to get flashcards by ID range
export const getFlashcardsByRange = (startId: number, endId: number): Flashcard[] => {
  return flashcards_1_100.filter(card => card.id >= startId && card.id <= endId);
}; 
