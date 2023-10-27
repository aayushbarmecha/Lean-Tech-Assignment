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
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Home  id="/"/>
      <Courses id="courses"/>
      <UltimateCourse />
      <Testimonials id="testimonials"/>
      <WhyChoose id="why-choose"/>
      <Instructor id="instructor"/>
      <Alumni id="alumni"/>
      <Footer />
    </>
  );
}

export default App;