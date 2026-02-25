import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const D_Philosophy: React.FC = () => {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Small text fade up
            gsap.fromTo(
                '.phil-small',
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.phil-small',
                        start: 'top 85%',
                    }
                }
            );

            // Drama text stagger (emulating SplitText)
            gsap.fromTo(
                '.phil-word',
                { y: 60, opacity: 0, rotationX: -20 },
                {
                    y: 0,
                    opacity: 1,
                    rotationX: 0,
                    duration: 1.2,
                    stagger: 0.1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.phil-drama',
                        start: 'top 80%',
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);



    return (
        <section ref={containerRef} className="py-32 px-6 text-center bg-obsidian relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-5 overflow-hidden">
                <span className="text-[10rem] md:text-[20rem] font-black text-ivory select-none tracking-tighter">ARTE</span>
            </div>
            <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="phil-drama will-change-transform text-4xl md:text-7xl font-serif-italic italic text-primary leading-tight">
                    "Nós transformamos convidados em Arte Viva."
                </h2>
            </div>
        </section>
    );
};

export default D_Philosophy;
