# Ink & Thread Studio — Website Project

**Module:** WEDE5020 (Web Development) — Part 1: Building the Foundation
**Student Project:** Ink & Thread Studio, a fictional creative studio offering
custom textile products, artwork and graphic design.

## Project Overview

Ink & Thread Studio currently has no website — it operates only through social
media, which makes it hard for customers to browse past work, understand
pricing/process, or submit a custom order in a structured way. This project
builds a multi-page website that gives the studio a professional online
presence, showcases its portfolio, and lets customers submit custom design
requests directly instead of relying on informal DMs.

**Goal:** Create a functional, visually distinctive website that reflects the
studio's creative identity and makes it easy for customers to browse work and
request a custom design.

**Objectives:**
- Create seven linked HTML pages covering Home, About, Services, Portfolio,
  How It Works, Request a Design, and Contact.
- Provide a working, consistent navigation menu across every page.
- Present the studio's services and past work with real descriptive content
  and supporting images.
- Provide a detailed custom design request form that captures everything
  needed to quote and produce an order.
- Apply a consistent, distinctive visual identity across all pages.

**Target audience:** Students, young adults, individuals and small businesses
looking for personalised textile products, artwork and graphic design.

## Pages / Features

| Page | Purpose |
|---|---|
| `index.html` (Home) | Introduces the studio, its tagline, and links to Portfolio and Request a Design |
| `about.html` | Studio background, creative philosophy, mission and vision |
| `services.html` | Full list of services offered, each with description and image |
| `portfolio.html` | Gallery of past work, filterable by category (filtering logic added in Part 3) |
| `how-it-works.html` | The four-step custom order process |
| `request-design.html` | Detailed custom design request form |
| `contact.html` | Contact details, social links, and a general enquiry form |

## Technologies Used

| Requirement | Tool |
|---|---|
| Code editor | Visual Studio Code |
| Browser | Google Chrome / Microsoft Edge |
| Markup | HTML5 (semantic elements: `header`, `nav`, `main`, `section`, `article`, `footer`) |
| Styling | CSS3 (Grid, Flexbox) — Part 2 |
| Version control | Git + GitHub |
| Fonts | Google Fonts (Archivo Black, Inter) |
| Images | To be legally sourced / self-produced (see Content Research below) |

## How to Open / Run the Website

1. Download or clone the repository.
2. Open the `ink-thread-website` folder in Visual Studio Code (or any editor).
3. Open `index.html` directly in a browser (double-click the file, or use the
   VS Code "Live Server" extension for auto-reload).
4. Navigate the site using the menu — every page links to every other page.

No server, database or build step is required for Part 1.

## Project Structure

```
ink-thread-website/
├── index.html
├── about.html
├── services.html
├── portfolio.html
├── how-it-works.html
├── request-design.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   ├── logo/
│   ├── general/
│   ├── studio/
│   ├── services/
│   └── portfolio/
└── README.md
```

## Sitemap

```
Home
├── About the Studio        – studio story, philosophy, mission & vision
├── Services                 – full list of services offered
│   ├── Custom T-Shirts
│   ├── Tote Bags
│   ├── Personalised Artwork
│   ├── Event Merchandise
│   └── Business Merchandise
├── Portfolio                – filterable gallery of past work
├── How It Works              – 4-step custom order process
├── Request a Design          – custom order form
└── Contact                   – contact details, socials, general enquiry form
```

All seven pages sit at the same level, one click from Home, matching the flat
navigation menu used throughout the site.

## Content Research & Sourcing

Content inventory — what each page needs, and current sourcing status:

| Page | Text content | Images/assets needed | Source / status |
|---|---|---|---|
| Home | Welcome message, tagline, service summary | Studio workbench hero image | Original copy written; image **to be sourced/photographed** |
| About | Studio story, philosophy, mission, vision | Studio workspace image | Original copy written; image **to be sourced/photographed** |
| Services | Description per service (6) | One image per service | Original copy written; images **to be sourced** (own work samples or licensed stock) |
| Portfolio | Category labels, item titles | 4+ portfolio photos across categories | **To be sourced** — own completed work, or clearly-marked placeholder/mock examples if this is a fictional studio |
| How It Works | 4-step process description | None required | Original copy written |
| Request a Design | Form field labels only | None required | N/A |
| Contact | Contact details, social handles | None required | Placeholder contact details (fictional business) |

