import { SiBattledotnet } from "react-icons/si";

const AUTH_URL = `https://eu.oauth.battle.net/authorize?response_type=code&client_id=ad05bb42365044978429c9960736350f&scope=wow.profile openid&redirect_uri=http://localhost:5000/api/v1/oauth/battlenet`;

const Login = () => {
  return (
    <main className="">
      <section className="relative mx-auto w-[350px] mt-8 bg-slate-900 rounded border-slate-700 border shadow text-center overflow-hidden">
        <header className="grayscale bg-[url('/images/wow-header.webp')] h-[150px] bg-cover bg-[center_top_-1rem]"></header>
        <div className="p-8">
          <h1 className="text-4xl mb-4 text-white">WoW Inspect</h1>
          <p className="mb-4 text-slate-300">
            WoW Inspect is an app that uses the battle.net API's to display
            World Of Warcraft profile data.
          </p>

          <p className="mb-8 text-slate-300">
            In order to see your profile, you need to login with your battle.net
            account.
          </p>

          <a
            href={AUTH_URL}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-700 text-white rounded w-full hover:bg-blue-600 active:opacity-80 uppercase border border-blue-600 shadow"
          >
            <SiBattledotnet className="w-6 h-6" />
            Log in with Battle.net
          </a>
        </div>
      </section>
    </main>
  );
};

export default Login;
