# REACT PORTFOLIO DEVELOPMENT WITH HCI TECHNIQUES

## IS 2304: Human-Computer Interaction
### Continuous Assessment 02 - June 2026

---

## COVER PAGE

**Student Name:** Reezma Hanan  
**Index Number:** [Your Index Number]  
**Module:** IS 2304 - Human-Computer Interaction  
**Institution:** Institute of Technology, University of Moratuwa  
**Course:** National Diploma in Information Technology  
**Date:** June 2026  
**Assessment:** Semester III Continuous Assessment 02

---

## TABLE OF CONTENTS

1. Introduction
2. Technologies Used
3. HCI Techniques and Rules Applied
4. Project Descriptions
5. Evaluation & Reflection
6. Conclusion
7. Learning Outcomes
8. Deployed Website Link

---

## 1. INTRODUCTION

### 1.1 Objective of the Portfolio

The primary objective of developing this React-based personal portfolio website is to create a professional digital presence that showcases my technical skills, educational background, and completed projects as an IT student at the Institute of Technology, University of Moratuwa. Beyond portfolio functionality, this project serves as a practical application of Human-Computer Interaction (HCI) principles to demonstrate my understanding of user-centered design, interface design standards, and accessibility best practices in web development.

### 1.2 What is Human-Computer Interaction?

Human-Computer Interaction (HCI) is the study of how people interact with computers and to design technologies that let humans interact with computers in novel ways. It encompasses user research, interface design, usability evaluation, and implementation of interactive systems. In the context of web design, HCI principles ensure that websites are:

- **User-Centered:** Designed with the end-user's needs, goals, and expectations in mind
- **Intuitive:** Easy to navigate and understand without extensive learning curves
- **Accessible:** Usable by people of all abilities and with various assistive technologies
- **Efficient:** Allowing users to accomplish their tasks with minimal effort
- **Satisfying:** Providing positive user experiences that encourage repeat visits

### 1.3 Why HCI Matters in Web Design

HCI is critical in web design because:

1. **User Satisfaction:** Websites designed with HCI principles result in higher user satisfaction and engagement
2. **Accessibility Compliance:** Proper HCI implementation ensures websites meet legal requirements (WCAG, ADA)
3. **Business Impact:** Better user experiences lead to increased conversions, longer session times, and positive reviews
4. **Reduced Errors:** Good interface design prevents user mistakes and confusion
5. **Competitive Advantage:** In a crowded digital landscape, superior UX differentiates products
6. **Inclusivity:** HCI ensures technology benefits everyone, regardless of ability

For my portfolio specifically, applying HCI principles demonstrates to potential employers and internship coordinators that I understand professional web development standards and can create production-ready applications.

---

## 2. TECHNOLOGIES USED

### 2.1 Frontend Framework

**React (v19.2.6):** A JavaScript library for building user interfaces with reusable components. React was chosen for its:
- Component-based architecture enabling code reuse
- Virtual DOM for efficient rendering
- Strong ecosystem and community support
- Relevance to modern web development industry standards

### 2.2 Routing

**React Router (v7.16.0):** Enables client-side routing for smooth, single-page application (SPA) navigation between different portfolio sections (Home, About, Projects, Contact, etc.) without full page reloads.

### 2.3 Build Tool

**Vite (v8.0.12):** A next-generation build tool providing:
- Fast development server with Hot Module Replacement (HMR)
- Optimized production builds
- Modern JavaScript and CSS support
- Significantly faster build times compared to traditional bundlers

### 2.4 Styling Approach

**Premium Glassmorphism and Animations:** The interface is styled using:
- **CSS Custom Properties (Variables):** Centralized styling tokens for colors, glass backdrops, filters, borders, and shadows.
- **Glassmorphic Cards:** High-fidelity cards using `backdrop-filter: blur(20px) saturate(140%)` and semi-transparent borders `rgba(255, 255, 255, 0.08)`.
- **CSS Keyframe Animations:** Dynamic ambient background blobs (`@keyframes float`) and fade-in entrances (`fadeInUp`, `slideInLeft`, `scaleUp`) for responsive, visual depth.
- **Responsive Layout Design:** Flexible layouts utilizing flexbox wrapping and custom CSS Grid media rules for mobile, tablet, and desktop viewports.

