import Hero from "@/app/components/hero/Hero"
import Contact from "@/app/components/contact-section/Contact"
import Form from "@/app/components/contact-form/Form"
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import Footer from "@/app/components/footer/Footers"

export default function Home() {
    return (
        <>
            <Hero
                title="გაგვიზიარეთ თქვენი აზრი"
                des="კონტაქტი ჩვენ გუნდთან მარტივია. მოგვწერეთ ნებისმიერ საკითხზე რჩევა, კითხვა ან იდეა."
                button="მენიუ"
            />

            <Contact />

            <Form />

            <div className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                        <div className="max-w-xl lg:max-w-lg">
                            <h2 className="text-4xl font-semibold tracking-tight text-red-900">
                                გამოიწერე ჩვენი ღვინის სიახლეები
                            </h2>
                            <p className="mt-4 text-lg text-gray-900">
                                გაიგე პირველად ახალი მოსავლის, დეგუსტაციების და სპეციალური შეთავაზებების შესახებ.
                                აღმოაჩინე ქართული ღვინის სამყაროს სურნელი და ამბავი ყოველ წერილში.
                            </p>
                            <div className="mt-6 flex max-w-md gap-x-4">
                                <label htmlFor="email-address" className="sr-only">
                                    ელფოსტის მისამართი
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="შეიყვანე შენი ელფოსტა"
                                    autoComplete="email"
                                    className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-[#be3f3f] sm:text-sm/6"
                                />
                                <button
                                    type="submit"
                                    className="flex-none rounded-md bg-[#b44242] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#c45858] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b73939]"
                                >
                                    გამოწერა
                                </button>
                            </div>
                        </div>

                        <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                            <div className="flex flex-col items-start">
                                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                    <CalendarDaysIcon aria-hidden="true" className="size-6 text-black" />
                                </div>
                                <dt className="mt-4 text-base font-semibold text-red-900">თვიური სიახლეები</dt>
                                <dd className="mt-2 text-base/7 text-gray-900">
                                    მიიღე ახალი ღვინოების, ღონისძიებების და ტრადიციების ამბები თვეში ერთხელ — ყოველგვარი ზედმეტის გარეშე.
                                </dd>
                            </div>
                            <div className="flex flex-col items-start">
                                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                    <HandRaisedIcon aria-hidden="true" className="size-6 text-black" />
                                </div>
                                <dt className="mt-4 text-base font-semibold text-red-900">არანაირი სპამი</dt>
                                <dd className="mt-2 text-base/7 text-gray-900">
                                    ჩვენ მხოლოდ ღვინოზე, ტრადიციებზე და განსაკუთრებულ შეთავაზებებზე გიყვებით — პატივს ვცემთ შენს დროს.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>

                <div
                    aria-hidden="true"
                    className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="aspect-1155/678 w-288.75 bg-linear-to-tr from-[#ff1b1b] to-[#ff0303] opacity-20"
                    />
                </div>
            </div>

            <Footer />

        </>
    )
}