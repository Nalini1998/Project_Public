# **Project: Animal Fun Facts**

In this project, we’ll build a program that allows users to **click** on an animal on the screen in order to have their fun fact pop up.

A preview that displays the final result of the **Animal Fun Facts** project. A user clicks on images of different animals, which displays a fun fact about them:

![Image](/3.%20Animal%20fun%20facts/files_processing/1.%20Images/preview.JPG)

Our program will display a selection of animals on the screen. We’ll be allowed to decide if we want to include a **background** or not. Clicking an **animal** will cause a **fact** to be **randomly selected** from a list of potential options. The selected fact will **pop up** on the screen. As we keep clicking, we’ll be able to see different facts.

# **Tasks**


## **Add a Title**

<br>

#### **1. Import the React from react and createRoot from react-dom/client**

 On line 1 in `app.js`, we should see an `import` statement. This is importing the `animals` object from `animals.js`. Feel free to take a look at it now, but we’ll be coming back to it in later tasks.

 For now, let’s import the React from react and createRoot from react-dom/client.

> **Hint:** Our  imports should look like this:
```
import React from 'react';
import { createRoot } from 'react-dom/client';
```

<br>

#### **2. Get a ref of HTML element & put it in  container.**

Click on `index.html` to find out the `id` of the HTML element to get a reference of. Use this `id` and the `document` object to get a reference of this `element` and store it in a constant called `container`.

> **Hint:**
For the argument passed to `document.getElementById()`, look at the `<div>` element between the `<body></body>` tags in `index.html`.

> To get a reference to an HTML element by `id` we can use the `document` objects `getElementById()` method and pass in the `id` as an argument. To get the HTML element with an `id` of `myApp`, it would look like this:

> ```const myElement = document.getElementById('myApp');```

<br>

#### **3. Create a React root**

Create a `React` `root` to render content using the `createRoot()` method, passing `container` and put it in a `root` constant.

> **Hint:**
Given an HTML element stored in a constant called `myApp`, a `React` `root` can be created like this:

> `const myRoot = createRoot(myApp);`

<br>


#### **4. Add a title constant that will hold the value of the title. For now, set its value to an empty string.**

In addition, create an `animalFacts` constant to hold the **JSX** expression that we’ll want to be compiled. Set its value to a `<h1>` element that contains our `title`.

We still shouldn’t see anything in the browser yet! We’ll have to wait until we write our **React** root’s `render()` method before anything shows up.

> **Hint:**
When nesting JavaScript inside of a **JSX** expression, the JavaScript must be _wrapped in curly braces_.

<br>

#### **5. Using the ternary operator, let the \<h1> heading**

We could fill in the empty string assigned to `title` if we wanted, but we could also leave it blank and let the **JSX** use a default value instead.

Using the **ternary operator**, let the `<h1>` heading use `'Click an animal for a fun fact'` as the _default_ if `title` is an empty string.

> **Hint:**
The following line of code will evaluate to `'John Doe'`.

> `name === '' ? 'John Doe' : name`

<br>

#### **6. It’s time to call our root‘s render() method.**

Let’s pass in `animalFacts` as the **JSX** expression that we want to be compiled and rendered.

When finished, click **Save**. If all goes well, we should see the text `'Click an animal for a fun fact!'` appear on the screen!

> **Hint:**
Remember, the argument of `root.render()` is the **JSX** expression we want to be compiled.

<br>

## **Add a Background**

#### **7. Let’s add a background!**

Somewhere above where `animalFacts` is defined, create a constant named `background`. Set its value to a `<img />` element.

***Now let’s give it some attributes:***

- Give it a class of `'background'`
- Let’s use `'ocean'` for `alt`.
- Finally, use `'/images/ocean.jpg'` as the value of `src`.

> **Hint:**
When adding attributes to an element, they go inside of the opening tag _(and they are written in camelCase in **JSX**)_. 

> ***Here’s an example:***
```
const example = (
  <div 
    className='banner'
    tabIndex='2' >
  </div>
);
```
<br>

#### **8. Let’s reformat the JSX expression stored in animalFacts to include the background variable.**

Wrap the current `<h1>` element and our new `background` variable inside of `<div></div>` tags. Since the expression is going to be multiple lines, wrap it in parentheses.

Click **Save**. If everything is working as it should, we should see our **background image** showing up underneath the **title**!

