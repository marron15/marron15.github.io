<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
 
<header>
    <nav>
        <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contacts">Contact</a></li>
        </ul>
    </nav>
</header>
 
<main class="project-container">
    <h1>My Projects</h1>
    <section class="project-list">
        <article class="project-item">
            <img src="/GCACO.png" alt="gcaco" class="project-image">
            <h2>Project 1: Gordon College Alumni Connect</h2>
            <p>GCACO push notification.</p>
        </article>
        <article class="project-item">
            <img src="/Library.png" alt="library" class="project-image">
            <h2>Project 2: Library Management System</h2>
            <p>Library Management System using Java Netbeans.</p>
        </article>
        <article class="project-item">
            <img src="/weather.png" alt="Weather App" class="project-image">
            <h2>Project 3: Weather Application</h2>
            <p>A responsive weather dashboard that provides real-time weather information and forecasts using a third-party API.</p>
        </article>
    </section>
</main>
 
<style>
    body {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100vh;
        margin: 0;
        padding: 0 20px;
        background-color: #282c34;
    }
 
    h1 {
        font-size: 24px;
        color: #ffffff;
        max-width: 50%;
        text-align: left;
    }
 
    img {
        width: 1000px;
        height: 1000px;
        object-fit: contain;
    }
 
    .html-icon, .css-icon, .angular-icon, .php-icon {
        position: absolute;
        bottom: 200px;
        width: 100px;
        height: 100px;
        object-fit: contain;
    }
 
    .html-icon { left: 150px; }
    .css-icon { left: 300px; }
    .angular-icon { left: 450px; }
    .php-icon { left: 600px; }
 
    .about-me {
        position: absolute;
        top: 250px;
        left: 180px;
        bottom: 100px;
        color: Orange;
        font-size: 100px;
        font-weight: bold;
        z-index: 10;
    }
 
    header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background-color: #1a1e24;
        padding: 15px 0;
        z-index: 100;
    }
 
    nav ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
    }
 
    nav ul li {
        margin: 0 15px;
    }
 
    nav ul li a {
        color: #ffffff;
        text-decoration: none;
        font-size: 18px;
        font-weight: bold;
        transition: color 0.3s ease;
    }
 
    nav ul li a:hover {
        color: Orange;
    }
 
    body {
        padding-top: 60px;
    }
 
    .project-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
    }
 
    .project-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }
 
    .project-item {
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        padding: 1.5rem;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
 
    .project-item:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
 
    .project-image {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 5px;
        margin-bottom: 1rem;
    }
 
    .project-item h2 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
        color: #3498db;
    }
 
    .project-item p {
        font-size: 1rem;
        color: #e0e0e0;
    }
</style>
</html>