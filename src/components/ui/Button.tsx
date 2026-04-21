interface ButtonProps {
  label: string;
  onClick?: () => void;
  href?: string;
}

const Button = ({ label, onClick, href }: ButtonProps) => {
  const content = (
    <button 
      onClick={onClick}
      className="bg-primary hover:bg-primary-hover text-white font-bold py-4 px-10 rounded-full shadow-lg transform transition-all hover:scale-105 active:scale-95 cursor-pointer"
    >
      {label}
    </button>
  );

  return (
    <div className="flex justify-center my-12">
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      ) : content}
    </div>
  );
};

export default Button;
