import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-black text-white font-sans">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="opacity-80"
          src="/next.svg"
          alt="Personal logo"
          width={160}
          height={40}
          priority
        />

        <div className="text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Hi, I'm Quang Liêm
          </h1>
          <p className="mt-4 text-lg sm:text-xl max-w-2xl leading-relaxed text-gray-300">
            I build AI doctors to serve places where no doctors can reach.
            Founder of <span className="text-white font-semibold">PrimeForce</span>,
            researcher in explainable AI for blood cancer diagnosis, and a dreamer
            who once fixed remote-controlled cars in the Mekong Delta — now building systems to reimagine global healthcare.
          </p>

        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-white/10 transition-colors flex items-center justify-center bg-white text-black hover:bg-gray-300 font-medium text-sm sm:text-base h-10 sm:h-12 px-5"
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="rounded-full border border-white/20 transition-colors flex items-center justify-center hover:bg-white/10 font-medium text-sm sm:text-base h-10 sm:h-12 px-5"
            href="mailto:youremail@example.com"
          >
            Contact Me
          </a>
        </div>
      </main>

      <footer className="row-start-3 flex gap-4 flex-wrap items-center justify-center text-sm text-gray-400">
        <span>Made with ❤️ in Vietnam</span>
        <a
          className="hover:underline"
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Next.js
        </a>
      </footer>
    </div>
  );
}
