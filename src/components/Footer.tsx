import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const currentYear = new Date().getFullYear();

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Planos', path: '/planos' },
  { name: 'Sobre Nós', path: '/sobre' },
  { name: 'Cotação', path: '/pwr-cotacao' },
  { name: 'Contato', path: '/contato' },
];

const services = [
  'Proteção Total',
  'Cobertura Nacional',
  'Assistência 24h',
  'Guincho Ilimitado',
  'Carro Reserva',
  'Vidros e Faróis',
];

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/associacaolockprotecao', name: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/lockprotecao/', name: 'Instagram' },
  { icon: Linkedin, href: '#', name: 'LinkedIn' },
  { icon: Youtube, href: '#', name: 'YouTube' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <img
            src="https://lockprotecao.com.br/wp-content/uploads/2024/03/lockpv-branca-1024x600.webp"
            alt="Lock Proteção"
            className="h-20 w-auto mb-6"
            loading="lazy"
            width={143}
            height={84}
          />
          <p className="text-gray-300 mb-6 leading-relaxed">
            Protegendo seu patrimônio com segurança e confiabilidade. 
            A melhor proteção veicular do mercado com atendimento humanizado 24 horas.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map(({ icon: Icon, href, name }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-primary p-3 rounded-full transition-transform duration-300 transform hover:scale-110"
                aria-label={name}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-montserrat font-semibold mb-6">Links Rápidos</h4>
          <ul className="space-y-3">
            {quickLinks.map(({ name, path }, i) => (
              <li key={i}>
                <Link
                  to={path}
                  className="text-gray-300 hover:text-primary transition-colors duration-200 flex items-center group"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-montserrat font-semibold mb-6">Nossos Serviços</h4>
          <ul className="space-y-3">
            {services.map((service, i) => (
              <li key={i} className="text-gray-300 flex items-center group">
                <span className="w-2 h-2 bg-accent rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-montserrat font-semibold mb-6">Contato</h4>
          <div className="space-y-4">
            <ContactItem icon={Phone} label="Central de Atendimento" primary="+55 84 4042-0869" secondary="WhatsApp: (83) 3142-1040" />
            <ContactItem icon={Mail} label="Email" primary="contato@lockprotecao.com.br" isLink />
            <ContactItem icon={MapPin} label="Endereço" primary="Av. Prudente de Morais, 2700 - Lagoa Seca, Natal/RN" />
            <ContactItem icon={Clock} label="Funcionamento" primary="24 horas por dia" secondary="7 dias por semana" />
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-t border-gray-800">
        <div className="container py-8 flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
          <div>
            <h4 className="text-lg font-montserrat font-semibold mb-2">Receba nossas novidades</h4>
            <p className="text-gray-300">Fique por dentro das promoções e dicas de proteção veicular</p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full lg:w-auto">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent flex-1 lg:w-64"
            />
            <button className="btn-accent whitespace-nowrap">Inscrever-se</button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">© {currentYear} Lock Proteção Veicular. Todos os direitos reservados.</p>
          <div className="flex space-x-6 text-sm">
            <Link to="/politica-privacidade" className="text-gray-400 hover:text-primary transition-colors duration-200">Política de Privacidade</Link>
            <Link to="/termos-de-uso" className="text-gray-400 hover:text-primary transition-colors duration-200">Termos de Uso</Link>
            <Link to="/lgpd" className="text-gray-400 hover:text-primary transition-colors duration-200">LGPD</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface ContactItemProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
  primary: string;
  secondary?: string;
  isLink?: boolean;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon: Icon, label, primary, secondary, isLink }) => (
  <div className="flex items-start space-x-3">
    <Icon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
    <div>
      <p className="text-gray-300">{label}</p>
      {isLink ? (
        <a href={`mailto:${primary}`} className="text-white hover:text-primary transition-colors duration-200">{primary}</a>
      ) : (
        <p className="text-white">{primary}</p>
      )}
      {secondary && <p className="text-white mt-1">{secondary}</p>}
    </div>
  </div>
);

export default Footer;
