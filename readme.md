# Next.js Starter Project

## Overview

This is a simple starter project for Next.js that consists of basic components I've used over the years for projects. It is not a framework or library, so feel free to fork/download and hack away.

It is built with minimal packages, no complicated state-management library (using React Context API), and minimal styles using precompiled SCSS as scoped page/component level CSS. This makes it pretty easily to drop in your CSS paradigm of choice.

Currently uses Prisma ORM, but I will be replacing with Drizzle at some point. The database is SQLite for simple development, but your choice of database can be easily configured.

Server-side API routes are location in `pages/api/*`. You can use the API service class to call them, or connect the service class to a headless CMS and forgo server-side routes entirely, if desired.

This project uses class components for React, rather than functional components; meaning you cannot use React hooks with this stucture. Class components are not deprecated, but React is clearly moving in the direction of functional components, so this will be ported at some point.

Likewise, the project will be slowly converted to Typescript, and I have many additional components that I will be generalizing and adding.

## Get Started
Requires Node 16+

Set up .env file: `.env.example` and rename to `.env`

Install dependencies:

`npm install`

To seed the default SQLite database, run:

`npx prisma db seed`

The schema is located in `prisma/schema.prisma` and includes Posts, Videos, and Pages. Data is generated using the Faker library and LoremFlickr.

Once the DB is seeded, run:

`npm run dev` to run on port 3000, or:

`npm run dev -- -p PORTNUM` to run on the port of your choice.

To run a production build:

`npm run build`

## Install/Run Compass for SCSS

Install Ruby:

http://www.ruby-lang.org/en/downloads/

`gem update --system`
`gem install compass`

cd into the project directory and run:

`compass watch` to watch/compile the scss files.

A global stylesheet is available in sass/global.scss that is included in every view/component. You can use these classes in the traditional way as such:

`<div className="className">`

You can use scoped classes in a component by importing the compiled CSS file:

`import stylesheetName from '../path-to/css-file/stylesheetName.css';`

`<div className={stylesheetName.className}>`

Additionally, you can combine this approach as such:

```
<div className={`className ${stylesheetName.className}`}>
```
