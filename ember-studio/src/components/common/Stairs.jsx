import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'

// Departure from the plain 5-column stair wipe: stairs now carry
// the brand's signal color and a flickering wordmark sits centered
// while the page is hidden, instead of a blank black wall.
const Stairs = (props) => {

    const currentPath = useLocation().pathname

    const stairParentRef = useRef(null)
    const pageRef = useRef(null)

    useGSAP(function () {
        const tl = gsap.timeline()
        tl.to(stairParentRef.current, {
            display: 'block',
        })
        tl.from('.stair', {
            height: 0,
            stagger: {
                amount: -0.18
            },
            ease: 'power3.inOut'
        })
        tl.to('.stair-word', {
            opacity: 1,
            duration: 0.2
        })
        tl.to('.stair-word', {
            opacity: 0,
            duration: 0.2,
            delay: 0.3
        })
        tl.to('.stair', {
            y: '100%',
            stagger: {
                amount: -0.22
            },
            ease: 'power3.inOut'
        })
        tl.to(stairParentRef.current, {
            display: 'none'
        })
        tl.to('.stair', {
            y: '0%',
        })

        gsap.from(pageRef.current, {
            opacity: 0,
            delay: 1.1,
            scale: 1.04,
            ease: 'power2.out'
        })
    }, [currentPath])


    return (
        <div>
            <div ref={stairParentRef} className='h-screen w-full fixed z-20 top-0'>
                <div className='h-full w-full flex relative'>
                    <div className='stair h-full w-1/5' style={{ backgroundColor: 'var(--bg)' }}></div>
                    <div className='stair h-full w-1/5' style={{ backgroundColor: 'var(--bg)' }}></div>
                    <div className='stair h-full w-1/5' style={{ backgroundColor: 'var(--bg)' }}></div>
                    <div className='stair h-full w-1/5' style={{ backgroundColor: 'var(--bg)' }}></div>
                    <div className='stair h-full w-1/5' style={{ backgroundColor: 'var(--bg)' }}></div>
                    <div className='stair-word flicker absolute inset-0 flex items-center justify-center font-[font2] uppercase tracking-widest opacity-0' style={{ color: 'var(--signal)', fontSize: '4vw' }}>
                    EMBER
                    </div>
                </div>
            </div>
            <div ref={pageRef}>
                {props.children}
            </div>
        </div>
    )
}

export default Stairs
