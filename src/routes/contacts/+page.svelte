<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
 
<script>
  // You can add any necessary imports or logic here
</script>
 
<header>
    <nav>
        <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/project">Project</a></li>
            <li><a href="/contacts">Contacts</a></li>
        </ul>
    </nav>
</header>
 
<main>
  <h1>Contact Me</h1>
  <p>Feel free to reach out to me through any of these platforms:</p>
  <div class="social-icons">
    <a href="https://github.com/marron15" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
      <i class="fab fa-github"></i>
      <span>GitHub</span>
    </a>
    <a href="mailto:202210272@gordoncollege.edu.ph" aria-label="Email">
      <i class="fas fa-envelope"></i>
      <span>Email</span>
    </a>
    <a href="https://www.facebook.com/profile.php?id=100010845429232" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
      <i class="fab fa-facebook-f"></i>
      <span>Facebook</span>
    </a>
    <a href="https://www.instagram.com/mrrn_jeremy/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
      <i class="fab fa-instagram"></i>
      <span>Instagram</span>
    </a>
  </div>
</main>
 
<style>
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
 
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        text-align: center;
        padding: 60px 20px 0; /* Added top padding to account for fixed header */
    }
 
    h1 {
        font-size: 2.5rem;
        color: #ffffff;
        margin-bottom: 1rem;
    }
 
    p {
        font-size: 1.2rem;
        color: #e0e0e0;
        margin-bottom: 2rem;
    }
 
    .social-icons {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 2rem;
    }
 
    .social-icons a {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #ffffff;
        text-decoration: none;
        font-size: 2rem;
        transition: all 0.3s ease;
    }
 
    .social-icons a span {
        font-size: 1rem;
        margin-top: 0.5rem;
    }
 
    .social-icons a:hover {
        color: Orange;
        transform: translateY(-5px);
    }
</style>
</html>