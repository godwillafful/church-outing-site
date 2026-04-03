"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const eventDate = new Date("2026-06-27T09:00:00");

  const [timeLeft, setTimeLeft] = useState(getTimeLeft(eventDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(eventDate));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-sky-50 text-slate-900">

      {/* HERO SECTION WITH YOUR NEW IMAGE */}
      <section
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/new-poster.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative text-center px-6 max-w-4xl text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Sureway Assemblies of God
          </h1>

          <p className="mt-4 text-xl md:text-2xl font-semibold">
            Summer Outing • Portsmouth Beach • 27th June 2026
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="text-center py-16 px-6 bg-sky-600 text-white">
        <h1 className="text-5xl font-bold">Sureway Assemblies of God ☀️</h1>
        <p className="mt-4 text-xl">Summer Outing — Portsmouth Beach</p>
        <p className="mt-6 max-w-4xl mx-auto text-lg leading-8">
          Join us for an exciting inter-church gathering with Sureway
          Assemblies of God from Coventry, Northampton, Walsall, and
          Birmingham! Come together for a day full of fun, fellowship, and
          faith.
        </p>
        <p className="mt-4 text-lg font-semibold">
          📅 27th June 2026 • 📍 Portsmouth Beach
        </p>
      </section>

      {/* COUNTDOWN */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <h2 className="text-3xl font-bold">Countdown to the Outing ⏳</h2>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <TimeBox label="Days" value={timeLeft.days} />
            <TimeBox label="Hours" value={timeLeft.hours} />
            <TimeBox label="Minutes" value={timeLeft.minutes} />
            <TimeBox label="Seconds" value={timeLeft.seconds} />
          </div>
        </div>
      </section>

    </main>
  );
}

function TimeBox({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-sky-100 rounded-2xl p-6">
      <div className="text-4xl font-extrabold">{value}</div>
      <div className="mt-2 text-sm font-semibold uppercase text-slate-600">
        {label}
      </div>
    </div>
  );
}

function getTimeLeft(targetDate: Date) {
  const now = new Date().getTime();
  const distance = targetDate.getTime() - now;

  if (distance <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / (1000 * 60)) % 60),
    seconds: Math.floor((distance / 1000) % 60),
  };
}