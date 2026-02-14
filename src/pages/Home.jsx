import HeroSection from '../components/HeroSection'
import CredibilitySection from '../components/CredibilitySection'
import ExecutionFrameworkSection from '../components/ExecutionFrameworkSection'
import ServicesPreviewSection from '../components/ServicesPreviewSection'
import IndustriesSection from '../components/IndustriesSection'
import CaseStudiesSection from '../components/CaseStudiesSection'
import WhitepapersSection from '../components/WhitepapersSection'
import CareersSection from '../components/CareersSection'
import PartnershipsSection from '../components/PartnershipsSection'
import PartnersSection from '../components/PartnersSection'
import FinalCTASection from '../components/FinalCTASection'

function Home() {
  return (
    <>
      <HeroSection />
      <div className="bg-gradient-to-b from-[#F5F9FF] via-[#F8FBFF] to-[#EEF6FF]">
        <CredibilitySection />
        <ExecutionFrameworkSection />
        <ServicesPreviewSection />
        <IndustriesSection />
        <CaseStudiesSection />
        <WhitepapersSection />
        <PartnershipsSection />
        <PartnersSection />
        <FinalCTASection />
         <CareersSection />
      </div>
    </>
  )
}

export default Home
