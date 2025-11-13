import Link from "next/link"


export default function Section() {

    const path = process.env.NODE_ENV === 'production' ? '/GeorgianWine' : ''

    return (
        <div className="relative isolate overflow-hidden bg-[#864c4c]">
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

            <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div className="sm:max-w-lg">
                        <h1 className="text-3xl font-bold tracking-tight text-red-200 sm:text-4xl">
                            აღმოაჩინე ქართული ღვინის უნიკალური სამყარო
                        </h1>
                        <p className="mt-4 text-red-50">
                            ჩვენი ახალი ქართული ღვინოები მოგცემს სრულ თავისუფლებას და სუფთა სიამოვნების გამოცდილებას,
                            რომელიც გულგრილ სამყაროში სულის სითბოს გაგრძნობინებთ.
                        </p>
                    </div>
                    <div>
                        <div className="mt-10">
                            <div
                                aria-hidden="true"
                                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                            >
                                <div className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:translate-x-8 lg:-translate-y-1/2">
                                    <div className="flex items-center space-x-6 lg:space-x-8">
                                        <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                <img
                                                    alt=""
                                                    src={`${path}/home-images/alazani.png`}
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                            <div className="h-68 w-25 overflow-hidden rounded-lg">
                                                <img
                                                    alt=""
                                                    src={`${path}/home-images/khvanchkara.png`}
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-60 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    alt=""
                                                    src={`${path}/home-images/kindzmarauli.png`}
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                            <div className="h-60 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    alt=""
                                                    src={`${path}/home-images/kisi.png`}
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                            <div className="h-60 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    alt=""
                                                    src={`${path}/home-images/marani.png`}
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-60 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    alt=""
                                                    src={`${path}/home-images/rkatsiteli.png`}
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                            <div className="h-60 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    alt=""
                                                    src={`${path}/home-images/shavkapito.png`}
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Link
                                href="/pages/about"
                                className="inline-block rounded-md border border-transparent bg-red-900 px-8 py-3 text-center font-medium text-white hover:bg-red-400
                                transition duration-300"
                            >
                                ჩვენს შესახებ
                            </Link>
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

        </div>
    )
}
