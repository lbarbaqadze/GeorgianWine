

const path = process.env.NODE_ENV === 'production' ? '/GeorgianWine' : ''

const people = [
    {
        name: 'გიორგი ბერიძე',
        role: 'მთავარი მეღვინე',
        imageUrl: `${path}/contact-images/img1.png`
    },
    {
        name: 'ნინო ქავთარაძე',
        role: 'სომელიე / დეგუსტაციის ხელმძღვანელი',
        imageUrl: `${path}/contact-images/img4.png.jpeg`
    },
    {
        name: 'დავით ჯაფარიძე',
        role: 'ვენახების მენეჯერი',
        imageUrl: `${path}/contact-images/img2.png`
    },
    {
        name: 'ეკატერინე აბულაძე',
        role: 'მარკეტინგის დირექტორი',
        imageUrl: `${path}/contact-images/img5.png.jpeg`
    },
    {
        name: 'თამარ მელიქიშვილი',
        role: 'ექსპორტის მენეჯერი',
        imageUrl: `${path}/contact-images/img6.png.jpeg`
    },
    {
        name: 'ლევან ცერცვაძე',
        role: 'ბრენდის ელჩი',
        imageUrl: `${path}/contact-images/img3.png.webp`,
    },
]

export default function Contact() {
    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-xl">
                    <h2 className="text-3xl font-semibold tracking-tight text-pretty text-red-900 sm:text-4xl">
                        ჩვენი ღვინის ოსტატები
                    </h2>
                    <p className="mt-6 text-lg/8 text-gray-900">
                        თითოეული ბოთლი ჩვენი გუნდის სიყვარულისა და ცოდნის ნაყოფია მეღვინეები, სომელიეები და ხელოსნები,
                        რომლებიც ქართულ ტრადიციას თანამედროვე სტანდარტით აგრძელებენ.
                    </p>
                </div>
                <ul
                    role="list"
                    className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
                >
                    {people.map((person) => (
                        <li key={person.name}>
                            <div className="flex items-center gap-x-6">
                                <img
                                    alt={person.name}
                                    src={person.imageUrl}
                                    className="size-16 rounded-full outline-1 -outline-offset-1 outline-white/10 object-cover"
                                />
                                <div>
                                    <h3 className="text-base/7 font-semibold tracking-tight text-red-900">{person.name}</h3>
                                    <p className="text-sm/6 font-semibold text-gray-900">{person.role}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
