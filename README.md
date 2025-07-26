# 🧮 Web Calculator

A simple yet stylish **web-based calculator** built using **HTML, CSS, JavaScript, and Java (Servlets)**.  
It supports basic arithmetic operations and communicates with a backend servlet to evaluate expressions.

---

## 🚀 Features

- Clean and modern **UI design** with animations.
- **Live expression display** as you type.
- Supports basic operations: `+`, `-`, `x`, `/`, `.`, and numbers `0-9`.
- **Clear (C)** and **Delete (Del)** buttons for quick editing.
- **Backend-powered calculation**: The `=` button sends the expression to a Java Servlet, evaluates it, and returns the result.
- Built with **Tomcat Server**.

---

## 🛠️ Tech Stack

**Frontend:**
- HTML5
- CSS3
- JavaScript (Fetch API for server calls)

**Backend:**
- Java Servlet
- ScriptEngine (for expression evaluation)

**Server:**
- Apache Tomcat 10

---

## 📂 Project Structure
Calculator/
│
├── src/ # Java source code
│ └── com.aayushikumari/
│ └── CalculatorServlet.java
│
├── webapp/
│ ├── index.html # Calculator UI
│ ├── style.css # Stylesheet
│ ├── script.js # Frontend logic
│ └── WEB-INF/
│ └── web.xml # Servlet configuration
│
└── README.md # Project documentation

---

## ⚙️ How It Works

1. **User clicks a button** → JavaScript updates the display.
2. **On `=` button click** → The expression is sent to the servlet using `fetch()` (POST request).
3. **Servlet (CalculatorServlet)** evaluates the expression using `ScriptEngine`.
4. **Result is sent back** → JavaScript displays it on the screen.

---

## ▶️ How to Run

1. Install **Apache Tomcat 10+** and set it up in Eclipse or IntelliJ.
2. Create a **Dynamic Web Project** and add this code.
3. Deploy the project on the Tomcat server.
4. Open your browser and go to: http://localhost:8080/Calculator
5. Use the Calculator and also it does'nt require any License to use.

---

## 👩‍💻 Author
**Aayushi Kumari**  
Developed as part of learning **Java Servlets and Web Development**.

