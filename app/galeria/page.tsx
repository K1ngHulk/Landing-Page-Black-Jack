"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function GaleriaPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    "/images/gallery/image1.jpg",
    "/images/gallery/image2.jpg",
    "/images/gallery/image3.jpg",
    "/images/gallery/image4.jpg",
    "/images/gallery/image5.jpg",
    "/images/gallery/image6.jpg",
    "/images/gallery/image7.jpg",
    "/images/gallery/image8.jpg",
    "/images/gallery/image9.jpg",
    "/images/gallery/image10.jpg",
  ]

  const openImage = (index: number) => {
    setSelectedImage(index)
  }

  const closeImage = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <Link href="/" className="inline-flex items-center gap-2 mb-6 hover:underline">
          <ArrowLeft className="h-4 w-4" />
          Volver a la página principal
        </Link>

        <h1 className="text-3xl font-bold text-center mb-2">Nuestra Galería</h1>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Conoce nuestras instalaciones y disfruta de la mejor experiencia en juegos de azar.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="aspect-square relative overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openImage(index)}
            >
              <Image src={src || "/images/placeholder.jpg"} alt={`Imagen ${index + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full"
            onClick={closeImage}
          >
            <X className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 rounded-full"
            onClick={prevImage}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <div className="relative h-[80vh] w-[80vw] max-w-5xl">
            <Image
              src={images[selectedImage] || "/images/placeholder.jpg"}
              alt={`Imagen ${selectedImage + 1}`}
              fill
              className="object-contain"
            />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 rounded-full"
            onClick={nextImage}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white">
            {selectedImage + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  )
}