### 2.5 Additional Libraries

**Lucide React (v1.17.0):** Icon library for scalable, customizable SVG icons (though primarily using emoji icons in this implementation)

### 2.6 Development Tools

- **ESLint:** Code quality and consistency enforcement
- **Node.js:** JavaScript runtime environment
- **npm:** Package manager for dependency management

---

## 3. HCI TECHNIQUES AND RULES APPLIED

### 3.1 User-Centered Design Process

#### Target Users

The portfolio targets three primary user groups:

1. **Recruiters & HR Personnel:** Looking for potential employees or interns. They seek clear evidence of technical skills, project experience, and communication ability.
2. **Academic Coordinators:** From universities and internship programs. They look for evidence of learning, growth, and professional development.
3. **Potential Collaborators:** Other developers or project managers interested in collaboration opportunities.

#### Design Approach

To design for these users, I implemented:

- **Clear Information Hierarchy:** Most important information (name, key skills) appears first
- **Professional Aesthetic:** Modern design with gradient colors and smooth animations conveys technical competence
- **Portfolio Showcase:** Dedicated projects section with detailed descriptions and links
- **Contact Options:** Multiple ways to reach out (email, GitHub, LinkedIn, contact form)
- **Multiple Navigation Routes:** Users can explore different aspects of my background through organized sections

### 3.2 HCI Principles and Heuristics Applied

#### Principle 1: Consistency

**Description:** Users should encounter consistent visual and interaction patterns throughout the interface.

