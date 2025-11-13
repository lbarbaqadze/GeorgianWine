import { PercentBadgeIcon, CloudArrowUpIcon, TruckIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'სახელმწიფო რეგისტრირებული ხარისხი',
    description:
      'ჩვენი ყველა ღვინო გაივლის ხარისხის კონტროლს, რათა დარწმუნდეთ ნატურალური და უსაფრთხო პროდუქტის მიღებაში.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'გემოების მრავალფეროვნება',
    description:
      'წითელი, თეთრი, ვარდისფერი და ქვევრის საფერავი — ჩვენთან ყველასთვის მოიძებნება იდეალური ბოთლი.',
    icon: ShoppingBagIcon,
  },
  {
    name: 'სპეციალური შეთავაზებები',
    description:
      'განსხვავებული სერია, დეგუსტაცია და სპეციალური აქციები ჩვენი მუდმივი მომხმარებლებისთვის.',
    icon: PercentBadgeIcon,
  },
  {
    name: 'სწრაფი მიწოდება',
    description:
      'ჩვენი პროდუქცია სწრაფად მიეწოდება თქვენს კარს — უსაფრთხოდ შეფუთული და ტემპერატურის კონტროლით.',
    icon: TruckIcon,
  },
]

export default function Section() {
  return (
    <div className="bg-[#864c4c] py-24 relative isolate overflow-hidden">
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
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-red-50">ჩვენი მენიუ</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-red-300 sm:text-5xl lg:text-balance">
            აღმოაჩინეთ ქართული ღვინოების ნაკრები
          </p>
          <p className="mt-6 text-lg/8 text-red-50">
            თითოეული ბოთლი გამოირჩევა ნატურალური წარმოებით, უნიკალური გემოთი და საუკუნოვანი ტრადიციებით.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-red-300">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-red-900">
                    <feature.icon aria-hidden="true" className="size-6 text-" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-red-50">{feature.description}</dd>
              </div>
            ))}
          </dl>
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
  )
}
