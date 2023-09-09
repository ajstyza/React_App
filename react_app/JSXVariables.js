import React from 'react';


// allows you to render HTML elements with logic inside elements.
// function JSXVariables() {
//     return (
//         SOMETHING HTML
//     )
// };

function returnAboutMe() {
    return (

        <div>
        <p id = "about-text">Aaron Styza holds an MFA from University of California, Irvine, and a BA from Eckerd College. He is currently transitioning out of academia and into the prviate sector</p>   
    </div>
    )
};

returnAboutMe();

function returnPortfolio() {
    return (
        <section>
        <h1>Pick a Card to Browse Portfolio</h1>
        <div class="grid-container" id="portfolio">
            <a href="https://ajstyza.github.io/Portfolio-Challenge/"><img src = "./assets/images/games.jpeg"  class="tile"></a>
            <div class = "centered">My Portfolio</div> 
            <a href="https://ajstyza.github.io/Password-Generator/"><img src = "./assets/images/games.jpeg" class="tile"></a></img>
            <div class = "centered" >Random Password Generator</div>
            <a href="https://ajstyza.github.io/Password-Generator/"><img src = "./assets/images/games.jpeg" class="tile"></a></img>
            <div class ="centered">No Content</div>
            <a href="https://ajstyza.github.io/Password-Generator/"><img src = "./assets/images/games.jpeg" class="tile"></a></img>
            <div class="centered">No Content</div>
    </section>

    )
};