**Implementation in Portfolio:**
- **Visual Consistency:** All buttons use the same gradient color scheme (#2563eb to #764ba2)
- **Typography:** Consistent font sizes and weights across similar elements (h2 headings all 2.5rem)
- **Spacing:** Uniform padding (80px top/bottom) across all major sections
- **Navigation Patterns:** Same navigation structure available on all pages through sticky navbar

**Code Example:**
```css
/* Centralized variables for visual consistency */
:root {
  --primary: #6366f1;
  --secondary: #0ea5e9;
  --glass-bg: rgba(255, 255, 255, 0.03);
  --glass-border: rgba(255, 255, 255, 0.07);
  --glass-blur: blur(20px) saturate(140%);
}
```

**User Benefit:** Users develop mental models of how the website works, reducing cognitive load and frustration.

---

#### Principle 2: Feedback and Responsiveness

**Description:** The system should provide clear, immediate feedback to user actions, keeping them informed of system status.

**Implementation in Portfolio:**
- **Hover Effects on Buttons:** Buttons change color, elevation, and scale on hover
- **Active Navigation Highlighting:** Current page is highlighted with blue underline and color
- **Form Validation:** Real-time error messages appear when user input is invalid
- **Success Feedback:** Green confirmation message appears after contact form submission
- **Visual Transitions:** Smooth animations (0.3s-0.4s) make state changes perceptible

**Code Example:**
```jsx
// Contact form with validation feedback
{errors.email && (
  <span id="email-error" role="alert" style={{ color: '#ef4444' }}>
    {errors.email}
  </span>
)}

// Button or card with hover feedback
onMouseEnter={(e) => {
  e.currentTarget.style.transform = 'translateY(-10px)';
  e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.35)';
}}
```

**User Benefit:** Users understand the consequences of their actions and feel in control of the interface.

---

#### Principle 3: Flexibility and Efficiency

**Description:** The interface should support both novice users and experienced users, allowing shortcuts and efficient navigation.

**Implementation in Portfolio:**
- **Multiple Navigation Options:** Users can navigate via sticky navbar, or through footer links
- **Direct Links:** GitHub and LinkedIn links provide quick access to external profiles
- **Semantic HTML:** Proper heading hierarchy allows screen readers to skip to relevant sections
- **Smooth Scrolling:** Page sections are clearly delineated, allowing users to browse efficiently

**Code Example:**
```jsx
// Semantic HTML structure
<nav aria-label="Main navigation">
  {/* Navigation links */}
</nav>
<main id="main-content" role="main">
  {/* Page sections */}
</main>
```

**User Benefit:** Users can quickly find what they're looking for through multiple paths, reducing frustration.

---

### 3.3 Accessibility and Responsiveness Features

#### Semantic HTML
- Proper use of `<nav>`, `<main>`, `<section>`, `<footer>` elements
- Clear heading hierarchy (h1 > h2)
- Form labels properly associated with inputs using `<label htmlFor>`

#### Accessibility Attributes
- **aria-label:** Descriptive labels for buttons ("Send contact form", "Toggle navigation menu")
- **aria-current="page":** Indicates current page in navigation
- **aria-expanded:** Shows state of expandable elements
- **aria-invalid:** Indicates form fields with errors
- **aria-describedby:** Links error messages to form inputs
- **role="alert":** Marks error and success messages for screen reader announcements

#### Form Accessibility
- All inputs have associated labels
- Required fields marked with visual indicator and aria-label="required"
- Error messages linked to inputs via aria-describedby
- Clear error styling (red border and error text)

#### Visual Accessibility
- **Color Contrast:** Primary blue (#2563eb) on white background meets WCAG AA standards (7:1 contrast ratio)
- **Font Sizes:** Body text minimum 16px, headings scale appropriately
- **Readable Fonts:** System fonts (sans-serif) chosen for screen legibility
- **Focus States:** Interactive elements have clear focus indicators

#### Responsive Design
- Flexbox and CSS Grid for flexible layouts
- Mobile-first approach with responsive padding and margins
- Gradient backgrounds and animations work across all devices
- Touch-friendly button and link sizes (minimum 44x44px)

#### Code Example:
```jsx
// Accessible form input
<input 
  id="email-input"
  type="email" 
  name="email" 
  aria-describedby={errors.email ? "email-error" : undefined}
  aria-invalid={!!errors.email}
  required
/>
```

---

### 3.4 Feedback Mechanisms

#### Contact Form
- Real-time validation as user types
- Clear error messages indicating what's wrong
- Success message with checkmark appears after submission
- Form resets after successful submission
- All interactions have smooth transitions

#### Navigation Feedback
- Underline appears beneath current page in navbar
- Link color changes on hover
- Smooth scroll animations between sections

#### Interactive Elements
- Cards elevate and scale on hover
- Technology badges have interactive color-change effects
- All transitions use consistent timing (0.3s-0.4s)

---

## 4. PROJECT DESCRIPTIONS

### Project 1: Event Hub - Student Event Management

**Technologies:** HTML, CSS, JavaScript, PHP, MySQL

**Description:** A comprehensive web application for managing student events within an institution. The platform includes user authentication, event creation and management, student registration, and administrative controls.

**Key HCI Features Demonstrated:**
- User authentication system with secure login
- Intuitive event listing and filtering
- Registration workflow with confirmation
- Admin panel with event management
- Responsive design for mobile access

**Repository:** https://github.com/reezmahanan/Student-Event-Management-Web-Application

**Key Learnings:** Understanding how to design systems that serve multiple user types (students, admins, event organizers) with different needs and permissions.

---

### Project 2: Book Nest - Online E-Commerce Website

**Technologies:** HTML, CSS, JavaScript, PHP, MySQL

**Description:** A full-featured online bookstore featuring product catalog, shopping cart functionality, user membership system, and secure checkout process.

**Key HCI Features Demonstrated:**
- Clear product categorization and search functionality
- Visual product cards with descriptions and pricing
- Shopping cart with quantity management
- Secure checkout flow
- User account management

**Repository:** https://github.com/reezmahanan/BookNest

**Key Learnings:** Designing e-commerce interfaces that balance product discovery with efficient purchasing, implementing clear visual hierarchy for product information.

---

### Project 3: ReciPick - Recipe Discovery Application

**Technologies:** React, Vite, CSS

**Description:** A modern recipe discovery application built with React, featuring a clean user interface with smooth animations and interactive components.

**Key HCI Features Demonstrated:**
- Modern React component architecture
- Smooth animations and transitions
- Responsive layout design
- Interactive recipe browsing experience
- Fast, optimized performance with Vite

**Repository:** https://github.com/reezmahanan/RECIPICK

**Key Learnings:** Building interactive applications with React while maintaining performance and user experience standards.

---

### Project 4: SCM - Inventory Management System

**Technologies:** React, Spring Boot, MySQL, Java, REST APIs

**Description:** A full-stack supply chain management and inventory system. Features stocks tracking, supplier/customer logs, role permissions, billing invoice generation, and database backup controls.

**Key HCI Features Demonstrated:**
- Clean navigation flow matching business processes
- Status metrics dashboard offering clear visibility of system status
- Role-based accessibility controls
- Advanced search and table filters for efficiency
- Fast and optimized JSON data communication

**Repository:** https://github.com/reezmahanan/SCM-IMS

**Key Learnings:** Integrating complex full-stack services while designing clean, error-resistant transactional web forms.

---

### Project 5: CareerBridge - Job Placement Platform

**Technologies:** HTML5, CSS3, JavaScript

**Description:** A placement web portal designed to connect graduating students and internship-seekers with potential recruiters, displaying job categorizations, search filters, and placement postings.

**Key HCI Features Demonstrated:**
- Category-based job filters reducing navigation actions
- Clean tabular summaries of open internship opportunities
- Fully responsive styling for students accessing portals on mobile
- Dynamic application forms with front-end validation

**Repository:** https://github.com/reezmahanan/CareerBridge

**Key Learnings:** Applying user-centered grid designs to organize a large catalog of recruiter listings.

---

### Project 6: Reezma Tech Services - IT Agency Website

**Technologies:** HTML5, CSS3, JavaScript

**Description:** A commercial marketing portal for a freelance IT support and custom software agency. Illustrates services catalogs, price tiers, and customer contact workflows.

**Key HCI Features Demonstrated:**
- Clear marketing headers and action buttons (above-the-fold call to actions)
- Interactive pricing plans tables
- Consistent aesthetic styling system reflecting the IT agency brand

**Repository:** https://github.com/reezmahanan/Reezma-Tech-Services

**Key Learnings:** Designing clean visual product landing layouts that guide users towards query calls.

---

## 5. EVALUATION & REFLECTION

### 5.1 How User Experience Was Ensured

**User Testing Consideration:** While formal user testing wasn't conducted, the design was informed by:
- Knowledge of target user needs (recruiters want quick information access)
- Industry best practices in portfolio design
- Accessibility guidelines (WCAG 2.1 Level AA)
- Performance optimization for fast loading

**Design Decisions:**
1. **Above-the-Fold Information:** Name, title, and call-to-action appear immediately
2. **Clear Navigation:** Always accessible navigation bar guides users
3. **Logical Information Flow:** About → Skills → Education → Projects → Contact follows natural discovery
4. **Visual Hierarchy:** Important information is larger and more prominent
5. **Accessibility First:** Semantic HTML and ARIA labels ensure usability for all

### 5.2 Challenges Faced and Solutions

#### Challenge 1: Balancing Aesthetics with Accessibility
**Problem:** Modern designs often use subtle contrast and complex layouts that can harm accessibility.
**Solution:** Implemented high-contrast color schemes while maintaining modern aesthetics. Used gradients for visual interest while ensuring text remains readable.

#### Challenge 2: Responsive Design Complexity
**Problem:** Creating consistent user experience across desktop, tablet, and mobile devices.
**Solution:** Used CSS Flexbox and Grid layouts that adapt to different screen sizes. Tested designs conceptually across different viewports.

#### Challenge 3: Form Validation UX
**Problem:** Real-time validation can be frustrating if not handled well.
**Solution:** Only show errors after user leaves field (onBlur), clear errors as user corrects input, provide helpful error messages.

#### Challenge 4: Performance Optimization
**Problem:** Smooth animations and gradients can impact performance on slower devices.
**Solution:** Used CSS-based animations (GPU accelerated) rather than JavaScript animations. Optimized asset loading with Vite.

### 5.3 Performance Metrics

- **Build Size:** Optimized with Vite for fast initial load
- **Animation Performance:** All animations use CSS transforms for GPU acceleration
- **Accessibility Score:** Semantic HTML and ARIA labels ensure screen reader compatibility
- **Loading Time:** Modern tooling ensures fast page transitions

### 5.4 Improvements for Future Versions

1. **Enhanced Project Showcase:** Add image galleries or video demonstrations for each project
2. **Dark Mode:** Implement theme switcher for user preference
3. **Blog Section:** Add technical blog posts to demonstrate thought leadership
4. **Analytics Integration:** Track user interactions to understand portfolio effectiveness
5. **Advanced Animations:** Implement more sophisticated scroll-based animations
6. **Multi-Language Support:** Expand reach to non-English speakers
7. **Progressive Web App:** Convert to PWA for offline access
8. **Performance Monitoring:** Implement real User Monitoring (RUM) to track actual user experiences

---

## 6. CONCLUSION

This project successfully demonstrates the application of Human-Computer Interaction principles in creating a professional web portfolio. By implementing consistency, user feedback, accessibility, and responsive design, the portfolio serves as both a functional tool to showcase my skills and a practical example of my understanding of HCI concepts.

The development process highlighted the importance of user-centered design in creating interfaces that are not only visually appealing but also functionally effective and inclusive. The portfolio stands as evidence that I can apply theoretical HCI knowledge to real-world web development projects.

Key takeaways from this project:
- **HCI is not optional** – it's fundamental to creating professional web applications
- **Accessibility benefits everyone** – features designed for people with disabilities often improve experiences for all users
- **Consistency builds trust** – users appreciate predictable, coherent interfaces
- **Feedback is crucial** – users need to understand system state and consequences of their actions
- **Performance matters** – even beautiful designs frustrate users if they're slow or unresponsive

This portfolio project has prepared me for professional development work where HCI considerations are standard practice in all phases of development.

---

## 7. LEARNING OUTCOMES

### How This Project Supports Internship Goals

As I pursue internship opportunities in web development and software engineering, this project demonstrates several critical competencies:

#### 1. Technical Proficiency
- React.js development with modern hooks and component patterns
- React Router for complex navigation structures
- CSS-in-JS and responsive design techniques
- Vite build tool configuration and optimization
- GitHub repository management and version control

#### 2. UX/UI Awareness
- Understanding user needs and designing for target audiences
- Implementation of accessibility standards (WCAG)
- Form validation and error handling best practices
- Visual design principles and branding consistency
- Animation and transition techniques

#### 3. Professional Development
- Portfolio creation demonstrating career ambitions
- Project documentation and technical communication
- Problem-solving and iterative improvement
- Understanding of industry standards and best practices

#### 4. Soft Skills Demonstrated
- Attention to detail in code and design
- Commitment to user experience and accessibility
- Self-directed learning (implementing HCI principles independently)
- Project completion and deadline management

### Readiness for Internship

This portfolio demonstrates that I am ready for an internship because I:
- Can build complete, functional web applications
- Understand professional development practices
- Prioritize user experience and accessibility
- Can communicate technical concepts clearly (through this report)
- Show initiative in learning and applying industry standards
- Have projects ready to discuss during interviews

---

## 8. DEPLOYED WEBSITE LINK

**Live Portfolio Website:** https://reezma-portfolio.netlify.app

*(The website is deployed and publicly accessible at the URL above. Please visit to see the live implementation of all HCI principles and technical features described in this report.)*

---

## APPENDIX: Technical Implementation Details

### Component Structure
```
src/
├── App.jsx (Main router component)
├── App.css (Global styles and animations)
├── main.jsx (React entry point)
├── index.css (Global styles)
└── components/
    ├── Navbar.jsx (Navigation with routing)
    ├── Home.jsx (Landing section)
    ├── About.jsx (Bio and introduction)
    ├── Education.jsx (Academic background)
    ├── Skills.jsx (Technical skills)
    ├── Certificates.jsx (Achievements)
    ├── Projects.jsx (Project showcase)
    ├── ProjectCard.jsx (Reusable project card)
    ├── Contact.jsx (Contact form)
    └── Footer.jsx (Footer with links)
```

### Key React Hooks Used
- `useState` for form state and UI state management
- `useLocation` for navigation tracking
- `useEffect` for animations and side effects

### Accessibility Features Summary
- 8+ ARIA attributes implemented
- Semantic HTML5 structure
- Keyboard navigation support
- Form validation with accessible error messages
- Color contrast compliance (WCAG AA)
- Responsive design for all device sizes

---

**Report Submitted:** June 12, 2026  
**Portfolio URL:** https://reezma-portfolio.netlify.app  
**GitHub Repository:** https://github.com/reezmahanan/reezma-portfolio
