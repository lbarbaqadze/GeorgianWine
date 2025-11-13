

const path = process.env.NODE_ENV === 'production' ? '/GeorgianWine' : ''

const products = [
    {
        id: 1,
        name: 'აკაშენი',
        href: '#',
        price: '$48',
        imageSrc: `${path}/menu-images/akasheni.png`,
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        name: 'ალაზანი',
        href: '#',
        price: '$54',
        imageSrc: `${path}/menu-images/alazani.png`,
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 3,
        name: 'ხვანჭკარა',
        href: '#',
        price: '$89',
        imageSrc: `${path}/menu-images/khvanchkara2.png`,
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 4,
        name: 'ქინძმარაული',
        href: '#',
        price: '$35',
        imageSrc: `${path}/menu-images/kindzmarauli.png`,
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 5,
        name: 'ქისი',
        href: '#',
        price: '$64',
        imageSrc: `${path}/menu-images/kisi1.png`,
        imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
    },
    {
        id: 6,
        name: 'ქვევრის საფერავი',
        href: '#',
        price: '$39',
        imageSrc: `${path}/menu-images/qvevris.png`,
        imageAlt: 'Stack of 3 small drab green cardboard paper card refill boxes with white text.',
    },
    {
        id: 7,
        name: 'მწვანე',
        href: '#',
        price: '$50',
        imageSrc: `${path}/menu-images/mtsvane.png`,
        imageAlt: 'Brass scissors with geometric design, black steel finger holes, and included upright brass stand.',
    },
    {
        id: 8,
        name: 'ნაპარეული',
        href: '#',
        price: '$23',
        imageSrc: `${path}/menu-images/napareuli.png`,
        imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    },
    {
        id: 9,
        name: 'რქაწითელი',
        href: '#',
        price: '$39',
        imageSrc: `${path}/menu-images/rkatsiteli.png`,
        imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    },
    {
        id: 10,
        name: 'საფერავი',
        href: '#',
        price: '$45',
        imageSrc: `${path}/menu-images/saperavi.png`,
        imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    },
    {
        id: 11,
        name: 'შავკაპიტო',
        href: '#',
        price: '$29',
        imageSrc: `${path}/menu-images/shavkapito.png`,
        imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    },
    {
        id: 12,
        name: 'ცოლიკაური',
        href: '#',
        price: '$35',
        imageSrc: `${path}/menu-images/tsolikauri.png`,
        imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    },
]

export default function Products() {

    return (
        <>
            <div>
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Products</h2>

                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => (
                            <a key={product.id} href={product.href} className="group">
                                <img
                                    alt={product.imageAlt}
                                    src={product.imageSrc}
                                    className="w-full rounded-lg object-cover group-hover:opacity-75 max-md:aspect-3/5 aspect-3/5
                                hover:scale-[1.06] transition duration-300"
                                />
                                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            
        </>
    )
}
