import zustand from '/images/zustand.png'
import sapabap from '/images/saplogo-01.png'
import saplogon from '/images/SAPLogon.png'
import netbeans from '/images/NetBeans_Logo.png'
import jira from '/images/Jira.png'

const MyExperience = () => {
    return (
        <section className="experience py-5 mb-5">
            <div className="d-flex justify-content-center" data-aos='zoom-in-up' data-aos-duration='1000'>
                <h2 className="h2 fw-bold text-center">Technical Skills</h2>
            </div>
            <div className="d-flex justify-content-center" data-aos='zoom-in-up' data-aos-duration='1500'>
                <small className="text-center text-secondary">Languages I specialized</small>
            </div>
            <div className="row justify-content-evenly gy-4 mt-4">

                {/* Frontend Technologies */}

                <div className="col-md-4 p-3 expdiv shadow border-top border-3 rounded-4" data-aos='fade-down' data-aos-duration='1900'>
                    <div className="d-flex justify-content-between align-items-center mb-5">
                        <div className="d-flex justify-content-start">
                            <i className="fa-solid fa-laptop-code lh-base fs-2 text-primary align-self-center"></i>
                            <h5 className="h5 align-self-end ms-2">Frontend</h5>
                        </div>
                        <div className="d-flex justify-content-end">
                            <small><i className="bi text-danger me-1 bi-circle-fill"></i></small>
                            <small><i className="bi text-warning me-1 bi-circle-fill"></i></small>
                            <small><i className="bi text-success bi-circle-fill"></i></small>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center mb-4">
                        <div className="d-flex flex-column">
                            <img className="img-fluid mx-3" src="https://camo.githubusercontent.com/d5018e8d6194afbc0a7874bf55df5e7b0111f8abe4e622ae2200b124e33d6fe2/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d68746d6c" alt="html" />
                            <small className="text-center text-secondary">HTML</small>
                        </div>
                        <div className="d-flex flex-column">
                            <img className="img-fluid mx-3" src="https://camo.githubusercontent.com/0e09bd8aa8f06b2a1946dddff9415ba1df25f461852741979c5bb7bdc4860908/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d637373" alt="css" />
                            <small className="text-center text-secondary">CSS</small>
                        </div>
                        <div className="d-flex flex-column">
                            <img className="img-fluid mx-3" src="https://camo.githubusercontent.com/5e8b6a8e8f07b3041792f726f0b2efd62a016ec24b743bf1e4a5c6e6423f86e3/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d626f6f747374726170" alt="bootstrap" />
                            <small className="text-center text-secondary">Bootstrap</small>
                        </div>
                        <div className="d-flex flex-column">
                            <img className="img-fluid mx-3" src="https://camo.githubusercontent.com/a4199191bff0e00930a78bbcd5f4257c4db4efc3d4bf3b19ca16041751b4c1be/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d6a73" alt="vanilla js" />
                            <small className="text-center text-secondary">JavaScript</small>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center mb-4">
                        <div className="d-flex flex-column">
                            <img className="img-fluid mx-3" src="https://camo.githubusercontent.com/86ce870479afdbfa7075d5b25bff8642dd4894a061c920ea9a49d3f77c74b55b/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d7265616374" alt="react js" />
                            <small className="text-center text-secondary">React JS</small>
                        </div>
                        <div className="d-flex flex-column">
                            <img className="img-fluid mx-3" src="https://camo.githubusercontent.com/2f25cee0fe06df3f71c647d8c72c656c38c83036796924da98030b3bb8878be0/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d7265647578" alt="redux" />
                            <small className="text-center text-secondary">Redux</small>
                        </div>
                        <div className="d-flex flex-column">
                            <img className="img-fluid mx-3 zustand" src={zustand} alt="zustand" />    
                            <small className="text-center text-secondary">Zustand</small>
                        </div>
                    </div>
                </div>

                {/* Backend technologies */}

                <div className="col-md-4 p-3 expdiv shadow border-top border-3 rounded-4" data-aos='fade-down' data-aos-duration='1000'>
                    <div className="d-flex justify-content-between align-items-center mb-5">
                        <div className="d-flex justify-content-start">
                            <i className="fa-solid fa-server lh-base fs-2 text-primary align-self-center"></i>
                            <h5 className="h5 align-self-end ms-3">Backend</h5>
                        </div>
                        <div className="d-flex justify-content-end">
                            <small><i className="bi text-danger me-1 bi-circle-fill"></i></small>
                            <small><i className="bi text-warning me-1 bi-circle-fill"></i></small>
                            <small><i className="bi text-success bi-circle-fill"></i></small>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center mb-4">
                        <div className="d-flex flex-column">
                            <img className="img-fluid mx-3" src="https://camo.githubusercontent.com/15d91b1526dc4bc7312db29b376075f09479855c802b57d730a764847ee497c1/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d6e6f64656a73" alt="node js" />
                            <small className="text-center text-secondary">Node JS</small>
                        </div>
                        <div className="d-flex flex-column">
                            <img className="img-fluid mx-3" src="https://camo.githubusercontent.com/92a295910076b8f4b5baa465654123887e2179e74a00b91713a0122919cb7e13/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d65787072657373" alt="express js" />
                            <small className="text-center text-secondary">Express JS</small>
                        </div>
                        <div className="d-flex flex-column align-self-end">
                            <img className="img-fluid mx-3 php" src="https://www.php.net/images/logos/new-php-logo.png" alt="php" />
                            <small className="text-center text-secondary mt-2">PHP</small>
                        </div>
                        <div className="d-flex flex-column">
                            <img className="img-fluid mx-3" src="https://camo.githubusercontent.com/5d4cc9b5c0d71ad996fcde82d2da8e4b598b4c5b524aaa2f59f726417918d062/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d6a617661" alt="java" />
                            <small className="text-center text-secondary">Java</small>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center mb-4">
                        <div className="d-flex flex-column">
                            <img className="img-fluid mx-3" src="https://camo.githubusercontent.com/ffb54a4ebda0615bb3b2ca2c620fbd516cda7b0d855b31b86a5648b00ac2cbcc/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d6d6f6e676f6462" alt="mongo db" />
                            <small className="text-center text-secondary">Mongo DB</small>
                        </div>
                        <div className="d-flex flex-column">
                            <img className="img-fluid mx-3" src="https://camo.githubusercontent.com/4004b2f7fa33c1cd04eef3e56a050c29463f9d613d00506464a4151edfca3d73/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d6d7973716c" alt="mysql" />
                            <small className="text-center text-secondary">MySQL</small>
                        </div>
                        <div className="d-flex flex-column">
                            <img className="img-fluid mx-3 abap" src={sapabap} alt="sap abap" />    
                            <small className="text-center text-secondary">ABAP</small>
                        </div>
                    </div>
                </div>

                {/* Tools */}

                <div className="col-md-4 p-3 expdiv shadow border-top border-3 rounded-4" data-aos='fade-down' data-aos-duration='500'>
                    <div className="d-flex justify-content-between align-items-center mb-5">
                        <div className="d-flex justify-content-start">
                            <i className="fa-solid fa-screwdriver-wrench lh-base fs-2 text-primary align-self-center"></i>
                            <h5 className="h5 align-self-end ms-3">Tools</h5>
                        </div>
                        <div className="d-flex justify-content-end">
                            <small><i className="bi text-danger me-1 bi-circle-fill"></i></small>
                            <small><i className="bi text-warning me-1 bi-circle-fill"></i></small>
                            <small><i className="bi text-success bi-circle-fill"></i></small>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center mb-4">
                        <div className="d-flex flex-column">
                            <img className="img-fluid mx-3" src="https://camo.githubusercontent.com/95ee0c74cccf4c61aca7784c67ad967623ee6bb906df94b4b2b36e841f086158/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d7673636f6465" alt="vscode" />
                            <small className="text-center text-secondary">VS Code</small>
                        </div>
                        <div className="d-flex flex-column">
                            <img className="img-fluid mx-3 mt-1 abap" src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" />
                            <small className="text-center text-secondary">Postman</small>
                        </div>
                        <div className="d-flex flex-column align-self-end">
                            <img className="img-fluid mx-3" src="https://camo.githubusercontent.com/07e4f940b7e6239e342256bca5e95cd0b51406ae1570bba067ce3f1ccc76e350/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d62617368" alt="gitbash" />
                            <small className="text-center text-secondary">Git Bash</small>
                        </div>
                        <div className="d-flex flex-column">
                            <img className="img-fluid mx-3 zustand" src={saplogon} alt="sap logon" />
                            <small className="text-center text-secondary mt-1">SAP Logon</small>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center mb-4">
                        <div className="d-flex flex-column">
                            <img className="img-fluid mx-4 abap" src={netbeans} alt="netbeans" />
                            <small className="text-center text-secondary">NetBeans</small>
                        </div>
                        <div className="d-flex flex-column align-self-end">
                            <img className="img-fluid mx-3 abap" src="https://skillicons.dev/icons?i=androidstudio" alt="android studio" />
                            <small className="text-center text-secondary">Android Studio</small>
                        </div>
                        <div className="d-flex flex-column">
                            <img className="img-fluid mx-2 abap" src={jira} alt="jira" />
                            <small className="text-center text-secondary">Jira</small>
                        </div>
                        <div className="d-flex flex-column">
                            <img className="img-fluid mx-3" src="https://camo.githubusercontent.com/fadb03c42e68e0e44e0b7001dda11c301e0d576242f41c0c8a8ecc0ac310d1a0/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d7073" alt="photoshop" />    
                            <small className="text-center text-secondary">Photoshop</small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyExperience