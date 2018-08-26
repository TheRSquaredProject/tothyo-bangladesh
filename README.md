# R Squared Zilla-Upazilla Data

Our latest web api for Zilla-Upazilla data. 

### Frameworks
- Node 7 + ES6 (Babel)
- Express
- Mongoose
- Joi

### Developer tools
- Jest
- Docker
- Husky (Githooks)

## Instructions

Install [mongodb](https://www.mongodb.com/download-center?jmp=nav#community) and fire up the server

```
mongod
```

Install [`yarn`](https://www.npmjs.com/package/yarn).

```
npm install -g yarn
```


Run yarn in the root of your project to install its dependencies

```
yarn
```

### Server

Start in development mode http://localhost:4040/api/health-check

```
yarn dev
```

Build the distributable

```
yarn build
```

Build the distributable + start node server http://localhost:8080/api/health-check

```
yarn start
```

### Tests

Run tests or code coverage in Jest

```
yarn test
yarn test:coverage
```
