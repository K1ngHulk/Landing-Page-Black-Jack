# Landing Page Black Jack - Libro de Reclamaciones

Este proyecto incluye una landing page para una sala de tragamonedas con un sistema de libro de reclamaciones digital integrado, cumpliendo con los requisitos de INDECOPI.

## Características

- Landing page moderna y atractiva
- Libro de reclamaciones digital conforme a la normativa peruana
- Sistema de gestión de reclamaciones con base de datos
- Interfaz de usuario intuitiva y responsive

## Requisitos Previos

- Node.js 18 o superior
- Una cuenta en Supabase
- PostgreSQL (proporcionado por Supabase)

## Configuración

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd Landing-Page-Black-Jack
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno:
- Crea un archivo `.env` en la raíz del proyecto
- Copia el contenido de `.env.example`
- Completa las variables con tus credenciales de Supabase

4. Inicializa la base de datos:
```bash
npx prisma generate
npx prisma db push
```

## Desarrollo Local

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:3000`

## Despliegue

1. Configura tu proyecto en Vercel o tu plataforma de hosting preferida
2. Configura las variables de entorno en tu plataforma de hosting
3. Conecta tu repositorio y despliega

## Cumplimiento Legal

Este libro de reclamaciones digital cumple con:
- Código de Protección y Defensa del Consumidor
- Requisitos de INDECOPI para libros de reclamaciones virtuales
- Normativa de protección de datos personales

## Mantenimiento

Los registros de reclamaciones se almacenan por un período de 2 años según lo requerido por la normativa.

## Soporte

Para soporte técnico o consultas, por favor crear un issue en el repositorio.