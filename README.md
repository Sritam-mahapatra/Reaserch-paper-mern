# Research Paper Finder

This MERN stack project allows users to search for research papers using the **Serper API** and display a list of relevant results. The backend is powered by **Express.js**, and the frontend is built with **React Bootstrap**.

---

## 🚀 Features
- Search for research papers from Google Scholar
- Display a list of relevant research papers
- Fetch real-time results using the Serper API
- React Bootstrap UI for a clean and modern interface

---

## 📌 Prerequisites
Ensure you have the following installed:
- **Node.js** (v16+)
- **MongoDB** (if using database storage)
- **Git**

Create a free account on [Serper API](https://serper.dev/) to get your API key.

---

## 📁 Folder Structure
```
📦 research-paper-finder
├── 📂 backend (Express.js server)
│   ├── server.js
│   ├── routes/search.js
│   ├── .env
├── 📂 frontend (React app)
│   ├── src/
│   ├── App.js
│   ├── components/
│   ├── package.json
├── README.md
```

---

## 🔧 Backend Setup (Express.js)

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/research-paper-finder.git
cd research-paper-finder/backend
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Create `.env` file
Create a `.env` file inside the `backend` folder and add:
```env
PORT=5000
SERPER_API_KEY=your_serper_api_key
CLIENT_URL=http://localhost:3000
```

### 4️⃣ Run the backend server
```bash
npm start
```

The server will run on `http://localhost:5000`.

---

## 🌐 Frontend Setup (React)

### 1️⃣ Navigate to the frontend folder
```bash
cd ../frontend
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Start the React app
```bash
npm start
```

The frontend will run on `http://localhost:3000`.

---

## 🛠 API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET`  | `/search?query=your+keywords` | Fetch research papers from Google Scholar |

---

## 🎯 Deployment
- **Frontend**: Deploy on [Vercel](https://vercel.com/)
- **Backend**: Deploy on [Render](https://render.com/)

---

## 👨‍💻 Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "Added new feature"`)
4. Push to your fork (`git push origin feature-name`)
5. Create a pull request

---

## ⚡ Contact
For any issues or suggestions, open an issue on GitHub or reach out to **your-email@example.com**.

Happy coding! 🚀

