# Quinn Bonnett, RMT

Business website for Quinn Bonnett, Registered Massage Therapist.

<img width="1455" alt="website" src="https://user-images.githubusercontent.com/57023164/214474466-41a0d8c2-ac71-47da-8cb8-b2b38738f3c2.png">

## Live link
https://quinnbonnettrmt.com/

## Tech stack

### Front End

- [Gatsby](https://www.gatsbyjs.com/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind](https://tailwindcss.com/)
- [gatsby-source-sanity](gatsby-source-sanity)
- [animate.css](https://animate.style/)
- [react-animation-on-scroll](https://www.npmjs.com/package/react-animation-on-scroll)
- [react-icons](https://www.npmjs.com/package/react-icons)
- [react-smooth-collapse](https://www.npmjs.com/package/react-smooth-collapse)

### Content Management

- [Sanity](https://www.sanity.io/)

### Linting & Formatting

- [eslint-config-lucas-silbernagel](https://www.npmjs.com/package/eslint-config-lucas-silbernagel)

## Run Locally

### Prerequisites

In order to run this application locally, you must have node installed on your computer. To check if you already have it installed, enter `node -v` in your terminal. If you do not have node, you can install it here: https://nodejs.org/en/

### Clone the repository

Once you have confirmed that node is installed, `cd` into a folder on your computer and run the following command to clone the repository:

`git clone https://github.com/LucasSilbernagel/quinn-rmt.git`

Then `cd` into the project folder and open it in your code editor. For Visual Studio Code:

`cd quinn-rmt`
`code .`

### Install dependencies

To install all of the required dependencies, run `npm install`.

### Start up the app

- To start up the app locally, run `npm start` in your terminal. Your terminal should indicate a `localhost` URL at which you can view the app in your browser.
- To add and edit content in Sanity Studio, `cd` into the `studio` folder, run `npm run dev`, and visit http://localhost:3333/content/desk/homepage.
  - Note that you won't have access to sign into my Sanity studio, you will have to generate your own project ID:
    - Visit https://www.sanity.io/ and create an account if you don't already have one.
    - Follow the instructions to create a new project and make a note of the project ID.
    - In your code editor, search for `projectId` and replace the value there with your own Sanity project ID. This should be done in three files: `sanity.cli.ts`, `sanity.config.ts`, and `gatsby-config.ts`.

## Testing

### Unit Tests

Unit tests are written with [Jest](https://jestjs.io/) and [react-testing-library](https://testing-library.com/).

Use `npm test` to run all unit tests, or use `npm test SomeFileToRun` to run a specific test file.
