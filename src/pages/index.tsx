import { type NextPage } from "next";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "~/server/auth";

import Layout from "~/components/organisms/LandingPage/Layout";
import HeroSection from "~/components/organisms/LandingPage/HeroSection";
import InfoSection from "~/components/organisms/LandingPage/InfoSection";
import DetailsSection from "~/components/organisms/LandingPage/DetailsSection";
import ProgressSection from "~/components/organisms/LandingPage/ProgressSection";
import PlanSection from "~/components/organisms/LandingPage/PlanSection";
// import HeroImage from '../images/hero-img-trade-tracker.png';

import Dialog from '~/components/molecules/Dialog'

// import { api } from "~/utils/api";

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <Layout>
      <main className="-mt-20 flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#FFFFFF] to-[var(--gradient-color)]">
        <div className=" flex flex-col items-center justify-center w-full">
            
          <HeroSection />

          <div className="sticky top-10 z-20 h-[20vh] max-h-[300px]">
            {/* <Button to="/login">Try for free →</Button> */}
            <Dialog />
          </div>

          <InfoSection />

          <DetailsSection />

          <ProgressSection />

          <PlanSection />

          <div>
            <form className="px-8 pt-8 pb-12 mb-20">
              <div className="mb-4">
                <h4 className="text-center leading-7 mb-8">Woah, you made it all the way down here. <br/> Reward yourself by signing up to our awesome newsletter.</h4>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  {/* Email */}
                </label>
                <input className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
              </div>
            </form>
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
