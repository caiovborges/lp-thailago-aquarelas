import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const B_Hero: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Fade up animations for texts and button
            gsap.fromTo(
                '.hero-anim',
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.15,
                    ease: 'power3.out',
                    delay: 0.2
                }
            );

            // Slight scale out for the background image
            gsap.fromTo(
                '.hero-bg',
                { scale: 1.05 },
                { scale: 1, duration: 2, ease: 'power2.out' }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id="início" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    alt="Artist painting delicate watercolor strokes on paper"
                    className="w-full h-full object-cover opacity-50 grayscale"
                    fetchPriority="high"
                    loading="eager"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzMRLzUXo2zXCR5bEj7YHWWKwcm-TugEz-2YVjoX7K6aggbu_LeEyPWLV5vezWnIPJGgyD1hWAaGtSFh3Ny8IAdJ5n0qG_CpbOuVy-scl4sw4_dI4o4iCgGe0ShKZAyQBs1e3n3tAV9VM_0TLpgBp4qHRCxwJ1pJyCpE8ZiZc2YUYlc-hzoEF8G6v0HQi1ujdQwV58NzWRGe2LsqwwWk9m27YpLRPaIlNfx3qUOQAd4MW8kHL7Xoej6Mo9rJXFNwI8TxaFL8ZeSSY"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-obsidian/20 via-obsidian/60 to-obsidian"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-5xl">
                <p className="hero-anim text-primary font-mono tracking-[0.3em] uppercase mb-6 text-sm">
                    Fine Art & Live Wedding Experience
                </p>
                <h1 className="hero-anim will-change-transform text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tight">
                    Experiência encontra <br />
                    <span className="font-serif-italic text-primary italic font-normal text-glow">Exclusividade.</span>
                </h1>
                <p className="hero-anim will-change-transform text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Live watercolor portraits para casamentos de alto padrão. Transformando momentos efêmeros em legados visuais inesquecíveis.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center hero-anim will-change-transform">
                    <button
                        onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-primary text-obsidian px-10 py-5 rounded-full font-black text-lg hover:shadow-[0_0_30px_rgba(201,167,74,0.4)] transition-all btn-magnetic"
                    >
                        <span className="relative z-10">SOLICITAR DATA</span>
                    </button>
                    <button
                        onClick={() => document.getElementById('galeria')?.scrollIntoView({ behavior: 'smooth' })}
                        className="border border-white/20 bg-white/5 backdrop-blur-sm text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all btn-magnetic"
                    >
                        <span className="relative z-10">CONHECER PORTFÓLIO</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default B_Hero;
