<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <script>
      // You can add any necessary imports here
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

    <main class="about-container">
      <h1>About Me</h1>
      <div class="content">
        <p class="intro">Good Day! I'm Marron Jeremy, A 3rd-year BSIT student at Gordon College with a interest in web development and programming.</p>
        
        <section class="background">
          <h2>My Background</h2>
          <p>As an I.T Student, I've been honing my skills in various programming languages. My journey in the world of coding has been both challenging and exciting, pushing me to constantly learn and grow.</p>
        </section>
        
        <section class="skills">
          <h2>Skills & Expertise</h2>
          <div class="skill-tags">
            <span>HTML5 & CSS3</span>
            <span>JavaScript</span>
            <span>Angular</span>
            <span>PHP</span>
          
            <span>Problem Solving</span>
          </div>
        </section>
      </div>
    </main>

    <style>
      .about-container {
        max-width: 800px;
        margin: 60px auto 0;
        padding: 2rem;
        background-color: rgba(30, 34, 44, 0.8);
        border-radius: 15px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(10px);
      }

      h1 {
        font-size: 2.8rem;
        color: #ffffff;
        text-align: center;
        margin-bottom: 2rem;
        font-weight: 700;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      }

      h2 {
        font-size: 2rem;
        color: #3498db;
        margin-top: 2rem;
        margin-bottom: 1rem;
        font-weight: 600;
      }

      p {
        color: #e0e0e0;
        line-height: 1.6;
        margin-bottom: 1.5rem;
      }

      .intro {
        font-size: 1.2rem;
        font-weight: 300;
        color: #ffffff;
        border-left: 4px solid #3498db;
        padding-left: 1rem;
        margin-bottom: 2rem;
      }

      section {
        background-color: rgba(255, 255, 255, 0.05);
        padding: 1.5rem;
        border-radius: 10px;
        margin-bottom: 2rem;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      section:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 12px rgba(52, 152, 219, 0.2);
      }

      .skill-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.8rem;
      }

      .skill-tags span {
        background-color: #3498db;
        color: #ffffff;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-size: 0.9rem;
        transition: all 0.3s ease;
      }

      .skill-tags span:hover {
        background-color: #2980b9;
        transform: scale(1.05);
        box-shadow: 0 4px 8px rgba(52, 152, 219, 0.3);
      }

      @media (max-width: 600px) {
        .about-container {
          padding: 1.5rem;
          margin-top: 40px;
        }

        h1 {
          font-size: 2.2rem;
        }

        h2 {
          font-size: 1.6rem;
        }

        .intro {
          font-size: 1.1rem;
        }
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

      :global(body) {
        padding-top: 60px;
      }

      .about-container {
        margin-top: 80px;
      }
    </style>
</body>
</html>