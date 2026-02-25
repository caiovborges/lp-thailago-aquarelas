import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const F_Conversion: React.FC = () => {
    const containerRef = useRef<HTMLElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        const formData = new FormData(e.currentTarget);

        // --- Título Dinâmico do Email ---
        // Pegar o nome inserido no formulário e criar o título personalizado
        const nomeCliente = formData.get("nome") || "Novo Cliente";
        formData.set("_subject", `${nomeCliente} - Landpage Aquarelas`);
        // --------------------------------

        // --- Informações adicionais ---
        formData.append("Aparelho/Navegador", navigator.userAgent);

        try {
            const ipResponse = await fetch('https://api.ipify.org?format=json');
            if (ipResponse.ok) {
                const ipData = await ipResponse.json();
                formData.append("Endereço IP", ipData.ip);
            }
        } catch (e) {
            console.warn("Não foi possível capturar o IP", e);
        }
        // ------------------------------

        try {
            const response = await fetch('https://formsubmit.co/ajax/contato@thailago.com', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setSubmitStatus('success');
                (e.target as HTMLFormElement).reset();
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.conv-anim',
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.1,
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

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        value = value.replace(/\D/g, ""); // Remove non-digits

        // Format as (XX) XXXXX-XXXX
        if (value.length > 11) value = value.slice(0, 11);

        if (value.length > 2) {
            value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
        }
        if (value.length > 10) {
            value = `${value.slice(0, 10)}-${value.slice(10)}`;
        }

        e.target.value = value;
    };

    return (
        <section ref={containerRef} id="contato" className="py-24 px-6 md:px-24 bg-slate-dark relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 relative z-10">
                <div className="w-full lg:w-1/2 lg:pr-12 conv-anim will-change-transform">
                    <h2 className="text-primary font-mono text-sm tracking-widest uppercase mb-4">Disponibilidade</h2>
                    <h3 className="text-4xl md:text-6xl font-black mb-8 text-ivory">Garanta a Sua Data</h3>
                    <p className="text-xl text-slate-300 leading-relaxed mb-10">
                        Para manter a excelência e exclusividade do nosso trabalho, atendemos a um número rigorosamente limitado de eventos por mês.
                    </p>

                    <div className="space-y-6 mb-12">
                        <div className="flex items-start gap-4">
                            <span className="material-symbols-outlined text-primary mt-1">done_all</span>
                            <div>
                                <h4 className="font-bold text-ivory mb-1">Equipe Dedicada</h4>
                                <p className="text-slate-400">Todo o foco do nosso ateliê voltado para o seu grande dia.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="material-symbols-outlined text-primary mt-1">done_all</span>
                            <div>
                                <h4 className="font-bold text-ivory mb-1">Materiais Premium</h4>
                                <p className="text-slate-400">Papéis de algodão importados e pigmentos de alta permanência.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="material-symbols-outlined text-primary mt-1">done_all</span>
                            <div>
                                <h4 className="font-bold text-ivory mb-1">Consultoria de Estilo</h4>
                                <p className="text-slate-400">Alinhamento estético completo antes do evento.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 conv-anim will-change-transform">
                    <div className="bg-obsidian/80 backdrop-blur-xl p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl relative">
                        {/* Decorative glow behind form */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-transparent blur-lg rounded-2xl -z-10 opacity-50"></div>

                        <form className="space-y-6 flex flex-col" onSubmit={handleSubmit}>
                            {/* Honeypot field (hidden from real users but bots will fill it) */}
                            <input type="text" name="_honey" style={{ display: 'none' }} />

                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_template" value="box" />
                            <input type="hidden" name="_subject" value="Novo Lead: Aquarela dos Convidados" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="nome" className="text-sm font-bold text-slate-300">NOME DOS NOIVOS *</label>
                                    <input type="text" id="nome" name="nome" maxLength={100} required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 min-h-[50px] text-base md:text-lg text-ivory focus:outline-none focus:border-primary transition-colors touch-manipulation" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="telefone" className="text-sm font-bold text-slate-300">WHATSAPP *</label>
                                    <input type="tel" id="telefone" name="telefone" onChange={handlePhoneChange} placeholder="(11) 99999-9999" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 min-h-[50px] text-base md:text-lg text-ivory focus:outline-none focus:border-primary transition-colors touch-manipulation placeholder:text-slate-500" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-bold text-slate-300">E-MAIL *</label>
                                <input type="email" id="email" name="email" maxLength={120} required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 min-h-[50px] text-base md:text-lg text-ivory focus:outline-none focus:border-primary transition-colors touch-manipulation" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="data" className="text-sm font-bold text-slate-300">DATA DO EVENTO</label>
                                    <input type="date" id="data" name="data" style={{ colorScheme: 'dark' }} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 min-h-[50px] text-base md:text-lg text-ivory focus:outline-none focus:border-primary transition-colors touch-manipulation" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="convidados" className="text-sm font-bold text-slate-300">Nº CONVIDADOS</label>
                                    <select id="convidados" name="convidados" className="w-full bg-slate-dark border border-white/10 rounded-lg px-4 py-3 min-h-[50px] text-base md:text-lg text-ivory focus:outline-none focus:border-primary transition-colors touch-manipulation">
                                        <option value="">Selecione...</option>
                                        <option value="50-100">50 a 100</option>
                                        <option value="100-200">100 a 200</option>
                                        <option value="200+">Acima de 200</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="mensagem" className="text-sm font-bold text-slate-300">DETALHES DO EVENTO (OPCIONAL)</label>
                                <textarea id="mensagem" name="mensagem" maxLength={500} rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-base md:text-lg text-ivory focus:outline-none focus:border-primary transition-colors resize-none touch-manipulation"></textarea>
                            </div>

                            {submitStatus === 'success' && (
                                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-center text-sm">
                                    Mensagem enviada com sucesso! Em breve entraremos em contato.
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-center text-sm">
                                    Ocorreu um erro ao enviar. Por favor, tente novamente ou entre em contato pelo Instagram.
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-primary text-obsidian py-4 rounded-lg font-black text-lg hover:shadow-[0_0_20px_rgba(201,167,74,0.3)] transition-all flex justify-center items-center gap-2 mt-4 disabled:opacity-70 disabled:cursor-not-allowed touch-manipulation"
                            >
                                {isSubmitting ? 'ENVIANDO...' : 'VERIFICAR DISPONIBILIDADE'}
                                {!isSubmitting && <span className="material-symbols-outlined">calendar_today</span>}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default F_Conversion;
