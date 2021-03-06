# R Squared Zilla-Upazilla Data

A RESTful API to query data about Bangladesh's 64 zilas and 544 upazilas. Documentation on how to use the API can be found here:
http://tothyobd.rsquaredproject.org/api-docs

### Frameworks
- Node 7 + ES6 (Babel)
- Express
- Mongoose

### Developer tools
- Jest

## Instructions

If using a local instance of db:
 -Install [mongodb](https://www.mongodb.com/download-center?jmp=nav#community) and fire up the server

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

Build the distributable for production build

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
