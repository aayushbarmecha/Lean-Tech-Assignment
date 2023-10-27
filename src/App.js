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
    // <Router>
    //   <div>
    //     <Navbar />
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/courses" element={<Courses />} />
    //       <Route path="/ultimate-course" element={<UltimateCourse />} />
    //       <Route path="/testimonials" element={<Testimonials />} />
    //       <Route path="/why-choose" element={<WhyChoose />} />
    //       <Route path="/instructor" element={<Instructor />} />
    //       <Route path="/alumni" element={<Alumni />} />
    //     </Routes>
    //     <Footer />
    //   </div>
    // </Router>
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