# Assignment 1 Write-Up
## What kind of website did you make and why?

I made a website that ranks and lists my favorite movies, shows, and books. I also included a watchlist for movies and shows that I want to watch this fall. I made this website because I felt like making something I've never made before (I've made a personal portfolio a few times already) and wanted to make something personal. I typically use apps like Letterboxd and Goodreads to track media consumption, so I wanted to see if I could translate that behavior into a website.


## Briefly describe the 5 pages you created for your site.
### Page 1- Home Page
The Home page of my website higlights what the user can find on the website. It also has a sneak peek of my Letterboxd Top 4 Movies list. 

### Page 2- Movies Page
The Movies page contains lists and rankings of categories of movies I came up with, including best childhood movies, best comedy, best sad, and best joy-inducing movies. The bottom of the page has a table with facts about the "featured movies", which are movies that particularly stood out in each category. 

### Page 3- Shows Page
The Shows page contains lists and rankings of categories of shows I came up with- categories are: Childhood, Animated, and Adulty. The page features the same thing as the movies (minus the table) with the featured spotlight on shows that are particularly special. 

### Page 4- Watchlist Page
The Watchlist page lists the movies and shows I want to watch this fall with the title and a blurb about why I want to watch it.

### Page 5- Books Page
The Books page has a list of books I am currently reading and books I want to read. It has a featured section of a book that stands out.

## What were the HTML elements you used and why did you choose them?
I used semantic elements:
footer- to keep the viewer aware of the page they were on when they scrolled down and couldn't see the nav bar anymore
section- to keep my page cleanly separated and to help me organize the lists
article- to create a different style section for the part where I show my Letterboxd top 4
aside- to make a small section stand out and give a reader context for my reference
nav- created a navigation bar so users can travel between pages easily
ul, ol, li- in order to create lists for the assignment requirements
img- to add images to enhance visual appeal
div- to make a featured section that pops out 
table- to fulfill the assignment requirement and create variation in how I present my information

## Provide a link to the W3C HTML validation for your front-page.
![HTML validation](https://i.imgur.com/TRwS9Yf.png)

## What CSS styles did you apply to change the visual design of those HTML elements?
I changed global styles like heading and main text fonts to Parisienne and Lora. I also changed the background color and accent colors to be white and dark blue for readability. 

I styled the <nav> to stretch across the full width of the screen and centered the links using Flexbox. I styled links to be white with bold text and highlighted them to turn orange on hover, and underlined them to show the active page. To style span classes, I created .upcoming (italic, red text) and .watched (yellow, line-through) so I could highlight or cross off list items. As for article and aside, I gave <aside> a greyer background, border, rounded corners, and subtle shadow so it looks highlighted (subtly). I made the article clean with Arial font to differentiate it. 

For the table, I used borders, centered text, padding, and made the top row blue so it looks like a real data table.

For the footer, I styled it with the same dark background and white text as the nav bar for a consistent design.

I kept responsive design in mind- All images are responsive and centered with margins; divs are centered with a max width.

I created a few classes as well and styled them with CSS. I added a .featured class with a light background, borders, and padding to visually separate highlighted sections.

I made the .inverted class that flips background and text colors across the whole page to make a dark mode. When toggled with the JavaScript function, the navbar also switches to a light style while maintaining hover/active effects.

## Provide a link to the W3C CSS validation for your front-page.
![CSS validation](https://i.imgur.com/TURS0qd.png)

## Describe the Javascript code you wrote to add interactivity to your site.
I wrote two functions: invertColors and hideSadMovies. The first one makes dark mode on the click on the button, which involved adding an event listener (on click). This triggered the inverted CSS, switching the background and text colors for better contrast and a different viewing experience.

The other function was to hide specific list items on the Sad Movies list. This was a silly trick that protects viewers from seeing the SUPER sad movies. I added a class called "sad" to two movies in the HTML file. From there, if the "I HATE SAD MOVIES!!!" button is pressed, the style change is applied (display: none). This hides two really sad movies from the user. 

## Make sure there are no JS errors in the web inspector!
No errors!
