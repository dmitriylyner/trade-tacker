import { type NextPage } from "next";
import Link from "next/link";
import Layout from "~/components/organisms/LandingPage/Layout";
import HeroSection from "~/components/organisms/LandingPage/HeroSection";
import InfoSection from "~/components/organisms/LandingPage/InfoSection";
import DetailsSection from "~/components/organisms/LandingPage/DetailsSection";
import ProgressSection from "~/components/organisms/LandingPage/ProgressSection";
import PlanSection from "~/components/organisms/LandingPage/PlanSection";
import ContactForm from "~/components/molecules/ContactForm";
import { buttonVariants } from "~/components/atoms/ButtonLink"
import Dialog from '~/components/molecules/Dialog'


const Home: NextPage = () => {
  return (
    <Layout>
      <main className="-mt-20 flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#FFFFFF] to-[var(--gradient-color)]">
        <div className=" flex flex-col items-center justify-center w-full">
            
          <HeroSection />

          <div className="sticky top-10 z-20 pb-[24vh] max-h-[300px]" style={{pointerEvents: 'none'}}>
            <Link className={buttonVariants({variant: 'default'})} href="/?join=true" scroll={false} style={{pointerEvents: 'auto'}}>
                Try for Free →
            </Link>
            <Dialog />
          </div>

          <InfoSection />

          <DetailsSection />

          <ProgressSection />

          <PlanSection />

          <div>
            <ContactForm />
          </div>

        </div>
      </main>
    </Layout>
  );
};

export default Home;
