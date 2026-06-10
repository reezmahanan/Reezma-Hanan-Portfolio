# INSTITUTE OF TECHNOLOGY, UNIVERSITY OF MORATUWA
## NATIONAL DIPLOMA IN TECHNOLOGY
### IS 2304: HUMAN COMPUTER INTERACTION
### SEMESTER III - CONTINUOUS ASSESSMENT 02

---

# REACT PORTFOLIO DEVELOPMENT WITH HCI TECHNIQUES
### TECHNICAL AND HCI EVALUATION REPORT

**Module:** IS 2304 Human Computer Interaction  
**Student Name:** Mahroof Reezma Hanan  
**Index Number:** 23IT0480  
**Field of Study:** Information Technology  
**Submission Date:** June 2026  

---

## TABLE OF CONTENTS
1. [Introduction](#1-introduction)
   * 1.1 Objective of the Portfolio
   * 1.2 Introduction to HCI and Its Importance in Web Design
2. [Technologies Used](#2-technologies-used)
   * 2.1 Core Framework and Build System
   * 2.2 Routing and Navigation
   * 2.3 User Interface and Styling
   * 2.4 Vector Icons
   * 2.5 Deployment and Form Services
3. [HCI Techniques and Rules Applied](#3-hci-techniques-and-rules-applied)
   * 3.1 User-Centered Design (UCD) Process
   * 3.2 Application of HCI Design Principles (Nielsen's Heuristics)
     * 3.2.1 Heuristic 1: Consistency and Standards
     * 3.2.2 Heuristic 2: Visibility of System Status
     * 3.2.3 Heuristic 3: Aesthetic and Minimalist Design
   * 3.3 Accessibility (A11y) Considerations
   * 3.4 Responsiveness Features
4. [Project Descriptions](#4-project-descriptions)
   * 4.1 Event Hub - Student Event Management Web Application
   * 4.2 SCM - Inventory Management System
   * 4.3 Reezma Hanan - Personal Portfolio Website
   * 4.4 Book Nest - Bookstore E-Commerce Platform
   * 4.5 Reezma Tech Services - IT Agency Website
   * 4.6 ReciPick - Recipe Discovery Application
   * 4.7 TasteVerse Restaurant Website
   * 4.8 CareerBridge - Job Placement Platform
5. [Evaluation & Reflection](#5-evaluation--reflection)
   * 5.1 Verification of User Experience (UX)
   * 5.2 Technical Challenges and Solutions
   * 5.3 Planned Future Improvements
6. [Conclusion](#6-conclusion)
7. [Learning Outcomes](#7-learning-outcomes)
   * 7.1 Key Academic Outcomes
   * 7.2 Support for Internship Goals
8. [Deployed Website Link](#8-deployed-website-link)

---

## 1. INTRODUCTION

### 1.1 Objective of the Portfolio
The primary objective of this personal portfolio project is twofold: first, to serve as a comprehensive digital resume demonstrating academic, technical, and professional capabilities to prospective internship recruiters and hiring managers; second, to apply the theoretical foundations of **Human-Computer Interaction (HCI)** to a real-world software project. By utilizing React.js, the website exhibits a functional, user-centric environment that hosts a curated collection of full-stack systems, frontend templates, and official certifications.

### 1.2 Introduction to HCI and Its Importance in Web Design
Human-Computer Interaction (HCI) is a multidisciplinary field focusing on the design of computer technology and the interaction between humans (users) and computers. It is situated at the intersection of computer science, cognitive science, and human factors engineering. 

In modern web design, HCI is critical because a website's value is determined not only by its features or performance but also by how easily and intuitively users can accomplish their goals. Incorporating HCI guidelines minimizes a user's cognitive load—the mental effort required to navigate and process an interface. Properly applied design heuristics and accessibility guidelines prevent user frustration, reduce error rates, and improve overall satisfaction. In a professional context, a portfolio built with strict adherence to HCI demonstrates that the developer values usability, clean interface structures, and inclusive design.

---

## 2. TECHNOLOGIES USED

The portfolio website is developed using a modern frontend stack chosen to achieve high performance, rapid iteration, and smooth interactivity:

*   **React.js (v19):** Serves as the core JavaScript library for building component-driven user interfaces. It enables modular architecture, efficient state management, and declarative UI updates.
*   **Vite (v8):** Used as the modern build tool and local dev server, facilitating fast Hot Module Replacement (HMR) and optimized assets packaging.
*   **React Router (v7):** Implemented to handle routing and layout templates, allowing the application to behave as a fast Single-Page Application (SPA) without full-page reloads.
*   **Vanilla CSS:** Utilized for styling to exercise control over animations, glassmorphism filters, responsive grids, and typography styling without adding the bloat of external styling utilities.
*   **Lucide React:** Used for consistent, vector-based SVG iconography across the navigation menus, certificates categories, project tags, and contact forms.
*   **Netlify:** Serves as the continuous integration and hosting platform, configuring redirect fallback rules via `netlify.toml` to support React client-side routing.
*   **FormSubmit.co:** Integrated to handle contact form submissions asynchronously via AJAX (`fetch` API) directly to email without requiring a separate backend database.

---

## 3. HCI TECHNIQUES AND RULES APPLIED

### 3.1 User-Centered Design (UCD) Process
User-Centered Design is an iterative process where designers focus on users and their needs in each phase of design. For this portfolio, the UCD process involved:
1.  **User Profiling:** Identifying the target users—primarily **technical recruiters** and **hiring managers** seeking software engineering interns. Recruiter personas show they have limited time, want rapid access to a candidate's CV, projects list, technologies, and verified credentials, and need a direct method of contact.
2.  **Information Architecture:** Placing the most critical info (CV Download, Main Projects, Key Skills) in immediate view. The layout groups related elements logically into distinct sections (About, Projects, Certificates, Contact).
3.  **Prototyping & Iterative Refinement:** Testing the site locally and online. For example, realizing that social links wrapped awkwardly on mid-sized tablet displays, a layout refinement was made to keep links on a single line on desktop screens while gracefully collapsing on mobile displays.

### 3.2 Application of HCI Design Principles (Nielsen's Heuristics)

#### 3.2.1 Heuristic 1: Consistency and Standards
*   **Concept:** Users should not have to wonder whether different words, situations, or actions mean the same thing. Interfaces should follow platform conventions.
*   **Application on Portfolio:** 
    *   The top navigation navbar is sticky, containing standard labels (*Home, About, Education, Skills, Certificates, Projects, Contact*) placed in an expected chronological layout.
    *   Outbound external links (e.g., GitHub code, Live Demo, Certificate Verifications) consistently utilize the `ExternalLink` icon and open in a new browser tab (`target="_blank" rel="noopener noreferrer"`), matching the expected user mental model for leaving a site.
    *   Interactive hover colors conform to standard system cues (hovering turns links white or colored, scaling cards slightly up).

#### 3.2.2 Heuristic 2: Visibility of System Status
*   **Concept:** The design should always keep users informed about what is going on, through appropriate feedback within a reasonable time.
*   **Application on Portfolio:**
    *   **Typewriter Role Rotator:** On the Home section, a typewriter effect visually communicates that the page is active and introduces the developer's multiple roles.
    *   **Stat Counters:** Animated numeric counters count up from `0` to the actual metrics (e.g., `8` projects, `25` certifications) upon page load, giving visual confirmation of achievement volumes.
    *   **Contact Form Loading State:** When the user clicks the "Send Message" button, the button text updates to "Sending...", input fields are disabled to prevent duplicate submissions, and a visual success status message appears upon server verification.

#### 3.2.3 Heuristic 3: Aesthetic and Minimalist Design
*   **Concept:** Interfaces should not contain information that is irrelevant or rarely needed. Every extra unit of info in an interface competes with relevant units of info and diminishes their relative visibility.
*   **Application on Portfolio:**
    *   The visual design applies modern **glassmorphism** (semi-transparent elements with CSS `backdrop-filter: blur(20px)` and subtle borders) on a dark, cohesive backdrop. This keeps layouts premium and structured.
    *   Cards are used to display projects and certificates. Content is structured into clean fields: title, issuer/category, description, small tech tags, and a call-to-action button, ensuring maximum scannability.
    *   Avoids heavy images or unstructured text walls. Certificates are filterable by category, showing only relevant items rather than cluttering the screen.

### 3.3 Accessibility (A11y) Considerations
To ensure the portfolio is inclusive to all users (including those using screen readers or navigating solely via keyboard), the following accessibility features were implemented:
*   **Semantic HTML:** Structured using HTML5 semantic containers such as `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, and proper heading hierarchies (`<h1>` for the primary title, `<h2>` for sections, `<h3>` for cards).
*   **Alt Text:** Every image asset (including project previews, logos, and badges) features descriptive `alt` text attributes (e.g., `alt="Event Hub badge"`).
*   **Color Contrast:** Text and background elements maintain a high contrast ratio. The dark background (#07090e) is paired with bright white (#ffffff) or muted light-blue/gray (#94a3b8) text layers, avoiding readability strains.
*   **Interactive Focus States:** Element hover transitions are styled to assist keyboard focus states, preventing visual disorientation.

### 3.4 Responsiveness Features
The portfolio is designed using responsive web principles to verify consistency across desktops, tablets, and smartphones:
*   **CSS Flexbox and Grid Layouts:** Allows dynamic layout shifting. For instance, the projects list reorganizes from a three-column layout on widescreen displays to a single-column layout on mobile devices.
*   **Mobile Collapsible Navigation:** The navigation bar collapses on viewport widths below `768px` into an overlay menu, preserving vertical space.
*   **Responsive Column Distribution:** The footer column sizes adapt dynamically to screen size changes. On wide monitors, the "Let's Connect" section is given a wider distribution (`1.2fr 0.8fr 1.5fr`) and a smaller gap to fit the social profile links side-by-side, preventing unorganized vertical wrapping.

---

## 4. PROJECT DESCRIPTIONS

The portfolio showcases eight software projects developed during coursework and self-directed learning:

### 4.1 Event Hub - Student Event Management Web Application
*   **Description:** An academic scheduling, coordination, and user management platform. Supports event registration, organizers controls, administrative dashboards, and automated email notices.
*   **Tech Stack:** PHP, MySQL, JavaScript, HTML5, CSS3.
*   **Assets:** [Preview Card Image](file:///c:/Users/HANAN/OneDrive/Desktop/reezma-portfolio/public/Event%20Hub.png) | [GitHub Repository](https://github.com/reezmahanan/Student-Event-Management-Web-Application)

### 4.2 SCM - Inventory Management System
*   **Description:** A full-stack supply chain and inventory tracking system featuring Supplier Controls, User Roles, Invoice Publishing, and Database Backup modules.
*   **Tech Stack:** React, Spring Boot, MySQL, REST APIs, Java.
*   **Assets:** [Preview Card Image](file:///c:/Users/HANAN/OneDrive/Desktop/reezma-portfolio/public/Inventory%20Management%20System.png) | [GitHub Repository](https://github.com/reezmahanan/SCM-IMS)

### 4.3 Reezma Hanan - Personal Portfolio Website
*   **Description:** The host portfolio website, implementing professional glassmorphism templates, reactive stats counters, typewriter headings, and structured credentials filters.
*   **Tech Stack:** React.js, Vite, Vanilla CSS.
*   **Assets:** [Preview Card Image](file:///c:/Users/HANAN/OneDrive/Desktop/reezma-portfolio/public/Portfolio%20Website.png) | [GitHub Repository](https://github.com/reezmahanan/Reezma-Hanan-Portfolio)

### 4.4 Book Nest - Bookstore E-Commerce Platform
*   **Description:** A dynamic online bookstore featuring a book catalog, custom searches, multi-level categorical filters, shopping cart managers, invoice checkers, and dashboard panels.
*   **Tech Stack:** PHP, MySQL, JavaScript, HTML5, CSS3.
*   **Assets:** [Preview Card Image](file:///c:/Users/HANAN/OneDrive/Desktop/reezma-portfolio/public/Book%20Nest.png) | [GitHub Repository](https://github.com/reezmahanan/BookNest)

### 4.5 Reezma Tech Services - IT Agency Website
*   **Description:** A commercial landing page representing freelance IT support packages, showing service tiers and client quotation forms.
*   **Tech Stack:** HTML5, CSS3, JavaScript.
*   **Assets:** [Preview Card Image](file:///c:/Users/HANAN/OneDrive/Desktop/reezma-portfolio/public/Reezma%20Tech.png) | [GitHub Repository](https://github.com/reezmahanan/Reezma-Tech-Services)

### 4.6 ReciPick - Recipe Discovery Application
*   **Description:** A responsive recipe search tool. Integrates public culinary APIs to filter food recipes by ingredients and cuisine types.
*   **Tech Stack:** React, Vite, CSS3, API Integration, JavaScript.
*   **Assets:** [Preview Card Image](file:///c:/Users/HANAN/OneDrive/Desktop/reezma-portfolio/public/ReciPick.png) | [GitHub Repository](https://github.com/reezmahanan/RECIPICK)

### 4.7 TasteVerse Restaurant Website
*   **Description:** A responsive restaurant landing page presenting menu catalogs, dining descriptions, and online table reservations.
*   **Tech Stack:** HTML5, CSS3, JavaScript.
*   **Assets:** [Preview Card Image](file:///c:/Users/HANAN/OneDrive/Desktop/reezma-portfolio/public/Tasteverse.png) | [GitHub Repository](https://github.com/reezmahanan/Taste-Verse)

### 4.8 CareerBridge - Job Placement Platform
*   **Description:** A placement portal designed to connect graduating students with recruiters. Features job filters, application registers, and placement cards.
*   **Tech Stack:** HTML5, CSS3, JavaScript.
*   **Assets:** [Preview Card Image](file:///c:/Users/HANAN/OneDrive/Desktop/reezma-portfolio/public/Career%20Bridge.png) | [GitHub Repository](https://github.com/reezmahanan/CareerBridge)

---

## 5. EVALUATION & REFLECTION

### 5.1 Verification of User Experience (UX)
To guarantee a bug-free user experience, the website was compiled and tested on multiple browsers (Google Chrome, Mozilla Firefox, Microsoft Edge) and viewports (standard monitors, laptops, mobile devices). Verification focused on:
1.  **Form Validation:** The contact page was verified for empty values and invalid email formats, displaying instant error messages.
2.  **Deadlines and Broken Links:** Verified that all 25+ credentials, repositories, and live project cards open correctly. SoloLearn and HackerRank links were updated with correct IDs to eliminate 404 navigation errors.
3.  **HCI Responsive Checks:** Adjusted grid parameters to prevent layout wrapping issues in the footer across varied resolutions.

### 5.2 Technical Challenges and Solutions
*   **Challenge 1: Transitioning from Static Web Design to Dynamic React State Management**
    *   *Challenge:* Transitioning from simple HTML/CSS/JS to React's declarative state-driven model presented a steep learning curve. Implementing interactive features such as the home page typewriter role rotator, animated stat counters, and the category-based certificates filter was difficult to coordinate. Early attempts to write custom timers for typescript animations and filters resulted in infinite re-render loops and resource leaks.
    *   *Solution:* Studied the React hook lifecycle in-depth. Learned to handle side-effects using the `useEffect` hook with clean dependencies arrays, and implemented cleanups (like clearing active `setInterval` or `setTimeout` references). Designed category filters by deriving arrays directly from state variables instead of creating redundant state arrays, reducing memory overhead.
*   **Challenge 2: Browser Routing Redirects on Cloud Hosting Platforms (Netlify 404 Errors)**
    *   *Challenge:* The project uses client-side routing (`React Router v7`) to enable seamless, instant page transitions without full-page reloads. While routing functioned correctly in the local development environment, uploading the build to Netlify introduced a critical user experience issue: reloading the browser or directly accessing routes other than the home page (e.g., `/certificates`, `/projects`) resulted in a default server-side `404 Page Not Found` error.
    *   *Solution:* Researched how Single-Page Applications (SPAs) interact with static web servers. Discovered that the server needs to point all path requests back to the entry point (`index.html`) so the React client-side router can resolve them. Created a redirect fallback configuration in `netlify.toml` (redirecting `/*` to `/index.html` with a `200` status code), resolving the 404 errors on refresh.
*   **Challenge 3: Balancing Modern Glassmorphism Aesthetics with Strict Accessibility (Contrast Ratios)**
    *   *Challenge:* Meeting the IS 2304 accessibility guidelines while maintaining a premium glassmorphic dark theme was a major visual design challenge. Using semi-transparent cards, background blurs, and ambient accent gradients often made sub-elements (like technology tags, muted card descriptions, and small labels) difficult to read, resulting in contrast ratios that failed WCAG accessibility benchmarks.
    *   *Solution:* Designed a structured color tokens system in `index.css` using HSL variables. Monitored color contrast ratios using browser audit tools and refined typography styles by using solid, high-contrast text shades (`#ffffff` and `#94a3b8`) for descriptions and card text on top of translucent cards. This maintained the futuristic aesthetic while ensuring text remains readable for all users.

### 5.3 Planned Future Improvements
If allowed more time, future releases would implement:
*   A **Dark/Light Mode Theme Toggle** to accommodate different user preferences and ambient lighting conditions.
*   A **Direct PDF CV/Certificate Viewer** using PDF canvas modules to let recruiters view documents inline without downloading them.
*   An **Interactive Search Filter** on the Projects page for quicker project navigation by tags.

---

## 6. CONCLUSION

Applying HCI techniques to the portfolio website turned it from a simple landing page into a clean, functional workspace. Applying Nielsen's heuristics, accessibility guidelines, and responsive layouts minimizes user effort, allowing recruiters to quickly browse and evaluate qualifications. The portfolio satisfies all module parameters and showcases a high standard of front-end development and usability rules.

---

## 7. LEARNING OUTCOMES

### 7.1 Key Academic Outcomes
*   Deepened practical understanding of **User-Centered Design (UCD)** processes, transforming theoretical guidelines into responsive components.
*   Mastered the application of **Nielsen's Heuristics** and **Accessibility standards** (color contrast, semantic layouts, and keyboard focus states).
*   Gained experience in component structuring and routing using **React 19** and **Vite**.

### 7.2 Support for Internship Goals
*   The portfolio serves as a live, functional demonstration of clean code and responsive design, directly supporting internship applications.
*   Hosting verified credentials and projects gives recruiters immediate proof of technical competence.
*   Writing this HCI evaluation report demonstrates the ability to document technical details and advocate for user-friendly interfaces in professional settings.

---

## 8. DEPLOYED WEBSITE LINK

Please visit my live React portfolio at:  
👉 **[https://spectacular-narwhal-9eb659.netlify.app](https://spectacular-narwhal-9eb659.netlify.app)**

---
*End of Report.*
