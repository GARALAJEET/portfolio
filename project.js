document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.querySelector('.projects-container');
    const projects = [
        {
            title: ' Tech Burger  CLI ',
            description: 'Tech Burger is a Python-based restaurant management system with MySQL for data storage. Customers can view the menu, place, and cancel orders, while shop owners manage menu items and orders. It features login authentication, order tracking, and future plans for a GUI. Install dependencies, configure the database, and run the application easily.',
            githubLink: 'https://github.com/GARALAJEET/tech-burger.py.git'
        },
        {
            title: 'Studpal CLI',
            description: 'StudPal is a Java-based student management system designed to help students manage their schedules, track expenses, and maintain a personal wallet. It includes features for timetable management, authentication, expense tracking, and wallet management, all backed by a MySQL database.',
          
            githubLink: 'https://github.com/GARALAJEET/studpal.git'
        },
        {
            title: 'The Task Tracker CLI',
            description: 'The Task Tracker CLI is a simple command-line interface (CLI) application built using Java Spring Boot. This project allows users to track tasks efficiently by performing CRUD operations such as adding, updating, deleting, and displaying tasks. The task list is stored in a MySQL database, and tasks are categorized into different statuses: To-Do, In-Progress, and Done.',
            // technologies: ['Spring boot', 'Hibernate', 'Mysql'],
        
            githubLink: 'https://github.com/GARALAJEET/Task-Tracker-CLI'
        }, {
            title: 'Studpal UI',
            description: 'The StudPal UI will feature a simple and intuitive design focused on student productivity. It will provide easy navigation for managing daily schedules, tracking finances, and organizing academic tasks. The interface will include a dashboard displaying upcoming classes, reminders, and wallet balance. A minimalistic yet effective layout will ensure smooth user interaction, with essential features accessible through a structured menu.',
            // technologies: ['Spring boot', 'Hibernate', 'Mysql'],
        
            githubLink: 'https://garalajeet.github.io/Studpal-1.0/'
        },
        {
            title: 'tech Burger',
            description: 'Tech Burger offers a seamless online ordering experience with a simple and interactive UI. Customers can browse the menu, customize their orders, and check out effortlessly. Shop owners can manage orders through a secure login system. The website ensures smooth navigation, clear categorization of burgers, sides, and drinks, and highlights special combo offers for an engaging user experience.',
        
            githubLink: 'https://garalajeet.github.io/tech-burger/'
        },
        {
            title: 'authSystem',
            description: 'AuthSystem is a user authentication system built with Spring Boot (Backend), MySQL (Database), and HTML, CSS, JavaScript (Frontend). It supports user registration, login, password validation, and email verification. The backend ensures data security using DTO, Validator, and JavaMailSender, while MySQL stores user credentials. Future enhancements include 2FA and OAuth login.',

            githubLink: 'https://github.com/GARALAJEET/authSystem.git'
        }
    ];

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');

        projectCard.innerHTML = `
            <div class="project-details">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-links">
                    <a href="${project.githubLink}" class="project-link" target="_blank">GitHub</a>
                </div>
            </div>
        `;

        projectsContainer.appendChild(projectCard);
    });
    const lightbox = GLightbox({
        selector: '.project-image',
        title: true
    });
});
