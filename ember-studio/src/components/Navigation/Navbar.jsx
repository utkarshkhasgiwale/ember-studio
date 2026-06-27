import React, { useContext, useRef } from 'react'
import { NavbarColorContext, NavbarContext } from '../../context/NavContext'

const Navbar = () => {

    const navGreenRef = useRef(null)
    const btnRef = useRef(null)
    const [navOpen, setNavOpen] = useContext(NavbarContext)
    const [navColor, setNavColor] = useContext(NavbarColorContext)

    // magnetic pull toward the cursor instead of a flat hover swap
    function handleMove(e) {
        const rect = btnRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        btnRef.current.style.transform = `translate(${x * 0.15}px, ${y * 0.25}px)`
    }
    function handleLeave() {
        btnRef.current.style.transform = 'translate(0,0)'
    }

    return (
        <div className='z-40 flex fixed top-0 w-full items-start justify-between'>
            <div className='lg:p-5 p-2 '>
                <div className='lg:w-36 w-24'>
                    <span
                        className='font-[font2] uppercase tracking-tight text-2xl lg:text-3xl'
                        style={{ color: navColor }}
                    >
                        Ember
                    </span>
                </div>
            </div>
            <div
                ref={btnRef}
                onMouseMove={handleMove}
                onClick={() => { setNavOpen(true) }}
                onMouseEnter={() => { navGreenRef.current.style.height = '100%' }}
                onMouseLeave={(e) => { navGreenRef.current.style.height = '0%'; handleLeave() }}
                className='cursor-link m-2 lg:m-5 transition-transform duration-300 ease-out lg:h-16 h-10 relative lg:w-[14vw] w-40 rounded-full overflow-hidden border'
                style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--line)' }}
                data-label="menu"
            >
                <div ref={navGreenRef} className='transition-all absolute top-0 h-0 w-full' style={{ backgroundColor: 'var(--signal)' }}></div>
                <div className='relative h-full px-8 flex flex-col justify-center items-end gap-1.5'>
                    <div className="lg:w-8 w-6 h-0.5" style={{ backgroundColor: 'var(--bone)' }}></div>
                    <div className="lg:w-5 w-3 h-0.5" style={{ backgroundColor: 'var(--bone)' }}></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
