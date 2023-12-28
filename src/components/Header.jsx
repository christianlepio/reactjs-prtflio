import { useContext, useEffect, useState } from 'react'
import logoko from '/images/logoko.jpg'
import ThemeContext from '../context/ThemeProvider'

const Header = () => {
    const {isDark, setIsDark, setTextColor} = useContext(ThemeContext)
    const [btnBg, setBtnBg] = useState('')
    const [themeIcon, setThemeIcon] = useState('')

    const toggleTheme = () => {
        setIsDark(prev => !prev)
        document.querySelector("html").setAttribute('data-bs-theme', (isDark ? 'dark' : 'light'))
    }

    useEffect(() => {
        localStorage.setItem('theme', isDark)
        document.querySelector("html").setAttribute('data-bs-theme', (isDark ? 'dark' : 'light'))
        
        if (isDark) {
            setTextColor('text-light')
            setBtnBg('bg-warning border-warning')
            setThemeIcon('bi bi-moon-stars')
        } else {
            setTextColor('text-secondary')
            setBtnBg('')
            setThemeIcon('bi-brightness-low-fill text-warning')
        }
    }, [isDark])

    return (
        <header id='headTop'>
            <nav className="mx-3 mt-2 py-3">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center" data-aos='fade-up'>
                        <div className='d-flex'>
                            {/* <a href="../../index.html"><img className='logoko' src={logoko} alt={logoko} /></a>
                            <div className="d-flex align-items-center"> */}
                                {/* <span className="fs-5 fw-bold ms-1 text-primary brnd" href="#">RYDEV.</span> */}
                                
                            <small><i className="bi text-danger me-1 bi-circle-fill"></i></small>
                            <small><i className="bi text-warning me-1 bi-circle-fill"></i></small>
                            <small><i className="bi text-success bi-circle-fill"></i></small>
                        
                            {/* </div> */}
                        </div>
                        <div className='d-flex justify-content-end'>
                            <i className={'bi lh-lg fs-6 mx-2 align-self-center theme-icon ' + themeIcon}></i> &nbsp;
                            <div className='form-check form-switch'>                    
                                <input 
                                    className={"toggleBtn form-check-input " + btnBg}
                                    type="checkbox" 
                                    role="switch" 
                                    id="flexSwitchCheckChecked" 
                                    onChange={toggleTheme} 
                                    defaultChecked={isDark} 
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