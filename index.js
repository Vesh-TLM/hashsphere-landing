<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Join HashSphere</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap" rel="stylesheet">

  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Outfit', sans-serif;
      background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
      background-size: 300% 300%;
      animation: gradientShift 20s ease infinite;
      min-height: 100vh;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
    }

    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    .container {
      max-width: 800px;
      width: 100%;
      padding: 2rem;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 20px;
      backdrop-filter: blur(20px);
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
      text-align: center;
    }

    img.logo {
      width: 90px;
      margin-bottom: 1.5rem;
    }

    h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      font-weight: 700;
      color: #ffffff;
    }

    p {
      font-size: 1.1rem;
      line-height: 1.6;
      margin-bottom: 1.5rem;
      color: #e0e0e0;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 2rem;
    }

    input, textarea {
      padding: 1rem;
      border-radius: 10px;
      border: none;
      font-size: 1rem;
      background: rgba(255, 255, 255, 0.1);
      color: #fff;
      outline: none;
    }

    input::placeholder, textarea::placeholder {
      color: #ccc;
    }

    button {
      padding: 1rem;
      border: none;
      background: #ffcb05;
      color: #000;
      font-weight: bold;
      font-size: 1rem;
      border-radius: 999px;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    button:hover {
      background: #f1b800;
    }

    @media (max-width: 600px) {
      h1 { font-size: 2rem; }
      p { font-size: 1rem; }
    }
  </style>
</head>
<body>
  <div class="container">
    <img src="https://i.imgur.com/xM3FMJz.png" alt="HashSphere Logo" class="logo" />

    <h1>Join the HashSphere Movement</h1>
    <p>Social media today feels more like noise than connection. HashSphere is different — a platform built for purpose, not just popularity. Be among the first to shape a more meaningful online world.</p>

    <form method="POST" action="https://script.google.com/macros/s/AKfycbx_DU3qjEJJtlnmX56GJfkwUew1-guF0E8wrlpAAn8gzrOc6djuefKPlwdq3-banTiL/exec">
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="expectations" rows="4" placeholder="What do you expect from HashSphere?" required></textarea>
      <button type="submit">Join the Waitlist</button>
    </form>
  </div>
</body>
</html>
