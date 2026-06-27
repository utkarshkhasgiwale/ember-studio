import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {

  return (
    <div className='font-[font2] flex items-center justify-center gap-2 ' style={{ color: 'var(--bone)' }}>
      <p className='absolute lg:w-[17vw] w-64 lg:right-20 right-0 bottom-28  lg:bottom-72 font-[font1] lg:text-lg text-xs lg:leading-relaxed leading-tight opacity-80'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ember est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l'étincelle pour générer de l'émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.</p>
      <Link
        to='/projects'
        data-label="aller"
        className='cursor-link lg:border-3 border-2 transition-colors duration-300 lg:h-44 flex items-center px-3 pt-1 lg:px-14 rounded-full uppercase'
        style={{ borderColor: 'var(--bone)' }}
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--signal)'; e.currentTarget.style.color = 'var(--signal)' }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--bone)'; e.currentTarget.style.color = 'var(--bone)' }}
      >
        <span className='text-[6vw] lg:mt-6'>Projects</span>
      </Link>
      <Link
        to='/agence'
        data-label="aller"
        className='cursor-link lg:border-3 border-2 transition-colors duration-300 lg:h-44 flex items-center px-3 pt-1 lg:px-14 rounded-full uppercase'
        style={{ borderColor: 'var(--bone)' }}
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--signal)'; e.currentTarget.style.color = 'var(--signal)' }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--bone)'; e.currentTarget.style.color = 'var(--bone)' }}
      >
        <span className='text-[6vw] lg:mt-6'>agence</span>
      </Link>
    </div>
  )
}

export default HomeBottomText
