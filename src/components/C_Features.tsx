import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const C_Features: React.FC = () => {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        // Reveal Animation
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.feature-card',
                { y: 80, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 75%',
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id="experiencia" className="py-24 px-6 md:px-24 bg-obsidian relative z-10 z-[2]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                <div className="feature-card will-change-transform bg-slate-dark/40 border border-white/5 p-12 rounded-xl card-glow transition-all group">
                    <span className="material-symbols-outlined text-primary text-4xl mb-6">palette</span>
                    <h3 className="text-2xl font-bold mb-4 text-ivory">Pintura ao Vivo</h3>
                    <p className="text-slate-400 leading-relaxed">Pintura feita diante dos convidados em tempo real, capturando a essência do momento com maestria.</p>
                </div>
                <div className="feature-card will-change-transform bg-slate-dark/40 border border-white/5 p-12 rounded-xl card-glow transition-all group">
                    <span className="material-symbols-outlined text-primary text-4xl mb-6">workspace_premium</span>
                    <h3 className="text-2xl font-bold mb-4 text-ivory">Obra Única</h3>
                    <p className="text-slate-400 leading-relaxed">Cada convidado recebe uma obra de arte original e exclusiva, uma lembrança eterna do seu grande dia.</p>
                </div>
                <div className="feature-card will-change-transform bg-slate-dark/40 border border-white/5 p-12 rounded-xl card-glow transition-all group">
                    <span className="material-symbols-outlined text-primary text-4xl mb-6">auto_awesome</span>
                    <h3 className="text-2xl font-bold mb-4 text-ivory">Sofisticação</h3>
                    <p className="text-slate-400 leading-relaxed">Elevamos o nível do seu casamento com um entretenimento artístico que transborda elegância.</p>
                </div>
            </div>
        </section>
    );
};

export default C_Features;
