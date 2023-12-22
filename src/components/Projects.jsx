import React from 'react'

const Projects = () => {
    return (
        <section className='project py-5'>
            <div className="d-flex justify-content-center mt-5">
                <h2 className="h2 fw-bold text-center">My Projects</h2>
            </div>
            <div className="d-flex justify-content-center">
                <small className="text-center mb-3 text-secondary">Here are few of my worked projects</small>
            </div>
            <div className="container px-3 mt-5">
                <div className="row align-items-center justify-content-center border-top border-2 rounded-4 shadow flex-row-reverse mb-3">
                    <div className="col-md-6 border-start p-3 rounded-4">
                        <img className='img-fluid rounded-3' src="https://christianlepio.github.io/prtflio/images/lucky9.png" alt="lucky9" />
                    </div>
                    <div className="col-md-6 p-3">
                        <div className="d-flex justify-content-start">
                            <small><i className="bi text-danger me-1 bi-circle-fill"></i></small>
                            <small><i className="bi text-warning me-1 bi-circle-fill"></i></small>
                            <small><i className="bi text-success bi-circle-fill"></i></small>
                        </div>
                        <div className="d-flex flex-column mt-3">
                            <div className="d-flex justify-content-center">
                                <h5 className='h5 text-secondary'>Lucky9 Card Game</h5>
                            </div>     
                            <div className="d-flex justify-content-center">
                                <small className='text-secondary'>Web-based</small>
                            </div>
                            <div className="d-flex justify-content-center">
                                <img className='img-fluid mx-1 tech-stack' src="https://camo.githubusercontent.com/d5018e8d6194afbc0a7874bf55df5e7b0111f8abe4e622ae2200b124e33d6fe2/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d68746d6c" alt="html" />
                                <img className='img-fluid mx-1 tech-stack' src="https://camo.githubusercontent.com/5e8b6a8e8f07b3041792f726f0b2efd62a016ec24b743bf1e4a5c6e6423f86e3/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d626f6f747374726170" alt="bootstrap" />
                                <img className='img-fluid mx-1 tech-stack' src="https://camo.githubusercontent.com/a4199191bff0e00930a78bbcd5f4257c4db4efc3d4bf3b19ca16041751b4c1be/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d6a73" alt="js" />
                            </div>
                            <div className="d-flex justify-content-center mt-4">
                                <p className='fs-6 text-secondary mx-4 desc'>Lucky 9 is a simple, fast, and exciting card game that Filipinos may play on their phones, computers, or laptops using a web browser. This game, which is also a strategy game, will undoubtedly provide you with a more thrilling experience! You may challenge AI online and keep your head in shape!</p>
                            </div>
                            <div className="d-flex justify-content-start mx-4 mt-3 pb-2">
                                <button className='btn btn-primary rounded-3'><i className="bi bi-eye"></i> Demo</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects