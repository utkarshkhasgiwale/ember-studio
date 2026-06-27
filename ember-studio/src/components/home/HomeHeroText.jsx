import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Video from './Video'

const HomeHeroText = () => {
    const rootRef = useRef(null)

    useGSAP(function () {
        gsap.from('.hero-line', {
            yPercent: 110,
            duration: 1,
            stagger: 0.12,
            ease: 'power4.out',
            delay: 1.2
        })
    }, { scope: rootRef })

    return (
        <div ref={rootRef} className='font-[font1] mt-72 lg:mt-0 pt-5 text-center' style={{ color: 'var(--bone)' }}>
            <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw] overflow-hidden'>
                <span className='hero-line inline-block'>L'étincelle</span>
            </div>
            <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-start uppercase lg:leading-[8vw] leading-[10vw] overflow-hidden'>
                <span className='hero-line inline-block flex items-start'>
                    qui
                    <div className='h-[7vw] w-[16vw] rounded-full -mt-3 overflow-hidden'>
                        <Video />
                    </div>
                    génère
                </span>
            </div>
            <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw] overflow-hidden'>
                <span className='hero-line inline-block' style={{ color: 'var(--signal)' }}>la créativité</span>
            </div>
        </div>
    )
}

export default HomeHeroText
