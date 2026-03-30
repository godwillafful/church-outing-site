export default function Home() {
  return (
    <main className="min-h-screen bg-sky-50 text-slate-900">
      <section className="text-center py-12 px-6 bg-sky-600 text-white">
        <h1 className="text-5xl font-bold">Sureway Assemblies of God ☀️</h1>
        <p className="mt-4 text-xl">Summer Outing — a day of fellowship, fun, games and food</p>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-bold">📍 Venue</h2>
          <p>Portsmouth Beach</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-bold">💷 Price</h2>
          <p>£10 per person</p>
          <p>£20 per family</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-bold">🎉 Activities</h2>
          <p>BBQ, Inter Church Games, Worship, Fellowship</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-center">Register Now</h2>
          <form className="space-y-4 mt-6">
            <input className="w-full border p-4 rounded-xl" placeholder="Full Name" />
            <input className="w-full border p-4 rounded-xl" placeholder="Number of People" />
            <input className="w-full border p-4 rounded-xl" placeholder="Phone Number" />
            <button className="w-full bg-sky-600 text-white py-4 rounded-xl font-bold">
              Register
            </button>
          </form>

          <div className="text-center mt-6 text-sm text-slate-500 space-y-1">
            <p>Contact: 07404892928</p>
            <p>Contact: 07438354699</p>
            <p>Contact: 07405211069</p>
          </div>
        </div>
      </section>
    </main>
  );
}
