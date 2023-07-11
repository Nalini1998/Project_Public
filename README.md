### **SOFTWARE ENGINEERING FOUNDATIONS**
# **Project: Healthy Recipes**

***Using CSS selectors, we'll give a recipe website some new style!***

<br>

# **Tasks**

#### **1. Write a CSS selector for the img tag**
Before we begin, take a look at the site's structure in **index.html**.

Start by making the image at the top of the page a little smaller. Navigate to **style.css** and write a CSS selector for the `img` tag.

Within its curly braces, write:

```
height: 150px;
```

Try experimenting with the **150** number and observing the results.

<br>


#### **2. Within its curly braces, add the following CSS**
The font size of the recipe description should be larger. In **style.css**, write a CSS selector for the `.description` class.

Within its curly braces, add the following CSS:

```
font-size: 20px;
```

<br>


#### **3. Next, let's style the cooking time**
The element on line 15 of **index.html** has an `id` attribute of `cook-time`. Navigate to **style.css** and add a `cook-time` ID selector.

Inside of its curly braces, write:

```
font-weight: bold;
```

<br>

#### **4. Start by writing a selector for the li elements**
_Now, let's change the bullet points of the ingredient list to squares instead of circles._

Start by writing a selector for the `li` elements inside of the `.ingredients` element.

Then, write this inside of its curly braces:

```
list-style: square;
```

<br>

#### **5. Write a selector for p elements**
_Next let’s make the time for each preparation step appear gray._

In **style.css**, write `a` selector for `p` elements that also have `a` class of `.time`.

Then, inside of this selector's curly braces, write:

```
color: gray;
```

<br>

#### **6. Let’s make the link a different color**

_At the bottom of the page, there's a link to the full recipe. Let's make the link a different color._

Notice that in **index.html**, on line 42, there is a `p` element with `a` class of citation, then an `a` element inside of it with `a` class of external-link.

Navigate to **style.css** and write a selector using external-link class.

Then, add this code inside of the selector's curly braces:

```
color: SeaGreen;
```

<br>

#### **7. Let's make the font Helvetica**
Finally, let's make the font **Helvetica** instead of the default **Times New Roman**. 

Instead of writing multiple selectors to apply the `font-family` property, write a selector that applies a `font-family` attribute to all text at once.

The selector should target the `h1`, `h2`, `p`, and `li` elements.

To change their font, include this line of code inside the curly braces:

```
font-family: Helvetica;
```

<br>

### ***This Project was completed by [Nalini Vo](https://github.com/Nalini1998)***