# HCM Streets & Places Flashcards

An interactive flashcard application to help users learn about streets and places in Ho Chi Minh City. The application features a modern UI with smooth card flip animations and filtering capabilities.

## Features

- Interactive flashcards with smooth flip animations
- Filter cards by category (streets/places) and district
- Responsive design that works on all devices
- Modern Material-UI based interface
- Easy navigation between cards
- Additional information for each location

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd hcm-streets
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

- Click on a flashcard to flip it and see the answer
- Use the category and district filters to focus on specific types of locations
- Navigate between cards using the Previous and Next buttons
- Each card shows additional information about the location when flipped

## Contributing

Contributions are welcome! If you'd like to add more flashcards or improve the application, please:

1. Fork the repository
2. Create a new branch for your feature
3. Submit a pull request

## Data Structure

Each flashcard contains:
- Question (location name)
- Answer (district)
- Category (street/place)
- District
- Additional information (optional)

## Technologies Used

- React
- TypeScript
- Material-UI
- Framer Motion
- Vite

## License

This project is licensed under the MIT License - see the LICENSE file for details.
