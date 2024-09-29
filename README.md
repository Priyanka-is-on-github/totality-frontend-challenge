# Totality Frontend Challenge

This repository contains the frontend application for a property listing and booking platform, developed as part of the Totality Frontend Challenge. The platform allows users to explore, filter, and book properties with a clean and responsive UI.

## Table of Contents

- [Approach](#approach)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [How to Run the Project](#how-to-run-the-project)
- [Deployment](#deployment)
- [Additional Challenges](#additional-challenges)

## Approach

The core approach behind this project was to build a user-friendly and responsive platform where users can browse through properties, filter based on certain criteria, and make bookings. Below are the key steps taken during the development:

- **Data Collection**: I collected a bunch of properties data using AI tools and organized the data in a TypeScript file as an array of objects. Each object represents a property with details like location, price, type, amenities, etc.
  
- **Rendering the Property Cards**: On the properties page, data is mapped using the `map` function, and for the design, I used a combination of **Material UI**, **shadcn UI**, and **Tailwind CSS**. Each property is rendered using a dedicated `PropertyCard` component where data is passed and displayed in a clean, organized format.

- **State Management**: I managed global states using React's **Context API** for both filtered properties and cart items. This global state is available throughout the application, ensuring seamless state management between different components and pages.

- **Routing**: I implemented routing using **React Router DOM**. Navigation between pages (e.g., properties page, filtered properties page, and cart page) is smooth and handled in the `App.tsx` file.

- **User Interface**: 
  - The UI is built using a layout system, where a **Base Layout** is defined, and elements like **Navbar** and **Footer** remain consistent across the app.
  - The `Filter` component is responsible for the filtering UI and logic. It has multiple UI components, such as dropdowns and input boxes for filtering by property type, location, number of bedrooms, etc. After applying the filters, the results are stored in the `filteredProperties` state, making it globally accessible throughout the app.

- **Booking Logic**: Each property card has a **Book** button. Upon clicking, a popup appears, allowing users to select dates and duration of stay. This data is then appended into a `cartItems` array, which is displayed in the cart. The total price is calculated and displayed, along with an option for **Checkout**. After a successful checkout (which includes taking user information and payment details), the user can see their booked properties.

- **User Authentication**: For authentication and displaying profile information, I integrated **Clerk**, which handles user registration, login, and profile picture display.

- **Notifications and Alerts**: I used **Clean Toasts UI** for notifications and alerts, providing smooth and minimalistic feedback to the user.

## Tech Stack

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: For static typing and enhanced code reliability.
- **Tailwind CSS**: For fast and responsive styling.
- **Material UI**: To design consistent and modern UI components.
- **shadcn UI**: To build customizable UI components.
- **React Router DOM**: For handling routing and navigation.
- **Context API**: For global state management.
- **Clerk**: For authentication and user profile management.
- **Clean Toasts UI**: For displaying notifications and alerts.

### Key Dependencies from `package.json`:
```json
{
  "dependencies": {
    "react": "^18.0.0",
    "typescript": "^4.5.4",
    "react-router-dom": "^6.4.1",
    "tailwindcss": "^3.0.7",
    "material-ui": "^5.0.0",
    "shadcn/ui": "^1.0.0",
    "clerk": "^3.0.5",
    "clean-toasts-ui": "^1.0.0"
  },
  "devDependencies": {
    "vite": "^3.0.0"
  }
}
```

## Features
- Property Listing and Filtering: Users can browse through available properties and apply filters such as property type, location, and number of bedrooms.
- Booking Functionality: Users can book properties by selecting a stay duration, and the booking information is updated in the cart.
- Authentication: User registration and login functionalities using Clerk.
- Cart and Checkout: Users can view their selected properties in the cart, calculate total costs, and proceed to checkout.
- Notifications: Clean toast notifications for various actions such as adding properties to the cart, applying filters, and successful checkout.

## How to Run the Project

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/totality-frontend-challenge.git
   ```
2. **Navigate to the project directory**:
```bash
cd totality-frontend-challenge
```
3. **Install the dependencies**:
```bash
npm install
```
4. **Start the development server**:
```bash
npm run dev
```

## Deployment

The application is deployed on **Netlify** (or **Vercel**). You can access the live version at the following URL:

- [Live Demo Link](https://totality-frontend-challenge-ps.vercel.app/)

## Additional Challenges (Optional)
**User Authentication**: User registration and login functionalities have been implemented using `Clerk`. Profile pictures are displayed when the user is logged in.



