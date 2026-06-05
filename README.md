# Professional Anime-Themed Portfolio

A clean, modern portfolio website with an anime-inspired color theme, built for GitHub Pages.

## Features

✨ **Modern Design**
- Anime-inspired color palette (Purple, Pink, Cyan)
- Smooth animations and transitions
- Responsive design (mobile, tablet, desktop)
- Dark theme with glassmorphism effects

📱 **Fully Responsive**
- Mobile-first design
- Works on all screen sizes
- Touch-friendly navigation

🎯 **Complete Sections**
- Hero/Landing section
- About Me
- Projects (with GitHub links)
- Skills
- Experience (timeline view)
- Certificates
- Contact form
- Social links

🚀 **Easy to Customize**
- Simple HTML structure
- Well-organized CSS with variables
- Minimal JavaScript for interactivity
- Easy to add your own projects

## Quick Start

1. **Clone/Download the files** to your computer

2. **Update Personal Information:**
   - Open `index.html` and replace placeholder text with your information
   - Update your name, bio, skills, experience, etc.

3. **Add Your Projects:**
   - In the Projects section, replace project titles and descriptions
   - Update GitHub links in the `href` attributes
   - Add project tags and technologies

4. **Add Your Resume:**
   - Replace the resume download link or path
   - In `script.js`, uncomment and update the resume path

5. **Setup Contact Form:**
   - Option 1: Use EmailJS for email functionality (see script.js comments)
   - Option 2: Connect to a backend service
   - Option 3: Use a third-party form service

6. **Add Social Links:**
   - Update social media URLs in the Contact section
   - Replace placeholder links with your actual profiles

## Customization Guide

### Colors
Edit the color variables in `styles.css`:
```css
:root {
    --primary: #7c3aed;      /* Main color */
    --secondary: #ec4899;    /* Accent color */
    --accent: #06b6d4;       /* Secondary accent */
    /* ... more colors ... */
}
```

### Fonts
The portfolio uses 'Segoe UI' as default. To change:
```css
body {
    font-family: 'Your Font Here', sans-serif;
}
```

### Resume Download
In `script.js`, uncomment and update:
```javascript
window.open('path/to/your/resume.pdf', '_blank');
```

### Email Form
To enable email functionality:
1. Sign up for [EmailJS](https://www.emailjs.com/)
2. Follow their setup guide
3. Uncomment the email function in `script.js`
4. Add your EmailJS credentials

## Deploy to GitHub Pages

1. Create a new GitHub repository named `username.github.io` (replace "username" with your GitHub username)

2. Push your portfolio files to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/username/username.github.io.git
   git push -u origin main
   ```

3. Your portfolio will be live at `https://username.github.io`

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # JavaScript functionality
├── README.md           # This file
└── Certificates/       # Folder for certificate images (optional)
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Tips

- Use high-quality images for projects
- Keep descriptions concise and impactful
- Test on mobile devices before deploying
- Update portfolio regularly with new projects
- Keep GitHub links working and updated

## License

This portfolio template is free to use and modify for personal use.

## Need Help?

- Check the comments in `styles.css` and `script.js`
- Test in your browser's developer tools
- Ensure all file paths are correct
- Make sure social links and GitHub URLs are complete

---

**Made with ✨ for your success!**
