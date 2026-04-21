import SectionCard from "../ui/SectionCard";

interface AboutProps {
  description: string;
  interestArea: string;
}

const About = ({ description, interestArea }: AboutProps) => (
  <SectionCard title="Sobre Mim">
    <div className="space-y-4">
      <p className="text-gray-700 leading-relaxed text-lg italic">"{description}"</p>
      <div className="pt-4 border-t border-gray-100">
        <p className="text-gray-800">
          <span className="font-bold text-primary italic">Área de Interesse:</span> {interestArea}
        </p>
      </div>
    </div>
  </SectionCard>
);

export default About;
