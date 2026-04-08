# The Wizarding World

The Wizarding World is an Angular application that uses the Harry Potter API to display character information from the Harry Potter universe.

## Live Demo

[https://101501186-lab-test2-comp3133.vercel.app/](https://101501186-lab-test2-comp3133.vercel.app/)

## Features

- View a list of Harry Potter characters
- See each character's name, house, and image
- Open a detailed character view
- Filter characters by Hogwarts house
- Built with Angular signals, `@if`, `@for`, and `@switch`

## Tech Stack

- Angular 21
- TypeScript
- Angular HttpClient
- Reactive Forms
- Harry Potter API: [https://hp-api.onrender.com/](https://hp-api.onrender.com/)

## Run Locally

```bash
npm install
npm start
```

Then open `http://localhost:4200`.

## Build

```bash
npm run build
```

## Project Structure

- `src/app/services/hp-api.service.ts` - API requests
- `src/app/models/` - TypeScript interfaces
- `src/app/components/characterlist/` - character list view
- `src/app/components/characterdetails/` - character details modal
- `src/app/components/characterfilter/` - house filter dropdown

## Author

- Tyson Ward-Dicks - 101501186
