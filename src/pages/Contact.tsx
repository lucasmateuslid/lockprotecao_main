import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';
import "leaflet/dist/leaflet.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const numbers = {
      billing: ['5584986639591', '5584987756889', '5584981677829'],
      quote: ['558440420869'],
      support: ['5584981331131', '5584981761133'],
      claim: ['558481161997'],
      other: ['558440420869'],
      suggestion: ['558440420869']
    };

    // pega a lista de números do assunto selecionado
    const selectedList = numbers[formData.subject as keyof typeof numbers] || numbers.other;

    // escolhe um número aleatório se houver mais de um
    const phone = selectedList[Math.floor(Math.random() * selectedList.length)];

    // cria a mensagem formatada
    const subjectText = (() => {
      switch (formData.subject) {
        case 'billing': return 'Questões Financeiras';
        case 'quote': return 'Solicitar Cotação';
        case 'support': return 'Suporte Técnico';
        case 'claim': return 'Acionar Proteção';
        case 'suggestion': return 'Sugestão';
        default: return 'Outros';
      }
    })();

    const message = `
      *Nova Mensagem via Site - Lock Proteção*
      --------------------------------------
      *Nome:* ${formData.name}
      *E-mail:* ${formData.email}
      *Telefone:* ${formData.phone}
      *Assunto:* ${subjectText}
      *Mensagem:* 
      ${formData.message}
      --------------------------------------
      Mensagem enviada pelo site 🌐
      `;

    // abre o WhatsApp com a mensagem
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');

    // limpa formulário e mostra mensagem de sucesso
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 800);
  };

  const openWhatsApp = () => {
    const phone = '558440420869';
    const message = 'Olá! Gostaria de entrar em contato com a Lock Proteção.';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Assistência 24h (1)',
      description: 'Central de Atendimento Principal',
      value: '0800 591 8701',
      link: 'tel:+08005918701',
      color: 'bg-red-500'
    },
    {
      icon: Phone,
      title: 'Assistência 24h (2)',
      description: 'Central de Atendimento Secundária',
      value: '0800 879 2604',
      link: 'tel:+08008792604',
      color: 'bg-yellow-500'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Atendimento Comercial WhatsApp',
      value: '(84) 4042-0869',
      link: '#',
      color: 'bg-green-500',
      action: openWhatsApp
    },
    {
      icon: MapPin,
      title: 'Endereço',
      description: 'Sede Principal',
      value: 'Avenida Prudente de Morais, 2700, Loja 01 - Lagoa Seca, Natal - RN, 59022-305',
      link: 'https://maps.app.goo.gl/k4jirZGmuRBoj2Ci6',
      color: 'bg-blue-500'
    }
  ];

  const officeHours = [
    { day: 'Segunda a Quinta', hours: '08:00 às 18:00' },
    { day: 'Sexta', hours: '08:00 às 17:00' },
    { day: 'Sábado', hours: '08:00 às 12:00' },
    { day: 'Domingo', hours: 'Plantão 24h (Emergências)' }
  ];

  const emergencyServices = [
    'Guincho 24 horas',
    'Assistência elétrica',
    'Troca de pneu',
    'Chaveiro 24h',
    'Pane seca',
    'Bateria descarregada'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white pt-32 pb-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-hero mb-6">
              Entre em <span className="text-accent">Contato</span> Conosco
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 leading-relaxed">
              Estamos aqui para ajudar você 24 horas por dia, 7 dias por semana. 
              Fale conosco através do canal de sua preferência.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div key={index} className="card text-center group cursor-pointer" 
                     onClick={method.action || (() => window.open(method.link, '_blank'))}>
                  <div className={`${method.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="heading-md text-text mb-2 group-hover:text-primary transition-colors duration-300">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 mb-2">{method.description}</p>
                  <p className="font-montserrat font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                    {method.value}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-3xl p-8">
              <h2 className="heading-lg text-primary mb-8">
                Envie sua <span className="text-accent">Mensagem</span>
              </h2>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="form-label">Nome Completo *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Digite seu nome"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="form-label">E-mail *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="seuemail@exemplo.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="form-label">Telefone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="(84) 99999-9999"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="form-label">Assunto *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    >
                      <option value="">Selecione o assunto</option>
                      <option value="quote">Solicitar Cotação</option>
                      <option value="support">Suporte Técnico</option>
                      <option value="claim">Acionar Proteção</option>
                      <option value="billing">Questões Financeiras</option>
                      <option value="suggestion">Sugestões</option>
                      <option value="other">Outros</option>
                    </select>
                  </div>

                  <div>
                    <label className="form-label">Mensagem *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="form-input resize-none"
                      placeholder="Descreva sua mensagem..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn-accent w-full flex items-center justify-center space-x-2"
                  >
                    <Send className="h-5 w-5" />
                    <span>Enviar Mensagem</span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="heading-md text-green-600 mb-4">
                    Mensagem Enviada com Sucesso!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Obrigado pelo contato! Nossa equipe analisará sua mensagem e retornará em breve.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-accent"
                  >
                    Enviar Nova Mensagem
                  </button>
                </div>
              )}
            </div>

            {/* Additional Information */}
            <div className="space-y-8">
              {/* Office Hours */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-primary p-3 rounded-full">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="heading-md text-primary">Horários de Atendimento</h3>
                </div>
                
                <div className="space-y-4">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="font-montserrat font-medium text-gray-700">{schedule.day}</span>
                      <span className="text-primary font-semibold">{schedule.hours}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 bg-accent/10 rounded-xl p-4">
                  <p className="text-accent font-montserrat font-semibold text-center">
                    🚨 Emergências: Atendimento 24h via WhatsApp
                  </p>
                </div>
              </div>

              {/* Emergency Services */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="heading-md text-primary mb-6">
                  Serviços de <span className="text-accent">Emergência 24h</span>
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {emergencyServices.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3 p-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <button
                    onClick={openWhatsApp}
                    className="btn-accent w-full flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>Acionar Emergência</span>
                  </button>
                </div>
              </div>

              {/* Map (Corrigido) */}
              <div className="bg-white rounded-2xl p-6 shadow-lg relative z-0">
                <h3 className="heading-md text-primary mb-6">Nossa Localização</h3>

                <div className="rounded-xl overflow-hidden mb-4 h-64">
                  <iframe
                    title="Localização Lock Proteção Veicular"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3998.0556764238875!2d-35.2058!3d-5.8127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2556c89ac4a49%3A0x65f8b3265c63b693!2sAvenida%20Prudente%20de%20Morais%2C%202700%20-%20Lagoa%20Seca%2C%20Natal%20-%20RN%2C%2059022-305!5e0!3m2!1spt-BR!2sbr!4v1696100277152!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                <p className="text-sm text-gray-500 mb-4 text-center">
                  Avenida Prudente de Morais, 2700 Bl Único, Loja 01 - Lagoa Seca, Natal - RN, 59022-305
                </p>

                <a
                  href="https://maps.app.goo.gl/k4jirZGmuRBoj2Ci6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent w-full text-center block"
                >
                  Ver no Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-xl text-center text-primary mb-12">
              Perguntas <span className="text-accent">Frequentes</span>
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  question: 'Como entro em contato em caso de emergência?',
                  answer: 'Para emergências, utilize nosso 0800 24h: 0800 591 8701 ou 0800 879 2604. Nossa equipe responde imediatamente e direciona o atendimento necessário.'
                },
                {
                  question: 'Qual o prazo de resposta para dúvidas gerais?',
                  answer: 'Respondemos todas as mensagens em até 2 horas úteis. Para questões urgentes, recomendamos o contato direto via telefone ou WhatsApp.'
                },
                {
                  question: 'Posso alterar meus dados cadastrais pelo site?',
                  answer: 'Algumas alterações podem ser feitas pelo app. Para mudanças mais complexas, entre em contato conosco pelos canais disponíveis.'
                },
                {
                  question: 'Como funciona o atendimento aos finais de semana?',
                  answer: 'Aos sábados funcionamos das 9h às 14h. Domingos temos plantão 24h apenas para emergências via WhatsApp.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="font-montserrat font-semibold text-text mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
