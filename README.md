# Qiana Cunningham — Portfolio

A clean, responsive personal portfolio website. Built with plain HTML, CSS, and JavaScript — no frameworks or build tools required.

## 🗂 File Structure

```
QianaCunningham_Portfolio/
├── index.html   ← main page (all sections live here)
├── styles.css   ← all styles / colors / layout
├── script.js    ← nav toggle, active link, contact form
└── README.md
```

## ✏️ How to Customize

### 1. Personal info
Open **`index.html`** and update:
| What to change | Where to find it |
|---|---|
| Your name | `<div class="nav-brand">` and `<h1 class="hero-name">` |
| Your title / tagline | `<p class="hero-tagline">` |
| Bio paragraph | Inside `<div class="about-text">` |
| Profile photo | Replace the `<div class="avatar-placeholder">` block with `<img src="profile.jpg" alt="Qiana Cunningham" class="profile-img" />` |
| Resume link | `<a href="#" class="btn btn-primary" download>` — change `#` to the path of your PDF |
| Social links | The four `<a>` tags inside `<div class="social-links">` |
| Email | `<a href="mailto:your@email.com">` |

### 2. Skills
Edit the `<div class="skills-grid">` section. Each skill is a `<div class="skill-card">` with a Font Awesome icon and a label.  
Browse icons at [fontawesome.com/icons](https://fontawesome.com/icons).

### 3. Projects
Each project card lives inside `<div class="projects-grid">`. Copy-paste a card block and fill in:
- Project title and description
- Live demo URL
- GitHub repo URL
- (Optional) Replace the `<div class="project-img-placeholder">` with a real screenshot: `<img src="project1.png" alt="Project One" />`

### 4. Colors & fonts
Open **`styles.css`** and edit the `:root` block at the top:

```css
:root {
  --primary:  #6c63ff;   /* accent color */
  --bg:       #0f0f0f;   /* dark background */
  --bg-alt:   #1a1a2e;   /* alternate section background */
  --surface:  #16213e;   /* card background */
  --text:     #e0e0e0;   /* body text */
  /* ... */
}
```

### 5. Contact form
The form currently shows a success message client-side only.  
To actually receive emails, sign up for a free service like [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com) and update **`script.js`** with your API call in the `submit` handler.

## 🚀 Deploy with GitHub Pages

1. Go to **Settings → Pages** in this repository.
2. Under *Source*, select **Deploy from a branch**.
3. Choose `main` branch / `/ (root)` folder.
4. Click **Save** — your site will be live at `https://<your-username>.github.io/QianaCunningham_Portfolio/`.

## 📄 License

Feel free to use and modify this template for your own portfolio.