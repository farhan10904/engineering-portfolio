# Manage the engineering portfolio

Edit **`assets/js/portfolio-data.js`** on GitHub. This is the main place for adding, hiding, promoting or removing projects. The homepage, project archive and sidebar navigation use this data automatically.

## Add a project

1. Open `assets/js/portfolio-data.js` on GitHub and click the pencil icon.
2. Copy an existing project entry and paste it inside the `projects: [ ... ]` array.
3. Change its unique `id`, `title`, `category`, `summary` and `technologies`.
4. Use `featured: true` to show a large card on the homepage, or `featured: false` to list it in the archive.
5. Set `ready: true` to enable its detail page. **For a new project, leave `page` empty/omitted.** Its page will then be `project.html?id=YOUR_ID`, populated from `details`.
6. Commit the file to the `main` branch. GitHub Pages will rebuild automatically.

Example (paste this *inside* the projects array, between other entries):

```js
{
  id: "epicyclic-gear",
  title: "Epicyclic Gear Assembly",
  category: "cad",
  featured: false,
  visible: true,
  ready: true,
  label: "MECHANICAL DESIGN",
  summary: "CAD assembly demonstrating epicyclic gearbox components and motion.",
  technologies: "Fusion 360",
  image: "",
  github: "",
  medium: "",
  report: "",
  details: [
    { heading: "Design objective", text: "Explain the design objective." },
    { heading: "Implementation", text: "Describe what you modelled and how." },
    { heading: "Validation", text: "Describe your actual checks and results." }
  ]
},
```

The example description is illustrative. Replace it with verified project information before publishing it.

## Hide, remove or reorder

- `visible: false` hides the project everywhere without deleting the text.
- Delete its entire entry to remove it permanently from the catalogue.
- Move the entry up or down to change its order in the navigation and project listings.
- `featured: true/false` chooses between featured cards and the archive.
- `ready: false` disables the detail-page link while retaining its title in the navigation/archive.
- Edit `categories` to rename or reorder the expandable sidebar categories, but keep IDs consistent with project `category` values.

## Link to your work when ready

- `github`: a specific project's repository URL.
- `medium`: the published article URL.
- `report`: an accessible PDF/report URL.
- `image`: a path such as `assets/images/epicyclic-gear.jpg`. Upload the image into that folder first.

Leave unavailable links as empty strings. Empty buttons **do not appear**.

## Existing projects

The four main case studies still use their original HTML pages (`projects/gimbal.html`, `robot.html`, `brayton.html`, `radar.html`) to preserve detailed material. Their sidebar listings and featured cards are still controlled by `portfolio-data.js`. To revise their long-form body content, edit those individual pages.

New projects without a `page` field use the shared `project.html` page. You can add headings to the `details` array without touching HTML.

## Other website sections

- Homepage introduction, skills, writing introduction, contacts: `index.html`.
- Styling and theme: `assets/css/portfolio.css`.
- Site-wide category/project list: `assets/js/portfolio-data.js`.
- Automatic rendering: `assets/js/portfolio-render.js` (normally do not edit).

HTML5 UP attribution and original licence remain in place.


## Project photographs and graph expansion

Images on project case-study pages now gain an automatic **Expand ↗** link.
Visitors can click either the photograph or the link to open the original image at full resolution.
This includes project photos, CAD renders, KiCad diagrams and saved simulation plots.

For a custom HTML project page, put each image inside a `<figure>` with an optional `<figcaption>`.
For a new catalogue-generated project, supply `image` in `portfolio-data.js`; it will be expandable automatically.
The shared script is `assets/js/project-image-expand.js`; you do not need to add links by hand.
Featured homepage thumbnails continue to open their corresponding project pages.


## Reusable pages for smaller projects

The imported archive case studies now use a single page (`project.html?id=PROJECT_ID`). No separate HTML file is required. Edit the project's entry in `assets/js/portfolio-data.js` to change any of these:

- `type`: accurate project type (e.g. university coursework, independent build, training)
- `summary`, `technologies`: introductory text
- `facts`: small key-value summary cards (`value` and `label`)
- `sections`: ordered case-study sections. Each supports `heading`, `paragraphs` (array of strings), `bullets` (array of strings) and `images` (array of `{src, caption, alt}`)
- `github`, `medium`, `report`: optional links, displayed only when present

There is no need to duplicate navigation links or change the page layout. Any source figure in a `sections[].images` array automatically gains an Expand link.

### Notion archive image upload (one-time)

The additional project pictures are packaged in `portfolio_additional_images.zip`. Extract it and upload its `assets/images/archive/` images into **the exact same folder path** in the GitHub repository on `main`. Keep the provided filenames unchanged.

Before the files are uploaded, the new text pages remain accessible; any unavailable images are hidden instead of displaying broken-image icons. Once uploaded, the original figures appear automatically.

## Avoid duplication

The Wokwi gimbal and radar simulations are explicitly labelled development stages of the larger physical projects, not separate completed hardware builds. The CAD and PCB subprojects link to the associated full gimbal repository. Use `featured: false` for these smaller entries.


## Homepage: More engineering projects

The six smaller image cards under the four featured projects are controlled by
`showcaseOrder` in `assets/js/portfolio-data.js`.
Set it to a number (1–6) for the projects you want visible, and remove that
property for projects that should appear only in the full archive.
`cardSummary` supplies the short secondary-card description, while `image`
(optional) supplies the thumbnail. Projects without an image use a neutral
technical placeholder; their category/archive listing still works.

For completed external repositories set `github` to the actual GitHub URL.
Images from the Clutch and Epicyclic repositories are linked directly from
their published `Images/` folders so they don't need a second GitHub Pages
upload.
