import gradpic2 from '/images/gradpic2.jpg'

const AboutMe = () => {
    return (
        <section className='aboutme py-5' id='aboutme'>
            <div className="d-flex justify-content-center mt-5">
                <h2 className="h2 fw-bold text-center">About Me</h2>
            </div>
            <div className="d-flex justify-content-center">
                <small className="text-center mb-3 text-secondary">Background Information</small>
            </div>
            <div className="container px-2 mt-5">
                <div className="row justify-content-center gy-4 mb-5 p-1">
                    <div className="col-md-5 align-self-center">
                        <div className="d-flex justify-content-center">
                            <img className='img-fluid shadow rounded-4' src={gradpic2} alt={gradpic2} />
                        </div>                    
                    </div>
                    <div className="col-md-7 align-self-center border-top border-top border-3 rounded-4 shadow">
                        <div className="d-flex flex-column p-4">
                            <div className="d-flex justify-content-between">
                                <h5 className='h5 text-primary fw-bold'>Hello!</h5>
                                <div>
                                    <small><i className="bi text-danger me-1 bi-circle-fill"></i></small>
                                    <small><i className="bi text-warning me-1 bi-circle-fill"></i></small>
                                    <small><i className="bi text-success bi-circle-fill"></i></small>
                                </div>
                            </div>
                            <br />
                            <p className='fs-6 desc'>
                                I'm Ryan Christian, a SAP ABAP consultant and full-stack web developer. 
                                I occasionally work as a freelance dev when it suits my schedule. Software development is 
                                my passion, and I love to convert coffee into logic. I am highly enthusiastic 
                                about my work and committed to it. I have obtained the knowledge, skills, and 
                                abilities to ensure the success of your project.
                            </p>
                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <p className='fs-6 text-secondary'>Name: Ryan Christian P. Lepio</p>
                                    <p className='fs-6 text-secondary'>Age: 23 years old</p>
                                </div>
                                <div className="col-md-6">
                                    <p className='fs-6 text-secondary'>Address: Paranaque City</p>
                                    <p className='fs-6 text-secondary'>Email: rylepio79@gmail.com</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end mt-2">
                                <a href='' className='btn btn-primary rounded-3'><i className="bi bi-download"></i> Resume</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe