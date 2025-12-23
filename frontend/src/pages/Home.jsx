
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedEvents from '../components/FeaturedEvents';
import { Link } from 'react-router-dom';
const Home = () => {
 
  return (
    <div>
      <Hero />
      <Categories />
      <FeaturedEvents />
    </div>
  );
};

export default Home;
