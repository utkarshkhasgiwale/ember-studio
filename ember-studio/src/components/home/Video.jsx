import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full' style={{ boxShadow: 'inset 0 0 0 2px var(--signal)' }}>
        <video className='h-full w-full object-cover' autoPlay loop muted playsInline src="/video.mp4"></video>
    </div>
  )
}

export default Video
