const express = require('express');
const app = express();
const port = 3000; 

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

const glossary = [
  {
    id: 1,
    term: 'Node.js',
    definition: 'A server-side runtime environment for JavaScript that is open-source and based on the JavaScript engine of Chrome V8 is called Node.js. It enables the creation of dynamic web applications using server-side scripting by allowing developers to run JavaScript code outside of a web browser.',
    references: 'Documentations available online: https://nodejs.org/ .'
  },
  {
    id: 2,
    term: 'Express',
    definition: 'Express.js is a straightforward, speedy, and uncomplicated Node.js web application framework. It makes it simpler to manage HTTP requests, route traffic, leverage middleware, and serve static files by providing a wide range of potent features and tools for creating online applications and APIs.',
    references: 'available online: https://expressjs.com/ '
  },

  {
    id: 3,
    term: 'Git',
    definition: 'a distributed version control system for managing group software development projects and keeping track of source code modifications.',
    references: 'https://git-scm.com/'
  },
  {
    id: 4,
    term: 'VS Code',
    definition: 'Visual Studio Code is a free and open-source source code editor that was built by Microsoft. It provides a very versatile and feature-rich environment for programmers to write, change, and debug code in a number of programming languages. VS Code is a well-liked tool for developers to utilize while developing software since it offers built-in support for extensions, a growing market, and version control systems.',
    references: 'Available online: https://code.visualstudio.com/ (accessed July 21, 2023).'
  },
  {
    id: 5,
    term: 'NPM(Node Package Manager)',
    definition: 'Node Package Manager is a command-line utility for Node.js. Programmers may swiftly install, handle, and distribute reusable code modules (packages) from the npm registry using it as a package manager for JavaScript-based applications.',
    references: ' "Node Package Manager (NPM)." npm. Available online: https://www.npmjs.com/ .'
  },
  {
    id: 6,
    term: 'DevOps',
    definition: 'DevOps is a collection of strategies and technologies designed to help businesses produce apps and services more quickly than they could using traditional software development processes.Simply said, DevOps attempts to eliminate the conventional boundaries between development and operations teams. Development and operations teams collaborate across the whole software development lifecycle, from testing through deployment and operations, as part of a DevOps framework.',
    references: '"DevOps." Techopedia. Available online: https://www.techopedia.com/definition/25995/devops .'
  },
  {
    id: 7,
    term: 'Software Development Life Cycle(SDLC)',
    definition: 'To plan, build, test, distribute, and manage software products, software development teams follow the Software Development Life Cycle (SDLC), a structured and rigorous procedure. It features several stages, methods, and processes that guarantee the efficient and top-notch delivery of software.',
    references: 'IEEE Computer Society. doi: 10.1109/IEEESTD.1991.676105.'
  },
  {
    id: 8,
    term: 'Microservices',
    definition: 'A complex application is divided into smaller, autonomous, and loosely coupled services using the architectural approach known as microservices. Each service is capable of being created, implemented, and expanded separately and has a unique business potential. ',
    references: ' "Microservices." martinfowler.com. Available online: https://martinfowler.com/articles/microservices.html .'
  },
  {
    id: 9,
    term: 'Web Hosting',
    definition: 'The act of storing and providing website files and data on a server linked to the internet is referred to as web hosting. It lets people and organizations to open up their websites to visitors all around the world. Web hosting companies provide a range of hosting services, each addressing a distinct set of requirements and amounts of website traffic, including shared hosting, VPS hosting, dedicated hosting, and cloud hosting.',
    references: 'International Journal of Innovative Technology and Exploring Engineering (IJITEE), 8(10), 1582-1587. doi: 10.35940/ijitee.L8498.0981019.'
  },
  {
    id: 10,
    term: 'Agile Methodology',
    definition: 'The agile process for software development emphasizes user feedback, adaption, and flexibility. Cross-functional teams operate in brief development cycles known as sprints or iterations, which promote cooperation and the philosophy of continuous progress.',
    references: 'Cockburn, A. (2001). Agile Software Development: The People Factor. '
  },
  


];

app.get('/', (req, res) => {
  res.render('index', { glossary });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
