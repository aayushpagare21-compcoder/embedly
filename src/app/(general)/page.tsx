import Summary from "emebedme/components/landing/Summary";
import Image from "next/image";
import { getAuthUser } from "emebedme/services/getAuthUser";
import getBotForAuthenticatedUser from "emebedme/services/getBotForAuthenticatedUser";
import { signOut } from "emebedme/auth";

export default async function LandingPage() {
  // Check if the user is authenticated.
  const user = await getAuthUser();

  //Check if the user has created the bot
  let bot = undefined;
  if (user) {
    bot = await getBotForAuthenticatedUser(user?.id);
  }

  const userLoggedIn = !!user;
  const userHasBot = !!bot;

  /*
    if user is logged in and has created a bot, action button must redirect him to bot.
    if user is logged in and has not created a bot, action button must redirect him to training page.
    if user is not logged in, action button must redirect him to login page.
  */
  const redirectUrl = userLoggedIn
    ? userHasBot
      ? `/embed/${bot?.id}`
      : "/training"
    : "/login";

  const btnText = userLoggedIn
    ? userHasBot
      ? "Your Bot"
      : "Create Bot"
    : "Login";

  return (
    <div className="flex gap-4 w-full flex-col items-center md:items-start">
      {userLoggedIn && (
        <button
          className="absolute top-4 right-4 md:top-8 md:right-8"
          onClick={async () => {
            "use server";
            await signOut({ redirectTo: "/" });
          }}
        >
          Logout
        </button>
      )}
      <Summary />
      <div className="flex flex-col sm:flex-row gap-2">
        <a
          className="rounded-full w-[60vw] md:w-[80%] border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          href={redirectUrl}
        >
          <Image
            className="dark:invert"
            src="/vercel.svg"
            alt="Vercel logomark"
            width={20}
            height={20}
          />
          {btnText}
        </a>
        <a
          className="rounded-full w-[60vw] md:w-[80%] border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          href="/instructions"
        >
          Read instructions
        </a>
      </div>
    </div>
  );
}
