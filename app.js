// import the React from react and createRoot from react-dom/client
import { animals } from './animals';
import React from 'react';
import { createRoot } from 'react-dom/client';

/* Add a Title */

// get a reference of index.html and store it in container
const container = document.getElementById('app');
//Create a React root
const root = createRoot(container);

// Add a title constant
const title = '';

/* Add a Background */

// create a constant named background and value to a <img />
const background = <img class = "background" alt = "ocean" src = "/images/ocean.jpg"/>


/* Adding Fun Facts */

// Create a function displayFact() and pick a random fun fact
function displayFact(e) {
  const animal = e.target.alt;
  const index = Math.floor(Math.random() * animals[animal].facts.length); 
  const funFact = animals[animal].facts[index];
  const p = document.getElementById('fact');
  p.innerHTML = funFact;
}

/* Add an Array of Images */

const images = [];
for (const animal in animals) {
  const image = (
    <img
      onClick={displayFact}
      key= {animal}
      className= 'animal'
      alt= {animal} 
      src= {animals[animal].image}
      aria-label= {animal}
      role= 'button'
    />
  );
  images.push(image);
}

//create an animalFacts constant to hold the JSX expression
// fill in the empty string assigned to title by using the ternary operator
// reformat the JSX expression in animalFacts include background variable

// Create a showBackground constant
const showBackground = true;
const animalFacts = (
  <div>
    <h1>{title === ''?  'Click an animal for a fun fact' : title}</h1>;
    {showBackground && background}
    <p id='fact'></p>
    <div className="animals">{images}</div>

  </div>
);

 



root.render(animalFacts);

