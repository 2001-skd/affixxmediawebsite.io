import React from "react";
import SectionHeading from "../../ui/SectionHeading";
import { serviceData } from "../../../data/servicesData"; // adjust path
import ServiceCardGroup from "./ServiceCardGroup";

const ServicesPage = () => {
  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-20 w-full mb-20 mt-5">
      {serviceData.map((service, index) => (
        <>
          <SectionHeading
            heading={service.title}
            subHeading="Our Services"
            id={service.id}
          />
          <ServiceCardGroup
            key={index}
            title={service.title}
            details={service.details}
          />
        </>
      ))}
    </section>
  );
};

export default ServicesPage;
