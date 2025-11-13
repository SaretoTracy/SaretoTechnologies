
import client2 from "../assets/eltera.webp";
import client3 from "../assets/flexpesa.jpeg";
import client4 from "../assets/express care.png";
import client1 from "../assets/sundown.svg"

export default function Clients() {
  const clients = [client1, client2, client3, client4];

  return (
    <section id="clients" className="space-y-6 mt-10">
      <h3 className="text-2xl font-semibold">Clients</h3>
      <div className="w-20 h-[2px] bg-accent mb-6"></div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-items-center">
        {clients.map((logo, index) => (
          <div
            key={index}
            className="opacity-70 hover:opacity-100 transition-transform hover:scale-105"
          >
            <img
              src={logo}
              alt={`Client ${index + 1}`}
              className="max-h-16 object-contain grayscale hover:grayscale-0 transition"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
