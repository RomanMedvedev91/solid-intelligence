import './App.css';
import Form from './Form/Form';
import { ReactComponent as HeaderImg } from '../assets/header-big.svg';
import logoFooter from '../assets/logoFooter.svg';
import lineFooter from '../assets/lineFooter.png';

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
      <footer>
        <div className="footer-line">
          <img src={lineFooter} />
        </div>
        <div className="footer-container">
          <img className="footer-logo" src={logoFooter} />
          <div className="footer-title">
            <p>SOLID INTELLIGENCE</p>
          </div>
          <div className="footer-rights">
            <p>Copyright © 2000-2022 SOLID INTELLIGENCE Company S.L. All rights reserved.</p>
          </div>
          <div className="footer-sourses">
            <p>Images designed by Freepik.com</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
