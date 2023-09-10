import Navbar from "./component/navbar/navbar";
import Intro from "./component/intro/intro";
// eslint-disable-next-line
import Skills from "./component/Skills-sec/skills";
import Works from "./component/Works/works";
import Contacts from "./component/Contact/contact";
import Footer from "./component/footer/footer"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
