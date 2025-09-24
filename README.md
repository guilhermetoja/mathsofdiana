# Maths of Diana

A browser-based educational math game built with React and Tailwind CSS for a college game jam.

## Game Overview

Maths of Diana is an interactive math battle game where players help Diana defeat enemies by answering math questions correctly. The game features 5 stages, each with 5 progressively challenging math questions.

## Game Mechanics

- **Diana vs Enemies**: Diana stands on the left, enemies on the right
- **Answer Questions**: Each question has 5 multiple-choice answers displayed as cards
- **Correct Answer**: Enemy loses 1 HP, Diana attacks and moves forward
- **Wrong Answer**: Diana loses 1 HP, enemy attacks and moves forward
- **Progression**: Each enemy has 5 HP (one per question)
- **Victory**: Defeat all 5 stages to win
- **Game Over**: Diana loses if her HP reaches 0

## Features

- 5 stages with different enemy types (Goblin, Orc, Troll, Dragon, Demon Lord)
- Progressive difficulty from basic arithmetic to advanced math
- Smooth animations and visual feedback
- HP bars for both Diana and enemies
- Modern UI with Tailwind CSS styling
- Responsive design for different screen sizes

## Math Topics Covered

1. **Stage 1**: Basic Arithmetic (addition, subtraction, multiplication, division)
2. **Stage 2**: Fractions and Decimals
3. **Stage 3**: Algebra Basics
4. **Stage 4**: Geometry
5. **Stage 5**: Advanced Math (square roots, logarithms, trigonometry)

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone or download this repository
2. Navigate to the project directory:

   ```bash
   cd mathsofdiana
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `build` directory.

## Project Structure

```
src/
├── components/
│   ├── BattleScene.js      # Main game interface
│   ├── Character.js        # Diana and enemy components
│   ├── GameManager.js      # Game state management
│   ├── GameOverScreen.js   # Game over screen
│   ├── HPBar.js           # Health bar component
│   ├── QuestionCard.js    # Answer option cards
│   └── VictoryScreen.js   # Victory screen
├── data/
│   └── gameData.js        # Game data (enemies, questions)
├── App.js                 # Main app component
├── index.js              # Entry point
└── index.css             # Global styles
```

## Technologies Used

- **React 18** - Frontend framework
- **Tailwind CSS** - Styling and responsive design
- **Framer Motion** - Animations and transitions
- **CSS3** - Custom animations and effects

## Game Controls

- **Mouse/Touch**: Click on answer cards to select answers
- **Keyboard**: Not required (mouse/touch only)

## Customization

The game is designed to be easily expandable:

- Add new questions in `src/data/gameData.js`
- Modify enemy types and stages
- Adjust difficulty levels
- Add new math topics
- Customize visual themes

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## License

This project is created for educational purposes as part of a college game jam.
