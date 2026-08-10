# Portfolio Design Specification

## 1. Design Objective

The portfolio should communicate one primary idea:

> **I build software, AI systems, and the infrastructure behind them.**

It should feel like an engineer's digital workspace, not a résumé template.

The design should be visually memorable while remaining professional enough for recruiters and engineering teams.

---

# 2. Visual Direction

### Keywords

```text
Dark
Technical
Minimal
Futuristic
Precise
Interactive
Professional
```

The design should take inspiration from modern developer tools and technical interfaces without directly copying any existing product.

Potential visual influences:

* Developer terminals
* Modern SaaS dashboards
* AI interfaces
* System monitoring interfaces
* Editorial typography
* Minimal futuristic UI

---

# 3. Color System

The base interface should be dark.

### Background

Primary:

```text
#080A0F
```

Secondary surfaces:

```text
#0D1118
#111722
```

### Text

Primary:

```text
#F5F7FA
```

Secondary:

```text
#9AA4B2
```

Muted:

```text
#626C7A
```

### Accent

Use one primary accent rather than a rainbow palette.

Initial direction:

```text
Electric Blue
```

Possible accent:

```text
#4D8DFF
```

The accent should be used for:

* Links
* Important buttons
* Active states
* Small highlights
* Interactive elements
* Selected project indicators

It should not cover entire sections.

---

# 4. Typography

Typography should create most of the visual hierarchy.

### Headings

Use a modern sans-serif with strong weight and clean geometry.

Suggested options:

* Inter
* Geist
* Manrope

### Body

Use the same family or a complementary highly readable sans-serif.

### Technical Text

Use a monospace font selectively for:

* Technology names
* System labels
* Small metadata
* Code snippets
* Technical indicators

Do not turn the entire website into a terminal.

---

# 5. Layout

The site should use generous spacing and strong hierarchy.

### Desktop

Maximum content width:

```text
1200px - 1400px
```

Main sections should have substantial vertical spacing.

### Mobile

Prioritize:

1. Readability
2. Navigation
3. Project content
4. Touch targets
5. Performance

Do not simply shrink the desktop design.

The mobile layout should be deliberately designed.

---

# 6. Navigation

The navigation should remain minimal.

Example:

```text
DRKN.DEV

Work
About
Contact

[GitHub]
```

On mobile:

```text
DRKN.DEV                       ☰
```

The navigation should not contain unnecessary pages.

Avoid:

* Blog
* Services
* Testimonials
* Certificates
* Random widgets

unless they later serve a clear purpose.

---

# 7. Hero Section

The hero is the most important section of the website.

It should answer three questions immediately:

```text
Who are you?
What do you build?
Where can I see your work?
```

### Structure

```text
Small technical label

FULL-STACK
DEVELOPER

Large positioning statement

I build software, AI systems,
and the infrastructure behind them.

Short supporting description.

[VIEW MY WORK] [GITHUB]
```

A subtle visual element should occupy part of the hero.

Potential visual:

* AI orb
* Abstract system visualization
* Interactive grid
* Terminal-inspired interface
* Particle field

The visual should support the identity rather than distract from the headline.

---

# 8. Hero Interaction

Motion should be subtle.

Possible interactions:

* Text reveal
* Cursor-reactive glow
* Slow background movement
* Floating technical metadata
* Button hover transitions

Avoid:

* Excessive particle effects
* Constant spinning
* Large autoplay animations
* Effects that interfere with reading

Respect:

```text
prefers-reduced-motion
```

---

# 9. Selected Work

This is the most important section after the hero.

The projects should not appear as a generic grid of equal cards.

The first project should receive significantly more visual space.

### Featured project layout

```text
PROJECT 01

RUNE

Personal AI Assistant

[ LARGE PROJECT VISUAL ]

Description

Technical stack

Key engineering details

[CASE STUDY] [GITHUB]
```

The project visual should be large enough to immediately communicate what was built.

---

# 10. Project Case Study Structure

Each major project should communicate:

```text
01. Problem
02. Solution
03. Architecture
04. Technologies
05. Technical decisions
06. Result
07. Links
```

Not every project needs a full case study page initially.

However, each project must provide more evidence than:

```text
"This is an AI app built with Python."
```

---

# 11. Project Visuals

Every major project should eventually have:

