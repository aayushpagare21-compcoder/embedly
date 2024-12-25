import Summary from "emebedme/components/landing/Summary";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex gap-4 w-full flex-col items-center md:items-start">
      <Summary />
      <div className="flex flex-col sm:flex-row gap-2">
        <a
          className="rounded-full w-[60vw] md:w-[80%] border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          href="/login"
        >
          <Image
            className="dark:invert"
            src="/vercel.svg"
            alt="Vercel logomark"
            width={20}
            height={20}
          />
          Create now
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
