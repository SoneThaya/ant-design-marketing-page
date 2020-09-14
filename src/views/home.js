import React from "react";
import AppHero from "../components/common/home/hero";
import AppAbout from "../components/common/home/about";
import AppFeature from "../components/common/home/feature";
import AppWorks from "../components/common/home/works";
import AppFaq from "../components/common/home/faq";
import AppPricing from "../components/common/home/pricing";
import AppContact from "../components/common/home/contact";

const AppHome = () => {
  return (
    <div className="main">
      <AppHero />
      <AppAbout />
      <AppFeature />
      <AppWorks />
      <AppFaq />
      <AppPricing />
      <AppContact />
    </div>
  );
};

export default AppHome;
