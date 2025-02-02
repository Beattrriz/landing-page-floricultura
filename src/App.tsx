import AboutSection from './Components/About';
import BudgetSection from './Components/Budget';
import CategoriesSection from './Components/Categories';
import { Footer } from './Components/Footer';
import Hero from './Components/Hero';
import TestimonialSection from './Components/Testimonials';

function App() {
  return (
    <div className="App">
      <Hero/>
      <AboutSection/>
      <CategoriesSection/>
      <BudgetSection/>
      <TestimonialSection/>
      <Footer/>
    </div>
  );
};

export default App;
