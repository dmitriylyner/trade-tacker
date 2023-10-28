import { type NextPage } from "next";
import Link from "next/link";

import Layout from "~/components/organisms/LandingPage/Layout";

const Page404: NextPage = () => {

  return (
    <Layout>
      <main className="-mt-20 flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#FFFFFF] to-[var(--gradient-color)]">
        <div className=" flex flex-col items-center justify-center w-full">
            
          <h1 className="text-xl">404 page not found</h1>
          <p>Please return to <Link href="/" className="underline">Home page</Link></p>
          
        </div>
      </main>
    </Layout>
  );
};

export default Page404;

