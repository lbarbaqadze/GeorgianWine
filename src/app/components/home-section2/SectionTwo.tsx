const features = [
  { name: 'მწყობრი წარმოშობა', description: 'ქართული ვენახების გულისყურით, სადაც ღვინო საუკუნეების ტრადიციას ინარჩუნებს.' },
  { name: 'მასალა', description: 'ქვევრისა და ბუნებრივი ხის კომბინაცია, რომელიც მაცივრებისთვის ან ბუნებრივ პირობებში იდეალურია.' },
  { name: 'ზომები', description: 'სტანდარტული ბოთლი: 0.75 ლიტრი, შესაფერისი ყველა ტიპის სადღეგრძელოსთვის.' },
  { name: 'დამუშავება', description: 'ხელით დამზადებული, ბუნებრივი პროცედურებით დასრულებული.' },
  { name: 'საჩუქარი შეიცავს', description: 'ერთი ბოთლი ქართული ღვინო, სუნამოანი ეტიკეტი და ინფორმაციასთან დაკავშირებული დეტალები.' },
  { name: 'შენიშვნები', description: 'პროდუქტი მზადდება მხოლოდ ბუნებრივი ინგრედიენტებით. გემო და ფერი შეიძლება განსხვავდებოდეს ვენახების მიხედვით.' },
]

export default function SectionTwo() {

  const path = process.env.NODE_ENV === 'production' ? '/GeorgianWine' : ''

  return (
    <div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-red-700 sm:text-4xl">ტექნიკური მახასიათებლები</h2>
          <p className="mt-4 text-gray-900 font-thin">
            თითოეული ბოთლი ქართული ღვინოები ვენახების გულისყურით მზადდება, რაც საშუალებას გაძლევთ შეიგრძნოთ ქართული მიწის უნიკალური არომატი, სუნი და გემო.  
            ბუნებრივი პროცესები ინარჩუნებს ღვინის სისუფთავეს და ხდის მას განსაკუთრებულად ნაირსახეობრივს.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-red-300 pt-4">
                <dt className="font-medium text-red-700">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-900">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src={`${path}/home-images/wine.jpg`}
            className="rounded-lg bg-gray-100"
          />
          <img
            src={`${path}/home-images/wine4.jpg.webp`}
            className="rounded-lg bg-gray-100"
          />
          <img
            src={`${path}/home-images/wine3.jpg.webp`}
            className="rounded-lg bg-gray-100"
          />
          <img
            src={`${path}/home-images/wine2.jpg`}
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  )
}
