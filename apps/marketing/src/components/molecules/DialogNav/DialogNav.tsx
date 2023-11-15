import * as Dialog from '@radix-ui/react-dialog'
import Link from "next/link";

import IconClose from '~/images/svgs/icon-close.svg'
// import LoginSignUp from "~/components/organisms/LoginSignUp"
// import VisuallyHidden from '@radix-ui/react-visually-hidden';
// import { buttonVariants } from "~/components/atoms/ButtonLink"


import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

const DialogNav = () => (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {/* <button className="text-slate-400 shadow-black hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
          Try for Free →
        </button> */}

            <button className="z-20 flex-col justify-center items-center lg:hidden flex" >
                <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5`}></span>
                <span className={`bg-black  block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 opacity-100`}></span>
                <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm translate-y-0.5`}></span>
            </button>

      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="z-20 bg-gradient-to-br from-[#FFFFFF] to-[var(--gradient-color)] data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="z-30 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] h-[95vh] w-[90vw]  translate-x-[-50%] translate-y-[-50%] rounded-[6px] p-[25px] focus:outline-none">
          
          <VisuallyHidden.Root asChild>
            <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
              Sign Up
            </Dialog.Title>
          </VisuallyHidden.Root>

          <VisuallyHidden.Root asChild>
            <Dialog.Description className="text-slate-900 mt-[10px] mb-5 text-[15px] leading-normal">
              Sign up for a free account.
            </Dialog.Description>
          </VisuallyHidden.Root>

          {/* <fieldset className="mb-[15px] flex items-center gap-5">
            <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="name">
              Name
            </label>
            <input
              className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
              id="name"
              defaultValue="Pedro Duarte"
            />
          </fieldset>
          <fieldset className="mb-[15px] flex items-center gap-5">
            <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="username">
              Username
            </label>
            <input
              className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
              id="username"
              defaultValue="@peduarte"
            />
          </fieldset> */}
          {/* <LoginSignUp /> */}
          <nav className="h-full max-w-full">
          <ul
                            className="
                            pt-4
                             text-gray-700
                            flex
                            items-center
                            flex-col
                            text-4xl
                            relative
                            top-[15%]"

                        >
                            <li className="p-4">
                                <Link href="/">
                                    Home
                                </Link>
                            </li>
                            <li className="p-4">
                            <a className="block hover:text-main-color-400 transition-colors" href="#features">Features</a>
                            </li>
                            <li className="p-4">
                            <a className=" block hover:text-main-color-400 transition-colors" href="#plans">Pricing</a>
                            </li>
                            <li className="p-4">
                            <Link
                                className="px-6 py-4 block hover:bg-main-color-400 text-slate-50 bg-[var(--dark-1)] rounded-2xl transition-colors"
                                href="/?join=true">Sign Up</Link>
                            </li>
                            <li className="p-4">
                            <a
                                className=" block hover:text-main-color-400 text-[var(--dark-1)] transition-colors"
                                href="https://app.tradetracker.ai/login">Log In</a>
                            </li>
                        </ul>
          </nav>
          {/* <div className="mt-[25px] flex justify-end">
            <Dialog.Close asChild>
              <button className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
                Close dialog
              </button>
            </Dialog.Close>
          </div> */}
          <Dialog.Close asChild>
            <button
              className=" hover:bg-grey focus:shadow-slate-400 absolute top-8 right-8 inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <IconClose />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
  
  export default DialogNav;