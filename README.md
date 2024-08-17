
# React Image Gallery App

This is a React application that displays images fetched from the Pexels API, served by a Flask backend running on port 5000. The React app runs on port 3000, and all API requests are proxied to the Flask backend.

## Features

- Fetch and display images from the Pexels API.
- Responsive grid layout for displaying images.
- Proxy setup to communicate with the Flask backend running on a different port.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (which includes npm)
- [Python](https://www.python.org/) (with Flask and other dependencies)

## Getting Started

### Backend Setup (Flask)

1. **Navigate to the `backend` directory:**

   ```bash
   cd backend
   ```

2. **Create a virtual environment and activate it:**

   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

3. **Install backend dependencies:**

   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables:**

   Create a `.env` file in the `backend` directory with your Pexels API key:

   ```bash
   echo "PEXELS_API_KEY=your_pexels_api_key_here" > .env
   ```

5. **Run the Flask app:**

   ```bash
   python app.py
   ```

   The Flask app will start running on `http://localhost:5000`.

### Frontend Setup (React)

1. **Navigate to the `frontend` directory:**

   ```bash
   cd ../frontend
   ```

2. **Install frontend dependencies:**

   ```bash
   npm install
   ```

3. **Start the React app:**

   ```bash
   npm start
   ```

   The React app will start running on `http://localhost:3000`.

### Proxy Configuration

The React app is configured to proxy API requests to the Flask backend running on port 5000. This is done by adding a `proxy` field in the `package.json` file:

```json
{
  "proxy": "http://localhost:5000"
}
```

### Accessing the Application

- **React App:** Open `http://localhost:3000` in your browser to see the image gallery.
- **Flask API:** The API is available at `http://localhost:5000/api/images`, but you don't need to access this directly as the React app handles it.

## Project Structure

```bash
my-project/
│
├── backend/
│   ├── app.py
│   ├── fetch_images.py
│   ├── .env
│   ├── requirements.txt
│
├── frontend/
│   ├── public/
│   │   ├── index.html
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   ├── package.json
│   ├── .env
│
└── README.md
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License.

---

This `README.md` file provides clear instructions for setting up and running both the Flask backend and React frontend, with emphasis on how the two are connected via a proxy configuration.