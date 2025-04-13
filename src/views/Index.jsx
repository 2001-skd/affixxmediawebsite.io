import React, { Suspense } from "react";
import PageLoader from "../components/ui/PageLoader";

const HeroBanner = React.lazy(() => import("../components/layout/HeroBanner"));
const AboutSection = React.lazy(() =>
  import("../components/layout/AboutSection")
);
const OnBoardSection = React.lazy(() =>
  import("../components/layout/OnBoardSection")
);
const ServiceSection = React.lazy(() =>
  import("../components/layout/ServiceSection")
);
const TestimonialSection = React.lazy(() =>
  import("../components/layout/TestimonialSection")
);

const Index = () => {
  return (
    <>
      <Suspense fallback={<p>Loading..</p>}>
        <HeroBanner />
      </Suspense>

      <Suspense fallback={<p>Loading..</p>}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={<p>Loading..</p>}>
        <ServiceSection />
      </Suspense>

      <Suspense fallback={<p>Loading..</p>}>
        <OnBoardSection />
      </Suspense>

      <Suspense fallback={<p>Loading..</p>}>
        <TestimonialSection />
      </Suspense>
    </>
  );
};

export default Index;
