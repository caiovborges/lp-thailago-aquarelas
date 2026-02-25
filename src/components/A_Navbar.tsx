import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const A_Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMenuOpen]);

    const scrollToSection = (id: string) => {
        setIsMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            // Pequeno delay para a animação do menu fechar antes de rolar
            setTimeout(() => {
                element.scrollIntoView({ behavior: 'smooth' });
            }, 300);
        }
    };

    const navItems = ['Início', 'Experiência', 'Depoimentos', 'Sobre a Artista'];

    return (
        <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-300">
            <div className="bg-obsidian/80 backdrop-blur-xl border border-white/10 rounded-full py-3 px-6 md:px-8 md:py-4 flex items-center justify-between gap-4 lg:gap-8 shadow-2xl relative z-50">
                <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary md:text-2xl">brush</span>
                    <span className="font-bold tracking-tighter text-sm md:text-lg uppercase whitespace-nowrap">Ateliê Thai Lago</span>
                </div>

                <div className="hidden lg:flex items-center gap-6 xl:gap-10 text-sm font-medium tracking-wide">
                    {navItems.map((item) => (
                        <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="hover:text-primary transition-colors link-hover uppercase whitespace-nowrap">
                            {item}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={() => scrollToSection('contato')}
                        className="hidden md:block bg-primary text-obsidian px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform"
                    >
                        Consultar Agenda
                    </button>

                    {/* Mobile Menu Toggle Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden text-ivory hover:text-primary flex items-center justify-center p-1"
                        aria-expanded={isMenuOpen}
                        aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 min-h-screen bg-obsidian/95 backdrop-blur-3xl transition-all duration-500 ease-in-out z-40 lg:hidden flex flex-col items-center justify-center
                    ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
                `}
                style={{ top: '-1rem', height: '110vh' }} // Compensa o header flutuante e cobra a tela toda
            >
                <div className="flex flex-col items-center gap-8 w-full max-w-xs px-6">
                    {navItems.map((item, i) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item.toLowerCase())}
                            className="text-2xl font-bold uppercase text-ivory tracking-widest hover:text-primary transition-colors w-full border-b border-white/10 pb-4"
                            style={{
                                transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                                opacity: isMenuOpen ? 1 : 0,
                                transition: `all 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + (i * 0.1)}s`
                            }}
                        >
                            {item}
                        </button>
                    ))}

                    <button
                        onClick={() => scrollToSection('contato')}
                        className="mt-8 bg-primary text-obsidian w-full py-4 rounded-full font-black text-lg hover:shadow-[0_0_30px_rgba(201,167,74,0.4)] transition-all"
                        style={{
                            transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                            opacity: isMenuOpen ? 1 : 0,
                            transition: `all 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + (navItems.length * 0.1)}s`
                        }}
                    >
                        Consultar Agenda
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default A_Navbar;
