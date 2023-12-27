import TypeIt from 'typeit-react'
import gradpic1 from '/images/gradpic1.jpg'
import { useEffect, useState, useContext } from 'react'
//context
import ThemeContext from '../context/ThemeProvider'

const Home = () => {
    const description = "I'm a SAP ABAP consultant and full-stack web developer. I occasionally work as a freelance dev when it suits my schedule. Software development is my passion, and I love to convert coffee into logic. I am highly enthusiastic about my work and committed to it. I have obtained the knowledge, skills, and abilities to ensure the success of your project."
    const {isDark, textColor} = useContext(ThemeContext)
    const [iconColor, setIconColor] = useState('text-dark')

    useEffect(() => {
        isDark ? setIconColor('text-secondary') : setIconColor('text-dark')
    }, [isDark])

    return (
        <section className="home">
            <div className="homerow row justify-content-center mb-5 flex-row-reverse">
                <div className="col-md-5 align-self-center">
                    <div className="d-flex justify-content-center" data-aos='zoom-in-up' data-aos-duration='3000'>
                        <img src={gradpic1} className='img-fluid shadow' alt="gradpic1" />
                    </div>
                </div>
                <div className="col-md-7 align-self-center">
                    <div className="d-flex justify-content-center">
                        <div className="d-flex flex-column align-self-center ms-3 me-4" data-aos='fade-right' data-aos-duration='3000'>
                            <a className={'my-1 text-secondary ' + (iconColor)} href="https://github.com/christianlepio"><i className="bi bi-github fs-3"></i></a>
                            <a className={'my-1 text-secondary ' + (iconColor)} href=""><i className="bi bi-linkedin fs-3"></i></a>
                            <a className={'my-1 text-secondary ' + (iconColor)} href="https://www.facebook.com/ryanchristyan.lepio"><i className="bi bi-facebook fs-3"></i></a>
                            <a className={'my-1 text-secondary ' + (iconColor)} href="https://www.instagram.com/l_e_p_i_o/?hl=en"><i className="bi bi-instagram fs-3"></i></a>
                        </div>
                        <div>
                            <small className="text-primary fw-bold" data-aos='fade-right' data-aos-duration='1000'>Hello!</small>
                            <h1 className="h1 fw-bold my-name" data-aos='fade-right' data-aos-duration='1800'>I'm Ryan Christian</h1>
                            <p className="fs-5 fw-bold text-primary" data-aos='fade-right' data-aos-duration='2000'>
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
                            <div data-aos='fade-right' data-aos-duration='2800'>
                                <p className={"fs-6 desc " + textColor}>{description.substring(0, 220)} . . . &nbsp; <a href='#aboutme'>Read more</a></p>
                            </div>
                            <a data-aos='fade-right' data-aos-duration='3000' href='mailto:rylepio79@gmail.com' className="btn btn-primary rounded-3 px-3"><i className="bi bi-send"></i> Send Email</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home