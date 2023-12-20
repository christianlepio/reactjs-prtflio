import { useState } from "react"

const MyExperience = () => {
    const [techStack, setTeckStack] = useState({})

    return (
        <section className="experience">
            <div className="d-flex justify-content-center">
                <h2 className="h2 fw-bold text-center">Technical Skills</h2>
            </div>
            <div className="d-flex justify-content-center">
                <small className="text-center text-secondary">Languages I specialized</small>
            </div>
            <div className="row justify-content-evenly gy-5 mt-4">
                <div className="col-md-4 p-4 expdiv shadow rounded-4">
                    <div className="d-flex justify-content-start">
                        <i className="fa-solid fa-laptop-code fs-1 text-primary align-self-center"></i>
                        <h5 className="h5 align-self-end ms-2 text-secondary">Front-end</h5>
                    </div>
                </div>
                <div className="col-md-4 p-4 expdiv shadow rounded-4">
                    <div className="d-flex justify-content-start">
                        <i className="fa-solid fa-server fs-1 text-primary align-self-center"></i>
                        <h5 className="h5 align-self-end ms-3 text-secondary">Back-end</h5>
                    </div>
                </div>
                <div className="col-md-4 p-4 expdiv shadow rounded-4">
                    <div className="d-flex justify-content-start">
                        <i className="fa-solid fa-screwdriver-wrench fs-1 text-primary align-self-center"></i>
                        <h5 className="h5 align-self-end ms-3 text-secondary">Tools</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyExperience