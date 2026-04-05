export default function Home() {
  return (
    <main className="min-h-screen bg-sky-50 text-slate-900">
      <section className="relative">
        <img
          src="/summer-poster.png"
          alt="Sureway Summer Outing Poster"
          className="w-full h-[420px] md:h-[560px] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-6 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold">
              Sureway Assemblies of God
            </h1>
            <p className="mt-4 text-xl md:text-2xl font-semibold">
              Summer Outing • Portsmouth Beach • 20th June 2026
            </p>
          </div>
        </div>
      </section>

      <section className="text-center py-16 px-6 bg-sky-600 text-white">
        <h1 className="text-5xl font-bold">
          Sureway Assemblies of God ☀️
        </h1>
        <p className="mt-4 text-xl">
          Summer Outing — Portsmouth Beach
        </p>
        <p className="mt-6 max-w-4xl mx-auto text-lg leading-8">
          Join us for an exciting inter-church gathering with Sureway Assemblies
          of God from Coventry, Northampton, Walsall, and Birmingham! Come
          together for a day full of fun, fellowship, and faith.
        </p>
        <p className="mt-4 text-lg font-semibold">
          📅 20th June 2026 • 📍 Portsmouth Beach
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold">🎉 Activities Include</h2>
          <ul className="mt-4 space-y-3 text-lg">
            <li>🍔 Delicious food & BBQ</li>
            <li>🏀⚽ Inter-church games</li>
            <li>🎶 Uplifting music & worship</li>
            <li>🤝 Fellowship and community connection</li>
            <li>✨ And many more exciting activities!</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold">💷 Pricing</h2>
          <p className="mt-4 text-lg">£10 per person</p>
          <p className="text-lg font-semibold">£20 per family</p>
          <p className="mt-6 text-base text-slate-600">
            All are welcome! Bring your family, friends, and neighbours for a
            memorable day of fun and fellowship.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-center">
            Register Now
          </h2>
          <form className="space-y-4 mt-6">
            <input
              className="w-full border p-4 rounded-xl"
              placeholder="Full Name"
            />
            <input
              className="w-full border p-4 rounded-xl"
              placeholder="Number of People"
            />
            <input
              className="w-full border p-4 rounded-xl"
              placeholder="Phone Number"
            />
            <button className="w-full bg-sky-600 text-white py-4 rounded-xl font-bold">
              Register
            </button>
          </form>

          <div className="text-center mt-8 text-sm text-slate-500 space-y-1">
            <p>Contact: 07404892928</p>
            <p>Contact: 07438354699</p>
            <p>Contact: 07405211069</p>
            <p>Email: surewayagcoventry@gmail.com</p>
          </div>
        </div>
      </section>
    </main>
  );
}