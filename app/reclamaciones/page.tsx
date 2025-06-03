"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const formSchema = z.object({
  fullName: z.string().min(3, "El nombre es requerido"),
  documentType: z.string().min(1, "Seleccione un tipo de documento"),
  documentNumber: z.string().min(8, "Ingrese un número de documento válido"),
  email: z.string().email("Ingrese un correo electrónico válido"),
  phone: z.string().min(9, "Ingrese un número de teléfono válido"),
  address: z.string().min(5, "La dirección es requerida"),
  complaintType: z.enum(["reclamo", "queja"]),
  productOrService: z.string().min(3, "Describa el producto o servicio"),
  description: z.string().min(10, "La descripción es requerida"),
})

export default function ReclamacionesPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      documentType: "",
      documentNumber: "",
      email: "",
      phone: "",
      address: "",
      complaintType: "reclamo",
      productOrService: "",
      description: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch('/api/reclamaciones', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        throw new Error('Error al enviar el formulario')
      }

      alert('Su reclamo ha sido registrado correctamente. Nos pondremos en contacto pronto.')
      form.reset()
    } catch (error) {
      console.error('Error:', error)
      alert('Hubo un error al procesar su reclamo. Por favor, intente nuevamente.')
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <Link href="/" className="inline-flex items-center gap-2 mb-6 hover:underline">
          <ArrowLeft className="h-4 w-4" />
          Volver a la página principal
        </Link>

        <h1 className="text-3xl font-bold text-center mb-2">Libro de Reclamaciones</h1>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Conforme a lo establecido en el Código de Protección y Defensa del Consumidor, ponemos a su disposición
          nuestro Libro de Reclamaciones.
        </p>

        <div className="max-w-3xl mx-auto bg-card p-6 rounded-lg shadow-sm border">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre Completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Ingrese su nombre completo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-2">
                  <FormField
                    control={form.control}
                    name="documentType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tipo de Documento</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Seleccione" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="dni">DNI</SelectItem>
                            <SelectItem value="ce">CE</SelectItem>
                            <SelectItem value="pasaporte">Pasaporte</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="documentNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Número</FormLabel>
                        <FormControl>
                          <Input placeholder="Número" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Correo Electrónico</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="correo@ejemplo.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Teléfono</FormLabel>
                      <FormControl>
                        <Input placeholder="Ingrese su teléfono" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Dirección</FormLabel>
                      <FormControl>
                        <Input placeholder="Ingrese su dirección" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="complaintType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tipo</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccione" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="reclamo">Reclamo</SelectItem>
                          <SelectItem value="queja">Queja</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="productOrService"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Producto/Servicio</FormLabel>
                      <FormControl>
                        <Input placeholder="Describa el producto o servicio" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Detalle de la Reclamación</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describa detalladamente su reclamo o queja"
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex justify-end">
                {isSubmitting ? (
                  <LoadingButton />
                ) : (
                  <Button type="submit">Enviar Reclamación</Button>
                )}
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}

