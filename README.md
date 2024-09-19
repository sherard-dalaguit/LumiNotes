# LumiNotes

A Notion-inspired note-taking and organization platform built with Next.js and Node.js, featuring rich text editing, hierarchical organization, and a responsive design to enhance productivity and user experience.

![LumiNotes](https://github.com/user-attachments/assets/ea4add65-f4e5-4a6b-a57b-5569b8b3be17)
![LumiNotes_2](https://github.com/user-attachments/assets/018fd91e-8635-4a6d-9e86-59ac7e76e343)

## Demo

Check out the live application: [LumiNotes](https://luminotes.vercel.app)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contact](#contact)

## Features

- **Rich Text Editing**: Create and format notes using a powerful rich text editor with support for various text styles, lists, links, and more.
- **Hierarchical Organization**: Organize your notes into notebooks, sections, and pages, allowing for a structured and easily navigable workspace.
- **Drag and Drop Functionality**: Easily rearrange notes, sections, and notebooks using intuitive drag-and-drop interactions for seamless organization.
- **Advanced Search and Filter**: Quickly locate notes using powerful search and filtering options based on keywords, tags, or creation dates.
- **User Authentication**: Secure user registration and login processes powered by Clerk.dev, ensuring that your notes are protected and accessible only to authorized users.
- **Responsive Design**: Optimized for both desktop and mobile devices, providing a consistent and user-friendly experience across all platforms.
- **Dark Mode**: Switch between light and dark themes to reduce eye strain and enhance visual comfort during extended use.

## Technologies Used

- **Front-end**:
  - Next.js
  - React
  - Tailwind CSS
  - TypeScript
- **Back-end**:
  - Node.js
  - Convex
- **APIs and Libraries**:
  - Clerk.dev
  - Edge Store
- **Deployment**:
  - Vercel

## Installation

To run the project locally, follow these steps:

### Prerequisites

- **Node.js** and **npm** installed on your machine.
- **Clerk API keys** (for user authentication).
- **Convex CLI**: Install globally using `npm install -g convex-cli` or use `npx` for running Convex commands without global installation.

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/sherard-dalaguit/LumiNotes.git
   cd LumiNotes

2. **Install dependencies**:

   ```bash
   npm install
   ```
   This command installs all the necessary dependencies listed in the `package.json` file, including:

    - **Next.js**: A React framework for building server-side rendered and statically generated applications.
    - **React**: A JavaScript library for building user interfaces.
    - **Tailwind CSS**: A utility-first CSS framework for styling.
    - **Node.js**: JavaScript runtime for server-side development.
    - **Convex**: Backend platform for serverless functions and real-time data synchronization.
    - **Clerk**: A user authentication and management solution.
    - **dotenv**: A module to load environment variables from a `.env` file into `process.env`.
    - **OpenAI API Client**: For integrating AI-generated answers.
    - **Other dependencies as listed in the `package.json` file.**
  
3. **Set up environment variables**:

   Create a `.env.local` file in the root directory and add the following:
   ```env
    # Deployment used by 'npm convex dev'
    CONVEX_DEPLOYMENT=your_convex_key
    NEXT_PUBLIC_CONVEX_URL=url_for_accessing_convex_services

    # Clerk Authentication Keys
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_actual_clerk_publishable_key
    CLERK_SECRET_KEY=your_actual_clerk_secret_key

    # Edge Store Keys
    EDGE_STORE_ACCESS_KEY=your_actual_edge_store_access_key
    EDGE_STORE_SECRET_KEY=your_actual_edge_store_secret_key
    ```

4. **Initialize Convex**:
   ```bash
   npx convex dev

5. **Run the development server**:
   ```bash
   npm run dev

6. **Access the application**:

   Open http://localhost:3000 in your browser


## Usage

- **Create and Edit Notes**: Easily create new notes and edit existing ones using a powerful rich text editor. Customize your notes with various formatting options such as bold, italics, bullet points, numbered lists, links, and more.
- **Organize with Pages and Subpages**: Structure your workspace by creating pages and subpages. This hierarchical organization helps keep your notes tidy and easily navigable.
- **Drag and Drop Reordering**: Rearrange your pages, subpages, and sections effortlessly using intuitive drag-and-drop functionality. Customize the layout to suit your workflow preferences.
- **Advanced Search and Filter**: Quickly locate your notes using the advanced search feature. Filter results by keywords, tags, creation dates, or other criteria to find exactly what you need.
- **User Authentication**: Securely sign up and log in using Clerk.dev integration. Your notes are protected and accessible only to authorized users, ensuring your data remains private and secure.
- **Responsive Design**: Access LumiNotes from any device. The responsive design ensures a seamless and user-friendly experience on both desktop and mobile platforms.
- **Dark Mode**: Switch between light and dark themes to reduce eye strain and enhance visual comfort during extended use.
- **Integration with Convex**: Leverage Convex for backend services, enabling efficient data synchronization, serverless functions, and scalable infrastructure to support LumiNotes' features.


## Contact

**Sherard Dalaguit**  
[Email](mailto:sherard.softwaredev@gmail.com) | [LinkedIn](https://www.linkedin.com/in/sherard-d)
