import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);



const E_Protocol: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.protocol-header',
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.protocol-header',
                        start: 'top 80%',
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id="experiência" className="py-24 px-6 md:px-24 bg-obsidian min-h-screen">
            <div className="max-w-6xl mx-auto">
                <div className="mb-20 protocol-header will-change-transform">
                    <h2 className="text-primary font-mono text-sm tracking-widest uppercase mb-4">Metodologia</h2>
                    <h3 className="text-4xl md:text-6xl font-black italic font-serif-italic text-ivory">O Protocolo Exclusive</h3>
                </div>

                <div className="space-y-10 relative">
                    <div className="sticky top-32 bg-slate-dark p-12 rounded-xl border border-white/10 shadow-2xl flex flex-col md:flex-row gap-12 items-center">
                        <div className="text-7xl font-mono font-bold text-primary/20">01</div>
                        <div>
                            <h4 className="text-3xl font-bold mb-4 text-primary">Curadoria</h4>
                            <p className="text-slate-300 text-lg leading-relaxed max-w-xl">Definição do estilo visual e paleta de cores que harmonizam com a decoração e o conceito do evento.</p>
                        </div>
                        <div className="flex-1 w-full h-48 rounded-lg overflow-hidden hidden md:block">
                            <img alt="Luxury event moodboard with color swatches" loading="lazy" className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1hLT7ESgwsycUUSTj_Sjxq2_RZbMi8aOv256FdftP5jpRTA2puD9Or7g169_c5-QrYu_qHuTKvkfHYFvKX7DosTXQDNyvEb_JbD8krFkI5zoGGD5Cdc1oVDCWs6OAsvXlnlg-OorhUKtCqa2FTfeXmJZpZCZHP8lIC8G6O0ofDG06x_BF6ZAO1JvOosBUQ8hmRK-Hw8k-XulJhfqLJO4WQpZFGVC0aQ3azBGCZ50m1CcEaBTYGuiWKk004Ojk3479AtfPo3UdiU8" />
                        </div>
                    </div>

                    <div className="sticky top-40 bg-slate-dark p-12 rounded-xl border border-white/10 shadow-2xl flex flex-col md:flex-row gap-12 items-center translate-y-4">
                        <div className="text-7xl font-mono font-bold text-primary/20">02</div>
                        <div>
                            <h4 className="text-3xl font-bold mb-4 text-primary">Pintura ao Vivo</h4>
                            <p className="text-slate-300 text-lg leading-relaxed max-w-xl">Presença marcante durante o evento, onde cada traço é executado com precisão e alma artística.</p>
                        </div>
                        <div className="flex-1 w-full h-48 rounded-lg overflow-hidden hidden md:block">
                            <img alt="Close up of watercolor palette and brush" loading="lazy" className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIAEk1TqAwVQcybK5nCoxYqZs-q_RvzpHvUvP-J3I059bi2JYUZiYz3GgJMrW8kLD0kcRJuDunOnNWWa_lBWruhIAfVpT3CVTVetGI-c7TX10bWIIS-8PtKabI9LchnR0PlT1_oIZoxAuGyAtqWFwyHTRuMB8IHZr6JOz0ilhnk3khYxfMv7yxWNAI0ZJEiEXs_nK-2w5WfmRZt41iNBCItHuXVN3w9ONtoN9Nt-3Y9pgLvFllRLaG7E7na1YIJWqvEAEUeR8efRw" />
                        </div>
                    </div>

                    <div className="sticky top-48 bg-slate-dark p-12 rounded-xl border border-white/10 shadow-2xl flex flex-col md:flex-row gap-12 items-center translate-y-8">
                        <div className="text-7xl font-mono font-bold text-primary/20">03</div>
                        <div>
                            <h4 className="text-3xl font-bold mb-4 text-primary">Entrega Memorável</h4>
                            <p className="text-slate-300 text-lg leading-relaxed max-w-xl">Finalização e entrega das obras em embalagens premium, garantindo um legado visual eterno.</p>
                        </div>
                        <div className="flex-1 w-full h-48 rounded-lg overflow-hidden hidden md:block">
                            <img alt="Elegantly wrapped artwork on dark surface" loading="lazy" className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeexopzeHmrinoiDb1NtJRmbmcaZ5tqavVxQubxj1VUQHY-waZbe2pt41OoG9ehyjvJVc2Y8ZbbzbJUYnCpAEGcOx05m-hU2_G8io-LXi7TF5doL9UWH8cltNfzjjAYTKeMxWmQz8lQq-jD4HZhcwWXSyYAxD5KRMQ6et9HSfna3n1eguo1pE1EMPhf9RDrjTtM8Ue8azDpGYfgHvjw5dnIhEY_CTXbzuIbTIw9OJbuuVGBRFTiHIjbad-L9UqHsNVvo25_PuQonI" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default E_Protocol;
