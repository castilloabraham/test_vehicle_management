# Sistema Simplificado de Gestión de Vehículos
Este en una aplicación fullstack que proporciona un Dashboard para la gestión de vehículos, desarrollado con **Next.js** para el frontend y **NestJS** para el backend. Las funcinalidades y los requisitos técnicos se encuentran en el PDF. 

## Requisitos previos

- **Node.js** (versión 13.x o superior) - [Descargar Node.js](https://nodejs.org/)
- **npm** o **yarn**    
- PostgresSQL - [Descargar](https://www.postgresql.org/)


## Configuración del Backend

Sigue los pasos a continuación para configurar y ejecutar el backend de este proyecto.

### 1. Clona el repositorio y accede al directorio del backend

```bash
$ git clone https://github.com/castilloabraham/test_vehicle_management.git
$ cd backend_api
```

### 2. Instala las dependencias
```bash
$ npm install
```

### 3. Crea en Postgress la DB
Dirigete a postgress y crea una DB para el proyecto.

Recomendación: Usa un nombre con coherencia, ejemplo: vehicles

### 4. Configura las variables de entorno

Dentro del directorio backend, crea un archivo llamado .env. Dentro de este archivo, define las siguientes variables de entorno:
```bash
DB_TYPE=postgres
DB_HOST=localhost
DB_PORT=5432
DB_USER=user
DB_PASSWORD=password
DB_NAME=nombre_db

```

### 4. Ejecuta las migraciones de la base de datos
```bash
$ npm run typeorm migration:run
```

### 5. Compilar y ejecutar el proyecto
```bash
#Desarrollo
$ npm run start:dev
```

## Documentación del API
Puede obtener documentacion del API y sus Endpoint, en el siguiente link: http://localhost:4000/api/

## Configuración del Frontend

Sigue los pasos a continuación para configurar y ejecutar el frontend de este proyecto.

### 1. Clona el repositorio y accede al directorio del frontend

```bash
$ git clone https://github.com/castilloabraham/test_vehicle_management.git
$ cd frontend
```

### 2. Instala las dependencias
```bash
$ npm install
```

### 3. Configura las variables de entorno
Dentro del directorio del frontend, crea un archivo llamado .env.local y dentro de este archivo, define las siguientes variables de entorno. Estas variables son esenciales para conectar el frontend con el backend.
```bash
NEXT_PUBLIC_API_URL=http://localhost:4000
```

### 5. CEjecutar el proyecto
```bash
$ npm run dev
```

