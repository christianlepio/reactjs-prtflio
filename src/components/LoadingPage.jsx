import { useContext, useEffect } from 'react'
import logoko from '/images/logoko.jpg'
import ThemeContext from '../context/ThemeProvider'

const LoadingPage = () => {
    const {isDark} = useContext(ThemeContext)
    useEffect(() => {
        document.querySelector("html").setAttribute('data-bs-theme', (isDark ? 'dark' : 'light'))
    }, [])

    return (
        <div className="loader" id="loader">
            <div className="loading_3 d-flex justify-content-center mb-4">
                <img 
                    src={logoko} 
                    width="77" 
                    height="77" 
                    className="logoko" 
                    alt={logoko} 
                />
            </div>
            <center>
                <div className="loading_1 d-flex"></div>
            </center>
            <div className="loading_2 fw-bold">Loading</div>
        </div>
    )
}

export default LoadingPage