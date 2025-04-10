## Creating a frontend Framework from Scratch

### Introduction
From working and practicing on frontend frameworks, I always wondered what happens in the background. How does reactivity work? How does the framework process literal templates? And much more! Because of this curiosity, I decided to take the time to build my own. I wanted to expand my knowledge and understand the processes of how frameworks operate.

### What I got out of it
It was very much a struggle at first. The amount of resources is relatively small for learning how to build your own frontend framework. For a lot of it, I had to review the source code of Vue and SolidJS to grasp how they handle reactivity and Virtual DOM manipulation. Furthermore, I was able to find some neat articles that go into detail for the smaller and simpler blocks that make up a frontend framework. I gained insightful experience using JavaScript Signals, which has become a new trend for tracking state and initiating effects based on certain state changes. Furthermore, implementing elements and logic for template literals/strings, with on-click events, was very valuable for me to understand how it works. Even if my logic is messy (more on that soon...).

### Future of the Project
This frontend framework is not yet complete. There is still much I think I can learn from frontend frameworks and more I can improve in my current implementation. Some priority features I want to implement are a Virtual DOM and lifecycles, to learn how they work. What I would like to improve is parsing the elements from a component (making it more like an HTML template) to the DOM, detecting changes and updating the Virtual DOM accordingly, and applying CSS isolated to respective components. The list could go on and on for new features and improvements to existing logic, but those are just the highlights for now.

### Resources and Thanks!
If you read this far, thanks! I appreciate your curiosity and time.

For videos and sources that helped me out:
- [JavaScript Signals](https://www.freecodecamp.org/news/learn-javascript-reactivity-build-signals-from-scratch/) by Rahul gupta
- [mfrachet's](https://mfrachet.github.io/create-frontend-framework/) guide on how to make a frontend framework
- [Awesome's](https://www.youtube.com/watch?v=qzQ8fKLDUyo) summary video of their frontend framework
- [Fireship's](https://www.youtube.com/watch?v=SJeBRW1QQMA) summary video of their frontend framework

### past-solutions
- These were past implementations of implementing a frontend framework. Some of these solution did work, but were stopped due to certain limitations I could not get past. I did not want to delete the work since it serves as a reminder and a look back of I what was blocked on. I may remove it later on though depending on my progress on this project.