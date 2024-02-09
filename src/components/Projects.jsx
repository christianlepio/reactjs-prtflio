import kanban from '/images/kanban.png'
import zustand from '/images/zustand.png'
import todolist from '/images/todo_list.jpg'

const Projects = () => {
    const project = [
        {
            title: 'Kanban Board', 
            projImg: kanban,
            type: 'Web-based',
            techStacks: [
                'https://skillicons.dev/icons?i=react',
                'https://skillicons.dev/icons?i=bootstrap',
                zustand
            ],
            description: 'Kanban boards use cards to represent work items and columns to represent each stage of the process. Cards flow through the workflow until completion. Workflows can be as simple as “To Do,” “In Progress,” “Complete,” or much more complex.',
            demoLink: 'https://christianlepio.github.io/kanban-board/'
        },
        {
            title: 'TODO List App', 
            projImg: todolist,
            type: 'Web-based',
            techStacks: [
                'https://skillicons.dev/icons?i=react',
                'https://skillicons.dev/icons?i=bootstrap'
            ],
            description: 'A To-Do List App is a digital tool that helps you organize and manage your tasks more efficiently. It allows you to create a list of tasks that you need to complete within a certain timeframe. These apps often come with features like reminders, due dates, task prioritization, and even collaboration tools for team projects.',
            demoLink: 'https://christianlepio.github.io/toDo_List-App/'
        },
        {
            title: 'Lucky9 Card Game', 
            projImg: 'https://christianlepio.github.io/prtflio/images/lucky9.png',
            type: 'Web-based',
            techStacks: [
                'https://skillicons.dev/icons?i=html', 
                'https://skillicons.dev/icons?i=bootstrap',
                'https://skillicons.dev/icons?i=js'
            ],
            description: 'Lucky 9 is a simple, fast, and exciting card game that Filipinos may play on their phones, computers, or laptops using a web browser. This game, which is also a strategy game, will undoubtedly provide you with a more thrilling experience! You may challenge AI online and keep your head in shape!',
            demoLink: 'https://christianlepio.github.io/lcky9cardgame/'
        },
        {
            title: 'Rock-Paper-Scissors Game', 
            projImg: 'https://christianlepio.github.io/prtflio/images/batops.png',
            type: 'Web-based',
            techStacks: [
                'https://skillicons.dev/icons?i=html', 
                'https://skillicons.dev/icons?i=bootstrap',
                'https://skillicons.dev/icons?i=js'
            ],
            description: 'A web-based Rock Paper Scissors game in which human vs. computer (Bot / AI) players make one of three shapes with an outstretched hand at the same time. A draw, a win, or a defeat are the three possible outcomes.',
            demoLink: 'https://christianlepio.github.io/BatoBatoPick-js/'
        },
        {
            title: 'ChuckNorris Jokes Generator', 
            projImg: 'https://christianlepio.github.io/prtflio/images/chucknorris.jpg',
            type: 'Web-based',
            techStacks: [
                'https://skillicons.dev/icons?i=html', 
                'https://skillicons.dev/icons?i=css', 
                'https://skillicons.dev/icons?i=react' 
            ],
            description: 'A React JS app that fetches and display all jokes of Chuck Norris using ChuckNorris API with the help of axios http library.',
            demoLink: 'https://christianlepio.github.io/chucknorris-jokes/'
        },
        {
            title: 'Church Event Reservation System', 
            projImg: 'https://christianlepio.github.io/prtflio/images/churchrs1.png',
            type: 'Web-based',
            techStacks: [
                'https://skillicons.dev/icons?i=html', 
                'https://skillicons.dev/icons?i=bootstrap',
                'https://skillicons.dev/icons?i=js', 
                'https://www.php.net/images/logos/new-php-logo.png',
                'https://skillicons.dev/icons?i=mysql'
            ],
            description: 'An easy to use church reservation web application software, congregants can reserve a seat for an upcoming service, event, or church gathering.',
            demoLink: 'https://github.com/christianlepio/ChurchEventReservationSystem'
        },
        {
            title: 'Billing System', 
            projImg: 'https://christianlepio.github.io/prtflio/images/billsys.png',
            type: 'Desktop-based',
            techStacks: [
                'https://skillicons.dev/icons?i=java',
                'https://skillicons.dev/icons?i=mysql'
            ],
            description: 'Billing systems often are designed to handle everything from computing charges to providing statements.',
            demoLink: 'https://github.com/christianlepio/billingSystem-java-'
        },
        {
            title: 'Color Game', 
            projImg: 'https://christianlepio.github.io/prtflio/images/colorG.png',
            type: 'Android',
            techStacks: [
                'https://skillicons.dev/icons?i=java'
            ],
            description: 'An Android-based game in which the user selects a color of his/her choice, then presses a button to spin the color roulette wheel, which subsequently displays whether the user win or lose. This amusing game will be used to place bets.',
            demoLink: 'https://github.com/christianlepio/colorgame_ni_ryan'
        },
        {
            title: 'Rental Stall Management System', 
            projImg: 'https://christianlepio.github.io/prtflio/images/rental%20space.png',
            type: 'Web-based',
            techStacks: [
                'https://skillicons.dev/icons?i=html', 
                'https://skillicons.dev/icons?i=bootstrap',
                'https://skillicons.dev/icons?i=js', 
                'https://www.php.net/images/logos/new-php-logo.png',
                'https://skillicons.dev/icons?i=mysql'
            ],
            description: 'The developed system was designed to give assistance for the marketplace owners/managers for properly control on their tenants, collected payments, and other records that they may have. It also generate prescribed decisions based on the analysis of all recorded data.',
            demoLink: 'https://github.com/christianlepio/RentalStallManagementSystem'
        },
        {
            title: 'Computer Aided Instruction', 
            projImg: 'https://christianlepio.github.io/prtflio/images/e-learning.png',
            type: 'Web-based',
            techStacks: [
                'https://skillicons.dev/icons?i=html', 
                'https://skillicons.dev/icons?i=bootstrap',
                'https://skillicons.dev/icons?i=js', 
                'https://www.php.net/images/logos/new-php-logo.png',
                'https://skillicons.dev/icons?i=mysql'
            ],
            description: 'Computer-aided instruction (CAI) is an interactive teaching strategy that employs the use of a computer to provide instructional content and track student progress.',
            demoLink: 'https://www.youtube.com/watch?v=6oFyE3Yy6Vs'
        },
    ]

    return (
        <section className='project py-5'>
            <div className="d-flex justify-content-center mt-5" data-aos='zoom-in-up' data-aos-duration='1000'>
                <h2 className="h2 fw-bold text-center">My Projects</h2>
            </div>
            <div className="d-flex justify-content-center" data-aos='zoom-in-up' data-aos-duration='1500'>
                <small className="text-center mb-3 text-secondary">Here are few of my worked projects</small>
            </div>
            <div className="container px-2 mt-5">
                {
                    project.length > 0 ? (
                        project.map((proj, i) => (
                            <div key={i} className={"row align-items-center justify-content-center border-top border-3 rounded-4 shadow mb-5 p-3 " + (i % 2 === 0 ? 'flex-row-reverse' : null)}>
                                <div className="col-md-6 border shadow-sm p-2 rounded-4" data-aos='zoom-in' data-aos-duration='1000'>
                                    <img className='img-fluid rounded-3' src={proj.projImg} alt={proj.title} />
                                </div>
                                <div className="col-md-6 p-3" data-aos='zoom-out' data-aos-duration='1800'>
                                    <div className="d-flex justify-content-start">
                                        <small><i className="bi text-danger me-1 bi-circle-fill"></i></small>
                                        <small><i className="bi text-warning me-1 bi-circle-fill"></i></small>
                                        <small><i className="bi text-success bi-circle-fill"></i></small>
                                    </div>
                                    <div className="d-flex flex-column mt-3">
                                        <div className="d-flex justify-content-center">
                                            <h5 className='h5'>{proj.title}</h5>
                                        </div>     
                                        <div className="d-flex justify-content-center">
                                            <small className='text-secondary'>{proj.type}</small>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            {proj.techStacks.map((techStack, j) => (
                                                <img key={j} className='img-fluid mx-1 tech-stack' src={techStack} alt={techStack} />
                                            ))}
                                        </div>
                                        <div className="d-flex justify-content-center mt-4">
                                            <p className='fs-6 mx-4 desc'>{proj.description}</p>
                                        </div>
                                        <div className="d-flex justify-content-start mx-4 mt-3 pb-2">
                                            <a href={proj.demoLink} className='btn btn-primary rounded-3 px-3'><i className="bi bi-eye"></i> Demo</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : null
                }
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <div data-aos='zoom-in-up' data-aos-duration='1000'>
                        <p className='text-secondary mt-4'><small>. . . See more projects in my Repositories . . .</small></p>
                    </div>
                    <div data-aos='zoom-in-up' data-aos-duration='1500'>
                        <a href="https://github.com/christianlepio?tab=repositories" className="fs-6 mb-5"><u className="fw-bold"><i className="fa-solid fa-link"></i>christianlepio</u></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects