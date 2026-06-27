import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useRef } from 'react'
import { NavbarContext } from '../../context/NavContext'

const links = [
    { label: 'Projets', to: '/projects' },
    { label: 'Agence', to: '/agence' },
    { label: 'Contact', to: '/' },
    { label: 'Blogues', to: '/' },
]

const FullScreenNav = () => {
    const fullNavLinksRef = useRef(null)
    const [navOpen, setNavOpen] = useContext(NavbarContext)

    function gsapAnimation() {
        const tl = gsap.timeline()
        tl.to('.fullscreennav', { display: 'block' })
        tl.to('.stairing', {
            delay: 0.15,
            height: '100%',
            stagger: { amount: -0.25 },
            ease: 'power3.inOut'
        })
        tl.to('.link', {
            opacity: 1,
            rotateX: 0,
            stagger: { amount: 0.25 },
            ease: 'power2.out'
        })
        tl.to('.navlink', { opacity: 1 })
    }
    function gsapAnimationReverse() {
        const tl = gsap.timeline()
        tl.to('.link', { opacity: 0, rotateX: 90, stagger: { amount: 0.1 } })
        tl.to('.stairing', { height: 0, stagger: { amount: 0.1 }, ease: 'power3.inOut' })
        tl.to('.navlink', { opacity: 0 })
        tl.to('.fullscreennav', { display: 'none' })
    }

    useGSAP(function () {
        if (navOpen) gsapAnimation()
        else gsapAnimationReverse()
    }, [navOpen])

    return (
        <div id='fullscreennav' className='fullscreennav hidden overflow-hidden h-screen w-full z-50 fixed top-0' style={{ color: 'var(--bone)' }}>
            <div className='h-screen w-full fixed'>
                <div className='h-full w-full flex'>
                    <div className='stairing h-full w-1/5' style={{ backgroundColor: 'var(--bg)' }}></div>
                    <div className='stairing h-full w-1/5' style={{ backgroundColor: 'var(--bg)' }}></div>
                    <div className='stairing h-full w-1/5' style={{ backgroundColor: 'var(--bg)' }}></div>
                    <div className='stairing h-full w-1/5' style={{ backgroundColor: 'var(--bg)' }}></div>
                    <div className='stairing h-full w-1/5' style={{ backgroundColor: 'var(--bg)' }}></div>
                </div>
            </div>
            <div ref={fullNavLinksRef} className='relative'>
                <div className="navlink flex w-full justify-between lg:p-5 p-2 items-start">
                    <div className='lg:w-36 w-24'>
                        <span className='font-[font2] uppercase tracking-tight text-2xl lg:text-3xl' style={{ color: 'currentColor' }}>
                            Ember
                        </span>
                    </div>
                    <div
                        onClick={() => setNavOpen(false)}
                        className='cursor-link lg:h-32 h-20 w-20 lg:w-32 relative cursor-pointer'
                        data-label="fermer"
                    >
                        <div className='lg:h-44 h-28 lg:w-1 w-0.5 -rotate-45 origin-top absolute' style={{ backgroundColor: 'var(--signal)' }}></div>
                        <div className='lg:h-44 h-28 lg:w-1 w-0.5 right-0 rotate-45 origin-top absolute' style={{ backgroundColor: 'var(--signal)' }}></div>
                    </div>
                </div>
                <div className=' py-36'>
                    {links.map((l, i) => (
                        <div key={i} className='link cursor-link origin-top relative border-t-1' style={{ borderColor: 'var(--line)' }} data-label="voir">
                            <h1 className='font-[font2] text-5xl lg:text-[8vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase'>{l.label}</h1>
                            <div className='moveLink absolute flex top-0' style={{ backgroundColor: 'var(--signal)', color: 'var(--bg)' }}>
                                <div className='moveX flex items-center'>
                                    <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Pour tout voir</h2>
                                    <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                    <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Pour tout voir</h2>
                                    <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                                </div>
                                <div className='moveX flex items-center'>
                                    <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Pour tout voir</h2>
                                    <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                    <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Pour tout voir</h2>
                                    <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FullScreenNav
