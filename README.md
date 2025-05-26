# KALYANO Website

![Alt](src/assets/kalyano-logo.jpg)
![Alt](src/assets/vision-logo.jpg)

## Description

This is the official website for KALYANO, a group of young, talented content creators specializing in AMAPIANO culture. The website showcases their video mix production services for DJs and artists, highlights their portfolio through their YouTube channel, and provides information about the group and contact details.

## Core Features

- Logo Display: Display the KALYANO brand logo prominently.
- Services Showcase: Showcase KALYANO's services with an easy to read and understand pricing table.
- Portfolio Display: Display a curated list of KALYANO's best video mixes, sourced directly from their YouTube channel using the YouTube Data API.
- AI-Powered Social Media Content: Generate engaging and AMAPIANO-relevant social media posts that link back to the KALYANO website, for increased visibility.
- AMAPIANO News Feed: Display the latest updates in the AMAPIANO scene from across the web. An LLM tool determines if the displayed updates are actually about AMAPIANO before posting.

## Style Guidelines

- key interactive elements and calls to action.
- Clean and modern sans-serif fonts for headlines and body text.
- Use icons to make navigation and content more engaging.
- Subtle animations for transitions and user interactions, in order to improve UX.

## Features

- **Home**: Introduces KALYANO with a vibrant logo and a call-to-action to explore services or portfolio.
- **About**: Details KALYANO’s mission, team, and connection to AMAPIANO culture.
- **Services**: Displays a table of services and prices for video mix production.
- **Portfolio**: Embeds video mixes from KALYANO’s YouTube channel using the YouTube Data API.
- **Contact**: Provides contact information, including phone numbers and email.

## Technologies Used

- [React.js](https://react.dev/) for building the user interface.
- [React Router](https://reactrouter.com/) for client-side navigation.
- [YouTube Data API](https://developers.google.com/youtube/v3) for fetching portfolio videos.
- [Vite](https://vitejs.dev/) for fast development and build processes.

## Setup Instructions

1. **Prerequisites**:
   - [Node.js](https://nodejs.org/) (version 18.0.0 or higher)
   - [npm](https://www.npmjs.com/) (version 8.0.0 or higher)

2. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-repo/kalyano-website.git
   cd kalyano-website
   ```

3. **Install Dependencies**:

   ```bash
   npm install
   ```

4. **Set Up Environment Variables**:
   - Create a `.env` file in the root directory.
   - Add the YouTube API key:

     ```env
     VITE_YOUTUBE_API_KEY=your_api_key_here
     ```

   - Obtain an API key from the [Google Cloud Console](https://developers.google.com/youtube/v3/getting-started).

5. **Run the Development Server**:

   ```bash
   npm run dev
   ```

   - The site will be available at `http://localhost:5173`.

## Project Structure

```bash
kalyano-website/
├── .firebase/               # Firebase hosting and functions configuration (if used)
├── dist/                    # Build output directory for deployment
├── public/
│   └── assets/
│       └── logo.png
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── header.module.css
│   │   ├── Footer.jsx
│   │   ├── footer.module.css
│   │   ├── BookingModal.jsx
│   │   └── bookingModal.module.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── home.module.css
│   │   ├── About.jsx
│   │   ├── about.module.css
│   │   ├── Services.jsx
│   │   ├── services.module.css
│   │   ├── Portfolio.jsx
│   │   ├── portfolio.module.css
│   │   ├── Contact.jsx
│   │   └── contact.module.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env
├── .firebaserc              # Firebase project configuration
├── .gitignore               # Specifies intentionally untracked files that Git should ignore
├── eslint.config.js         # ESLint configuration file
├── firebase.json            # Firebase hosting configuration
├── index.html               # Main HTML entry point for Vite
├── package.json
├── package-lock.json
└── README.md
├── vite.config.js           # Vite configuration file
```

- **public/assets/**: Stores static assets like the KALYANO logo.
- **src/components/**: Contains reusable React components (e.g., `Header.jsx`, `Footer.jsx`).
- **src/pages/**: Includes page-specific components (e.g., `Home.jsx`, `Services.jsx`).
- **src/App.jsx**: Defines the main application with routing logic.
- **src/main.jsx**: Serves as the entry point for the React application.
- **src/index.css**: Includes global styles and Tailwind CSS directives.

## Handling Assets

- **Logo**: The KALYANO logo, featuring vibrant purple text with white fill on a black background, is located at `public/assets/logo.png`. It is displayed in the `Header` component. Optimize the image using [TinyPNG](https://tinypng.com/) for faster loading.
- **Price List**: The price list is transcribed into a table in the `Services` component for accessibility and SEO. To update prices, edit `src/pages/Services.jsx`.

## Deployment

1. **Build the Project**:

   ```bash
   npm run build
   ```

2. **Deploy to a Hosting Platform**:
   - For [Netlify](https://www.netlify.com/), drag and drop the `dist` folder to the Netlify dashboard or connect the repository.
   - For [Vercel](https://vercel.com/), use the Vercel CLI or link the repository.
   - Ensure the `VITE_YOUTUBE_API_KEY` is set in the hosting platform’s environment variables.

## Development Guidelines

- **Naming Conventions**:
  - Use PascalCase for component files (e.g., `Header.jsx`).
  - Use lowercase or kebab-case for non-component files (e.g., `styles.css`, `utils.js`).
- **Styling**: Use Tailwind CSS with a color scheme inspired by the logo (purple: `#800080`, white: `#FFFFFF`, black: `#000000`).
- **Accessibility**: Follow WCAG guidelines, including semantic HTML and `alt` attributes for images.

## Contributing

To contribute:

- Follow the naming conventions above.
- Maintain the existing code style and formatting.
- Submit pull requests with clear descriptions of changes.

## License

This project is licensed under the MIT License.
