
const SayHi = () => {
    return (
        <section className='sayhi py-5'>
            <div className="d-flex justify-content-center mt-5">
                <h2 className="h2 fw-bold text-center">Get in Touch</h2>
            </div>
            <div className="d-flex justify-content-center">
                <small className="text-center mb-3 text-secondary">Reach me out</small>
            </div>
            <div className="container px-2 mt-5">
                <div className="d-flex flex-column justify-content-center mb-5 px-1">
                    <p className='align-self-center text-center mb-5 fs-6'>
                        My inbox is always open, even if I'm not currently available for freelance project. <br />
                        I'll do my best to respond to you, whether you have a <br /> query or simply just wishing to 
                        say hi!
                    </p>
                    <div className="d-flex justify-content-center align-self-center align-items-center py-1">
                        <a href='mailto:rylepio79@gmail.com' className="btn btn-primary rounded-3 px-3"><i className="bi bi-send"></i> Say Hi</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SayHi