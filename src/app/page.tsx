'use client'
import Hero from "./components/hero/Hero";
import Link from "next/link";
import Section from "./components/home-section/Section";
import SectionTwo from "./components/home-section2/SectionTwo";
import Footer from "./components/footer/Footers";

export default function Home() {

  const path = process.env.NODE_ENV === 'production' ? '/GeorgianWine' : ''

  return (
    <>

      <Hero title="ქართული ღვინო ბუნებრივი, ავთენტური, ცოცხალი"
        des="გაგაცნობთ ქართულ ღვინოს ახალ თაობაში ნატურალური წარმოება, ძველი ტრადიციები და თანამედროვე ხედვა ერთ სივრცეში."
        button="მენიუ"
      />

      <div className="w-full h-auto px-10 py-20 flex flex-col lg:flex-row justify-center items-center gap-10
      max-md:py-10">
        <div>
          <img
            src={`${path}/home-images/saperavi.png`}
            className="w-64 sm:w-80 md:w-[320px] h-auto rotate-5"
          />
        </div>
        <div className="flex flex-col gap-8 max-w-2xl text-center lg:text-left">
          <h1 className="text-xl sm:text-2xl md:text-3xl text-red-700 italic font-bold leading-tight">
            განაახლე შენი გამოცდილება ღვინოში!
          </h1>

          <p className="text-base sm:text-sm md:text-lg font-thin text-gray-900 leading-relaxed">
            ჩვენი ქართული ღვინოები შექმნილია საუკუნეების ტრადიციისა და ქვევრის ხელოვნების სინთეზით.
            თითოეული ბოთლი ატარებს ვენახის სურნელს, ქართული მიწის ენერგიასა და ხელოსნების სიყვარულს —
            რომ ბუნებრივი არომატი და გემო მაქსიმალურად შენარჩუნდეს.
            აქ შეხვდებით ვენახების მრავალფეროვან სილამაზეს, ღვინის უნიკალურ ტონებსა და სიღრმეს,
            რომელიც თითოეულ წვეთში იგრძნობა. ეს არ არის მხოლოდ სასმელი —
            ეს გამოცდილებაა, რომელიც მოგიყვებათ ქართული მიწის ისტორიას, სიყვარულს და ღვინის ხელოვნებას.
          </p>

          <Link
            href="/menu"
            className="bg-red-800 hover:bg-red-400 transition duration-300
                 w-fit text-white px-10 py-2 rounded-xl mx-auto lg:mx-0"
          >
            მენიუ
          </Link>
        </div>
        <div>
          <img
            src={`${path}/home-images/akasheni.png`}
            className="w-64 sm:w-80 md:w-[320px] h-auto -rotate-5"
          />
        </div>
      </div>

      <Section />

      <SectionTwo />

      <div className="bg-[#864c4c] relative isolate h-auto overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[rgb(255,181,186)] to-[#ff8282] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8 [@media(max-width:639px)]:p-3">
          <div className="relative isolate overflow-hidden bg-red-950 px-6 pt-16 after:pointer-events-none after:absolute after:inset-0 after:inset-ring after:inset-ring-white/10 sm:rounded-3xl sm:px-16 after:sm:rounded-3xl md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0
          [@media(max-width:639px)]:rounded-xl">
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            >
              <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#ff7686" />
                  <stop offset={1} stopColor="#ff8488" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-semibold tracking-tight text-balance text-red-200 sm:text-4xl">
                გამოიცანით ქართული ღვინის საიდუმლო
              </h2>
              <p className="mt-6 text-sm/8 text-pretty text-red-50">
                გაეცანით ჩვენი ვენახების სილამაზეს და ყურძნის უნიკალურ არომატს.
                დაგვირეკეთ ან მოგვწერეთ, რომ დაგეგმოთ ვიზიტი და თავად შეიგრძნოთ ქართული ღვინის სული.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <Link
                  href="#"
                  className="rounded-md bg-red-400 px-3.5 py-2.5 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-red-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white
                  transition duration-300"
                >
                  {' '}
                  კონტაქტი{' '}
                </Link>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <img
                alt="App screenshot"
                src={`${path}/home-images/images1.jpg`}
                width={1824}
                height={1080}
                className="absolute top-0 left-0 w-228 max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[rgb(255,181,186)] to-[#ff8282] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>

      <Footer />

    </>
  );
}
