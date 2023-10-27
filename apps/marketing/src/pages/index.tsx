import { type NextPage } from "next";
import Link from "next/link";
// import { signIn, signOut, useSession } from "next-auth/react";
// import { getServerSession } from "next-auth";
// import { authOptions } from "~/server/auth";

// import ButtonLink from "~/components/atoms/ButtonLink"

import Layout from "~/components/organisms/LandingPage/Layout";
import HeroSection from "~/components/organisms/LandingPage/HeroSection";
import InfoSection from "~/components/organisms/LandingPage/InfoSection";
import DetailsSection from "~/components/organisms/LandingPage/DetailsSection";
import ProgressSection from "~/components/organisms/LandingPage/ProgressSection";
import PlanSection from "~/components/organisms/LandingPage/PlanSection";
import ContactForm from "~/components/molecules/ContactForm";
// import HeroImage from '../images/hero-img-trade-tracker.png';
import { buttonVariants } from "~/components/atoms/ButtonLink"

import Dialog from '~/components/molecules/Dialog'

// import { useRouter } from 'next/navigation'

// import { api } from "~/utils/api";

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });
  // const router = useRouter()

  return (
    <Layout>
      <main className="-mt-20 flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#FFFFFF] to-[var(--gradient-color)]">
        <div className=" flex flex-col items-center justify-center w-full">
            
          <HeroSection />

          <div className="sticky top-10 z-20 h-[28vh] max-h-[300px]">
            {/* <Button to="/login">Try for free →</Button> */}
            <Link className={buttonVariants({variant: 'default'})} href="/?join=true" scroll={false}>
                Try for Free →
            </Link>
              {/* <button className={buttonVariants({variant: 'default'})} onClick={() => router.push("?join=true")}>
                Try for Free →
              </button> */}
            <Dialog />
          </div>

          {/* <div className="bg-black">
            <ButtonLink
                to="/#projects"
                display="primary"
                variant={'main'}
            >
                See my work
            </ButtonLink>
          </div> */}

          <InfoSection />

          <DetailsSection />

          <ProgressSection />

          <PlanSection />

          <div>
            <ContactForm />
          </div>
          
          {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-slate-950 hover:bg-white/20"
              href="https://create.t3.gg/en/usage/first-steps"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">First Steps →</h3>
              <div className="text-lg">
                Just the basics - Everything you need to know to set up your
                database and authentication.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-slate-950 hover:bg-white/20"
              href="https://create.t3.gg/en/introduction"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Documentation →</h3>
              <div className="text-lg">
                Learn more about Create T3 App, the libraries it uses, and how
                to deploy it.
              </div>
            </Link>
          </div> */}


          
        </div>
      </main>
    </Layout>
  );
};

export default Home;

// const AuthShowcase:React.FC = () => {
//   const { data: sessionData } = useSession();

//   // const session = await getServerSession(authOptions)

//   const { data: secretMessage } = api.example.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined },
//   );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-slate-950">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-slate-950 no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// };
