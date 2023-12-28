
const Footer = () => {
    return (
        <footer className='footere py-5 bg-dark'>
            <div className="d-flex justify-content-center mt-2 mb-4">
                <a className="mx-4 text-light" href="https://github.com/christianlepio" ><i className="bi bi-github fs-3"></i></a>
                <a className="mx-4 text-light" href="#" ><i className="bi bi-linkedin fs-3"></i></a>
                <a className="mx-4 text-light" href="https://www.facebook.com/ryanchristyan.lepio" ><i className="bi bi-facebook fs-3"></i></a>
                <a className="mx-4 text-light" href="https://www.instagram.com/l_e_p_i_o/?hl=en" ><i className="bi bi-instagram fs-3"></i></a>
            </div>
            <div className="d-flex justify-content-center mb-2">
                <small className="text-center mb-3 text-secondary">Copyright &copy; 2023 | Ryan Christian Lepio</small>
            </div>
        </footer>
    )
}

export default Footer