
const Header = () => {
    return (
        <header>
            <nav className="mx-3 mt-2 py-3">
                <div className="container-fluid">
                    <div className="d-flex justify-content-between">
                        <div className='align-self-center'>
                            <span className="fs-5 fw-bold text-secondary brnd" href="#">RYDEV.</span>
                        </div>
                        <div className='d-flex justify-content-end'>
                            <i className='bi bi-brightness-low-fill text-warning lh-lg fs-6 mx-2 align-self-center'></i> &nbsp;
                            <div className='form-check form-switch align-self-center'>                    
                                <input 
                                    className="toggleBtn form-check-input"
                                    type="checkbox" 
                                    role="switch" 
                                    id="flexSwitchCheckChecked" 
                                    // onChange={toggleThemeBtn} 
                                    // defaultChecked={isDarkMode} 
                                />                    
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header