# 🦊 Firefox Installation Guide

## For Firefox Users

Your Chrome New Tab Dashboard is **fully compatible** with Firefox! Here's how to install it:

### 📋 **Prerequisites**
- Firefox 57+ (Firefox Quantum or newer)
- Developer mode enabled

### 🛠️ **Installation Steps**

#### Method 1: Temporary Installation (Development)
1. **Rename manifest file**:
   - Rename `manifest-firefox.json` to `manifest.json`
   - Backup the original `manifest.json` as `manifest-chrome.json`

2. **Open Firefox** and navigate to `about:debugging`

3. **Click "This Firefox"** in the left sidebar

4. **Click "Load Temporary Add-on"**

5. **Select** the `manifest.json` file from your extension folder

6. **Open new tab** to see your dashboard!

#### Method 2: Permanent Installation (Signed)
1. **Package your extension** as a .zip file
2. **Submit to Mozilla Add-ons** for review and signing
3. **Install** from Firefox Add-ons store once approved

### 🔧 **Firefox-Specific Features**
- ✅ **WebExtensions API** - Full compatibility
- ✅ **All widgets work** - Weather, calendar, search, etc.
- ✅ **Wallpapers supported** - All 32 backgrounds load properly
- ✅ **Keyboard shortcuts** - Ctrl+K, Alt+1-4 work perfectly
- ✅ **Mobile responsive** - Works on Firefox Mobile too

### 🎯 **Key Differences**
- Uses `browser.runtime` instead of `chrome.runtime`
- Manifest v2 format (Firefox standard)
- Slightly different extension ID format

### 📱 **Firefox Mobile**
Your dashboard also works on **Firefox for Android**! The responsive design ensures a perfect mobile experience.

### 🔄 **Switching Between Browsers**
To use in both Chrome and Firefox:
1. **Keep both manifest files**:
   - `manifest.json` (for current browser)
   - `manifest-chrome.json` (Chrome version)
   - `manifest-firefox.json` (Firefox version)

2. **Switch as needed** by renaming the appropriate manifest file

### 🐛 **Firefox-Specific Notes**
- Extension loads as "temporary" until signed by Mozilla
- All features work identically to Chrome version
- Performance is excellent on Firefox Quantum

---

**Your beautiful new tab dashboard works perfectly in Firefox! 🚀**