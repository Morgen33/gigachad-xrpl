# Quick Image Reference

## Where to Put Images

1. **Create subfolders** in the `images/` folder:
   ```
   images/
     ├── memes/
     ├── apparel/
     ├── fitness/
     └── hero/
   ```

2. **Add images** to those folders

3. **Reference in HTML** like this:

## Examples

### Hero Background Image
```html
<!-- In CSS (styles.css) -->
.hero {
    background-image: url('images/hero/gigachad-bg.jpg');
    background-size: cover;
    background-position: center;
}
```

### Meme Gallery
```html
<div class="meme-gallery">
    <img src="images/memes/meme1.jpg" alt="GIGA Meme 1" loading="lazy">
    <img src="images/memes/meme2.jpg" alt="GIGA Meme 2" loading="lazy">
    <img src="images/memes/meme3.jpg" alt="GIGA Meme 3" loading="lazy">
</div>
```

### Apparel Product
```html
<div class="apparel-item">
    <img src="images/apparel/shirt.jpg" alt="GIGA Training Tank" loading="lazy">
    <h3>Training Tank</h3>
</div>
```

### Logo in Navigation
```html
<nav class="navbar">
    <img src="images/logos/giga-logo.png" alt="GIGA Logo" style="height: 40px;">
    <!-- rest of nav -->
</nav>
```

## File Path Rules

- ✅ **Correct**: `images/memes/meme1.jpg`
- ❌ **Wrong**: `Images/Memes/meme1.jpg` (case-sensitive!)
- ✅ **Correct**: `images/apparel/shirt.jpg`
- ❌ **Wrong**: `/images/apparel/shirt.jpg` (no leading slash needed)

## Tips

1. **Optimize first**: Resize and compress before uploading
2. **Use descriptive names**: `giga-hero.jpg` not `IMG_1234.jpg`
3. **Always add alt text**: Helps with SEO and accessibility
4. **Use lazy loading**: Add `loading="lazy"` to images below the fold

