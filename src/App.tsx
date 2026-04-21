import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Button from './components/ui/Button';
import profileImage from './assets/icon.jpg';
import {portfolioProps} from "./data/portfolioProps.ts";

function App() {
  return (
    <div className="min-h-screen bg-secondary font-sans">
      <Header
        name={portfolioProps.name}
        title={portfolioProps.title}
        image={profileImage}
        city={portfolioProps.about.city}
        state={portfolioProps.about.state}
        age={portfolioProps.about.age}
        github={portfolioProps.github}
        website={portfolioProps.website}
      />
      
      <main className="max-w-6xl mx-auto px-6 py-12">
        <About 
          description={portfolioProps.about.description}
          interestArea={portfolioProps.about.interestArea}
        />
        
        <Skills 
          skills={portfolioProps.skills}
        />
        
        <Projects 
          projects={portfolioProps.projects}
        />

          <Button
              label="Entrar em Contato"
              onClick={() => {
                  const confirmar = window.confirm("Você será redirecionado. Deseja continuar?");
                  if (confirmar) {
                      window.location.href = `mailto:${portfolioProps.mail}`;
                  }
              }}
          />
      </main>

      <Footer name={portfolioProps.name} />
    </div>
  );
}

export default App;
