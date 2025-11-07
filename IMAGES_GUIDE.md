# Adding Images to Your GIGA Website

## Best Practices for Images

### 1. **Folder Structure**
Your images folder is set up at: `/images/`

Organize your images like this:
```
images/
  ├── hero/
  │   └── gigachad-hero.jpg
  ├── memes/
  │   ├── meme1.jpg
  │   ├── meme2.png
  │   └── meme3.gif
  ├── apparel/
  │   └── shirt-front.jpg
  ├── fitness/
  │   └── workout.jpg
  └── logos/
      └── giga-logo.png
```

### 2. **Image Formats**
- **JPG/JPEG**: Best for photos, complex images (smaller file size)
- **PNG**: Best for logos, graphics with transparency
- **WebP**: Modern format, smaller file sizes (best performance)
- **GIF**: For animated memes

### 3. **Image Optimization**
Before uploading:
- **Resize images** to the size you'll actually use (don't upload 4000px images if you only need 800px)
- **Compress images** using tools like:
  - TinyPNG (https://tinypng.com)
  - Squoosh (https://squoosh.app)
  - ImageOptim (Mac app)

### 4. **How to Add Images in HTML**

#### Basic Image Tag:
```html
<img src="images/hero/gigachad-hero.jpg" alt="Gigachad Hero Image">
```

#### With Styling Classes:
```html
<img src="images/memes/meme1.jpg" alt="GIGA Meme" class="meme-image">
```

#### Responsive Image (recommended):
```html
<img src="images/apparel/shirt.jpg" 
     alt="GIGA Apparel" 
     class="apparel-image"
     loading="lazy">
```

#### Background Image (in CSS):
```css
.hero {
    background-image: url('images/hero/gigachad-hero.jpg');
    background-size: cover;
    background-position: center;
}
```

### 5. **Image Sizes Recommendations**

- **Hero images**: 1920x1080px (or 1200x800px)
- **Meme gallery**: 800x800px (square)
- **Apparel photos**: 1000x1000px (square)
- **Logos**: 200-400px width
- **Icons**: 64x64px or 128x128px

### 6. **Adding Images to Specific Sections**

#### Hero Section:
```html
<section class="hero">
    <div class="container">
        <img src="images/hero/gigachad-hero.jpg" alt="GIGA Hero" class="hero-image">
        <!-- rest of content -->
    </div>
</section>
```

#### Meme Gallery:
```html
<div class="meme-grid">
    <img src="images/memes/meme1.jpg" alt="GIGA Meme 1" class="meme-item">
    <img src="images/memes/meme2.jpg" alt="GIGA Meme 2" class="meme-item">
    <img src="images/memes/meme3.jpg" alt="GIGA Meme 3" class="meme-item">
</div>
```

#### Apparel Section:
```html
<div class="apparel-grid">
    <div class="apparel-item">
        <img src="images/apparel/shirt.jpg" alt="GIGA Shirt">
        <h3>GIGA Training Tank</h3>
    </div>
</div>
```

### 7. **Using External Images (CDN)**

If you want to host images elsewhere:
```html
<!-- From a CDN -->
<img src="https://your-cdn.com/images/giga-logo.png" alt="GIGA Logo">

<!-- From Imgur -->
<img src="https://i.imgur.com/your-image-id.jpg" alt="Description">
```

### 8. **Lazy Loading (Performance)**

Add `loading="lazy"` to images below the fold:
```html
<img src="images/memes/meme1.jpg" alt="Meme" loading="lazy">
```

### 9. **Alt Text (Important!)**

Always include descriptive alt text for accessibility and SEO:
```html
<img src="images/hero.jpg" alt="Gigachad flexing muscles with GIGA logo">
```

### 10. **Quick Steps to Add Images**

1. **Save your image** to the `images/` folder (or subfolder)
2. **Optimize it** (resize and compress)
3. **Add to HTML** using `<img>` tag
4. **Add CSS styling** if needed
5. **Test** that it displays correctly

### Example: Adding a Hero Background Image

1. Save image as: `images/hero-background.jpg`
2. Add to CSS:
```css
.hero {
    background-image: url('images/hero-background.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
```

### Example: Adding Meme Gallery

1. Save memes to: `images/memes/`
2. Add to HTML:
```html
<section class="memes" id="memes">
    <div class="container">
        <h2>Meme Gallery</h2>
        <div class="meme-gallery">
            <img src="images/memes/meme1.jpg" alt="GIGA Meme 1" loading="lazy">
            <img src="images/memes/meme2.jpg" alt="GIGA Meme 2" loading="lazy">
            <img src="images/memes/meme3.jpg" alt="GIGA Meme 3" loading="lazy">
        </div>
    </div>
</section>
```

### Need Help?

- Check file paths are correct (case-sensitive!)
- Use browser DevTools (F12) to see if images load
- Check file permissions
- Verify image file extensions match (.jpg vs .jpeg)

