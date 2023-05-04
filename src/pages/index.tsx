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
import IconLineUp from '~/images/svgs/icon-line-up.svg'
import IconWrite from '~/images/svgs/icon-write.svg'
import IconRadar from '~/images/svgs/icon-radar.svg'
import IconCrown from '~/images/svgs/icon-crown.svg'
import IconBlocks from '~/images/svgs/icon-blocks.svg'
import IconDiamond from '~/images/svgs/icon-diamond.svg'
import IconPlay from '~/images/svgs/icon-play.svg'
import IconLogoWhite from '~/images/svgs/icon-logo-white.svg'



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
            h-20
          "
        >
          <IconLogo />

          <svg
              xmlns="http://www.w3.org/2000/svg"
              id="menu-button"
              className="h-6 w-6 cursor-pointer md:hidden block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        
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
                  <a className=" block hover:text-main-color-400 transition-colors" href="#features">Features</a>
                </li>
                <li className="p-4">
                  <a className=" block hover:text-main-color-400 transition-colors" href="#">Pricing</a>
                </li>
                <li className="p-4">
                  <a
                    className="md:px-6 md:py-2 block hover:bg-main-color-400 text-slate-50 bg-[var(--dark-1)] rounded-2xl transition-colors"
                    href="/login">Sign Up</a>
                </li>
                <li className="p-4">
                  <a
                    className=" block hover:text-main-color-400 text-[var(--dark-1)] transition-colors"
                    href="/login">Log In</a>
                </li>
              </ul>
          </div>
        </nav>
      </header>

      <main className="-mt-20 flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#FFFFFF] to-[var(--gradient-color)]">
        <div className=" flex flex-col items-center justify-center w-full">
          <div className="container flex flex-col items-center justify-center mt-40 md:flex-row md:h-screen md:mt-0 md:justify-evenly ">
            <div className="space-y-5 max-w-screen-sm">
              <h1 className="text-4xl font-extrabold tracking-tight text-center text-slate-950 lg:text-[5rem] md:text-left md:leading-none drop-shadow-md">
                Track & improve your trades
              </h1>
              <p className="text-center md:text-left md:max-w-prose">Gain consistency through data. View insights and performance of your trades over time.</p>
              <Button to="#features">Explore Now →</Button>
            </div>
            <Image 
              src={HeroImage}
              alt='Trade Tracker Hero Image'
              className="md:max-w-xl"
            />
          </div>

          <div className='flex flex-col md:flex-row w-full' id="features">
            <div className="md:w-1/2  py-28  bg-main-pattern bg-cover px-12 md:px-28 text-slate-50">
                <h2 className="text-3xl font-bold mb-4 drop-shadow-md">Track. Analyze. Progress.</h2>
                <p className="max-w-prose">Built-in tools to help you maximize your winning trades and decrease your losing ones. Build up a proven history of wins to help you break out to the next level.</p>
            </div>

            <div className=" md:w-1/2 py-28 sm:grid-cols-2 md:gap-8 bg-[var(--dark-1)] bg-cover px-12 md:px-28 text-slate-50">
                <h2 className="text-3xl font-bold mb-4 drop-shadow-md">Redefining the stock journal.</h2>
                <p className="mb-4">Practice makes perfect, and Trade Tracker improves your steady progress with intuitive features.</p>
                <Button to="https://create.t3.gg/en/introduction">See Metrics →</Button>
            </div>
          </div>

          <div className="mt-16 md:mt-44 px-4 ">
            <h2 className="text-4xl md:text-5xl mb-10 font-bold text-center">Unlocking new paradigms</h2>
            <Image 
              src={AppPreviewImg}
              alt='Trade Tracker App Preview'
              className="relative z-10"
            />

          </div>

          <div className="bg-pattern-2 bg-cover w-full -mt-48">
            <div className=" text-slate-50 mx-12 md:mx-36 lg:mx-auto lg:max-w-6xl my-32">
              <div className="pt-36">
                <h3 className="text-2xl">Why Trade Tracker?</h3>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-950 drop-shadow-md">Habit and performance</h2>
              </div>

              {/* <div className="flex py-16 align-items justify-between">
                <div className="my-2">
                  <IconChart className='text-6xl'/>
                  <h4 className="font-bold my-2 drop-shadow-md">Customizable charts</h4>
                  <p className="max-ch-25">Create charts based on the metrics you want to track.</p>
                </div>

                <div className="my-2">
                  <IconPie className='text-6xl'/>
                  <h4 className="font-bold my-2 drop-shadow-md">Analyze portfolios</h4>
                  <p className="max-ch-25">Personal, retirement, crypto, options, stocks, you name it. </p>
                </div>

                <div className="my-2 ">
                  <IconClipboard className='text-6xl'/>
                  <h4 className="font-bold my-2 drop-shadow-md" >Evaluate trades</h4>
                  <p className="max-ch-25">Get a new perspective on past trades and how to improve.</p>
                </div>

                <div className="my-2">
                  <IconFlag className='text-6xl'/>
                  <h4 className="font-bold my-2 drop-shadow-md">Personalized Notes</h4>
                  <p className="max-ch-25">Create shortcuts and reminders to perform your best.</p>
                </div>
              </div> */}

              <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-8 py-16 md:grid-flow-col-dense">
                <div className="my-2">
                  <IconChart className='text-6xl'/>
                  <h4 className="font-bold my-2 drop-shadow-md">Customizable charts</h4>
                  <p className="max-ch-25">Create charts based on the metrics you want to track.</p>
                </div>

                <div className="my-2">
                  <IconPie className='text-6xl'/>
                  <h4 className="font-bold my-2 drop-shadow-md">Analyze portfolios</h4>
                  <p className="max-ch-25">Personal, retirement, crypto, options, stocks, you name it. </p>
                </div>

                <div className="my-2 ">
                  <IconClipboard className='text-6xl'/>
                  <h4 className="font-bold my-2 drop-shadow-md" >Evaluate trades</h4>
                  <p className="max-ch-25">Get a new perspective on past trades and how to improve.</p>
                </div>

                <div className="my-2">
                  <IconFlag className='text-6xl'/>
                  <h4 className="font-bold my-2 drop-shadow-md">Personalized Notes</h4>
                  <p className="max-ch-25">Create shortcuts and reminders to perform your best.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="px-8 bg-white w-full">
            <div className="flex flex-col md:flex-row lg:mx-auto lg:max-w-6xl lg:my-32">
              <div >
                <h3 className="text-2xl text-mail-teal">Level up</h3>
                <div className="space-y-5">
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-950 drop-shadow-md">Watch your progress</h2>
                  <p className="lg:max-w-prose">Gain consistency through data. View insights and performance of your trades over time. Unlock your highest level of performance now.</p>
                  <Button to="https://create.t3.gg/en/introduction">See metrics →</Button>
                </div>
              </div>

              <Image 
                src={PhoneView}
                alt='Trade Tracker Phone App View'
              />
            </div>
          </div>

          <div className="px-8 w-full lg:my-32">
            <div className="flex flex-col md:flex-row lg:mx-auto lg:max-w-6xl lg:my-32">
              <div className="space-y-5">
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-950 drop-shadow-md">Ready to get started?</h2>
                  <p className="lg:max-w-prose">Practice makes perfect, and Trade Tracker improves your steady progress with intuitive features.</p>
              </div>

              <div className="flex justify-around w-4/5">
                <div className="bg-slate-50 w-5/12 p-6 rounded-lg h-min-content">
                  <h3 className="text-3xl md:text-4xl">Free</h3>
                  <ul className="my-8 space-y-6">
                    <li>
                      <IconLineUp className="inline-block" width="2rem" height="2rem"/>
                      <p className="inline-block ml-3">1 portfolio</p>
                    </li>
                    <li>
                      <IconWrite className="inline-block" width="2rem" height="2rem"/>
                      <p className="inline-block ml-3">40 trades a month</p>
                    </li>
                    <li>
                      <IconRadar className="inline-block" width="2rem" height="2rem"/>
                      <p className="inline-block ml-3">Watchlist alerts</p>
                    </li>
                  </ul>
                  <Button to="https://create.t3.gg/en/introduction" width="full">Sign up</Button>

                </div>
                <div className="custom-gradient w-5/12 p-6 rounded-lg h-min-content">
                  <h3 className="text-3xl md:text-4xl text-slate-50 font-bold "><span className="border-b-2">Pro</span> <span className="font-normal text-2xl text-light-150 ">$20/mo</span></h3>
                  <ul className="my-8 space-y-6">
                    <li>
                      <IconCrown className="inline-block" width="2rem" height="2rem"/> 
                      <p className="inline-block ml-3 text-light-150"> All portfolios</p>
                    </li>
                    <li>
                      <IconBlocks className="inline-block" width="2rem" height="2rem"/> 
                      <p className="inline-block ml-3 text-light-150">Unlimited Trades</p>
                    </li>
                    <li>
                      <IconDiamond className="inline-block" width="2rem" height="2rem"/> 
                      <p className="inline-block ml-3 text-light-150">AI journal suggestions</p>
                    </li>
                    <li>
                      <IconPlay className="inline-block" width="2rem" height="2rem"/> 
                      <p className="inline-block ml-3 text-light-150">First for features & updates</p>
                    </li>
                  </ul>
                  <Button to="https://create.t3.gg/en/introduction" width="full">
                    Try for free
                  </Button>

                </div>
              </div>
            </div>
          </div>

          <div>
            <form className="px-8 pt-8 pb-12 mb-4">
              <div className="mb-4">
                <h4 className="text-center">Woah, you made it all the way down here. <br/> Reward yourself by signing up to our awesome newsletter.</h4>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  {/* Email */}
                </label>
                <input className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
              </div>
            </form>
          </div>

          <a href="#" className="bg-color-600 w-full text-center p-6 mt-16 text-slate-50 hover:bg-color-500">Back to top</a>

          <footer className="bg-[var(--dark-1)] w-full ">
          <nav
            className="
              flex flex-wrap
              items-center
              justify-between
              w-full
              px-16
              text-lg text-gray-700
              relative
            "
          >
            <div className="my-16">
              <IconLogoWhite width="12rem" height="5rem" />
              <p className="text-slate-300">© Trade Tracker 2023</p>
            </div>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                id="menu-button"
                className="h-6 w-6 cursor-pointer md:hidden block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          
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
                    <a className=" block text-slate-50 hover:text-main-color-400 transition-colors" href="#features">Features</a>
                  </li>
                  <li className="p-4">
                    <a className=" block text-slate-50 hover:text-main-color-400 transition-colors" href="#">Pricing</a>
                  </li>
                  <li className="p-4">
                    <a
                      className="md:px-6 md:py-2 block hover:bg-main-color-400 text-slate-50 bg-[var(--dark-1)] rounded-2xl transition-colors"
                      href="#">Sign Up</a>
                  </li>
                  <li className="p-4">
                    <a
                      className=" block text-slate-50 hover:text-main-color-400 text-[var(--dark-1)] transition-colors"
                      href="#">Log In</a>
                  </li>
                </ul>
              </div>
            </nav>
          </footer>
          
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
{/* 
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-slate-950">
              {hello.data ? hello.data.greeting : "Loading tRPC query..."}
            </p>
            <AuthShowcase />
          </div> */}
          
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
