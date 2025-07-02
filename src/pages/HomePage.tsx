import { h, FunctionalComponent } from 'preact';
import Header from '../components/Header';

const HomePage: FunctionalComponent = () => {
  return (
    <div class="page-container">
      <Header title="Welcome to Pokémon Teaches Typing!" />
      <main>
        <p>This is the homepage. Start typing your Pokémon adventure here!</p>
      </main>
    </div>
  );
};

export default HomePage;
