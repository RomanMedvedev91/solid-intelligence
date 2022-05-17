import './App.css';
import Form from './Form/Form';
import { ReactComponent as HeaderImg } from '../assets/header-big.svg';

function App() {
  return (
    <>
      <header className="header-container">
        <div className="header-image-container">
          <HeaderImg />
        </div>
        <div className="header-description">
          <h1 className="header-title">Solid Inteligence</h1>
          <p className="header-text">Search for anything, anywhere.</p>
          <p className="header-text">
            Solid Intelligence ready to help you find whatever you’re looking for.
          </p>
        </div>
      </header>
      <main className="main-container">
        <Form />
      </main>
      <footer>Footer</footer>
    </>
  );
}

export default App;
