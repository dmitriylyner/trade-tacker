import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import HeroImage from '../images/hero-img-trade-tracker.png';
import AppPreviewImg from '../images/app-preview.png';
import IconChart from '../images/svgs/icon-chart-up.svg';
import IconPie from '../images/svgs/icon-pie-chart.svg';
import IconClipboard from '../images/svgs/icon-clipboard.svg';
import IconFlag from '../images/svgs/icon-flag.svg';
import PhoneView from '../images/phone-app-view.jpg'
import IconLogo from '~/components/atoms/IconLogo'
import Button from '~/components/atoms/Button'



import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Trade Tracker</title>
        <meta name="description" content="Trade Tracker - next generation investment journal and analysis. Boost consistency and gain insights specific to your trading style." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav
          className="
            flex flex-wrap
            items-center
            justify-between
            w-full
            px-4
            text-lg text-gray-700
            relative
            z-10
          "
        >
          <IconLogo />
          <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
              <ul
                className="
                  pt-4
                  text-base text-gray-700
                  md:flex
                  items-center
                  md:justify-between 
                  md:pt-0"
              >
                <li className="p-4">
                  <a className=" block hover:text-main-teal" href="#"
                    >Features</a
                  >
                </li>
                <li className="p-4">
                  <a className=" block hover:text-main-teal" href="#"
                    >Pricing</a
                  >
                </li>
                <li className="p-4">
                  <a
                    className="md:px-6 md:py-2 block hover:bg-main-teal text-slate-50 bg-[var(--dark-1)] rounded-2xl "
                    href="#"
                    >Sign Up</a
                  >
                </li>
                <li className="p-4">
                  <a
                    className=" block hover:text-main-teal text-[var(--dark-1)]"
                    href="#"
                    >Log In</a
                  >
                </li>
              </ul>
          </div>
        </nav>
      </header>

      <main className="-mt-20 flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#FFFFFF] to-[var(--gradient-color)]">
        <div className=" flex flex-col items-center justify-center pb-12 w-full">
          <div className="container flex flex-col items-center justify-center mt-40 md:flex-row md:h-screen md:mt-0 md:justify-evenly ">
            <div className="space-y-4 max-w-screen-sm">
              <h1 className="text-4xl font-extrabold tracking-tight text-center text-slate-950 lg:text-[5rem] md:text-left md:leading-none ">
                Track & improve your trades
              </h1>
              <p className="text-center md:text-left md:max-w-prose">Gain consistency through data. View insights and performance of your trades over time.</p>
              <Button to="https://create.t3.gg/en/introduction">Explore Now →</Button>
            </div>
            <Image 
              src={HeroImage}
              alt='Trade Tracker Hero Image'
              className="md:max-w-xl"
            />
          </div>

          <div className='flex flex-col md:flex-row w-full'>
            <div className="md:w-1/2  py-28  bg-main-pattern bg-cover px-28 text-slate-50">
                <h2 className="text-3xl font-bold mb-4">Track. Analyze. Progress.</h2>
                <p className="max-w-prose">Built-in tools to help you maximize your winning trades and decrease your losing ones. Build up a proven history of wins to help you break out to the next level.</p>
            </div>

            <div className=" md:w-1/2 py-28 sm:grid-cols-2 md:gap-8 bg-[var(--dark-1)] bg-cover px-28 text-slate-50">
                <h2 className="text-3xl font-bold mb-4">Redefining the stock journal.</h2>
                <p className="mb-4">Practice makes perfect, and Trade Tracker improves your steady progress with intuitive features.</p>
                <Button to="https://create.t3.gg/en/introduction">See Metrics →</Button>
            </div>
          </div>

          <div className="mt-44 px-4 ">
            <h2 className="text-5xl mb-10 font-bold text-center">Unlocking new paradigms</h2>
            <Image 
              src={AppPreviewImg}
              alt='Trade Tracker App Preview'
              className="relative z-10"
            />

          </div>

          <div className="bg-pattern-2 bg-cover w-full -mt-48">
            <div className=" text-slate-50 mx-64 my-32">
              <div className="pt-36">
                <h3 className="text-2xl">Why Trade Tracker?</h3>
                <h2 className="text-5xl font-bold text-slate-950">Habit and performance</h2>
              </div>

              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:gap-8 py-16">
                <div className="my-2">
                  <IconChart className='text-6xl'/>
                  <h4 className="font-bold my-2">Customizable charts</h4>
                  <p>Create charts based on the metrics you want to track.</p>
                </div>

                <div className="my-2">
                  <IconPie className='text-6xl'/>
                  <h4 className="font-bold my-2">Analyze portfolios</h4>
                  <p>Personal, retirement, crypto, options, you name it. </p>
                </div>

                <div className="my-2">
                  <IconClipboard className='text-6xl'/>
                  <h4 className="font-bold my-2">Evaluate trades</h4>
                  <p>Get a new perspective on past trades and how to improve.</p>
                </div>

                <div className="my-2">
                  <IconFlag className='text-6xl'/>
                  <h4 className="font-bold my-2">Personalized Notes</h4>
                  <p>Create shortcuts and reminders to get you performing to your best.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="py-16 px-8 bg-white w-full">
            <div className="flex flex-col md:flex-row">
              <div>
                <h3 className="text-lg text-mail-teal">Level up</h3>
                <h2 className="text-2xl font-bold text-slate-950">Watch your progress</h2>
                <p>Gain consistency through data. View insights and performance of your trades over time. Unlock your highest level of performance now.</p>
                <Button to="https://create.t3.gg/en/introduction">Start free trail →</Button>
              </div>

              <Image 
                src={PhoneView}
                alt='Trade Tracker Phone App View'
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 py-28 sm:grid-cols-2 md:gap-8  bg-cover px-4 text-slate-950">
              <h2 className="text-2xl font-bold">Ready to get started?</h2>
              <p>Practice makes perfect, and Trade Tracker improves your steady progress with intuitive features.</p>
              <Button to="https://create.t3.gg/en/introduction">See Metrics →</Button>
              <div className="flex justify-around">
                <div className="bg-slate-50 w-5/12 p-2 rounded-lg">
                  <h3>Free</h3>
                  <p>1 portfolio</p>
                </div>
                <div className="bg-slate-50 w-5/12 p-2 rounded-lg">
                  <h3>Pro</h3>
                  <p>All portfolios</p>
                  <p>AI journal suggestions</p>
                </div>
              </div>
          </div>

          <footer className="bg-[var(--dark-1)] ">

          </footer>
          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
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
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-slate-950">
              {hello.data ? hello.data.greeting : "Loading tRPC query..."}
            </p>
            <AuthShowcase />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined },
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-slate-950">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-slate-950 no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
