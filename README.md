# 🌟 Chrome New Tab Dashboard

A beautiful, feature-rich Chrome extension that transforms your new tab page into a personalized dashboard with dynamic wallpapers, live weather, interactive calendar, and productivity tools.

![Chrome New Tab Dashboard](https://img.shields.io/badge/Chrome-Extension-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white)
![Version](https://img.shields.io/badge/Version-1.0-brightgreen?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

## ✨ Features

### 🖼️ **Dynamic Wallpapers**
- **32 Beautiful Wallpapers** - Randomly selected on each new tab
- **High-Quality Images** - Stunning backgrounds for every mood
- **Automatic Rotation** - Fresh visuals every time

### 🕐 **Analog Clock**
- **Real-time Updates** - Live analog clock with smooth animations
- **Organic Design** - Unique blob-shaped clock face
- **Smooth Transitions** - Fluid hour and minute hand movements

### 🌤️ **Live Weather Widget**
- **Location-based Weather** - Automatic geolocation detection
- **Comprehensive Data** - Temperature, humidity, feels-like temp
- **Visual Indicators** - Animated humidity bar and weather icons
- **Real-time Updates** - Current weather conditions

### 🔍 **Multi-Engine Search**
- **4 Search Engines** - DuckDuckGo, Google, Bing, YouTube
- **Quick Switching** - Easy engine selection with visual feedback
- **Keyboard Shortcuts** - Ctrl+K to focus, Alt+1-4 for engines
- **Smart Interface** - Rounded search bar with smooth animations

### 📅 **Interactive Calendar**
- **Month Navigation** - Browse previous and next months
- **Today Highlighting** - Current date prominently displayed
- **Clean Design** - Minimalist calendar grid
- **Hover Effects** - Interactive date selection

### 🤖 **AI Quick Access**
- **ChatGPT Integration** - Direct link to OpenAI's ChatGPT
- **Google Gemini** - Quick access to Google's AI assistant
- **One-click Access** - Instant AI tool availability

### 💬 **Daily Inspiration**
- **Curated Quotes** - 10 inspirational quotes from famous personalities
- **Daily Rotation** - New quote each day based on date
- **Beautiful Typography** - Elegant quote presentation
- **Motivational Content** - Start your day with inspiration

### 🚀 **App Dock**
- **Quick Launch** - 5 popular web applications
- **Smooth Animations** - Hover effects with scale and bounce
- **Easy Access** - YouTube, Gmail, Telegram, WhatsApp, LinkedIn
- **Visual Feedback** - Interactive hover states

### ⌨️ **Keyboard Shortcuts**
- **Ctrl+K (Cmd+K)** - Focus search bar instantly
- **Alt+1,2,3,4** - Quick switch between search engines
- **Enter** - Execute search query
- **Smooth Focus** - Enhanced input interactions

### 📱 **Responsive Design**
- **Mobile Optimized** - Perfect experience on all devices
- **Smooth Scrolling** - Fluid navigation on mobile
- **Adaptive Layout** - Grid adjusts to screen size
- **Touch Friendly** - Optimized for touch interactions

## 🛠️ Installation

### Method 1: Load as Unpacked Extension
1. **Download** or clone this repository
2. **Open Chrome** and navigate to `chrome://extensions/`
3. **Enable Developer Mode** (toggle in top right)
4. **Click "Load unpacked"**
5. **Select** the extension folder
6. **Open new tab** to see your dashboard!

### Method 2: Manual Setup
1. **Create folder** for the extension
2. **Copy all files** (index.html, style.css, script.js, manifest.json)
3. **Add wallpapers** to the `wallpapers/` folder
4. **Follow Method 1** steps 2-6

## 📁 File Structure

```
Chrome-New-Tab/
├── 📄 index.html          # Main HTML structure
├── 🎨 style.css           # Complete styling and animations
├── ⚡ script.js           # All functionality and interactions
├── 📋 manifest.json       # Chrome extension configuration
├── 🖼️ wallpapers/         # Background images folder
│   ├── wp1.jpg
│   ├── wp2.jpg
│   └── ... (32 total)
└── 📖 README.md           # This documentation
```

## ⚙️ Configuration

### Weather API Setup
1. **Get API Key** from [OpenWeatherMap](https://openweathermap.org/api)
2. **Replace** `YOUR_API_KEY` in `script.js` line 75
3. **Save** and reload extension

### Adding Custom Wallpapers
1. **Add images** to `wallpapers/` folder
2. **Update** wallpaper array in `script.js` (lines 2-34)
3. **Use format**: `'wallpapers/your-image.jpg'`

### Customizing Colors
Edit CSS variables in `style.css` (lines 8-14):
```css
:root {
    --bg-fallback: #2c3e50;      /* Fallback background */
    --card-bg: rgba(255, 255, 255, 0.4);  /* Card transparency */
    --text-main: #1f2933;        /* Main text color */
    --accent: #3b82f6;           /* Accent color (blue) */
    --widget-inner: rgba(255, 255, 255, 0.8);  /* Widget backgrounds */
}
```

## 🎯 Key Technologies

- **HTML5** - Semantic structure and accessibility
- **CSS3** - Advanced styling with Grid, Flexbox, and animations
- **Vanilla JavaScript** - No dependencies, pure performance
- **Chrome Extension API** - Native browser integration
- **OpenWeatherMap API** - Real-time weather data
- **CSS Grid & Flexbox** - Responsive layout system
- **CSS Custom Properties** - Consistent theming
- **Backdrop Filter** - Modern glassmorphism effects

## 🚀 Performance Features

- **Optimized Loading** - Smooth fade-in animations
- **Efficient Rendering** - CSS transforms for smooth animations
- **Minimal Dependencies** - Pure vanilla JavaScript
- **Responsive Images** - Proper wallpaper scaling
- **Smooth Scrolling** - Enhanced mobile experience

## 🎨 Design Philosophy

- **Glassmorphism** - Modern translucent card designs
- **Smooth Animations** - Consistent 0.3s cubic-bezier transitions
- **Visual Hierarchy** - Clear information organization
- **Accessibility** - Proper contrast and focus states
- **Mobile-First** - Responsive design approach

## 🔧 Browser Compatibility

- ✅ **Chrome** 88+ (Primary target)
- ✅ **Firefox** 57+ (Full support with manifest v2)
- ✅ **Edge** 88+ (Chromium-based)
- ✅ **Opera** 74+ (Chromium-based)
- ⚠️ **Safari** (Limited extension support)

### 🦊 **Firefox Installation**
Your extension is **fully compatible** with Firefox! See [FIREFOX-INSTALL.md](FIREFOX-INSTALL.md) for detailed installation instructions.

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. **Fork** the repository
2. **Create** feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** changes (`git commit -m 'Add AmazingFeature'`)
4. **Push** to branch (`git push origin feature/AmazingFeature`)
5. **Open** Pull Request

## 🐛 Known Issues

- Weather requires location permission
- Some wallpapers may load slowly on first visit
- Calendar doesn't persist selected dates

## 🔮 Future Enhancements

- [ ] **Todo List** - Task management widget
- [ ] **Bookmarks** - Quick access to favorite sites
- [ ] **Notes** - Sticky notes functionality
- [ ] **Themes** - Multiple color schemes
- [ ] **Custom Widgets** - User-configurable components

## 📞 Support

If you encounter any issues or have suggestions:
- **Create an Issue** on GitHub
- **Check existing issues** for solutions
- **Provide details** about your browser and OS

## 🌟 Acknowledgments

- **OpenWeatherMap** for weather API
- **Flaticon** for dock icons
- **Unsplash** for inspiration on wallpaper curation
- **Chrome Extension Documentation** for development guidance

---

**Made with ❤️ for productivity and beautiful browsing experiences**

*Transform your new tab into a personalized dashboard that inspires and empowers your daily web browsing!*