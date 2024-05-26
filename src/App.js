import './App.css';
import Hero from './components/HeroSection/Hero';
import Header from './components/commonComponents/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import SecondSec from './components/sectionSecond/SecondSec';
import ThirdSec from './components/sectionThird/ThirdSec';
import FourthSec from './components/sectionFourth/FourthSec';
import WorkSec from './components/secFiveWorkSec.jsx/WorkSec';
import Footer from './components/commonComponents/Footer';


function App() {
  return (
    <div className="App">
    <Header/>
    <Hero/>
    <SecondSec/>
    <ThirdSec/>
    <FourthSec/>
    <WorkSec/>
    <Footer/>
    </div>
  );
}

export default App;
