import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from "react";

export const PostCard = () => {
    const videoRef = useRef(null);
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.post-card',
                start: 'top center',
                end: 'bottom center',
                scrub: 2,
    }})
    
        videoRef.current.onloadedmetadata = () => {
        tl.to(videoRef.current, {
            currentTime: videoRef.current.duration,
            duration: 3,
            ease: 'power1.inOut',
        }, '<')}

    })

    return (
    <section className="post-card">
        <div className="animated-gradient-bg"/>
        <div className="post-card-wrapper grup hover:rotate-1 hover:-[1.02] transition duration-700">
            <video 
            ref={videoRef}
            playsInline
            preload="auto" 
            autoPlay
            muted
            src="/videos/postcard-vd.mp4"
            />
        <button className="group-hover:bg-yellow transition duration-700">
            Explore Leonida Keys
        </button>

        </div>
    </section>



)}