**Sourcing plan:** All text content is original, written specifically for this
project. Images will be sourced either from the student's own photography /
design work, or from royalty-free libraries (e.g. Unsplash, Pexels) with
source and licence recorded here once selected. No copyrighted or watermarked
third-party images will be used without a licence.

## Design Direction

Theme: **"Modern Fabric Grid"** — an editorial, fashion-magazine-inspired
layout that treats the portfolio like a grid of fabric swatches, paired with
bold, confident typography to reflect the studio's creative, design-forward
identity.

- **Typography:** Archivo Black (display) + Inter (body)
- **Colour palette:** near-black, off-white, electric coral accent, muted teal
- **Signature element:** asymmetric portfolio grid with hairline borders and
  hover reveal, echoing how fabric swatches are laid out for selection

## Changelog

| Date | Change |
|------|--------|
| [add date] | Website Project Proposal drafted and submitted for lecturer approval (two proposals: RE:ROOT Youth Environmental & Skills Initiative; Ink & Thread Studio). |
| [add date] | Proposal for Ink & Thread Studio approved by lecturer. |
| [add date] | Sitemap and file/folder structure planned for Ink & Thread Studio. |
| [add date] | Initial semantic HTML structure built for all seven pages (header, nav, main, footer) with functional internal linking. |
| [add date] | Explored multiple visual design directions for the CSS build phase. |
| [add date] | Final design direction ("Modern Fabric Grid") selected and applied across all pages. |
| [add date] | Added descriptive HTML comments across every page. |
| [add date] | Added supporting images and alt text to Home, About and Services pages. |
| [add date] | Built content inventory and annotated sitemap; expanded README to cover project overview, goals, technologies and how-to-run instructions. |

*(Update the dates above to match your actual working/commit dates, and add new rows as you continue through Part 2 and Part 3.)*

## References

Google Fonts (2026) *Archivo Black*. Available at: https://fonts.google.com/specimen/Archivo+Black (Accessed: [add date]).

Google Fonts (2026) *Inter*. Available at: https://fonts.google.com/specimen/Inter (Accessed: [add date]).

Mozilla Developer Network (2026) *CSS Grid Layout*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout (Accessed: [add date]).

Mozilla Developer Network (2026) *Flexible Box Layout*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout (Accessed: [add date]).

W3Schools (2026) *HTML Forms*. Available at: https://www.w3schools.com/html/html_forms.asp (Accessed: [add date]).

Anthropic (2026) *Claude (Sonnet)* [Large language model]. Available at: https://claude.ai (Accessed: [add date]).

*(Add any further sources you personally consulted — tutorials, articles, icon libraries, image sources, etc. — using the same Harvard format.)*

## AI Usage Disclosure

Claude (Anthropic) was used to assist with planning the sitemap and content
inventory, generating the semantic HTML structure, developing the CSS design
system, and drafting this README/changelog for this project. All content was
reviewed and adapted by the student.

**Per the module's Instruction 8, remember to also prepare:**
- An in-text citation each time AI-generated content/code is used in the body of your work
- A full reference (see References above)
- An **AI disclosure annexe** with screen grab(s) of your AI tool usage, as per IIE guidelines

Check your module guide or IIE's AI referencing guidelines for the exact annexe format required.

## GitHub Commit Practice — Important

This module marks **GitHub Commits (5 marks)** on multiple, descriptive commits
made throughout development — not a single "final upload" commit. When you
push this project:

1. Commit in stages that reflect real progress (e.g. "Add folder structure and
   empty HTML shells", "Build Home and About page content", "Add navigation
   links across all pages", "Add HTML comments", "Add supporting images and
   alt text", "Expand README with content inventory and sitemap").
2. Write descriptive messages — avoid "update", "final", "changes".
3. Push regularly rather than all at once at the deadline.

You can still do this even though the files were generated together — just
break your `git add` / `git commit` into logical chunks rather than one commit.
