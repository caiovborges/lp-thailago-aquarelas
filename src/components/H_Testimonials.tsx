import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);



const H_Testimonials: React.FC = () => {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.testi-anim',
                { y: 50, opacity: 0 },
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
        <section ref={containerRef} id="depoimentos" className="py-24 bg-obsidian border-y border-white/5 overflow-hidden">
            <div className="mb-16 text-center px-6 testi-anim will-change-transform">
                <h2 className="text-4xl md:text-5xl font-serif-italic italic text-ivory">O Legado</h2>
            </div>

            <div className="flex gap-6 overflow-x-auto pb-12 px-6 md:px-24 snap-x hide-scrollbar">
                <div className="testi-anim will-change-transform min-w-[300px] md:min-w-[400px] bg-slate-dark/30 p-10 rounded-2xl border border-white/5 snap-center card-glow">
                    <div className="flex text-primary mb-6">
                        <span className="material-symbols-outlined text-sm">star</span>
                        <span className="material-symbols-outlined text-sm">star</span>
                        <span className="material-symbols-outlined text-sm">star</span>
                        <span className="material-symbols-outlined text-sm">star</span>
                        <span className="material-symbols-outlined text-sm">star</span>
                    </div>
                    <p className="text-lg text-slate-300 italic mb-6 leading-relaxed">"Indescritível a emoção de ver nossos convidados maravilhados com cada pintura. Foi o ponto alto da nossa recepção."</p>
                    <p className="font-bold text-ivory text-sm uppercase tracking-wider">— Camila & Roberto</p>
                </div>

                <div className="testi-anim will-change-transform min-w-[300px] md:min-w-[400px] bg-slate-dark/30 p-10 rounded-2xl border border-white/5 snap-center card-glow">
                    <div className="flex text-primary mb-6">
                        <span className="material-symbols-outlined text-sm">star</span>
                        <span className="material-symbols-outlined text-sm">star</span>
                        <span className="material-symbols-outlined text-sm">star</span>
                        <span className="material-symbols-outlined text-sm">star</span>
                        <span className="material-symbols-outlined text-sm">star</span>
                    </div>
                    <p className="text-lg text-slate-300 italic mb-6 leading-relaxed">"A atração mais elegante que poderíamos ter escolhido. A entrega nos deixou sem palavras."</p>
                    <p className="font-bold text-ivory text-sm uppercase tracking-wider">— Marina & Fernando</p>
                </div>

                <div className="testi-anim will-change-transform min-w-[300px] md:min-w-[400px] bg-slate-dark/30 p-10 rounded-2xl border border-white/5 snap-center card-glow">
                    <div className="flex text-primary mb-6">
                        <span className="material-symbols-outlined text-sm">star</span>
                        <span className="material-symbols-outlined text-sm">star</span>
                        <span className="material-symbols-outlined text-sm">star</span>
                        <span className="material-symbols-outlined text-sm">star</span>
                        <span className="material-symbols-outlined text-sm">star</span>
                    </div>
                    <p className="text-lg text-slate-300 italic mb-6 leading-relaxed">"Nosso casamento ganhou um prestígio imenso com as aquarelas ao vivo da Thai. Perfeito."</p>
                    <p className="font-bold text-ivory text-sm uppercase tracking-wider">— Isadora & Bruno</p>
                </div>
            </div>
        </section>
    );
};

export default H_Testimonials;
