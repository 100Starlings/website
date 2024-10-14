"use client";
import caseStudies from "@/data/caseStudies.json";
import YodelMobilePage from "./YodelMobilePage/YodelMobilePage";

type CaseStudy = {
	name: string;
	slug: string;
	description: string;
};

export default function Page({ params }: { params: { slug: string } }) {
  const currentCaseStudy = caseStudies.find((caseStudy) => caseStudy.slug === params.slug) as CaseStudy | undefined;

	if (!currentCaseStudy) {
		return <div>Case Study not found</div>;
	}

	switch (currentCaseStudy.slug) {
    case "yodel-mobile":
      return <YodelMobilePage />;
    default:
      return <div>Case Study not found</div>;
  }
}
