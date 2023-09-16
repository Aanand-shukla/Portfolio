import {
  About,
  Contact,
  Education,
  Experience,
  Footer,
  Header,
  Nav,
  Portfolio,
} from "./Index";
import "./app.css";
const App = () => {
  return (
    <div className="app">
      <div className="components">
        <Header />
        <Nav />
        <About />
        <Experience />
        <Education />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
