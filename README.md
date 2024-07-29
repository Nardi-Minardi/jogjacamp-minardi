# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started, Instructions to set up and run the project locally.

first, clone the project:

```bash
git clone https://github.com/Nardi-Minardi/jogjacamp-minardi.git
```

then, navigate to the project directory:

```bash

and install the dependencies:

```bash
npm install
# or
yarn install

and, run the development server:

```bash
npm start
# or
yarn start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## A brief explanation of the architectural decisions.
- The project is built using ReactJS, a popular front-end library.
- The project is structured in a way that it is easy to understand and maintain.
- The project uses functional components and hooks.
- The project uses react-router-dom for routing.
- The project uses axios for making API requests.
- The project uses react-query for data fetching.
- The project uses tailwindcss for styling.
- The project uses react-swiper for the slider.
- The project uses react-icons for icons.
- The project uses moment for date formatting.

## Any additional notes or known issues.
- Pada page test-select untuk mengatasi Jika provinsi sudah dipilih dan halaman di refresh, maka dropdown provinsi yang dipilih tadi tetap menampilkan pilihan data sebelumnya. saya menggunakan react router dom untuk menyimpan state pada url params, sehingga ketika halaman di refresh, state tidak hilang. namun jika mengganti halaman, state akan hilang.

