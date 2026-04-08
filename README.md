# The Wizarding World

The Wizarding World is an Angular application that uses the public Harry Potter API to display character information from the Harry Potter universe.

This project was created for COMP3133 Lab Test 2. The goal was to build an Angular app that fetches data from an external API, displays it in multiple components, and allows users to filter and explore character details.

## What the app does

- Shows a list of Harry Potter characters
- Displays each character's name, house, and image
- Opens a detailed character view when a character is selected
- Filters characters by Hogwarts house
- Uses Angular signals and Angular control flow syntax such as `@if`, `@for`, and `@switch`

## Built with

- Angular 21
- TypeScript
- Angular HttpClient
- Reactive Forms
- Harry Potter API: [https://hp-api.onrender.com/](https://hp-api.onrender.com/)

## Main features

### Character List

The app loads character data from the API and displays it in a card layout. Each card includes:

- character name
- house
- image

### Character Details

Clicking a character opens a larger detail view with:

- name
- species
- house
- wizard status
- ancestry
- wand details
- actor
- image

### House Filter

Users can filter characters by:

- Gryffindor
- Slytherin
- Hufflepuff
- Ravenclaw
- All Houses

## Project structure

- `src/app/services/hp-api.service.ts`  
  Handles API requests.

- `src/app/models/`  
  Contains the TypeScript interfaces used in the app.

- `src/app/components/characterlist/`  
  Displays the list of characters.

- `src/app/components/characterdetails/`  
  Displays detailed information for a selected character.

- `src/app/components/characterfilter/`  
  Contains the dropdown filter for Hogwarts houses.

## How to run the project

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Then open:

```bash
http://localhost:4200
```

## Build

To build the project:

```bash
npm run build
```

## API endpoints used

- `GET /api/characters`
- `GET /api/characters/house/:house`
- `GET /api/character/:id`

## Author

- Student ID: `101501186`