> **Hint:**
Here’s what the syntax for including an expression could look like:
```
const example = (
  <div>
    <p></p>
    {/*some JavaScript variable or expression*/}
  </div>
);
```

<br>

## **Add an Array of Images**

<br>

#### **9. For each animal, add a new <img /> to that array.**

Use a **for...in loop** to iterate over the `animals` object that we’re importing on line 1. Before the `animalFacts` definition, define an `images` array. For each `animal`, add a new `<img />` to that array.

Assuming `animal` is the placeholder variable in our **for...in loop**, each `image` should have the following attributes:

```
key: {animal}
className: 'animal'
alt: {animal}
src: {animals[animal].image}
aria-label: {animal}
role: 'button'
```

> **Hint:**
Here’s an example **for...in loop** that adds **JSX** elements to an array:

```
const todo = ['Make bed', 'Brush teeth', 'Eat breakfast'];
 
const list = [];
for (const item in todo) {
   list.push(<li>{item}</li>)
};
```

<br>

#### **10. Now that we have our array of images, let’s inject it into the JSX expression.**

Within the `animalFacts` **JSX**, underneath `{background}`, create a `<div>`. Give it a `className` attribute and set it equal to `'animals'`. Nest the array of `images` inside of this element.

Finally, click **Save**. We should see our `animals`!

> **Hint:**
An array of **JSX** elements is nested inside of a **JSX** expression just like any other JavaScript: wrapped in curly braces.

<br>

## **Adding Fun Facts**

#### **11. Let’s write a function to handle animals event**

Now that we have our `animals` displaying on the screen, we’re ready to add an event listener! But first, let’s write a function to handle this event.

Create a `function` `displayFact()` that takes one parameter `e`, the event. We want this function to pick a `random` `fun fact` based on the selected `animal`.

Inside of the function, use `e.target.alt` to get the name of the `animal` being clicked.

Generate a **random** `index` and use it to access an element in the animal's `.facts` array.

**Save** the `fun fact` in a variable.

> **Hint:**
To generate a `random` `index` to help select an element from an array, we can use the following expression:
```
const optionIndex = Math.floor(Math.random() * selectedAnimal.facts.length);
```

<br>

#### **12. Create an empty \<p> element in animalFacts**

We need a place to display our `facts`. Create an empty `<p>` element in `animalFacts` and give it an `id` attribute equal to `'fact'`.

> **Hint:**
Add a `<p>` element within the `animalFacts` expression, after the `<div>` containing the animal `images`.

<br>

#### **13. Include the event listener with each \<img> and edit the event listener so that it displays the fact in our new \<p> element.**

In the **for...in loop**, inside each <img>, add an `onClick` event listener that calls `displayFact`.

Inside `displayFact()` use `document.getElementById('fact')` to grab the `<p>` element where we’ll add our `fact`. Change the `.innerHTML` of the `<p>` element to our randomly selected `fact`.

Now **save** the code and click on an `animal`. We should see a `fact` pop up on the screen!

> **Hint:**
In **JSX** elements, event listeners are specified as attributes. Event names are written in **camelCase**, such as `onClick` for an onclick event, or `onMouseOver` for an `onmouseover` event.

<br>

## **Extra Credit**

#### **14. Let’s add one last feature to our awesome app!**

Create a `showBackground` constant. We can set its value to either `true` or `false`.

If `showBackground` is `true`, background should show up. If it’s `false`, it should not. Use the `&&` operator in `animalFacts` to implement this feature.

Toggle the value of `showBackground` between `true` and `false` and **save** the code to see if we got it working!

<br>

## **Optional Task:** 
In addition to the **AND** `&&` operator, we can use the **OR** `||` operator. Given a list of variables or expressions, `||` will return the value of the first one whose boolean evaluates to `true`.

Considering that the boolean of an empty string is `false`, can we think of a way to use `||` to replace the **ternary operator** in the heading?

> **Hint:** In this example, only `'Fruit'` and `'Bread'` will be displayed.

```
const fruit = true;
const bread = true;
const eggs = false;
 
const groceryList = (
   <ul>
      {fruit && <li>Fruit</li>}
      {bread && <li>Bread</li>}
      {eggs && <li>Eggs</li>}
   </ul>
);
```
<br>

### ***[Wrote by Nalini Vo](https://github.com/Nalini1998)***
