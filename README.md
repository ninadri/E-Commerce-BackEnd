# E-Commerce Back End

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, PostgreSQL username, and PostgreSQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the PostgreSQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

To use schema, open a terminal inside of the folder with the schema.sql file is and enter the following commands:

Log into postgres with:

```bash
psql -U postgres
```

Import the schema:

```bash
\i schema.sql
```

Exit postgres:

```bash
\q
```

Change directory in the terminal to where your server.js file is located. The user must install the pg and Sequelize packages and start the server using the ƒollowing commands:

```bash
npm i
```

Then we need to seed the database and start the server:

```bash
node seeds/seed.js
```

```bash
 npm run start
```

We also want to make sure our password is updated correctly in our .env file.

## Usage

The following images shows the application's GET routes to return all categories, all products, and all tags being tested in Insomnia:

The following images shows the application's GET routes to return a single category, a single product, and a single tag being tested in Insomnia:

The following images shows the application's POST, PUT, and DELETE routes for categories being tested in Insomnia:

## Credits

I had some help from Alexis with tutoring regarding this module.

## License

MIT License

---

© Adriana Nino. [Github Repo](https://github.com/ninadri/E-Commerce-BackEnd).
