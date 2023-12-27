import { useEffect, useState } from "react"

const ScrollButton = () => {
    const [showScroll, setShowScroll] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                setShowScroll(true)
            } else {
                setShowScroll(false)
            }
        })
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <a 
            className={showScroll ? 'show' : null} 
            id="scrollUp"
            onClick={scrollToTop}
        >
            <i className="bi h1 text-secondary bi-arrow-up-circle-fill"></i>
        </a>
    )
}

export default ScrollButton