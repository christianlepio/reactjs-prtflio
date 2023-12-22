import gradpic1 from '/images/gradpic1.jpg'

const Home = () => {
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
                            <a className='my-1 text-dark' href="https://github.com/christianlepio"><i className="bi bi-github fs-3"></i></a>
                            <a className='my-1 text-dark' href=""><i className="bi bi-linkedin fs-3"></i></a>
                            <a className='my-1 text-dark' href="https://www.facebook.com/ryanchristyan.lepio"><i className="bi bi-facebook fs-3"></i></a>
                            <a className='my-1 text-dark' href="https://www.instagram.com/l_e_p_i_o/?hl=en"><i className="bi bi-instagram fs-3"></i></a>
                        </div>
                        <div>
                            <small className="text-secondary fw-bold">Hello !</small>
                            <h1 className="h1 fw-bold my-name">I'm Ryan Christian</h1>
                            <p className="fs-5 fw-bold text-primary">Full-Stack Developer</p>
                            <p className="fs-6 desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sapiente in accusantium, quod pariatur molestias culpa necessitatibus eius perspiciatis dicta asperiores amet accusamus qui ad veniam perferendis placeat officia ab?</p>
                            <a href='mailto:rylepio79@gmail.com' className="btn btn-primary rounded-3"><i className="bi bi-send"></i> Send Email</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home