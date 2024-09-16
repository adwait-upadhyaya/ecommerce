import { ErrorBoundary } from "react-error-boundary";
import Advertisement from "../layout/Advertisement";
import Category from "../layout/Category";
import HomeHero from "../layout/HomeHero";
import Mission from "../layout/Mission";
import EverlaneSection from "../molecules/Favourites";
import Reviews from "../molecules/Reviews";
import Picks from "../layout/Picks";
import ExtraSection from "../layout/ExtraSection";
import Features from "../layout/Features";

const Landing = () => {
  return (
    <>
      <HomeHero />
      <div className="landing">
        <ErrorBoundary fallback={<div>Something Went Wrong</div>}>
          <Category />
        </ErrorBoundary>
        <Advertisement />
        <Mission />
        <EverlaneSection />
        <Reviews />
        <Picks />
        <ExtraSection />
        <Features />
      </div>
    </>
  );
};

export default Landing;
