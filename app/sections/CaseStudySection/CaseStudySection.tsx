"use client";
import { YodelMobileSection } from './YodelMobileSection';

interface Service {
	name: string;
  slug: string;
}

interface CaseStudySectionProps {
	currentService: Service;
}

const CaseStudySection: React.FC<CaseStudySectionProps> = ({ currentService }) => {

  if (!currentService) {
    return <></>;
  }

  switch (currentService.slug) {
    case "app-development":
      return <YodelMobileSection />;
    case "full-project-delivery":
      return <YodelMobileSection />;
    case "team-extension":
      return <YodelMobileSection />;
    default:
      return <></>;
  }
};

export default CaseStudySection;
