import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const G_About: React.FC = () => {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.about-anim',
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 75%',
                    }
                }
            );

            // Parallax effect for the photo frame
            gsap.to('.about-photo', {
                yPercent: -10,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id="sobre a artista" className="py-24 px-6 md:px-24 bg-obsidian relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
                <div className="about-anim will-change-transform w-full md:w-1/2 relative">
                    <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
                    <img
                        alt="Artist Thai Lago painting in her studio, surrounded by artwork"
                        loading="lazy"
                        className="relative z-10 w-full rounded-2xl grayscale contrast-125 border border-white/10 shadow-2xl hover:grayscale-0 transition-all duration-700"
                        src={`${import.meta.env.BASE_URL}img/hero.JPG`}
                    />
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="about-anim will-change-transform text-primary font-mono tracking-widest uppercase mb-4 text-sm">A Artista</h2>
                    <h3 className="about-anim will-change-transform text-4xl md:text-6xl font-black mb-8 text-ivory">Thai Lago</h3>
                    <p className="about-anim will-change-transform text-xl text-slate-300 leading-relaxed mb-6">
                        Com mais de uma década dedicada às belas artes, Thai Lago desenvolveu uma técnica autoral que une a fluidez da aquarela à precisão do retrato clássico.
                    </p>
                    <p className="about-anim will-change-transform text-lg text-slate-400 leading-relaxed mb-10">
                        Sua presença em eventos de alto padrão transcende a criação da arte; é uma performance silenciosa e hipnotizante que adiciona uma camada de encantamento inesquecível à celebração.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default G_About;
