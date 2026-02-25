
import A_Navbar from './components/A_Navbar';
import B_Hero from './components/B_Hero';
import C_Features from './components/C_Features';
import D_Philosophy from './components/D_Philosophy';
import E_Protocol from './components/E_Protocol';
import F_Conversion from './components/F_Conversion';
import G_About from './components/G_About';
import H_Testimonials from './components/H_Testimonials';
import I_Gallery from './components/I_Gallery';
import J_Footer from './components/J_Footer';

function App() {
  return (
    <div className="relative w-full bg-obsidian text-ivory">
      {/* Texture Global Overlay */}
      <div className="noise-overlay"></div>

      <A_Navbar />

      <main className="w-full">
        <B_Hero />
        <C_Features />
        <D_Philosophy />
        <E_Protocol />
        <I_Gallery />
        <H_Testimonials />
        <G_About />
        <F_Conversion />
      </main>

      <J_Footer />
    </div>
  );
}

export default App;
