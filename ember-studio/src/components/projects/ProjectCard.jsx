import React from 'react'

const Tile = ({ image }) => (
    <div className='cursor-link lg:w-1/2 group transition-all duration-500 relative rounded-none hover:rounded-[60px] overflow-hidden h-full' data-label="voir">
        <img className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-110' src={image} alt="" />
        <div
            className='opacity-0 transition-opacity duration-300 group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full'
            style={{ backgroundColor: 'rgba(14,13,11,0.55)' }}
        >
            <h2
                className='uppercase text-4xl lg:text-6xl font-[font1] border-3 pt-4 px-8 rounded-full -rotate-3'
                style={{ color: 'var(--signal)', borderColor: 'var(--signal)' }}
            >
                Voir le projet
            </h2>
        </div>
    </div>
)

const ProjectCard = (props) => {
    return (
        <>
            <Tile image={props.image1} />
            <Tile image={props.image2} />
        </>
    )
}

export default ProjectCard
