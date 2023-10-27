import './App.css';
import Alumni from './components/AlumniRow';
import Courses from './components/Courses';
import Footer from './components/Footer';
import Home from './components/Home';
import Instructor from './components/Instructor';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';
import UltimateCourse from './components/UltimateCourse';
import WhyChoose from './components/WhyChoose';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Courses/>
    <UltimateCourse/>
    <Testimonials/>
    <WhyChoose/>
    <Instructor/>
    <Alumni/>
    <Footer/>
    </>
  );
}

export default App;
