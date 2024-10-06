<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fixed Layout</title>
    <style>

        body {
            display: flex;               /* Use flexbox to align items */
            justify-content: space-between; /* Space between the text and image */
            align-items: center;         /* Vertically center the items */
            height: 100vh;               /* Set height of body to full viewport height */
            margin: 0;                   /* Remove default margin */
            padding: 0 20px;             /* Add padding around the body */
            background-color: #282c34;   /* Set a background color */
        }

        h1 {
            font-size: 24px;      /* Adjust font size */
            color: #ffffff;       /* Change text color to white */
            max-width: 50%;       /* Prevent text from stretching too far */
            text-align: left;     /* Align text to the left */
        
        }

        img {
            width: 1000px;         /* Set fixed width for the image */
            height: 1000;         /* Maintain aspect ratio */
            object-fit: contain;  /* Ensure image fits without being distorted */
        }

        .html-icon {
            position: absolute;  /* Set to absolute to position it relative to the body */
    bottom: 200px;        /* Distance from the bottom */
    left: 150px;          /* Distance from the left */
    width: 100px;        /* Set fixed width for HTML image */
    height: 100px;       /* Set fixed height for HTML image */
    object-fit: contain; /*  Ensure image fits without being distorted */
}   

    .css-icon {
            position: absolute;  /* Set to absolute to position it relative to the body */
    bottom: 200px;        /* Distance from the bottom */
    left: 300px;          /* Distance from the left */
    width: 100px;        /* Set fixed width for HTML image */
    height: 100px;       /* Set fixed height for HTML image */
    object-fit: contain; /*  Ensure image fits without being distorted */
}   

    .angular-icon {
            position: absolute;  /* Set to absolute to position it relative to the body */
    bottom: 200px;        /* Distance from the bottom */
    left: 450px;          /* Distance from the left */
    width: 100px;        /* Set fixed width for HTML image */
    height: 100px;       /* Set fixed height for HTML image */
    object-fit: contain; /*  Ensure image fits without being distorted */
}   


    .php-icon {
            position: absolute;  /* Set to absolute to position it relative to the body */
    bottom: 200px;        /* Distance from the bottom */
    left: 600px;          /* Distance from the left */
    width: 100px;        /* Set fixed width for HTML image */
    height: 100px;       /* Set fixed height for HTML image */
    object-fit: contain; /*  Ensure image fits without being distorted */
}   



        .about-me {
            position: absolute; /* Position the text absolutely */
            top: 250px; /* Distance from the top */
            left: 180px; /* Distance from the left */
            bottom: 100px; /* Distance from the bottom */
            color: Orange; /* Amber color */
            font-size: 100px; /* Font size */
            font-weight: bold; /* Make the text bold */
            z-index: 10; /* Ensure the text appears above other elements */
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

        /* Adjust body padding to account for fixed header */
        body {
            padding-top: 60px;
        }



    </style>
</head>
<body>
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

    <div class="about-me">Marron Jeremy</div>

    <h1>Greetings! I'm currently a 3rd-year BSIT student at Gordon College, and learning programming languages like HTML, CSS, Angular, and PHP.</h1>

    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img src="PFP.png" alt="Picture ko">
    <img class="html-icon" src="HTML.png" alt="HTML">
    <img class= "css-icon" src="CSS.png" alt="HTML">
    <img class= "angular-icon" src="ANGULAR.png" alt="HTML">
    <img class= "php-icon" src="PHP.png" alt="HTML">
</body>
</html>
