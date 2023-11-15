// import Nav from '@/components/organisms/Nav/Nav.component'
// import Footer from '@/components/organisms/Footer/Footer.component'
import { NextSeo } from 'next-seo'
import Link from "next/link";
import Nav from "~/components/molecules/Nav";
import IconLogoWhite from '~/images/svgs/icon-logo-white.svg'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {


  return (
    <>
        {/* <Nav classNames='bg-transparent' baseUrl="."/> */}
        <NextSeo
          title={`Trade Tracker - Next generation investment journal and analysis`}
          description="Trade Tracker - next generation investment journal and analysis. Boost consistency and gain insights specific to your trading style."
        />
        <header>
            <Nav />
        </header>
          {children}
        {/* <Footer /> */}
        <a href="#" className="block bg-color-600 w-full text-center p-6 text-slate-50 hover:bg-color-500">Back to top</a>

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
              max-w-minimum
              max-w-maximum
              m-auto
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
                    <Link
                      className="md:px-6 md:py-2 block hover:bg-main-color-400 text-slate-50 bg-[var(--dark-1)] rounded-2xl transition-colors"
                      href="/?join=true" scroll={false}>Sign Up</Link>
                  </li>
                  <li className="p-4">
                    <Link
                      className=" block text-slate-50 hover:text-main-color-400 text-[var(--dark-1)] transition-colors"
                      href="https://app.tradetracker.ai/login">Log In</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </footer>
    </>
  )
}

