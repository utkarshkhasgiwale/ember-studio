import React, { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const NavbarContext = createContext()
export const NavbarColorContext = createContext()

const NavContext = ({ children }) => {

    // logo now swaps between bone (on dark pages) and ink (on light pages)
    const [navColor, setNavColor] = useState('#F3EEE2')

    const [navOpen, setNavOpen] = useState(false)

    const locate = useLocation().pathname
    useEffect(function () {
        if (locate == '/projects' || locate == '/agence') {
            setNavColor('#0E0D0B')
        } else {
            setNavColor('#F3EEE2')
        }
    }, [locate])


    return (
        <div>
            <NavbarContext.Provider value={[navOpen, setNavOpen]}>
                <NavbarColorContext.Provider value={[navColor, setNavColor]}>
                    {children}
                </NavbarColorContext.Provider>
            </NavbarContext.Provider>
        </div>
    )
}

export default NavContext
