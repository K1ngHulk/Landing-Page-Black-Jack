"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 sticky top-0 z-50">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image src="/images/logo/logo.svg" alt="Logo" width={40} height={40} className="rounded-md" />
            <h1 className="text-xl font-bold">Tragamonedas Black Jack</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#inicio" className="hover:underline">
              Inicio
            </a>
            <a href="#servicios" className="hover:underline">
              Servicios
            </a>
            <a href="/galeria" target="_blank" className="hover:underline" rel="noreferrer">
              Galería
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <div id="inicio">
          <ImageCarousel />
        </div>

        <section id="servicios" className="py-12 bg-muted">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-8">¡Lo que tenemos para ti!</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-primary rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">Máquinas Tragamonedas</h3>
                <p className="text-muted-foreground mb-4">
                  Las mejores máquinas tragamonedas con los premios más grandes y emocionantes.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-primary rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">Juegos de Mesa</h3>
                <p className="text-muted-foreground mb-4">
                  Disfruta de nuestros juegos de mesa con los mejores crupiers y ambiente exclusivo.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-primary rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">Bar y Restaurante</h3>
                <p className="text-muted-foreground mb-4">
                  Complementa tu experiencia con nuestra selección de bebidas y platos exclusivos.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-8">Libro de Reclamaciones</h2>
            <div className="max-w-md mx-auto text-center">
              <a href="/reclamaciones" target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105">
                  <Image
                    src="/images/misc/libro-reclamaciones.jpg"
                    alt="Libro de Reclamaciones"
                    width={500}
                    height={300}
                    className="w-full"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <p className="text-white text-xl font-bold">Haz clic para abrir el Libro de Reclamaciones</p>
                  </div>
                </div>
              </a>
              <p className="mt-4 text-muted-foreground">
                Conforme a lo establecido en el Código de Protección y Defensa del Consumidor, ponemos a su disposición
                nuestro Libro de Reclamaciones.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-8">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Tragamonedas Black Jack</h3>
              <p className="text-muted-foreground">¡Donde están los premios más grandes!</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#inicio" className="text-muted-foreground hover:text-foreground">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="text-muted-foreground hover:text-foreground">
                    Servicios
                  </a>
                </li>
                <li>
                  <a
                    href="/galeria"
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground"
                    rel="noreferrer"
                  >
                    Galería
                  </a>
                </li>
                <li>
                  <a
                    href="/reclamaciones"
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground"
                    rel="noreferrer"
                  >
                    Libro de Reclamaciones
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contacto</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-muted-foreground">Av. Bausate y Meza 1489,La Victoria, Lima</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-muted-foreground">+51 999 999 999</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span className="text-muted-foreground">elbashasacblackjack@hotmail.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} ElBashaSac. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ImageCarousel() {
  const images = ["/images/carousel/slide1.jpg", "/images/carousel/slide2.jpg", "/images/carousel/slide3.jpg"]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  return (
    <div className="relative h-[400px] md:h-[500px] overflow-hidden">
      <div
        className="flex transition-transform duration-500 h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="min-w-full h-full relative">
            <Image
              src={src || "/images/placeholder.jpg"}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-4">
              <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">Bienvenido a Black Jack</h2>
              <p className="text-lg md:text-xl text-center max-w-2xl mb-6">¡Donde están los premios más grandes!</p>
              <Button size="lg">Conocer más</Button>
            </div>
          </div>
        ))}
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 rounded-full"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 rounded-full"
        onClick={goToNext}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

