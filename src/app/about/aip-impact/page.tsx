import ImpactHeroSection from "./_components/ImpactHeroSection";
import CaseStudies from "./_components/CaseStudies";
import FoundationFacts from "./_components/FoundationFacts";
import PeopleWeWorkWith from "./_components/PeopleWeWorkWith";
import CurvePeach from "@public/svg/peach-bg-curve-founders.svg";


const page = () => {
  return (
    <div className="tw-relative tw-pt-[5rem]">
      <ImpactHeroSection />
      <CaseStudies  bottomCaseStudyCurveSvg={CurvePeach} />
      <FoundationFacts button="View more" />
      <PeopleWeWorkWith />
    </div>
  );
};

export default page;
