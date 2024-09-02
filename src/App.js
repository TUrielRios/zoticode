import React from 'react';
import  Header  from './Components/Header/Header';
import VideoList from './Components/VideoList/VideoList';
import ProjectGallery from './Components/ProjectGallery/ProjectGallery';
import MessageBoard from './Components/MessageBoard/MessageBoard';
import  HeroSection  from './Components/HeroSection/HeroSection';
import { CoursesSlider } from './Components/CoursesSlider/CoursesSlider';
import FeaturesSection from './Components/FeaturesSection/FeaturesSection';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PopularCourses from './Components/PopularCourses/PopularCourses';
import CallToActionSection from './Components/CallToActionSection/CallToActionSection';
import TestimonialsSection from './Components/TestimonialsSection/TestimonialsSection'
import LearningSection from './Components/LearningSection/LearningSection';
import ProgrammingSection from './Components/ProgrammingSection/ProgrammingSection';
import './App.css'


function App() {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <ProgrammingSection />
        <FeaturesSection />
        <PopularCourses/>
        <TestimonialsSection />
        <CallToActionSection />
        
      </main>
    </div>
  );
}

export default App;
