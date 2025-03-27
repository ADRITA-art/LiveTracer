# 🚀 LiveTracer

## 🌍 Overview
LiveTracer is a **real-time location tracking** web application that uses **WebSockets** to share **live location updates** between users on an interactive **Leaflet.js-powered map** 🗺️. Users can visualize their own locations and see updates from others in **real time** ⏳.

## ✨ Features
- 📌 **Live Location Sharing**: Users' locations are updated in real-time using WebSockets.
- 🗺️ **Interactive Map**: Powered by **Leaflet.js** with **OpenStreetMap tiles**.
- 🚶 **Automatic User Tracking**: The app tracks and displays users as they move.
- 💬 **Dynamic Popups**: Each marker shows the user's latitude, longitude, and a unique identifier.
- 📱 **Responsive Design**: Works seamlessly on desktops and mobile devices.

🔗 **Live Demo**: [LiveTracer on Render](https://livetracer.onrender.com/)

---

## 🛠️ Technologies Used
- **Frontend**:
  - 🎨 HTML5, CSS3, JavaScript
  - 🗺️ Leaflet.js (for maps)
  - 🔄 Socket.io (for real-time communication)
  - 🖼️ EJS (for templating)
- **Backend**:
  - ⚡ Node.js
  - 🚀 Express.js
  - 🔄 Socket.io (for WebSocket communication)

---

## ⚙️ Setup Instructions

### 📌 Prerequisites
Make sure you have the following installed on your system:
- [🟢 Node.js](https://nodejs.org/en/download/) (v14 or later)
- [🔗 Git](https://git-scm.com/downloads)

### 🏗️ Installation
1. **Clone the Repository**
   ```sh
   git clone https://github.com/your-username/LiveTracer.git
   cd LiveTracer
   ```
2. **Install Dependencies**
   ```sh
   npm install
   ```
3. **Run the Server**
   ```sh
   node index.js
   ```
4. **Access the Application**
   Open your browser and go to:
   ```
   http://localhost:3000
   ```

---

## 📁 Project Structure
```
LiveTracer/
│-- public/
│   │-- css/style.css   # 🎨 Stylesheet for UI and responsiveness
│   │-- js/script.js    # ⚡ Frontend script handling WebSockets & map updates
│-- views/
│   │-- index.ejs       # 🖼️ Main UI template rendered by Express
│-- index.js            # 🚀 Node.js server setup with Express & WebSockets
│-- package.json        # 📦 Project dependencies and metadata
│-- README.md           # 📜 Documentation (this file)
```

---

## ⚙️ How It Works
### 🖥️ Backend (index.js)
- 📡 Sets up an **Express.js server**
- 🔄 Integrates **Socket.io** for **real-time communication**
- 📂 Serves static files from the `public/` directory
- 📍 Listens for **client connections** and **broadcasts locations** to all users
- ❌ Handles **user disconnections** and removes their markers from the map

### 🎨 Frontend (script.js)
- 📍 **Captures user's location** using the **Geolocation API**
- 📡 **Sends location updates** to the server via **WebSockets**
- 🔄 **Receives real-time updates** from other users
- 🗺️ **Dynamically updates** the map with new markers
- ❌ **Removes markers** when users disconnect

### 🎨 UI & Responsiveness (style.css)
- 🌈 **Gradient background** for aesthetics
- 📏 **Dynamic sizing** to adapt to different screen sizes
- 📱 **Media queries** to adjust the map layout on mobile devices
- 🎭 **Smooth animations** for better UX

---

## 🔥 Use Cases
- 🚖 **Ride-sharing apps**: Track drivers and passengers in **real-time**
- 📦 **Delivery services**: Monitor **delivery agents** on the move
- 🎉 **Event tracking**: View attendees at a venue **dynamically**
- 🏡 **Family safety apps**: Keep track of **loved ones’ locations**

---

## 🚀 Future Enhancements
- 🔑 **User Authentication**: Allow users to **log in** and see specific groups
- 💬 **Chat System**: Enable **real-time messaging** alongside location sharing
- 🗺️ **History Tracking**: Store **previous locations** for movement analytics
- 🎭 **Custom Markers**: Differentiate users based on **roles** (e.g., drivers, customers)

---

## 🤝 Contribution Guide
Contributions are **welcome**! Follow these steps:
1. 🔄 **Fork the repository**
2. 🌱 **Create a new branch** (`feature-new-update`)
3. 📝 **Commit changes** and push to your fork
4. 📩 **Open a pull request**

---

## 📜 License
This project is **open-source** under the [MIT License](LICENSE).

---

## 👩‍💻 Author
Developed by **Adrita Chakraborty** 💡🚀

For any **queries** or **suggestions**, feel free to **connect via GitHub**. 🛠️

Happy Coding! 🎉💻

