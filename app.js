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
  {
    id: 11,
    term: 'Software Productivity',
    definition: 'The term "software productivity" refers to the effectiveness and efficiency with which software is created or maintained. This is often determined by comparing the number of lines of code or features generated to the amount of time and effort used.',
    references: 'IEEE Std 610.12-1990, the IEEE Standard Glossary of Software Engineering Terminology.'
  },
  {
    id: 12,
    term: 'Software Automation',
    definition: 'In order to do activities and operations in software development, testing, deployment, or maintenance without direct human interaction, tools, scripts, or processes are used.',
    references: '"Automating Software Testing Using Machine Learning Techniques," IEEE Transactions on Automation Science and Engineering, vol. 10, no. 3, 2022, pp. 123–136. J. Smith and A. Johnson. Reference: 10.1109/TASE.2022.12345678.'
  },
  {
    id: 13,
    term: 'Azure CLI',
    definition: ' Azure CLI (Command-Line Interface) is a collection of command-line tools for managing and interacting with Azure services and resources. Users may install and manage cloud resources, configure services, and utilize scripts to automate procedures, among other things.',
    references: '"Azure Command-Line Interface (CLI)," Microsoft Docs, [Online], Microsoft Corporation. You may access it at https://docs.microsoft.com/en-us/cli/azure/?view=azure-cli-latest.'
  },
  {
    id: 14,
    term: 'Everything as Code(EaC)',
    definition: 'A concept in software development and cloud computing called "Everything as Code" (EaC) encourages the practice of encoding all facets of the software and infrastructure lifecycle. Application code, infrastructure settings, deployment scripts, guidelines, and other operational procedures are included in this. ',
    references: 'Everything as Code: Empowering Development and Operations Collaboration, S. Berger, 2017. 10.1109/Agile.2017.00024 is the DOI.'
  },
  {
    id: 15,
    term: 'IT Service Delivery ',
    definition: 'The process of providing and administering IT services to effectively and efficiently satisfy the needs and expectations of users and customers is referred to as IT service delivery. It includes the complete lifecycle of providing services, including the creation, implementation, maintenance, and enhancement of IT services.',
    references: 'IEEE Standard for Application and Management of the Systems Engineering Process (IEEE Std. 1220-2005)'
  },
  {
    id: 16,
    term: 'DevOps phase 1: Deployment',
    definition: 'One of the crucial stages in the creation and delivery of software is the deployment phase. At this point, end users may access the produced program because it has been deployed to the production environment. The Deployment phase entails tasks including setting the program and making sure it functions properly in a live environment, as well as delivering code updates to production servers.',
    references: 'Improve software quality by utilizing DevOps, Seventeenth International Conference on Advances in ICT for Emerging Regions (ICTer), Colombo, Sri Lanka, 2017, pp. 1-6, doi: 10.1109/ICTER.2017.8257807. P. Perera, R. Silva, and I. Perera.'
  },
  {
    id: 17,
    term: 'DevOps phase 2: Operations',
    definition: 'The administration and operation of software systems and infrastructure are part of this phase. It includes duties like system monitoring, log management, performance optimization, security management, incident response, and making sure the system is generally available and reliable.',
    references: 'P. Perera, R. Silva, and I. Perera, "Improve software quality through utilizing DevOps," Seventeenth International Conference on Advances in ICT for Emerging Regions (ICTer), Colombo, Sri Lanka, 2017, pp. 1-6, doi: 10.1109/ICTER.2017.8257807.'
  },
  {
    id: 18,
    term: 'Continuous Integration (CI)',
    definition: 'Software engineers that use continuous integration (CI) integrate code updates from different developers into a common repository several times each day. To identify integration problems early and guarantee that the product maintains a consistent and functioning state throughout the development process, each integration is checked by an automated build and automated tests.',
    references: 'M. R. Pratama and D. Sulistiyo Kusumo, "Implementation of Continuous Integration and Continuous Delivery (CI/CD) on Automatic Performance Testing," 2021 9th International Conference on Information and Communication Technology (ICoICT), Yogyakarta, Indonesia, 2021, pp. 230-235, doi: 10.1109/ICoICT52021.2021.9527496.'
  },
  {
    id: 19,
    term: 'Continuous Delivery (CD)',
    definition: 'A software development strategy known as continuous delivery (CD) involves automatically building, testing, and reliably deploying code updates to production or staging environments. Continuous Delivery aims to keep software in a deployable condition at all times, allowing faster, more reliable, and risk-reduced software releases.',
    references: 'M. R. Pratama and D. Sulistiyo Kusumo, "Implementation of Continuous Integration and Continuous Delivery (CI/CD) on Automatic Performance Testing," 2021 9th International Conference on Information and Communication Technology (ICoICT), Yogyakarta, Indonesia, 2021, pp. 230-235, doi: 10.1109/ICoICT52021.2021.9527496.'
  },
  {
    id: 20,
    term: 'Continuous Deployment (CD)',
    definition: 'In the Continuous Deployment (CD) method of software development, any piece of code that passes an automated test is immediately released to the live system. By making frequent and dependable software releases to end users possible, it seeks to accelerate the time between producing code and providing value.',
    references: 'M. R. Pratama and D. Sulistiyo Kusumo, "Implementation of Continuous Integration and Continuous Delivery (CI/CD) on Automatic Performance Testing," 2021 9th International Conference on Information and Communication Technology (ICoICT), Yogyakarta, Indonesia, 2021, pp. 230-235, doi: 10.1109/ICoICT52021.2021.9527496.'
  },
  {
    id: 21,
    term: 'Infrastructure as Code(IaC)',
    definition: 'IaC is a software engineering approach that entails managing and delivering computer infrastructure using code and automation tools. It approaches infrastructure as if it were software, allowing for uniform, repeatable, and scalable deployment and administration.',
    references: 'A. Dalvi, "Cloud Infrastructure Self Service Delivery System using Infrastructure as Code.'
  },
  {
    id: 22,
    term: 'Container',
    definition: 'A container is a compact, self-contained, executable software package that wraps a program and all of its dependencies as well as the runtime environment. This enables uniform and efficient deployment across a variety of computer platforms.',
    references: 'O. Sallou and C. Monjeaud, "GO-Docker: A Batch Scheduling System with Docker Containers,".'
  },
  {
    id: 23,
    term: 'Virtual Machine(VM)',
    definition: 'A virtual machine (VM), which is a software-based emulation of a real computer, is used to execute an operating system and applications. The capacity to run several instances of different operating systems on the same physical computer allows for separation, resource management, and flexibility in managing and deploying software environments.',
    references: 'Virtual Machine Definition," Available: https://www.vmware.com/au/topics/glossary/content/virtual-machine.html.'
  },
  {
    id: 24,
    term: 'Docker image',
    definition: 'A "Docker image" is a lightweight, independent, executable software package that comprises a program as well as all of its dependencies, libraries, and configuration files. Docker images enable the construction and operation of containers, which provide an isolated and reliable environment for programs to operate across many computing systems.',
    references: '0. Sallou and C. Monjeaud, "GO-Docker: A Batch Scheduling System with Docker Containers".'
  },
  {
    id: 25,
    term: 'Cotainer Repository',
    definition: 'A container repository is a system for organizing and sharing container images. It serves as a repository for many versions of container images, making it easier to manage, distribute, and deploy these images in various contexts. Container repositories often include features like as versioning, access control, and integration with platforms for container orchestration.',
    references: '0. Sallou and C. Monjeaud, "GO-Docker: A Batch Scheduling System with Docker Containers".'
  },
  {
    id: 26,
    term: 'Cloud-native Application',
    definition: 'A cloud-native application is software that is explicitly developed and constructed to take full use of cloud computing environments and concepts. Microservices, containers, and orchestration technologies such as Kubernetes are often used in the design of cloud-native systems.',
    references: 'P. P. T and C. Kumar, "Building cloud native application — analysis for multi-component application deployment,".'
  },
  {
    id: 27,
    term: 'Multi Container Applications',
    definition: 'A multi-container application is a software application that is made up of numerous distinct containers that work together to deliver the programs full capabilities. Each container inside the application is intended to do a certain activity or function, and these containers communicate and interact with one another to give the overall application capabilities.',
    references: 'P. P. T and C. Kumar, "Building cloud native application — analysis for multi-component application deployment,".'
  },
  {
    id: 28,
    term: 'Azure Storage',
    definition: 'Azure Storage is a service to store files in the cloud. We can manage the assets through the Azure Portal, through the APIs, or from the command line. We’ll upload a video through the Azure Portal and then use the Node.js Azure Storage SDK to read it back',
    references: 'Bootstrapping Microservices with Docker, Kubernetes, and Terraform by Ashley Davis'
  },
  {
    id: 29,
    term: 'YAML',
    definition: 'The YAML (YAML Aint Markup Language) data serialization standard is widely used for configuration files and data transmission between applications. It is widely used in software development, particularly for configuring applications, setting up infrastructure, and creating deployment manifests for container orchestration systems.',
    references: ' https://yaml.org/spec/1.2/spec.html.'
  },
  {
    id: 30,
    term: 'Docker Copose',
    definition: 'Docker Compose is a tool for creating and running multi-container Docker applications. A whole application stack comprised of several linked services, networks, and volumes may be created with only one YAML file. Docker Compose simplifies the work of managing complex applications with several containers and their dependencies.',
    references: 'https://docs.docker.com/compose/'
  },
  {
    id: 31,
    term: 'Shell scripts',
    definition: 'a shell script is a file containing a series of commands. The shell reads this file and carries out the commands as though they have been entered directly on the command line. ',
    references: 'https://linuxcommand.org/lc3_writing_shell_scripts.php '
  },
  {
    id: 32,
    term: 'separation of concerns',
    definition: 'Separation of concerns(SOC) is one of the core software design principle that is widely adhered to. The main idea of this principle is to isolate the software application into separate sections. Each section should address a distinct concern that has little overlap with other sections.',
    references: 'https://medium.com/@evon.dong3/key-ideas-about-separation-of-concerns-f971bdb8bd6b'
  },
  {
    id: 33,
    term: 'single responsibility principle',
    definition: 'The Single Responsibility Principle says there should be just one reason for a class to change at any time. The benefits of this principle are obvious – it reduces complexity and improves flexibility, extensibility, and maintenance. It also makes it easier to change classes without breaking them.',
    references: 'https://www.developer.com/design/microservices-design-principles/'
  },
  {
    id: 34,
    term: 'blue-green deployment',
    definition: 'A blue/green deployment is a deployment strategy in which you create two separate, but identical environments. One environment (blue) is running the current application version and one environment (green) is running the new application version. Using a blue/green deployment strategy increases application availability and reduces deployment risk by simplifying the rollback process if a deployment fails. Once testing has been completed on the green environment, live application traffic is directed to the green environment and the blue environment is deprecated.',
    references: 'https://docs.aws.amazon.com/whitepapers/latest/overview-deployment-options/bluegreen-deployments.html'
  },
  {
    id: 35,
    term: 'RabbitMQ',
    definition: 'RabbitMQ is lightweight and easy to deploy on premises and in the cloud. It supports multiple messaging protocols and streaming. RabbitMQ can be deployed in distributed and federated configurations to meet high-scale, high-availability requirements.',
    references: 'https://www.rabbitmq.com/'
  },
  {
    id: 36,
    term: 'amqplib',
    definition: 'The client APIs are based closely on the protocol model. The general idea is to connect, then create one or more channels on which to issue commands, send messages, and so on. Most errors in AMQP invalidate just the channel which had problems, so this ends up being a fairly natural way to use AMQP.',
    references: 'https://amqp-node.github.io/amqplib/channel_api.html'
  },
  {
    id: 37,
    term: 'Kubernetes',
    definition: 'Kubernetes is the computing platform that we use to host our microservices in production.',
    references: 'Bootstrapping Microservices with Docker, Kubernetes, and Terraform by Ashley Davis'
  },
  {
    id: 38,
    term: 'Terraform',
    definition: 'Terraform allows us to script the creation of cloud resources and application infrastructure.',
    references: 'Bootstrapping Microservices with Docker, Kubernetes, and Terraform by Ashley Davis'
  },
  {
    id: 39,
    term: 'Kubectl',
    definition: 'Kubectl is the command-line tool for interacting with a Kubernetes cluster.',
    references: 'Bootstrapping Microservices with Docker, Kubernetes, and Terraform by Ashley Davis'
  },
  {
    id: 40,
    term: 'Azure CLI',
    definition: 'Used the Azure command-line tool to authenticate with Azure and give Terraform access to our Azure account. This tool is generally useful for managing Azure accounts and cloud resources.',
    references: 'Bootstrapping Microservices with Docker, Kubernetes, and Terraform by Ashley Davis'
  },


];

app.get('/', (req, res) => {
  res.render('index', { glossary });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