* Product screenshot
* Architecture diagram where useful
* Short demo video/GIF where useful
* GitHub repository
* Live deployment where available

The portfolio should visually prove that the projects exist.

---

# 12. Engineering Section

Do not create a giant wall of technology logos.

Instead, organize skills around actual engineering areas.

### Example

```text
FRONTEND
React
TypeScript
Tailwind
Flutter

BACKEND
Python
Flask
REST APIs
PostgreSQL

AI
OpenAI APIs
Machine Learning
Computer Vision
Speech Interfaces

SYSTEMS
Git
Docker
Cloud
IoT
```

Each major skill should ideally connect to a project where it was actually used.

---

# 13. About Section

The About section should not become a biography.

Keep it focused on:

* What I build
* What I am learning
* What problems interest me
* Where I am heading technically

The writing should be concise and specific.

Avoid generic statements such as:

> "I am passionate about technology and solving problems."

Replace them with actual evidence and interests.

---

# 14. Contact Section

The contact section should be extremely simple.

Example:

```text
HAVE A PROJECT IN MIND?

Let's build something useful.

[EMAIL ME]
[GITHUB]
[LINKEDIN]
```

Do not build a complicated contact form unless there is a real need for it.

---

# 15. Motion System

Animation should communicate hierarchy.

### Page entrance

Subtle fade + movement.

### Section entrance

Reveal content when it enters the viewport.

### Project hover

Slight image movement or scale.

### Buttons

Small movement and glow.

### Navigation

Smooth state transitions.

Animation should feel intentional.

If an animation exists only because it looks cool for three seconds, remove it.

---

# 16. Components

Initial component structure:

```text
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── SectionHeading.tsx
│   ├── ProjectCard.tsx
│   ├── FeaturedProject.tsx
│   ├── Skills.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
│
├── data/
│   └── projects.ts
│
├── pages/
│   └── Home.tsx
│
├── App.tsx
└── main.tsx
```

Keep components focused.

Do not create abstractions before repetition actually exists.

---

# 17. Responsive Strategy

### Desktop

Prioritize:

* Large typography
* Wide project visuals
* Two-column layouts
* Strong whitespace
* Interactive effects

### Tablet

Reduce:

* Font sizes
* Grid columns
* Horizontal spacing

### Mobile

Use:

* Single-column layout
* Full-width project visuals
* Simplified navigation
* Reduced animation
* Comfortable touch targets

Every major component must be tested at:

```text
Mobile
Tablet
Desktop
Large Desktop
```

---

# 18. Accessibility

The design must support:

* Keyboard navigation
* Visible focus states
* Semantic HTML
* Sufficient contrast
* Alt text
* Reduced motion
* Screen readers

Visual sophistication is worthless if the site becomes unusable.

---

# 19. Performance

Performance requirements:

* Compress project images.
* Lazy-load non-critical media.
* Avoid unnecessary JavaScript.
* Avoid huge animation libraries for tiny effects.
* Keep the initial bundle reasonable.
* Optimize fonts.
* Avoid autoplay video unless necessary.

The site should feel fast before it feels fancy.

---

# 20. Design Rules

### DO

* Use strong typography.
* Use whitespace.
* Make projects visually dominant.
* Use one primary accent.
* Make interactions purposeful.
* Show technical evidence.
* Keep the interface coherent.

### DON'T

* Use excessive gradients.
* Use skill-bar percentages as fake measurements.
* Fill every section with cards.
* Add animations everywhere.
* Add technologies just because they look impressive.
* Add a chatbot just because the portfolio is about AI.
* Add a backend without a reason.
* Copy another developer's portfolio.
* Let AI generate components you cannot explain.

---

# 21. First Build Target

The first implementation should contain only:

```text
Navbar
   ↓
Hero
   ↓
Featured Rune Project
```

Nothing else.

The goal is to establish:

* Typography
* Color system
* Spacing
* Visual hierarchy
* Component structure
* Animation language

Once those are correct, expand the site.

---

# 22. Definition of Done

The portfolio design is considered successful when a new visitor can answer these questions quickly:

```text
Who is this?

What does he build?

What are his strongest projects?

Can I inspect the projects?

What technologies does he actually use?

How can I contact him?
```

And most importantly:

> **The portfolio itself should be evidence that its creator can build good software.**
