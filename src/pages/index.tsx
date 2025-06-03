import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <section className="flex flex-col items-center justify-center h-screen px-4 text-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
          className="text-5xl font-bold tracking-widest mb-4"
        >
          MIKESYN
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg max-w-xl"
        >
          Estamos trabajando para ofrecerte una experiencia única en el desarrollo de software.
        </motion.p>
      </section>

      {/* <section className="px-6 py-12 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 border-b border-white pb-2">Proyectos</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {['SaaS 1', 'Landing 2', 'Otro Proyecto'].map((name, i) => (
            <motion.div
              key={name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black rounded-2xl p-4 shadow hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="text-sm">Descripción breve del proyecto.</p>
            </motion.div>
          ))}
        </div>
      </section> */}

      <footer className="text-center text-sm text-gray-500 py-6 border-t border-gray-700">
        &copy; {new Date().getFullYear()} Mikesyn. All rights reserved.
      </footer>
    </main>
  );
}