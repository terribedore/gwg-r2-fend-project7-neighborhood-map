I am going to look at a select group of places called "free date ideas" in the San Antonio, TX area. This allows me to /\[fairly] easily reuse Lessons 7 and 8 from Part 5 by converting it into a react app.

My intitial thoughts are to use the html doc from the 'getting started with APIs' lesson and parse them into an app using React.

To give more details, I also need to pull in another non-google api/library. Would love to use wikipedia since we actually donate there regularly.

Then, I need to set up a Service Worker. Hoping the code from my restaurant reviews project will suffice with minor tweaking.

# Initial Structure / Heirarchy
Folder: Main
  gitignore
  README
  LICENSE
  Folder: Requirements given by Udacity
    Overview
    Instructions
    Complexity
    Rubric
    Submission
    My Strategy
  Folder: public
  Folder: src (source)
    index.js
    styles.css
    registerServiceWorker.js
    Folder: data

    Folder: components (all the pieces from P05.L07.M13 separated)
      app.js (one ring to rule them all)
      features.js (??)
      locations.json (list of all my locations)
      leMap.js (actual map init)

