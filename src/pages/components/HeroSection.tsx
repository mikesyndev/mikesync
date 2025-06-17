import { motion } from "framer-motion";
import { FaHeart, FaRandom, FaPlay, FaExpand } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { useState } from "react";

const slides = [
    "/images/foto1.png",
    "/images/foto2.png",
]

const informationSong = [
    {
        title: "Michael Fabian Rojas Sabogal",
        artist: "Desarrollador de software",
    },
    {
        title: "Summit",
        artist: "Skrillex",
    }
]

export default function HeroSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSlideChange = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <section className="flex flex-col items-center justify-center h-screen bg-black text-white px-4 text-center">
            {/* Disco giratorio */}
            <img
                src="./vinyl.png" // <-- Ajusta la ruta
                alt="Vinilo girando"
                className="absolute w-[800px] opacity-25 spin-slow"
                style={{ zIndex: 0 }}
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
            >
                <Carousel>
                    <div className="flex flex-col items-center space-y-8">
                        {/* Icono de corazón */}
                        <div className="text-4xl text-red-500">
                            <FaHeart />
                        </div>

                        {/* Imagen del álbum */}
                        <div className="w-48 h-48 border-4 border-white rounded-md">
                            <CarouselContent>
                                {slides.map((imgUrl: string, index: number) => (
                                <CarouselItem 
                                key={index}
                                onClick={() => handleSlideChange(index)}>
                                    <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center">
                                            <img
                                                src={imgUrl}
                                                alt={`Slide ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </CardContent>
                                    </Card>
                                    </div>
                                </CarouselItem>
                                ))}
                            </CarouselContent>
                        </div>

                        {/* Información de la canción */}
                        <div className="text-center">
                            <div className="mb-2">
                                <h3 className="text-lg font-semibold">{informationSong[currentIndex]?.title}</h3>
                                <p className="text-gray-300">{informationSong[currentIndex]?.artist}</p>
                            </div>
                        </div>

                        {/* Línea de progreso */}
                        <div className="w-64 h-1 bg-gray-700 rounded-full relative">
                            <div className="w-24 h-1 bg-white rounded-full" />
                        </div>

                        {/* Controles */}
                        <div className="flex items-center justify-center space-x-6 text-2xl">
                            <FaRandom />
                            <div onClick={() => handleSlideChange(Math.max(0, currentIndex - 1))}>
                                <CarouselPrevious />
                            </div>
                            <FaPlay className="text-4xl" />
                            <div onClick={() => handleSlideChange(Math.min(slides.length - 1, currentIndex + 1))}>
                                <CarouselNext />
                            </div>
                            <FaExpand />
                        </div>
                    </div> 
                </Carousel>
            </motion.div>
        </section>
        
    );
}
