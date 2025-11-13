import Hero from "@/app/components/hero/Hero"
import Footer from "@/app/components/footer/Footers"

export default function Home() {

    const path = process.env.NODE_ENV === 'production' ? '/GeorgianWine' : ''

    const data = [
        {
            name: 'ვაზის ჯიშები',
            description: 'გაიცანი ქართული ვაზის ათასობით სახეობა და მათი უნიკალური თვისებები',
            imageSrc: `${path}/about-images/vazebi.jpg`,
            imageAlt: 'ვენახში სხვადასხვა ჯიშის ყურძენი მზის შუქზე',
            href: '#',
        },
        {
            name: 'ქვევრის ხელოვნება',
            description: 'შეიგრძენი საუკუნოვანი ტექნიკა, რომლის მეშვეობითაც ღვინო იცლის სუფთა არომატს',
            imageSrc: `${path}/about-images/qvevri.jpg`,
            imageAlt: 'ქვევრში ღვინის დაყენების პროცესი',
            href: '#',
        },
        {
            name: 'გემოებისა და სუნამოების შემოთავაზება',
            description: 'აღმოაჩინე წითელი, თეთრი და ვარდისფერი ღვინოების მდიდარი გემოების პალიტრა',
            imageSrc: `${path}/about-images/gvino.jpg`,
            imageAlt: 'ღვინის დეგუსტაცია ბოკალებით და ტოსტებით',
            href: '#',
        },
    ]


    return (
        <>
            <Hero title="გაგაცნობთ ქართული ღვინის ნამდვილ გემოებს"
                des="საუკუნეების ტრადიცია, ბუნებრივი წარმოება და თანამედროვე ხედვა ერთმანეთს ხვდება აღმოაჩინეთ ღვინო, რომელიც ნამდვილად ამბავს ქართულ მიწასა და ადამიანზე."
                button="მენიუ"
                styles={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url(${path}/about-images/image1.webp)`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}
            />

            <div className="bg-[rgb(252, 231, 231);] py-18">
                <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-center text-base/7 font-semibold text-gray-900">გემოები ვენახიდან</h2>
                    <p className="mx-auto mt-2 max-w-lg text-center text-3xl font-semibold tracking-tight text-balance text-red-700 sm:text-4xl">
                        ყველაფერი, რაც გჭირდება ქართული ღვინის სამყაროს აღმოჩენისთვის
                    </p>

                    <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                        <div className="relative lg:row-span-2">
                            <div className="absolute inset-px rounded-lg bg-[#864c4c] lg:rounded-l-4xl" />
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                    <p className="mt-2 text-xl italic font-medium tracking-tight text-red-200 max-lg:text-center">ვენახები</p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-red-50 max-lg:text-center">
                                        ქართული ვენახების სილამაზე და უნიკალური ყურძნის ჯიშები, რომლებიც ყოველ წვეთ ღვინოში იგრძნობა.
                                    </p>
                                </div>
                                <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                                    <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden  border-x-[3cqw] border-t-[3cqw] border-red-900 bg-gray-900 outline outline-white/20">
                                        <img
                                            alt="Georgian vineyard"
                                            src={`${path}/about-images/images2.jpg`}
                                            className="size-full object-cover object-top"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 lg:rounded-l-4xl" />
                        </div>

                        <div className="relative max-lg:row-start-1">
                            <div className="absolute inset-px rounded-lg bg-[#864c4c] max-lg:rounded-t-4xl" />
                            <div className="relative flex h-full gap-1 flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                    <p className="mt-2 text-lg font-medium tracking-tight text-red-200 max-lg:text-center">წითელი ღვინოები</p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-red-50 max-lg:text-center">
                                        ხანგრძლივი წარმოების პროცესი, დახვეწილი არომატები და ნამდვილი ქართული ტრადიცია.
                                    </p>
                                </div>
                                <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                                    <img
                                        alt="Red wine glass"
                                        src={`${path}/about-images/redwine1.jpg`}
                                        className="w-full max-lg:max-w-xs rounded-lg"
                                    />
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-t-4xl" />
                        </div>

                        <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                            <div className="absolute inset-px rounded-lg bg-[#864c4c]" />
                            <div className="relative flex h-full gap-1 flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                    <p className="mt-2 text-lg font-medium tracking-tight text-red-200 max-lg:text-center">თეთრი ღვინოები</p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-red-50 max-lg:text-center">
                                        მსუბუქი, სუფთა არომატებით და იდეალური თბილი დღეებისთვის.
                                    </p>
                                </div>
                                <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                                    <img
                                        alt="Red wine glass"
                                        src={`${path}/about-images/whitewine.webp`}
                                        className="w-full max-lg:max-w-xs rounded-lg"
                                    />
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15" />
                        </div>

                        <div className="relative lg:row-span-2">
                            <div className="absolute inset-px rounded-lg bg-[#864c4c] max-lg:rounded-b-4xl lg:rounded-r-4xl" />
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                    <p className="mt-2 text-lg font-medium tracking-tight text-red-200 max-lg:text-center">სპეციალური სერია</p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-red-50 max-lg:text-center">
                                        შეზღუდული სერია, შერჩეული ყურძენითა და კლასიკური ქვევრის ტექნოლოგიით.
                                    </p>
                                </div>
                                <div className="relative min-h-120 w-full grow">
                                    <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900/60 outline outline-white/10">
                                        <div className="flex bg-gray-900 outline outline-white/5">
                                            <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                                                <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                                                    თეთრი ღვინო
                                                </div>
                                                <div className="border-r border-gray-600/10 px-4 py-2">შავი ღვინო</div>
                                            </div>
                                        </div>
                                        <div className="px-6 pt-6 pb-14 text-red-50">სუფრის მშრალი ღვინოები: წინანდალი (თეთრი), გურჯაანი (თეთრი), ნაფარეული (თეთრი),
                                            ბახტრიონი (თეთრი), მანავი (თეთრი), ვაზისუბანი (თეთრი), ციცქა (თეთრი), ცოლიკაური (თეთრი), რქაწითელი (თეთრი),
                                            ტიბაანი (თეთრი), თელავი (თეთრი), სვირი (თეთრი), სამება (თეთრი), თელიანი (წითელი), ნაფარეული (წითელი),
                                            ყვარელი (წითელი), მუკუზანი (წითელი).</div>
                                    </div>
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#864c4c] relative isolate overflow-hidden">
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
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none">
                        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-x-6">
                            {data.map((callout) => (
                                <div key={callout.name} className="group relative">
                                    <img
                                        alt={callout.imageAlt}
                                        src={callout.imageSrc}
                                        className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                                    />
                                    <h3 className="mt-6 text-sm text-red-300">
                                        <a href={callout.href}>
                                            <span className="absolute inset-0" />
                                            {callout.name}
                                        </a>
                                    </h3>
                                    <p className="text-base font-thin text-red-50">{callout.description}</p>
                                </div>
                            ))}
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

            <section className="relative isolate overflow-hidden bg-[rgb(112,56,60)] px-6 py-24 sm:py-32 lg:px-8">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-red-700),transparent)] opacity-12" />
                <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-[#913939] shadow-xl ring-1 shadow-red-500/5 ring-white/5 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <img
                        alt="Georgian Wine Logo"
                        src={`${path}/logo1.png`}
                        className="mx-auto h-12"
                    />

                    <figure className="mt-10">
                        <blockquote className="text-center text-xl/8 font-semibold text-red-200 sm:text-2xl/9">
                            <p>
                                “ქართული ღვინოები გადმოსცემენ ჩვენი ვენახების სულიერებას და საუკუნეების ტრადიციას. თითოეული წვეთი სუფთა არომატითა და გულწრფელი სიყვარულითაა გამორჩეული.”
                            </p>
                        </blockquote>

                        <figcaption className="mt-10">
                            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                                <div className="font-semibold text-white">ლაშა ბარბაქაძე</div>
                                <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-white">
                                    <circle r={1} cx={1} cy={1} />
                                </svg>
                                <div className="text-red-50">ვენახის ექსპერტი</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </section>

            <Footer />

        </>
    )
}