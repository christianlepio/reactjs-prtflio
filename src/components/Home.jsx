import TypeIt from 'typeit-react'
import gradpic1 from '/images/gradpic1.jpg'

const Home = () => {
    const description = "I'm a SAP ABAP consultant and full-stack web developer. I occasionally work as a freelance dev when it suits my schedule. Software development is my passion, and I love to convert coffee into logic. I am highly enthusiastic about my work and committed to it. I have obtained the knowledge, skills, and abilities to ensure the success of your project."

    return (
        <section className="home">
            <div className="homerow row justify-content-center mb-5 flex-row-reverse">
                <div className="col-md-5 align-self-center">
                    <div className="d-flex justify-content-center">
                        <img src={gradpic1} className='img-fluid shadow' alt="gradpic1" />
                    </div>
                </div>
                <div className="col-md-7 align-self-center">
                    <div className="d-flex justify-content-center">
                        <div className="d-flex flex-column align-self-center ms-3 me-4">
                            <a className='my-1 text-secondary' href="https://github.com/christianlepio"><i className="bi bi-github fs-3"></i></a>
                            <a className='my-1 text-secondary' href=""><i className="bi bi-linkedin fs-3"></i></a>
                            <a className='my-1 text-secondary' href="https://www.facebook.com/ryanchristyan.lepio"><i className="bi bi-facebook fs-3"></i></a>
                            <a className='my-1 text-secondary' href="https://www.instagram.com/l_e_p_i_o/?hl=en"><i className="bi bi-instagram fs-3"></i></a>
                        </div>
                        <div>
                            <small className="text-primary fw-bold">Hello!</small>
                            <h1 className="h1 fw-bold my-name">I'm Ryan Christian</h1>
                            <p className="fs-5 fw-bold text-primary">
                                <TypeIt
                                    options={{ 
                                        waitUntilVisible: true,
                                        loop: true, 
                                        lifelike: true, 
                                        cursorChar: "_",
                                        smartBackspace: true,
                                    }}
                                    getBeforeInit={(instance) => {
                                        instance.type("Freelancer ")
                                            .pause(3000).delete(11).pause(400)
                                                .type("SAP ABAP Consultant ")
                                                    .pause(4000).delete(20).pause(400)
                                                        .type("Full-Stack Developer ")
                                                            .pause(6000).delete(21).pause(400)
                                        // Remember to return it!
                                        return instance
                                    }}
                                />                                
                            </p>
                            <p className="fs-6 desc">{description.substring(0, 230)}. . . &nbsp; <a href='#aboutme'>Read more</a></p>
                            <a href='mailto:rylepio79@gmail.com' className="btn btn-primary rounded-3 px-3"><i className="bi bi-send"></i> Send Email</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home