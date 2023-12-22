import kanban from '/images/kanban.png'
import zustand from '/images/zustand.png'

const Projects = () => {
    const project = [
        {
            title: 'Kanban Board', 
            projImg: kanban,
            type: 'Web-based',
            techStacks: [
                'https://camo.githubusercontent.com/86ce870479afdbfa7075d5b25bff8642dd4894a061c920ea9a49d3f77c74b55b/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d7265616374',
                'https://camo.githubusercontent.com/5e8b6a8e8f07b3041792f726f0b2efd62a016ec24b743bf1e4a5c6e6423f86e3/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d626f6f747374726170',
                zustand
            ],
            description: 'Kanban boards use cards to represent work items and columns to represent each stage of the process. Cards flow through the workflow until completion. Workflows can be as simple as “To Do,” “In Progress,” “Complete,” or much more complex',
            demoLink: 'https://christianlepio.github.io/kanban-board/'
        },
        {
            title: 'TODO List App', 
            projImg: 'https://scontent.fmnl8-1.fna.fbcdn.net/v/t39.30808-6/380826961_3470968306495969_7049815772602103882_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeGEWonJXeAa9dNRd4PsO89BpKRllugXHAmkpGWW6BccCVnt6me3wUzOeLX5f_25TXlM2W4VDQ-bAucJ9rpi1XWT&_nc_ohc=jxAkcS_0QZQAX9WKFc7&_nc_ht=scontent.fmnl8-1.fna&oh=00_AfBuefqEL3bftAOekOTCicXAB3QjRGXsTNnP9mgowsskaA&oe=658A0DF0',
            type: 'Web-based',
            techStacks: [
                'https://camo.githubusercontent.com/86ce870479afdbfa7075d5b25bff8642dd4894a061c920ea9a49d3f77c74b55b/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d7265616374',
                'https://camo.githubusercontent.com/5e8b6a8e8f07b3041792f726f0b2efd62a016ec24b743bf1e4a5c6e6423f86e3/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d626f6f747374726170'
            ],
            description: 'A To-Do List App is a digital tool that helps you organize and manage your tasks more efficiently. It allows you to create a list of tasks that you need to complete within a certain timeframe. These apps often come with features like reminders, due dates, task prioritization, and even collaboration tools for team projects.',
            demoLink: 'https://christianlepio.github.io/toDo_List-App/'
        },
        {
            title: 'Lucky9 Card Game', 
            projImg: 'https://christianlepio.github.io/prtflio/images/lucky9.png',
            type: 'Web-based',
            techStacks: [
                'https://camo.githubusercontent.com/d5018e8d6194afbc0a7874bf55df5e7b0111f8abe4e622ae2200b124e33d6fe2/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d68746d6c', 
                'https://camo.githubusercontent.com/5e8b6a8e8f07b3041792f726f0b2efd62a016ec24b743bf1e4a5c6e6423f86e3/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d626f6f747374726170',
                'https://camo.githubusercontent.com/a4199191bff0e00930a78bbcd5f4257c4db4efc3d4bf3b19ca16041751b4c1be/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d6a73',
            ],
            description: 'Lucky 9 is a simple, fast, and exciting card game that Filipinos may play on their phones, computers, or laptops using a web browser. This game, which is also a strategy game, will undoubtedly provide you with a more thrilling experience! You may challenge AI online and keep your head in shape!',
            demoLink: 'https://christianlepio.github.io/lcky9cardgame/'
        },
        {
            title: 'Rock-Paper-Scissors Game', 
            projImg: 'https://christianlepio.github.io/prtflio/images/batops.png',
            type: 'Web-based',
            techStacks: [
                'https://camo.githubusercontent.com/d5018e8d6194afbc0a7874bf55df5e7b0111f8abe4e622ae2200b124e33d6fe2/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d68746d6c', 
                'https://camo.githubusercontent.com/5e8b6a8e8f07b3041792f726f0b2efd62a016ec24b743bf1e4a5c6e6423f86e3/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d626f6f747374726170',
                'https://camo.githubusercontent.com/a4199191bff0e00930a78bbcd5f4257c4db4efc3d4bf3b19ca16041751b4c1be/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d6a73',
            ],
            description: 'A web-based Rock Paper Scissors game in which human vs. computer (Bot / AI) players make one of three shapes with an outstretched hand at the same time. A draw, a win, or a defeat are the three possible outcomes.',
            demoLink: 'https://christianlepio.github.io/BatoBatoPick-js/'
        },
        {
            title: 'ChuckNorris Jokes Generator', 
            projImg: 'https://christianlepio.github.io/prtflio/images/chucknorris.jpg',
            type: 'Web-based',
            techStacks: [
                'https://camo.githubusercontent.com/d5018e8d6194afbc0a7874bf55df5e7b0111f8abe4e622ae2200b124e33d6fe2/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d68746d6c', 
                'https://camo.githubusercontent.com/0e09bd8aa8f06b2a1946dddff9415ba1df25f461852741979c5bb7bdc4860908/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d637373',
                'https://camo.githubusercontent.com/86ce870479afdbfa7075d5b25bff8642dd4894a061c920ea9a49d3f77c74b55b/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d7265616374'
            ],
            description: 'A React JS app that fetches and display all jokes of Chuck Norris using ChuckNorris API with the help of axios http library.',
            demoLink: 'https://christianlepio.github.io/chucknorris-jokes/'
        },
        {
            title: 'Church Event Reservation System', 
            projImg: 'https://christianlepio.github.io/prtflio/images/churchrs1.png',
            type: 'Web-based',
            techStacks: [
                'https://camo.githubusercontent.com/d5018e8d6194afbc0a7874bf55df5e7b0111f8abe4e622ae2200b124e33d6fe2/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d68746d6c', 
                'https://camo.githubusercontent.com/5e8b6a8e8f07b3041792f726f0b2efd62a016ec24b743bf1e4a5c6e6423f86e3/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d626f6f747374726170',
                'https://camo.githubusercontent.com/a4199191bff0e00930a78bbcd5f4257c4db4efc3d4bf3b19ca16041751b4c1be/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d6a73',
                'https://www.php.net/images/logos/new-php-logo.png',
                'https://camo.githubusercontent.com/4004b2f7fa33c1cd04eef3e56a050c29463f9d613d00506464a4151edfca3d73/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d6d7973716c'
            ],
            description: 'An easy to use church reservation web application software, congregants can reserve a seat for an upcoming service, event, or church gathering.',
            demoLink: 'https://github.com/christianlepio/ChurchEventReservationSystem'
        },
        {
            title: 'Billing System', 
            projImg: 'https://christianlepio.github.io/prtflio/images/billsys.png',
            type: 'Desktop-based',
            techStacks: [
                'https://camo.githubusercontent.com/5d4cc9b5c0d71ad996fcde82d2da8e4b598b4c5b524aaa2f59f726417918d062/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d6a617661',
                'https://camo.githubusercontent.com/4004b2f7fa33c1cd04eef3e56a050c29463f9d613d00506464a4151edfca3d73/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d6d7973716c'
            ],
            description: 'Billing systems often are designed to handle everything from computing charges to providing statements.',
            demoLink: 'https://github.com/christianlepio/billingSystem-java-'
        },
        {
            title: 'Color Game', 
            projImg: 'https://christianlepio.github.io/prtflio/images/colorG.png',
            type: 'Android',
            techStacks: [
                'https://camo.githubusercontent.com/5d4cc9b5c0d71ad996fcde82d2da8e4b598b4c5b524aaa2f59f726417918d062/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d6a617661',
            ],
            description: 'An Android-based game in which the user selects a color of his/her choice, then presses a button to spin the color roulette wheel, which subsequently displays whether the user win or lose. This amusing game will be used to place bets.',
            demoLink: 'https://github.com/christianlepio/colorgame_ni_ryan'
        },
        {
            title: 'Rental Stall Data Management System', 
            projImg: 'https://christianlepio.github.io/prtflio/images/rental%20space.png',
            type: 'Web-based',
            techStacks: [
                'https://camo.githubusercontent.com/d5018e8d6194afbc0a7874bf55df5e7b0111f8abe4e622ae2200b124e33d6fe2/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d68746d6c', 
                'https://camo.githubusercontent.com/5e8b6a8e8f07b3041792f726f0b2efd62a016ec24b743bf1e4a5c6e6423f86e3/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d626f6f747374726170',
                'https://camo.githubusercontent.com/a4199191bff0e00930a78bbcd5f4257c4db4efc3d4bf3b19ca16041751b4c1be/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d6a73',
                'https://www.php.net/images/logos/new-php-logo.png',
                'https://camo.githubusercontent.com/4004b2f7fa33c1cd04eef3e56a050c29463f9d613d00506464a4151edfca3d73/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d6d7973716c'
            ],
            description: 'The developed system was designed to give assistance for the marketplace owners/managers for properly control on their tenants, collected payments, and other records that they may have. It also generate prescribed decisions based on the analysis of all recorded data.',
            demoLink: 'https://github.com/christianlepio/RentalStallManagementSystem'
        },
        {
            title: 'Computer Aided Instruction', 
            projImg: 'https://christianlepio.github.io/prtflio/images/e-learning.png',
            type: 'Web-based',
            techStacks: [
                'https://camo.githubusercontent.com/d5018e8d6194afbc0a7874bf55df5e7b0111f8abe4e622ae2200b124e33d6fe2/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d68746d6c', 
                'https://camo.githubusercontent.com/5e8b6a8e8f07b3041792f726f0b2efd62a016ec24b743bf1e4a5c6e6423f86e3/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d626f6f747374726170',
                'https://camo.githubusercontent.com/a4199191bff0e00930a78bbcd5f4257c4db4efc3d4bf3b19ca16041751b4c1be/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d6a73',
                'https://www.php.net/images/logos/new-php-logo.png',
                'https://camo.githubusercontent.com/4004b2f7fa33c1cd04eef3e56a050c29463f9d613d00506464a4151edfca3d73/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d6d7973716c'
            ],
            description: 'Computer-aided instruction (CAI) is an interactive teaching strategy that employs the use of a computer to provide instructional content and track student progress.',
            demoLink: 'https://www.youtube.com/watch?v=6oFyE3Yy6Vs'
        },
    ]

    return (
        <section className='project py-5'>
            <div className="d-flex justify-content-center mt-5">
                <h2 className="h2 fw-bold text-center">My Projects</h2>
            </div>
            <div className="d-flex justify-content-center">
                <small className="text-center mb-3 text-secondary">Here are few of my worked projects</small>
            </div>
            <div className="container px-2 mt-5">
                {
                    project.length > 0 ? (
                        project.map((proj, i) => (
                            <div key={i} className={"row align-items-center justify-content-center border-top border-3 rounded-4 shadow mb-5 p-1 " + (i % 2 === 0 ? 'flex-row-reverse' : null)}>
                                <div className="col-md-6 border shadow-sm p-2 rounded-4">
                                    <img className='img-fluid rounded-3' src={proj.projImg} alt={proj.title} />
                                </div>
                                <div className="col-md-6 p-3">
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
                                            <a href={proj.demoLink} className='btn btn-primary rounded-3'><i className="bi bi-eye"></i> Demo</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : null
                }
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <p className='text-secondary mt-5'><small>. . . See more projects in my Repositories . . .</small></p>
                    <a href="https://github.com/christianlepio?tab=repositories" className="fs-6 mb-5"><u className="fw-bold"><i className="fa-solid fa-link"></i>christianlepio</u></a>
                </div>
            </div>
        </section>
    )
}

export default Projects