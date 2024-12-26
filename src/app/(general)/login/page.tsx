import { GoogleIcon } from "emebedme/components/icons/GoogleIcon";
import { signIn } from "../../auth";
import Link from "next/link";
import Summary from "emebedme/components/landing/Summary";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center md:items-start gap-2">
      <Summary />
      <button
        onClick={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <div className="flex gap-2">
          <GoogleIcon />
          <div>Continue with Google </div>
        </div>
      </button>

      <div className="flex justify-end w-[18%]">
        <Link href="/"> Back</Link>
      </div>
    </div>
  );
}
