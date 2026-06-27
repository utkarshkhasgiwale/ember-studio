import { useEffect, useRef } from 'react'
import gsap from 'gsap'

// Custom dot + lagging ring cursor. Ring snaps onto any element
// carrying the "cursor-link" class and shows its data-label.
const CustomCursor = () => {
    const dotRef = useRef(null)
    const ringRef = useRef(null)

    useEffect(() => {
        const dot = dotRef.current
        const ring = ringRef.current
        if (!dot || !ring) return

        const ringPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
        let mouse = { x: ringPos.x, y: ringPos.y }

        const move = (e) => {
            mouse = { x: e.clientX, y: e.clientY }
            gsap.to(dot, { x: mouse.x, y: mouse.y, duration: 0.05, overwrite: true })
        }
        window.addEventListener('mousemove', move)

        gsap.ticker.add(function () {
            ringPos.x += (mouse.x - ringPos.x) * 0.3
            ringPos.y += (mouse.y - ringPos.y) * 0.3
            gsap.set(ring, { x: ringPos.x, y: ringPos.y })
        })

        const onOver = (e) => {
            const target = e.target.closest('.cursor-link')
            if (!target) return
            ring.classList.add('is-active')
            ring.textContent = target.dataset.label || 'voir'
        }
        const onOut = (e) => {
            const target = e.target.closest('.cursor-link')
            if (!target) return
            ring.classList.remove('is-active')
            ring.textContent = ''
        }
        document.addEventListener('mouseover', onOver)
        document.addEventListener('mouseout', onOut)

        return () => {
            window.removeEventListener('mousemove', move)
            document.removeEventListener('mouseover', onOver)
            document.removeEventListener('mouseout', onOut)
        }
    }, [])

    return (
        <>
            <div ref={dotRef} className='cursor-dot'></div>
            <div ref={ringRef} className='cursor-ring'></div>
        </>
    )
}

export default CustomCursor
