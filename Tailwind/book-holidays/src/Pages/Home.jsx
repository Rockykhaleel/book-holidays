import Cards from "../Components/Cards";
import { CarouselWithContent } from "../Components/CarouselWithContent";
import FeaturedTrip from "../Components/FeaturedTrip";
import Testimonials from "../Components/Testimonials";
import WhyChooseUs from "../Components/WhyChooseUs";

const Home = () => {
  return (
    <>
      <CarouselWithContent />
      <Cards />
      <WhyChooseUs />
      <FeaturedTrip />
      <Testimonials />
    </>
  );
};

export default Home;
