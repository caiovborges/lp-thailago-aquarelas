import React from 'react';

const J_Footer: React.FC = () => {
    return (
        <footer className="bg-obsidian py-12 px-6 border-t border-white/10 relative z-30">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-2xl">brush</span>
                    <span className="font-bold tracking-tighter text-lg uppercase text-ivory">Ateliê Thai Lago</span>
                </div>

                <div className="flex gap-6 text-sm text-slate-400">
                    <a href="#" className="hover:text-primary transition-colors">Instagram</a>
                    <a href="#" className="hover:text-primary transition-colors">Pinterest</a>
                    <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
                </div>

                <p className="text-xs text-slate-500 text-center md:text-right">
                    © 2024 Ateliê Thai Lago<br />
                    Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
};

export default J_Footer;
