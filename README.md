# CS465 Fullstack
CS-465 Full Stack Development with MEAN

## Summary
Above is a fully functional fullstack application that serves both the customer and administrative sides. The application is a Travel Agent Website hosted locally. The application was created with the MEAN tech stack.

## Architecture
This was my first time creating a fullstack application, and with that came the opportunity to take charge of the frontend and backend code.  
It was very rewarding to see the full application come together with all of the moving pieces.  

To craft the frontend of the application, I used Express and Node.js, JavaScript programming, and a single-page application structure.  

- **Express** is a Node.js web application framework that provides features for building web applications such as routing, middleware integration, and server-side logic.  
- **JavaScript** is a programming language which allows for dynamic and interactive content in web browsers. It was also used for server-side development through Node.js.  
- **SPA (Single-Page Application)** is a web application or website which interacts with the user by dynamically rewriting the current page rather than loading new pages from a server. This can enable a better user experience.

The backend of the application used a NoSQL MongoDB database. This fits well with the other components of the MEAN stack as it allows for flexible, schema-less storage of JSON-like documents to ensure efficient interaction with Node.js applications.  

## Functionality
- JavaScript is a programming language often used for web development. JSON is a markup language which uses a streamlined document structure to convey and store data. These are both vital to the application as a whole, with JavaScript enabling frontend interactivity and server-side logic and JSON allowing for data transfer between client and server. JavaScript and JSON work in synergy to tie together the frontend and backend of the application.  

- There were many instances in the fullstack development process where I refactored code to improve functionality and efficiency, such as simplifying nested API calls, consolidating duplicated backend functions, and creating reusable UI components for trip listings.  

- Expanding on this, part of the SPA design pattern is encapsulation and modularity. This allowed for reusable UI components, which improves efficiency and maintenance and ensures easier debugging.  

## Testing
This project provided a variety of opportunities to conduct testing, which is vital to a secure and responsible software development process. Due to the nature of a web development application, I dealt with many instances of request and retrieval, which required testing through the framework of API endpoints. There were many new elements and concepts relevant to this context.  

Manual testing, or manual methods, was conducted through the browser console and by inspecting network requests to observe how data flowed between the frontend and backend. Postman was used to test API endpoints, ensuring that all CRUD operations—such as GET, POST, PUT, and DELETE requests—worked properly.  

Security in this fullstack application was especially important, particularly because I was responsible for all aspects of development. Input validation and user authentication were the minimal security measures I implemented to help protect the application.  

Prior to this course/project, I had only had experience conducting unit tests with Java and Maven. In contrast, testing for the Travlr application was not done through the IDE; it was done through terminal feedback each time I ran the server, through inspecting elements on the webpage, and using tools like Postman to manually verify API responses. This application-wide and system-wide testing is vital for a large codebase. There are often errors with the arrangement and formatting of different files in the codebase directory structure. When there are hundreds of files, one syntax error or one omission of an import or export component can cause the entire application to crash. Learning to interpret and reverse-engineer error messages, or to notice when the application is not functioning correctly and pinpoint the root cause, is extremely important in large-scale software development. This project was a wonderful opportunity to hone these skills.  

## Reflection 
This course provided a huge breakthrough in my confidence as a software developer. For the first time, I was responsible for a bird’s-eye view of the entire application. Aside from the basic skeleton of the project, I took this application from something extremely basic to something extremely complex and robust.  

I appreciated how this class provided extremely clear instructions for each step. It was less open-ended than the majority of our courses, but I think this was extremely helpful and necessary to my understanding of these subjects. For the first time, I had everything from start to finish spelled out for me, and this allowed me to fill holes in my knowledge base. For example, understanding version control in an applied setting. I liked how each step and each definition was spelled out and explained to us, and the walkthrough-like nature of the course gave me the confidence to do a project on a much broader scale than I would have been comfortable with otherwise. In the future, I feel much more ready to tackle projects of this scale on my own.  

The only complaint I have is that the course has us designing a web application and using JavaScript. Prior to this course, I had no exposure to JavaScript as a language or anything related to web development in my time at SNHU. I can't help but wonder if I would have gotten more out of a similarly structured fullstack dev course which focused on a different type of software application instead of a web-based one.  
