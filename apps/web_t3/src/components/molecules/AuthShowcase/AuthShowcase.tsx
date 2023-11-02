"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";

const AuthShowcase:React.FC = () => {
    const { data: sessionData } = useSession();
  
    // const session = await getServerSession(authOptions)
  
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

  export default AuthShowcase