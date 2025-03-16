# My Portfolio Website - [vamsiindugu.dev](https://vamsiindugu.vercel.app/) 

## About the Project  
This is my personal portfolio website built with **Next.js** and styled using **Tailwind CSS**. The goal of this project is to showcase my skills, projects, and experience in software development. The site is fully responsive and optimized for performance, leveraging **static site generation (SSG)** for improved loading times.  

## Table of Contents  
- [About the Project](#about-the-project)  
- [Interesting Techniques](#interesting-techniques)  
- [Technologies Used](#technologies-used)  
- [Project Structure](#project-structure)  
- [Installation](#installation)  
- [Dependencies](#dependencies)  
- [Troubleshooting](#troubleshooting)  
- [Contributing](#contributing)  
- [Lessons Learned](#lessons-learned)  
- [Contact](#contact)  

## Interesting Techniques  
This project incorporates several modern web development techniques:  

- **[Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)**: Used for triggering animations when elements enter the viewport.  
- **[CSS Scroll Snap](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type)**: Ensures smooth scrolling between sections for a better user experience.  
- **[Lazy Loading](https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading)**: Improves performance by deferring the loading of non-essential images.  
- **[Dark Mode](https://tailwindcss.com/docs/dark-mode)**: Implemented using Tailwind CSS’s built-in dark mode support.  
- **[Static Site Generation (SSG)](https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation)**: Pre-renders pages at build time for better performance.  

## Technologies Used  
Beyond the basics, this project integrates some non-obvious but powerful tools:  

- **[Next.js](https://nextjs.org/)** – React framework for optimized performance and routing.  
- **[Tailwind CSS](https://tailwindcss.com/)** – Utility-first CSS framework for fast styling.  
- **[Framer Motion](https://www.framer.com/motion/)** – Used for smooth animations and page transitions.  
- **[Lucide Icons](https://lucide.dev/)** – A lightweight, modern icon library for UI elements.  
- **[Vercel](https://vercel.com/)** – Deployment and hosting platform for seamless CI/CD.  
- **Fonts**: [Inter](https://fonts.google.com/specimen/Inter) (primary), [Fira Code](https://fonts.google.com/specimen/Fira+Code) (for code snippets).  

## Project Structure  
```plaintext
📦 portfolio-website  
├── 📂 public/           # Static assets (images, fonts)  
├── 📂 src/  
│   ├── 📂 components/   # Reusable React components  
│   ├── 📂 pages/        # Next.js page-based routing  
│   ├── 📂 styles/       # Global and component-specific styles  
│   ├── 📂 utils/        # Helper functions and configurations  
├── .gitignore           # Git ignore file  
├── next.config.js       # Next.js configuration  
├── tailwind.config.js   # Tailwind CSS configuration  
├── package.json         # Project dependencies and scripts  
└── README.md            # Project documentation  
```  
- **`public/`** – Stores static files like images, icons, and fonts.  
- **`components/`** – Includes reusable UI elements like buttons, cards, and navigation.  
- **`pages/`** – Next.js pages with automatic routing.  
- **`styles/`** – Contains global styles and Tailwind configurations.  
- **`utils/`** – Houses helper functions for formatting dates, fetching data, etc.  

## Installation  
To set up the project locally, clone the repository and install dependencies:  
```sh
git clone https://github.com/vamsiindugu/portfolio.git  
cd portfolio  
npm install  
npm run dev  
```  
The site will be live at `http://localhost:3000/`.  

## Dependencies  
Ensure you have Node.js (>=16.0) installed. Required dependencies:  
```sh
npm install next@latest react@latest react-dom@latest  
npm install tailwindcss@latest framer-motion@latest lucide-react@latest  
```  

## Troubleshooting  
If you encounter issues, try the following:  
- Run `npm install` again to ensure all dependencies are installed.  
- Clear Next.js cache:  
  ```sh
  rm -rf .next/ && npm run dev  
  ```  
- Check logs for errors with:  
  ```sh
  npm run build  
  ```  

## Contributing  
Contributions are welcome! Please fork the repo and submit a pull request with improvements.  

## Lessons Learned  
This project reinforced:  
- The benefits of **static site generation (SSG)** for fast-loading pages.  
- How to use **Framer Motion** for animations without sacrificing performance.  
- The power of **Tailwind CSS** for rapid UI development.  

## Contact  
For inquiries or collaboration opportunities:  
 ✉︎ [vamsiindugu@gmail.com](mailto:vamsiindugu@gmail.com)  
 🌐 [Portfolio Website](https://vamsiindugu.vercel.app/)  
 🇮🇳 [LinkedIn](https://www.linkedin.com/in/vamsiindugu/)  
👩🏻‍💻 [GitHub](https://github.com/vamsiindugu)  
