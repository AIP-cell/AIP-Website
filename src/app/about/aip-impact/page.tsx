import ImpactHeroSection from "./_components/ImpactHeroSection";
import CaseStudies from "./_components/CaseStudies";
import FoundationFacts from "./_components/FoundationFacts";
import PeopleWeWorkWith from "./_components/PeopleWeWorkWith";
import CurvePeach from "@public/svg/peach-bg-curve-founders.svg";

const page = () => {
  return (
    <div className="tw-relative">
      <ImpactHeroSection />
      <CaseStudies bottomCaseStudyCurveSvg={CurvePeach} />
      <FoundationFacts button="view more" />
      <PeopleWeWorkWith />
    </div>
  );
};

export default page;
