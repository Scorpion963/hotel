import Link from "next/link";
import Nav from "./Nav";

export default async function Header() {
  return (
    <div className="hero-background text-gray-200">
      <div className="mx-auto pt-12 max-w-[1200px]">
        <Nav />
        <div className="w-full flex justify-center py-60">
          <HeroContent />
        </div>
      </div>
    </div>
  );
}

async function HeroContent() {
  return (
    <div className="flex flex-col items-center gap-3 text-center max-w-[900px] ">
      <div className="flex items-center w-full">
        <div className="w-1/3 bg-white h-1"></div>
        <div className="w-2/3 font-bold md:text-4xl text-2xl flex  justify-center">
          <h1>LUXURY HOTEL</h1>
        </div>
        <div className="w-1/3 bg-gray-200 h-1 "></div>
      </div>
      <div>
        <h1 className="font-bold md:text-6xl text-4xl">
          THAT WILL LET YOU STEP INTO CELEBRITY’S SLIPPERS
        </h1>
      </div>
      <div className="w-32"></div>
      <div>
        <p className="font-medium md:text-2xl text-sm">
          Each room at our hotel is decorated with great taste. Designers’
          solutions will impress you greatly. Each and every trifle is here for
          your comfort. Room service personnel is perfectly trained.
        </p>
      </div>
      <InstallButton />
    </div>
  );
}

export async function InstallButton() {
  return (
    <Link
      className="px-12 py-2 bg-black rounded-sm border-white border font-bold text-white text-center hover:bg-gray-900 transition-colors active:bg-gray-700 w-fit"
      href="https://www.youtube.com/"
    >
      INSTALL
    </Link>
  );
}
