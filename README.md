erp-ui
============

### Enterprise resource planning application's frontend.

[![Continuous integration](https://github.com/Netsurfclub/erp-ui/actions/workflows/build.yml/badge.svg)](https://github.com/Netsurfclub/erp-ui/actions/workflows/build.yml)

[Contributing Guide](.github/CONTRIBUTING.md)

Prerequisites
-------------

To avoid any unexpected application behaviour, make sure you have installed the following tool with the proper version number:

- [Node 16.17.1](https://nodejs.org/en/blog/release/v16.17.1)

Running project locally
-----------------------

### Install project dependencies

```bash
npm install
```

### Create .env.local file

Before you start, make sure you create a file called `.env.local` and define an environment variable with the name: `REACT_APP_ERP_API_URL`.
Set the proper url where you are actually running the GraphQL server application locally to this variable.

### Start application with npm:

```bash
npm run start
```

### Start application with Docker:

```bash
docker build -t <image-name>:<tag> .

docker run -p 3000:3000 <image-name>:<tag>
```

#### To view the application, open [http://localhost:3000](http://localhost:3000) in your web browser.
