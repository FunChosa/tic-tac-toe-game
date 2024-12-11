# Tic-Tac-Toe

A simple and classic Tic-Tac-Toe game for two players on a single device. The game is played on a standard 3x3 grid.

## Project Setup

1. **Clone the repository:** `git clone https://github.com/FunChosa/tic-tac-toe-game.git`
2. **Navigate to the project directory:** `cd tic-tac-toe-game`
3. **Install dependencies:** `npm install`
4. **Start the development server:** `npm run dev`

## Features

* Two-Player Mode: Designed for two players playing on the same device.
* Alternating Turns: X always goes first, and turns alternate between X and O automatically.
* Win Condition Check: The game checks for a win after every move, immediately announcing the winner if one is found. Winning conditions include three in a row horizontally, vertically, or diagonally.
* Tie Condition Check: If all squares are filled and no winning condition is met, the game declares a tie.
* Clear Visual Feedback: The game provides clear visual feedback to show the current player’s turn and the placement of marks on the board.
* Easy Restart: A dedicated restart button allows players to quickly start a new game.

## Technology Stack

* React: ^18.3.1
* Vite: ^5.4.10

## State Management

The application's state is managed using the `useState` hook.


## Deployment

The application is deployed on Netlify: https://funchosa-tic-tac-toe-game.netlify.app

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.