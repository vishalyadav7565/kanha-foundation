import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="relative h-screen flex items-center justify-center text-center text-white">
        
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1509099836639-18ba1795216d')",
          }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 px-6">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Together We Can Make a Difference
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Join us in bringing education, healthcare, and hope to
            underprivileged communities.
          </p>

          <div className="space-x-4">
            <button className="bg-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition">
              Donate Now
            </button>
            <button className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">
              Become Volunteer
            </button>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50 text-center">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">

    <div>
      <h3 className="text-4xl font-bold text-green-600">10K+</h3>
      <p className="mt-3 text-gray-600">Children Educated</p>
    </div>

    <div>
      <h3 className="text-4xl font-bold text-green-600">5K+</h3>
      <p className="mt-3 text-gray-600">Medical Camps Conducted</p>
    </div>

    <div>
      <h3 className="text-4xl font-bold text-green-600">20+</h3>
      <p className="mt-3 text-gray-600">Villages Supported</p>
    </div>

  </div>
</section>
<section className="py-20">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold mb-12">Our Projects</h2>

    <div className="grid md:grid-cols-3 gap-10">

      {/* Card 1 */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
          className="h-56 w-full object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-3">Education for All</h3>
          <p className="text-gray-600">
            Providing quality education to rural children.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
        <img
          src="https://images.unsplash.com/photo-1584515933487-779824d29309"
          className="h-56 w-full object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-3">Healthcare Support</h3>
          <p className="text-gray-600">
            Free medical camps for underprivileged communities.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
        <img
          src="https://images.unsplash.com/photo-1509099836639-18ba1795216d"
          className="h-56 w-full object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-3">Women Empowerment</h3>
          <p className="text-gray-600">
            Skill development and financial independence programs.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
    </>
  )
}