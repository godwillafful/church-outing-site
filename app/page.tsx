export default function Home() {
  return (
    <main className="min-h-screen bg-sky-50 text-slate-900">
      <section className="relative">
        <img
          src="/summer-poster.jpg.png"
          alt="Sureway Summer Outing Poster"
          className="w-full max-h-[700px] object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <p className="tracking-[0.4em] text-sm font-semibold">
              SUREWAY ASSEMBLIES OF GOD COVENTRY
            </p>
            <h1 className="mt-4 text-5xl md:text-7xl font-extrabold">
              Summer Outing
            </h1>
            <p className="mt-4 text-2xl font-semibold">
              Saturday 25th July • Portsmouth
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6 py-16">
        <div className="bg-white rounded-3xl shadow-xl p-6">
          <h2 className="text-lg font-semibold">Venue</h2>
          <p className="text-3xl font-bold mt-2">Portsmouth</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-6">
          <h2 className="text-lg font-semibold">Side Attractions</h2>
          <ul className="mt-3 space-y-2 text-lg font-medium">
            <li>BBQ</li>
            <li>Inter Church Games</li>
          </ul>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-6">
          <h2 className="text-lg font-semibold">Pricing</h2>
          <p className="mt-3 text-xl">£10 per person</p>
          <p className="text-xl font-bold">£20 per family</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-white rounded-3xl shadow-2xl p-8 text-center">
          <h3 className="text-3xl font-bold">Register for the Outing</h3>
          <p className="mt-2 text-slate-600">
            Reserve your seat for a day of fellowship, food, and fun.
          </p>

          <form className="mt-6 space-y-4 max-w-xl mx-auto">
            <input
              className="w-full p-4 rounded-2xl border"
              placeholder="Full name"
            />
            <input
              className="w-full p-4 rounded-2xl border"
              placeholder="Number of people"
            />
            <input
              className="w-full p-4 rounded-2xl border"
              placeholder="Phone number"
            />
            <button className="w-full mt-2 px-8 py-4 rounded-2xl bg-sky-600 text-white font-semibold shadow-lg">
              Register
            </button>
          </form>

          <p className="mt-6 text-sm text-slate-500">
            For more info: +44 7951215046, +44 7427332696, +44 7404892928
          </p>
        </div>
      </section>
    </main>
  );
}