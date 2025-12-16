import Image from "next/image";
import { Leaf, Mail, MapPin, Phone, ShieldCheck, Truck } from "lucide-react";
import ContactFormSection from "../components/contact_form";
import contactimg from "../../public/images/dry_fruit_contact_sec.webp";
import { JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <main className="min-h-screen mt-20 bg-white text-black p-6 pt-32">
      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-14 text-green-700">
            Premium Dry Fruits & Organic Products
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Fresh, pure and hand-picked quality dry fruits delivered across Pakistan.
            Export quality products with guaranteed freshness.
          </p>

          <div className="mt-6 space-y-3 text-gray-800">
            <p className="flex items-center gap-2">
              <MapPin size={20} stroke="black" fill="none" />
              <strong>Address:</strong> Karachi, Pakistan
            </p>
            <p className="flex items-center gap-2">
              <Phone size={20} stroke="black" fill="none" />
              <strong>Phone:</strong> 03212076322
            </p>
            <p className="flex items-center gap-2">
              <Mail size={20} stroke="black" fill="none" />
              <strong>Email:</strong> yourbrand@example.com
            </p>
          </div>
          
          <button 
            className="mt-6 px-6 py-3 bg-green-700 text-white rounded-xl text-lg hover:bg-green-800 transition"
            onClick={() => console.log("Shop Now clicked")}
            type="button"
          >
            Shop Now
          </button>
        </div>

        {/* IMAGE SECTION */}
        <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-xl border border-green-200">
          <Image
            src={contactimg}
            alt="Dry Fruits"
            fill
            className="object-cover"
            priority={false}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="max-w-6xl mx-auto mt-20 grid md:grid-cols-3 gap-8 text-center">
        <div className="p-6 border border-green-300 rounded-xl shadow-sm hover:shadow-lg transition bg-white">
          <Leaf className="mx-auto mb-3" size={40} stroke="black" fill="none" />
          <h3 className="text-xl font-semibold text-green-700">100% Organic</h3>
          <p className="mt-2 text-gray-600">No chemicals, no mixing — guaranteed purity.</p>
        </div>

        <div className="p-6 border border-green-300 rounded-xl shadow-sm hover:shadow-lg transition bg-white">
          <ShieldCheck className="mx-auto mb-3" size={40} stroke="black" fill="none" />
          <h3 className="text-xl font-semibold text-green-700">Fresh Stock</h3>
          <p className="mt-2 text-gray-600">Daily fresh stock directly from suppliers.</p>
        </div>

        <div className="p-6 border border-green-300 rounded-xl shadow-sm hover:shadow-lg transition bg-white">
          <Truck className="mx-auto mb-3" size={40} stroke="black" fill="none" />
          <h3 className="text-xl font-semibold text-green-700">Nationwide Delivery</h3>
          <p className="mt-2 text-gray-600">Fast delivery all over Pakistan.</p>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="max-w-6xl mx-auto mt-20 mb-20">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-700">Our Location</h2>
        <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl border-2 border-green-400">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=66.990%2C24.860%2C67.030%2C24.900&layer=mapnik"
            className="w-full h-full"
            loading="lazy"
            title="Our Location Map"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <ContactFormSection />
    </main>
  );
}