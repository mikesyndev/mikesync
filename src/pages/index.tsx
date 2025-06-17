import { motion } from "framer-motion";
import  HeroSection  from "./components/HeroSection";
import CanvasWave from "./components/CanvasWave";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SiCss3, SiMysql, SiJavascript, SiLaravel, SiGit, SiBootstrap, SiEmbarcadero, SiReact, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "CSS", icon: <SiCss3 className="text-3xl text-blue-600" /> },
  { name: "SQL", icon: <SiMysql className="text-3xl text-blue-400" /> },
  { name: "Javascript", icon: <SiJavascript className="text-3xl text-yellow-400" /> },
  { name: "Laravel", icon: <SiLaravel className="text-3xl text-red-600" /> },
  { name: "Git", icon: <SiGit className="text-3xl text-orange-500" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-3xl text-purple-500" /> },
  { name: "Delphi", icon: <SiEmbarcadero className="text-3xl text-red-500" /> },
  { name: "React", icon: <SiReact className="text-3xl text-cyan-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-3xl text-teal-400" /> },
];

const proyects = [
  {
    title: "My dance academy",
    description: "Proyecto de una academia de baile con Laravel + Livewire, React y TypeScript.",
    image: "/images/dance-academy.png",
    link: "https://mydanceacademy-uwcw.onrender.com/"
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <section className="flex flex-col items-center justify-center h-screen px-4 text-center">
          <HeroSection />
      </section>

      {/* Seccion de about */}
      <section className="px-6 py-12 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 border-b border-white pb-2">Sobre mí</h2>
        <p className="text-gray-300">
          Soy Michael Fabian Rojas Sabogal, desarrollador de software colombiano con enfoque en soluciones robustas y adaptables. Trabajo con Java (Spring Boot), Laravel + Livewire, React con TypeScript, y me especializo en construir arquitecturas seguras (JWT, cookies HttpOnly/Secure), interfaces eficientes y sistemas modulares que escalan.
        </p>
      </section>

      <section className="flex flex-col items-center justify-center bg-black text-white px-4 text-center">
          {/* otros elementos arriba */}
          <div className="mt-10 w-full flex justify-center">
              <CanvasWave />
          </div>
      </section>

      {/* Sección de habilidades */}
      <section className="px-6 py-12 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 border-b border-white pb-2">Habilidades</h2>
        <p className="text-gray-300 m-2">🎯 Creo soluciones pensadas desde la experiencia real del usuario: desde apps de contabilidad personal, hasta plataformas educativas y proyectos creativos como microblogs no sociales. Me apasiona transformar ideas en productos funcionales, reutilizables y fáciles de mantener.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map(({ name, icon }) => (
            <motion.div
              key={name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black rounded-lg p-4 shadow hover:shadow-xl transition duration-300 flex flex-col items-center"
            >
              <div className="mb-2">{icon}</div>
              <h3 className="text-lg font-semibold">{name}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sección de proyectos */}
      <section className="px-6 py-12 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 border-b border-white pb-2">Proyectos</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {proyects.map(({ title, description, image, link }) => (
            <Card className="w-full max-w-sm py-2 px-4 bg-white hover:bg-gray-500 hover:text-white transition-colors duration-300" key={title}>
              <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>
                  {description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src={image}
                  alt="My dance academy project"
                  className="w-full h-auto rounded-lg"/>
              </CardContent>
              <CardFooter className="flex-col gap-2">
                <Button asChild>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    Ver proyecto
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Sección de contacto */}
      <section className="px-6 py-12 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 border-b border-white pb-2">Contacto</h2>
        <p className="text-gray-300 mb-4">Si deseas colaborar o simplemente charlar, no dudes en contactarme.</p>
        <Button asChild>
          <a href="mailto:fabianrojas.sab@gmail.com" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
            Enviar un correo
          </a>
        </Button>
      </section>

      <footer className="text-center text-sm text-gray-500 py-6 border-t border-gray-700">
        &copy; 2025 Mikesyn. All rights reserved.
      </footer>
    </main>
  );
}