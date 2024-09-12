import { ErrorBoundary } from "react-error-boundary";
import Advertisement from "../layout/Advertisement";
import Category from "../layout/Category";
import HomeHero from "../layout/HomeHero";
import Mission from "../layout/Mission";

const Landing = () => {
  return (
    <>
      <HomeHero />
      <ErrorBoundary fallback={<div>Something Went Wrong</div>}>
        <Category />
      </ErrorBoundary>
      <Advertisement />
      <Mission />
    </>
  );
};

export default Landing;
