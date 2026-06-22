

// Careers Page Component
import CareersHero from "./Hero";
import Workplace from "./Workplace";
import Benifits from "./Benifits";
import Positions from "./Positions";
import Whatgoes from "./Whatgoes";
import Ourworld from "./Ourworld";
import Howtobecame from "./Howtobecame";
import Stories from "./Stories";
import FollowUs from "./Followus";

export const metadata = {
  title: "Careers at SecurXpert Technologies | IT Jobs in Hyderabad",
  description: "Join SecurXpert Technologies — open roles in engineering, product, design, and operations. Flexible hours, real growth, and a culture built on trust. ",
};
export default function CareersPage() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden pt-0 text-slate-800">
      <CareersHero />
      <Workplace />
      <Benifits />
      <Positions/>
      <Whatgoes />
      <Ourworld />
      <Howtobecame />
      <Stories />
      <FollowUs />
    </div>
  );
}
