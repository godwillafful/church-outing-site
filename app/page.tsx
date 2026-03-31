"use client";

import { FormEvent, useEffect, useState } from "react";

export default function Home() {
  const eventDate = new Date("2026-07-25T09:00:00");

  const [timeLeft, setTimeLeft] = useState(getTimeLeft(eventDate));
  const [name, setName] = useState("");
  const [peopleCount, setPeopleCount] = useState("");
  const [phone, setPhone] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(eventDate));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage("");

    const formData = {
      name,
      peopleCount,
      phone,
    };

    try {
      const emailResponse = await fetch("https://formspree.io/f/mreokqyd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          people_count: formData.peopleCount,
          phone_number: formData.phone,
          message: `New summer outing registration:
Name: ${formData.name}
Number of people: ${formData.peopleCount}
Phone number: ${formData.phone}`,
        }),
      });

      if (!emailResponse.ok) {
        throw new Error("Email form submission failed.");
      }

      const whatsappMessage =
        `Hi, I want to register for the summer outing.%0A%0A` +
        `Name: ${formData.name}%0A` +
        `Number of people: ${formData.peopleCount}%0A` +
        `Phone number: ${formData.phone}`;

      window.open(
        `https://wa.me/447405211069?text=${whatsappMessage}`,
        "_blank"
      );

      setStatusMessage("Registration sent. WhatsApp is opening now.");
      setName("");
      setPeopleCount("");
      setPhone("");
    } catch (error) {
      setStatusMessage(
        "Something went wrong sending the form. Please try again."
      );
    } finally {
      setIsSending(false);
    }
  }

  return (
    <main className="min-h-screen bg-sky-50 text-slate-900">
      <section className="relative">
        <img
          src="/summer-poster.png"
          alt="Sureway Summer Outing Poster"
          className="w-full h-[500px] md:h-[650px] object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-black bg-white/75 px-6 py-3 rounded-xl">
              Sureway Assemblies of God
            </h1>

            <p className="mt-4 text-xl md:text-2xl font-semibold text-black bg-white/75 px-6 py-3 rounded-xl inline-block">
              Summer Outing • Portsmouth Beach • 25th July 2026
            </p>
          </div>
        </div>
      </section>

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
          📅 25th July 2026 • 📍 Portsmouth Beach
        </p>
      </section>

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
          <h2 className="text-3xl font-bold text-center">Register Now</h2>

          <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
            <input
              className="w-full border p-4 rounded-xl"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className="w-full border p-4 rounded-xl"
              placeholder="Number of People"
              type="number"
              min="1"
              value={peopleCount}
              onChange={(e) => setPeopleCount(e.target.value)}
              required
            />
            <input
              className="w-full border p-4 rounded-xl"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <button
              type="submit"
              disabled={isSending}
              className="w-full bg-sky-600 text-white py-4 rounded-xl font-bold disabled:opacity-60"
            >
              {isSending ? "Sending..." : "Register"}
            </button>
          </form>

          <a
            href="https://wa.me/447405211069?text=Hi%20I%20want%20to%20register%20for%20the%20summer%20outing"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-6 text-center bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg text-lg"
          >
            📱 Register on WhatsApp
          </a>

          {statusMessage && (
            <p className="text-center mt-4 text-sm text-slate-600">
              {statusMessage}
            </p>
          )}

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

function TimeBox({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-sky-100 rounded-2xl p-6">
      <div className="text-4xl font-extrabold">{value}</div>
      <div className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-600">
        {label}
      </div>
    </div>
  );
}

function getTimeLeft(targetDate: Date) {
  const now = new Date().getTime();
  const distance = targetDate.getTime() - now;

  if (distance <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / (1000 * 60)) % 60),
    seconds: Math.floor((distance / 1000) % 60),
  };
}