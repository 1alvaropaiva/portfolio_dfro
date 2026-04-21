import { Globe } from "lucide-react";

interface HeaderProps {
  name: string;
  title: string;
  image: string;
  city: string;
  state: string;
  age: number;
  github: string;
  website: string;
}

const Header = ({ name, title, image, city, state, age, github, website }: HeaderProps) => {
  return (
      <header className="bg-gradient-to-t from-second to-primary text-white py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-32">
          <div className="flex-shrink-0">
            <img
                src={image}
                alt={name}
                className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-1 border-accent shadow-2xl transition-transform"
            />
          </div>

          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-2">{name}</h1>
            <p className="text-xl md:text-2xl opacity-90 font-medium mb-4">{title}</p>

            <div className="flex flex-wrap justify-center md:justify-start gap-2 text-sm opacity-85 mb-6">
              <span className="px-3 py-1">{city}, {state}</span>
              <span className="px-3 py-1">{age} anos</span>
            </div>

            <div className="flex justify-center md:justify-start md:gap-5">
              <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-transparent hover:bg-white/30 px-4 py-2 rounded-lg transition-all"
              >
                <Globe size={20} />
                <span className="font-semibold">GitHub</span>
              </a>
              <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-transparent hover:bg-white/30 px-4 py-2 rounded-lg transition-all"
              >
                <Globe size={20} />
                <span className="font-semibold">Website</span>
              </a>
            </div>
          </div>
        </div>
      </header>
  );
};

export default Header;