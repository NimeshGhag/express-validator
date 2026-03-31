# express-validator

A small Express.js example demonstrating request validation using `express-validator`.

## Features

- Request validation with `express-validator`.
- Validation middleware in [src/middlewares/validator.middleware.js](src/middlewares/validator.middleware.js).
- Example controller in [src/controllers/auth.controller.js](src/controllers/auth.controller.js).
- Routes defined in [routes/dummy.route.js](routes/dummy.route.js).

## Prerequisites

- Node.js (v14+ recommended)
- npm

## Install

```bash
npm install
```

## Run

```bash
node server.js
# or with nodemon
npx nodemon server.js
```

## Test

Example POST request to the dummy route (adjust port/path if needed):

```bash
curl -X POST http://localhost:3000/api/auth/register \
	-H "Content-Type: application/json" \
	-d '{"username":"test"email":"user@example.com","password":"secret123"}'
```

## Project structure

- [src/app.js](src/app.js) — Express app setup
- [server.js](server.js) — Server entry
- [routes/dummy.route.js](routes/dummy.route.js) — Example route
- [src/controllers/auth.controller.js](src/controllers/auth.controller.js) — Controller
- [src/middlewares/validator.middleware.js](src/middlewares/validator.middleware.js) — Validation middleware

## Notes

Edit validators in [src/middlewares/validator.middleware.js](src/middlewares/validator.middleware.js).
