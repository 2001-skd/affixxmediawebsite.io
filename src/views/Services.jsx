import React, { Suspense } from "react";

const OtherPageBanner = React.lazy(() =>
  import("../components/layout/OtherPageBanner")
);
const ServicesPage = React.lazy(() =>
  import("../components/layout/servicePageComponents/ServicesPage")
);

const Services = () => {
  return (
    <>
      <Suspense>
        <OtherPageBanner title="Our Services" />
      </Suspense>

      <Suspense>
        <ServicesPage />
      </Suspense>
    </>
  );
};

export default Services;
