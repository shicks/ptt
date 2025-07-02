# Pokemon Teaches Typing (PTT)

## Project Overview

Pokemon Teaches Typing (PTT) is a client-side web application designed to help children improve their typing skills in a fun and engaging way. The game uses the popular Pokemon theme to motivate players. Players will encounter various Pokemon sprites that they need to "capture" by accurately typing letters, words, or phrases associated with them within a time limit. The game aims to balance typing practice with the rewarding experience of "catching them all," allowing players to build up their Pokedex and potentially unlock benefits for Pokemon they have captured.

## Core Game Mechanics

*   **Pokemon Encounters:** Pokemon sprites will appear on screen against a themed background.
*   **Typing Challenges:** To "capture" a Pokemon, the player must successfully type:
    *   Single letters (e.g., the first letter of the Pokemon's name) for beginner levels.
    *   The Pokemon's full name for intermediate levels.
    *   Short, Pokemon-related phrases or descriptions for advanced levels.
*   **Time Limits:** Each encounter will have a time limit to encourage quick and accurate typing.
*   **Capture Progress:** Successfully completing a typing challenge contributes to capturing that Pokemon species. Multiple successful encounters with the same Pokemon species might be required for a permanent capture.
*   **Pokedex:** A Pokedex will display all permanently captured Pokemon, showcasing the player's progress.
*   **Benefits for Captured Pokemon (Potential):**
    *   Gallery view.
    *   Cosmetic unlocks (e.g., different backgrounds, player avatar items).
*   **Levels/Difficulty:** The game will feature progressing difficulty levels, introducing longer words, shorter time limits, and more complex typing challenges.

## Technology Stack (Proposed)

*   **Frontend Framework:** Preact with TypeScript (using TSX for components).
*   **Build Tool:** Vite (for fast development server and optimized builds).
*   **Type Checking:** TypeScript.
*   **Linting:** ESLint configured for Preact and TypeScript.
*   **Styling:** Plain CSS (via `style.css`, can be evolved to CSS Modules or other solutions later).
*   **State Management:** Preact's built-in `useState` and `useReducer` should suffice for initial complexity. If needed, a lightweight global state manager like Zustand could be considered later.
*   **Graphics/Assets:** Existing Pokemon sprites and background images.

## Development Environment Setup

1.  **Node.js and npm/yarn:** Required for managing dependencies and running build scripts.
2.  **Vite Installation:** `npm create vite@latest ptt -- --template preact-ts` (or `yarn create vite ptt --template preact-ts` for yarn, using TypeScript for better maintainability).
3.  **Local Development Server:** Vite provides a hot-reloading development server (`npm run dev` or `yarn dev`).
4.  **Linting and Formatting:** ESLint and Prettier will be set up to ensure code quality and consistency.

## Deployment

*   **Target Platform:** GitHub Pages.
*   **Build Process:** Vite will build static assets (`npm run build` or `yarn build`) into a `dist` folder.
*   **Deployment Steps (Manual/CI):**
    1.  Configure the GitHub repository to serve from the `gh-pages` branch or a `/docs` folder on the main branch.
    2.  (User Task) Set up GitHub Actions to automate the build and deployment process upon pushes to the main branch. This involves:
        *   Checking out the code.
        *   Setting up Node.js.
        *   Installing dependencies.
        *   Running the build script.
        *   Deploying the contents of the `dist` folder to the `gh-pages` branch.

## Testing Plan

*   **Unit Tests:** Jest and Preact Testing Library will be used to test individual components and utility functions.
    *   Focus on testing component rendering based on props and state.
    *   Test logic within event handlers and game mechanics functions.
*   **Integration Tests (Light):** As the application grows, some tests might cover interactions between a few components.
*   **End-to-End Tests (Future Consideration):** Tools like Playwright or Cypress could be used for E2E testing if the application complexity warrants it, but this is a lower priority for the initial phases.
*   **Manual Testing:** Regular manual testing throughout development is crucial, especially for game feel and user experience.
*   **AGENTS.md Checks:** If programmatic checks are defined in `AGENTS.md`, they must be run and pass before submitting changes.

## Incremental Feature Development Plan (TODO)

This list outlines the tasks needed to build the game. Tasks prefixed with "(User Task)" are actions for the repository owner/maintainer.

### Phase 0: Project Setup & Basic Structure

1.  **(DONE)** Create `README.md` (this file).
2.  **(DONE)** Initialize project with Vite, Preact, and TypeScript. (Manual setup, files are now `.tsx`)
3.  **(DONE)** Set up ESLint for code quality with TypeScript and Preact support. (Prettier can be added later if desired).
4.  **(DONE)** Create basic file structure:
    *   `src/components/` for Preact components (e.g., `Header.tsx`).
    *   `src/pages/` for page components (e.g., `HomePage.tsx`).
    *   `src/assets/` for images, sprites.
    *   `src/` contains `main.tsx` (main application entry point) and `style.css`.
    *   `public/` for static assets (Vite convention, though `index.html` is at root).
    *   `vite.config.js` for Vite configuration.
    *   `.eslintrc.cjs` for ESLint configuration.
    *   `tsconfig.json` for TypeScript configuration.
5.  **(DONE)** Configure GitHub repository settings for GitHub Pages deployment from the root of the `gh-pages` branch.
6.  **(DONE)** Implement basic GitHub Actions workflow for automated build and deployment to GitHub Pages (in `.github/workflows/deploy.yml`).

### Phase 1: Core Gameplay - Single Letter Mode

1.  **Display Background:**
    *   Create a `Background` component.
    *   Load and display a static background image.
2.  **Pokemon Spawning:**
    *   Create a `PokemonDisplay` component.
    *   Function to randomly select a Pokemon from a predefined list/data structure.
    *   Load and display the selected Pokemon's sprite.
    *   Position the Pokemon randomly on the screen (within defined boundaries).
3.  **Input Handling:**
    *   Create an `InputBox` component.
    *   Capture single key presses.
4.  **Game Logic - Single Letter:**
    *   Associate a target letter with the spawned Pokemon (e.g., first letter of its name).
    *   Compare player input with the target letter.
    *   Implement a simple timer for each encounter.
5.  **Feedback:**
    *   Visual feedback for correct/incorrect key presses (e.g., color change, small animation).
    *   Sound effects for correct/incorrect/capture (optional, can be added later).
6.  **Scoring (Basic):**
    *   Increment score for successful "captures" (matching the letter in time).
    *   Display current score.
7.  **Game Loop:**
    *   Logic for spawning a new Pokemon after a successful capture or timeout.

### Phase 2: Pokedex & Capture Progression

1.  **Pokemon Data Structure:**
    *   Define a structure for Pokemon data (ID, name, sprite path, description, captured status, capture progress).
    *   Store this data (e.g., in a JSON file or TypeScript module).
2.  **Capture Progress Logic:**
    *   Track how many times a specific Pokemon species needs to be "hit" (successfully typed for) before it's permanently captured.
    *   Update and persist this progress (initially in local storage, later potentially a simple backend if desired, though the goal is client-side only).
3.  **Pokedex Component:**
    *   Create a `Pokedex` component.
    *   Display a list or grid of all Pokemon.
    *   Visually distinguish between caught, uncaught, and in-progress Pokemon (e.g., silhouette for uncaught, full color for caught).
    *   Allow viewing details of caught Pokemon.
4.  **Integrate Pokedex with Game:**
    *   Update Pokedex when a Pokemon is permanently captured.

### Phase 3: Word Typing Mode & Difficulty Levels

1.  **Game Mode Selection:**
    *   Allow player to choose between "Letter Mode" and "Word Mode".
2.  **Word Typing Logic:**
    *   In "Word Mode", player must type the full name of the Pokemon.
    *   Update `InputBox` to handle multi-character input.
    *   Update game logic to compare full words.
3.  **Difficulty Levels:**
    *   Introduce difficulty settings (e.g., Easy, Medium, Hard).
    *   Difficulty can affect:
        *   Time limits.
        *   Complexity of words/phrases.
        *   Speed of Pokemon appearance.
4.  **User Interface for Settings:**
    *   A simple UI to change game mode and difficulty.

### Phase 4: Advanced Features & Polish

1.  **Phrase Typing Mode:**
    *   Introduce a mode where players type short phrases related to Pokemon.
2.  **Benefits for Captured Pokemon:**
    *   Implement one or two simple benefits (e.g., slightly increased time for already caught Pokemon).
3.  **Animations & Visual Polish:**
    *   Add simple animations for Pokemon appearing/disappearing.
    *   More engaging feedback animations.
4.  **Sound Design:**
    *   Add background music.
    *   More comprehensive sound effects.
5.  **Persistent State:**
    *   Ensure game progress (Pokedex, high scores, settings) is saved in `localStorage`.
6.  **Accessibility (A11y):**
    *   Review and improve accessibility (e.g., keyboard navigation, ARIA attributes, color contrast).

### Phase 5: Refinement & Testing

1.  **Extensive Playtesting:** Gather feedback on game balance, fun factor, and difficulty.
2.  **Bug Fixing:** Address any identified bugs.
3.  **Performance Optimization:** Ensure the game runs smoothly, especially on less powerful devices.
4.  **Code Cleanup & Refactoring:** Improve code quality and maintainability.
5.  **Finalize Documentation:** Update `README.md` and any other relevant documentation.

## Contribution

(User Task) Define contribution guidelines if others are expected to contribute to this project. For now, this will primarily be developed by Jules, the AI agent, with your guidance.

---

This `README.md` provides a foundational plan. It will evolve as the project progresses.
Your feedback on this initial outline is welcome!
