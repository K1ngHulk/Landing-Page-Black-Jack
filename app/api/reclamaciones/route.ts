import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function POST(request: Request) {
  try {
    const data = await request.json()

    const reclamacion = await prisma.reclamacion.create({
      data: {
        fullName: data.fullName,
        documentType: data.documentType,
        documentNumber: data.documentNumber,
        email: data.email,
        phone: data.phone,
        address: data.address,
        complaintType: data.complaintType,
        productService: data.productOrService,
        description: data.description,
      },
    })

    return NextResponse.json(reclamacion, { status: 201 })
  } catch (error) {
    console.error('Error al procesar la reclamación:', error)
    return NextResponse.json(
      { error: 'Error al procesar la reclamación' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const reclamaciones = await prisma.reclamacion.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })

    return NextResponse.json(reclamaciones)
  } catch (error) {
    console.error('Error al obtener las reclamaciones:', error)
    return NextResponse.json(
      { error: 'Error al obtener las reclamaciones' },
      { status: 500 }
    )
  }
}