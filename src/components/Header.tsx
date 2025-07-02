import { h, FunctionalComponent } from 'preact';

interface HeaderProps {
  title: string;
}

const Header: FunctionalComponent<HeaderProps> = ({ title }) => {
  return (
    <header class="app-header">
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
