
import FeaturedCategory from "../Components/Home/FeaturedCategory";
import Hero from "../Components/Home/Hero";
import PopularCategory from "../Components/Home/PopularCategory";
export default function Home() {
  return (
    <div className="container">
      <Hero/>
      <PopularCategory/>
      <FeaturedCategory/>
    </div>
  );
}
