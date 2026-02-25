import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Usaremos os caminhos assumindo que o usuário colocará as 4 fotos recebidas na pasta public/gallery/


const I_Gallery: React.FC = () => {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.gallery-item',
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 70%',
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id="galeria" className="py-24 px-6 md:px-24 bg-obsidian">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gallery-item will-change-transform">
                    <div>
                        <h2 className="text-primary font-mono text-sm tracking-widest uppercase mb-4">Portfólio</h2>
                        <h3 className="text-4xl md:text-6xl font-black text-ivory">A Galeria</h3>
                    </div>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    <div className="gallery-item will-change-transform overflow-hidden rounded-xl border border-white/10 break-inside-avoid gallery-glow">
                        <img alt="Elegant watercolor portrait of a couple holding champagne glasses" loading="lazy" className="w-full grayscale hover:grayscale-0 transition-all duration-700" src={`${import.meta.env.BASE_URL}img/img_06.JPG`} />
                    </div>
                    <div className="gallery-item will-change-transform overflow-hidden rounded-xl border border-white/10 break-inside-avoid gallery-glow">
                        <img alt="Watercolor painting details on textured paper" loading="lazy" className="w-full grayscale hover:grayscale-0 transition-all duration-700" src={`${import.meta.env.BASE_URL}img/img_02.jpg`} />
                    </div>
                    <div className="gallery-item will-change-transform overflow-hidden rounded-xl border border-white/10 break-inside-avoid gallery-glow">
                        <img alt="Guests admiring their watercolor portrait at a wedding reception" loading="lazy" className="w-full grayscale hover:grayscale-0 transition-all duration-700" src={`${import.meta.env.BASE_URL}img/img_04.JPG`} />
                    </div>
                    <div className="gallery-item will-change-transform overflow-hidden rounded-xl border border-white/10 break-inside-avoid gallery-glow">
                        <img alt="Finished watercolor artworks displayed on elegant easels" loading="lazy" className="w-full grayscale hover:grayscale-0 transition-all duration-700" src={`${import.meta.env.BASE_URL}img/img_05.JPG`} />
                    </div>
                    <div className="gallery-item will-change-transform overflow-hidden rounded-xl border border-white/10 break-inside-avoid gallery-glow">
                        <img alt="Close up of brushes, palettes and artist hands creating watercolor" loading="lazy" className="w-full grayscale hover:grayscale-0 transition-all duration-700" src={`${import.meta.env.BASE_URL}img/img_01.JPG`} />
                    </div>
                    <div className="gallery-item will-change-transform overflow-hidden rounded-xl border border-white/10 break-inside-avoid gallery-glow">
                        <img alt="Close up of brushes, palettes and artist hands creating watercolor" loading="lazy" className="w-full grayscale hover:grayscale-0 transition-all duration-700" src={`${import.meta.env.BASE_URL}img/img_07.JPG`} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default I_Gallery;
