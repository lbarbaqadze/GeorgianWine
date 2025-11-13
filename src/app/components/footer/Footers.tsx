import Link from "next/link"

export default function Footer() {
    return (
        <footer className="w-full text-white px-10 py-12 flex flex-col gap-12">
            
            <div className="flex flex-col gap-3 max-w-md">
                <h1 className="text-3xl font-bold text-black">
                    ქართული ღვინოები
                </h1>
                <p className="text-gray-900 text-lg">
                    გაეცანი ჩვენს ვენახებს, გაიგე მათი უნიკალური არომატები და შეიგრძენი ქართული ღვინის სული.
                </p>
            </div>

            <div className="w-full flex flex-col lg:flex-row justify-between gap-12">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 w-full text-left">                    
                    <div className="flex flex-col gap-3">
                        <h2 className="font-bold text-xl text-black" >მენიუ</h2>
                        <Link href="/" className="text-black text-sm">მთავარი</Link>
                        <Link href="/about" className="text-black text-sm">ჩვენს შესახებ</Link>
                        <Link href="/wines" className="text-black text-sm">ღვინოები</Link>
                        <Link href="/contact" className="text-black text-sm">კონტაქტი</Link>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h2 className="font-bold text-xl text-black">კატეგორიები</h2>
                        <Link href="/red" className="text-black text-sm">წითელი ღვინოები</Link>
                        <Link href="/white" className="text-black text-sm">თეთრი ღვინოები</Link>
                        <Link href="/rose" className="text-black text-sm">ვარდისფერი ღვინოები</Link>
                        <Link href="/special" className="text-black text-sm">სპეციალური სერია</Link>
                    </div>
                
                    <div className="flex flex-col gap-3">
                        <h2 className="font-bold text-xl text-black">მომხმარებელი</h2>
                        <Link href="/faq" className="text-black text-sm">ხშირად დასმული კითხვები</Link>
                        <Link href="/shipping" className="text-black text-sm">მიწოდება</Link>
                        <Link href="/returns" className="text-black text-sm">გადამხდელობა</Link>
                        <Link href="/support" className="text-black text-sm">მხარდაჭერა</Link>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h2 className="font-bold text-xl text-black">კონტაქტი</h2>
                        <Link href="/contact" className="text-black text-sm">წერილი ჩვენთვის</Link>
                        <Link href="mailto:info@georgianwine.com" className="text-black text-sm">info@georgianwine</Link>
                        <Link href="tel:+995555123456" className="text-black text-sm">+995 555 12 34 56</Link>
                        <Link href="/visit" className="text-black text-sm">ვენახის ვიზიტი</Link>
                    </div>
                </div>
            </div>

            <div className="text-left text-gray-900 text-sm">
                © 2026 ქართული ღვინოები. ყველა უფლება დაცულია.
            </div>
        </footer>
    )
}
