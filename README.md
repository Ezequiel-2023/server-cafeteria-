<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
<p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
<a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
<a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>

## Servidor de Aplicación de Cafetería

### Descripción

Este proyecto es una aplicación de cafetería que permite a los clientes realizar pedidos y a los administradores gestionar los pedidos y productos de la cafetería.

### Tecnologías utilizadas

- Node.js
- NestJS
- MySQL
- TypeORM

### Instalación

1. Clona el proyecto en tu computadora:
   ```bash
   git clone https://github.com/tu-repo.git

### Configura la conexión a tu base de datos en el archivo correspondiente:

TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'tu_usuario',
  password: 'tu_contraseña',
  database: 'db_cafeteria_app',
  entities: [ /* Aquí van tus entidades */ ],
  synchronize: true,  // Ten en cuenta que esto solo se usa en desarrollo
});
### Iniciar el servidor
### Para iniciar el servidor, usa el siguiente comando:

npm run start

### Endpoints disponibles
GET: Obtener datos de la aplicación.
POST: Agregar nuevos datos.
PUT: Actualizar datos existentes.
DELETE: Eliminar datos.

### Contribuciones
### Si deseas contribuir a este proyecto, por favor sigue las normas de colaboración y 
### asegúrate de enviar un pull request detallado con tus cambios.
