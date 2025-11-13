import Footer from "@/app/components/footer/Footers"
import Hero from "@/app/components/hero/Hero"
import Products from "@/app/components/products/Products"
import Section from "@/app/components/menu-section/Section"

export default function Home() {

    const path = process.env.NODE_ENV === 'production' ? '/GeorgianWine' : ''

    const stats = [
        { id: 1, name: 'ბოთლები დღეში', value: '1,200' },
        { id: 2, name: 'ვენახები ქონება', value: '350 ჰა' },
        { id: 3, name: 'ახალი მომხმარებელი წლიურად', value: '5,000' },
    ]

    return (
        <>
            <Hero title="ქართული ღვინოების საუკეთესო არჩევანი შენთვის"
                des="გაიცანი წითელი, თეთრი და ვარდისფერი ღვინოები, შექმნილი ბუნებრივი ტრადიციებისა და თანამედროვე ხედვის სინთეზით."
                button="მენიუ"
                styles={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url(${path}/menu-images/bg.webp)`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}
            />

            <Section />

            <Products />

            <div className="bg-[#864c4c] py-24 sm:py-32 relative isolate overflow-hidden">
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
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                        {stats.map((stat) => (
                            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                                <dt className="text-base/7 text-red-50">{stat.name}</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-red-300 sm:text-5xl">{stat.value}</dd>
                            </div>
                        ))}
                    </dl>
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
    )
}