import { useRef, useEffect } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

function AnimatedNumbers({
    value
}: {
    value: number
}){
 
    const ref = useRef<HTMLSpanElement | null>(null)

    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, { duration: 3000})
    const isInView = useInView(ref)

    useEffect(()=> {
        if(isInView){
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest: number) => {
            if(ref.current && Number(latest.toFixed(0)) <= value){
                ref.current.textContent = `${latest?.toFixed(0)}%`
            }
        })
    })
    return (
        <span ref={ref} style={{color: '#6C6C6C'}}>
            0%
        </span>
    )
}

export default AnimatedNumbers