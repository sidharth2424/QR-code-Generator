# QR Code Generator 🧾➡️📱

A simple Node.js command-line tool that generates a QR code from a user-provided URL and saves both the QR image and the URL in files.

## 📌 Features

- Prompts the user to enter a URL using the `inquirer` package.
- Generates a QR code image using `qr-image`.
- Saves the QR image as a PNG file.
- Writes the original URL into a `URL.txt` file.
- Includes a basic, stylish frontend webpage to input a URL and display the generated QR code.

---

## 🛠️ Technologies Used

- Node.js
- [inquirer](https://www.npmjs.com/package/inquirer)
- [qr-image](https://www.npmjs.com/package/qr-image)
- HTML + CSS (frontend)

---

## 📂 Project Structure
QR-code-generator/
├── index.js # Backend logic
├── URL.txt # Saves the input URL
├── i_love_qr.png # Generated QR code
├── frontend/
│ ├── index.html # Simple frontend UI
│ └── style.css # Styling for the UI
├── package.json
└── node_modules/

---

## 🚀 How to Run

### 1. Clone the Repository
git clone https://github.com/your-username/QR-code-Generator.git
cd QR-code-Generator

---

🌐 Hosting the Frontend
You can deploy the frontend/ folder to services like:

Netlify

Vercel

GitHub Pages

Just drag and drop the contents of the frontend/ folder or follow their setup guide.

---

📸 Screenshot
![QR code Generator](./project sample image.png)

