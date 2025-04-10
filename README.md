## Creating a frontend Framework from Scratch

### Introduction
From working and learning on frontend frameworks, I always wondered what happens in the background. How does the reactivity work? How does the framework take in literal templates? And much more! Because of this curiosity, I decided to take the time to make my own. I wanted to expand my knowledge and follow the process of how frameworks run.

### What I got out of it
It was very much a struggle at first. The amount of resources is pretty small to build our your own frontend framework. For a lot of it, I had to review the source code of Vue and SolidJS to get a grasp on how they handle reactivity and V/DOM manipulation. Furthermore, I was able to find some neat articles that go into detail for the smaller and simpler blocks that go into a frontend framework. I gained insightful experience using JavaScript Signals which has become a new trend of tracking state and initiating effects based on certain state changes. Furthermore, making elements and logic of template literal/strings, with on-click events, was very valuable for me to implement to understand how it works. Even if my logic is messy (more on that soon...).

### Future of the Project
This frontend framework is not done yet. There is still a lot I think I learn from frontend frameworks and more I can improve my current implementation. Some priority feature I want to implement is a VDOM to learn how that works and lifecycles. What I would like to improve is parsing the elements from a component (making it more related to a HTML template), detecting changes and updating V/DOM accordingly, and applying CSS to specific components. The list can go on and on for new features and improvements to existing logic, but those are just highlights for now.

### Resources and Thanks!
If you read this far, thanks! I appreciate your curiosity and time.

For videos and sources that helped me out:
- [JavaScript Signals](https://www.freecodecamp.org/news/learn-javascript-reactivity-build-signals-from-scratch/) by Rahul gupta
- [mfrachet's](https://mfrachet.github.io/create-frontend-framework/) guide on how to make a frontend framework
- [Awesome's](https://www.youtube.com/watch?v=qzQ8fKLDUyo) summary video of their frontend framework
- [Fireship's](https://www.youtube.com/watch?v=SJeBRW1QQMA) summary video of their frontend framework

### past-solutions
- These were past implementations of implementing a frontend framework. Some of these solution did work, but were stopped due to certain limitations I could not get past. I did not want to delete the work since it serves as a reminder and a look back of I what was blocked on. I may remove it later on though depending on my progress on this project.