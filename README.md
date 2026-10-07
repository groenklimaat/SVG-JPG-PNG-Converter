# 🎨 SVG-JPG-PNG-Converter

> **Convert logos and images (SVG, JPG, PNG) to any PNG size — with transparent background, ZIP download, and full offline support.**

A lightweight, fully client-side Progressive Web App. No server. No uploads. No tracking.

[![PWA](https://img.shields.io/badge/PWA-ready-4a7dff?style=flat-square)](https://web.dev/progressive-web-apps/)
[![Offline](https://img.shields.io/badge/offline-yes-22c55e?style=flat-square)](#-offline-first)
[![Languages](https://img.shields.io/badge/languages-11-f5c542?style=flat-square)](#-languages)
[![License](https://img.shields.io/badge/license-MIT-a67c00?style=flat-square)](./LICENSE)

---

## 🚀 Live demo

👉 **https://JOUWGEBRUIKERSNAAM.github.io/SVG-JPG-PNG-Converter/**

*(Vervang `JOUWGEBRUIKERSNAAM` door je eigen GitHub-gebruikersnaam.)*

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 📥 **Multi-format input** | PNG, JPG and SVG (including SVG with text) |
| 📐 **Multi-size export** | 512, 300, 192, 180, 152, 150, 120, 96, 72, 71, 64, 32, 16 px + custom sizes |
| 🎯 **Fit modes** | Contain, cover (crop) or stretch to square |
| 👻 **Transparent background** | Optional — perfect for logos |
| 👑 **Icon version** | Adds padding and `-icon` suffix for app icons |
| 📦 **ZIP download** | All files in one archive, or download separately |
| 📴 **Fully offline** | Service worker caches everything |
| 📱 **Installable PWA** | Add to home screen on mobile or desktop |
| 🌍 **11 languages** | Auto-detected + manual switch |
| 🔒 **100% private** | Everything runs in your browser — no uploads |
| 🎨 **Custom sizes** | Add any size between 16 and 4096 px |

---

## 🌍 Languages

Automatically detected from your browser. Your choice is saved and shared between the app and the offline page.

| Code | Language |
|------|----------|
| `en` | 🇬🇧 English |
| `nl` | 🇳🇱 Nederlands |
| `fr` | 🇫🇷 Français |
| `de` | 🇩🇪 Deutsch |
| `es` | 🇪🇸 Español |
| `pt` | 🇵🇹 Português |
| `sv` | 🇸🇪 Svenska |
| `no` | 🇳🇴 Norsk |
| `uk` | 🇺🇦 Українська |
| `zh` | 🇨🇳 中文 |
| `ja` | 🇯🇵 日本語 |

---

## 🛠️ Tech stack

- **Vanilla JavaScript** — no framework, no build step
- **HTML5 Canvas** — for image resizing and conversion
- **JSZip** — for creating ZIP archives in the browser
- **Service Worker** — for offline caching
- **Web App Manifest** — for PWA installation
- **localStorage** — for language preference only

---

## 📦 Installation

### Option 1 — GitHub Pages (recommended)

1. **Fork** this repository, or clone it:
   ```bash
   git clone https://github.com/JOUWGEBRUIKERSNAAM/SVG-JPG-PNG-Converter.git