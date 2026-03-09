import React, { useState } from 'react';
import {
  Phone,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  AlertTriangle,
  Calculator,
  CreditCard,
  ArrowRight,
} from 'lucide-react';

const subjectDetails: Record<string, { label: string; guidance: string }> = {
  quote: {
    label: 'Solicitar Cotação',
    guidance: 'Ideal para novos planos, adesão e comparação de coberturas.'
  },
  support: {
    label: 'Suporte Técnico',
    guidance: 'Ideal para dúvidas de app, acesso e orientações operacionais.'
  },
  claim: {
    label: 'Acionar Proteção',
    guidance: 'Use para ocorrências e acionamentos com prioridade de atendimento.'
  },
  billing: {
    label: 'Questões Financeiras',
    guidance: 'Use para segunda via, pendências e informações de pagamento.'
  },
  suggestion: {
    label: 'Sugestões',
    guidance: 'Use para enviar melhorias e feedback sobre nosso atendimento.'
  },
  other: {
    label: 'Outros',
    guidance: 'Use quando seu assunto não se enquadrar nas opções acima.'
  }
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const officialHours = [
    { day: 'Segunda a Quinta', hours: '08:00 às 18:00' },
    { day: 'Sexta', hours: '08:00 às 17:00' },
    { day: 'Sábado', hours: '08:00 às 12:00' },
    { day: 'Domingo', hours: 'Plantão de emergência (0800 591 8701)' }
  ];

  const contactChannels = [
    {
      icon: AlertTriangle,
      title: 'Emergências e Sinistros',
      purpose: 'Guincho, pane, colisão, chaveiro e ocorrências urgentes',
      value: '0800 591 8701',
      link: 'tel:08005918701',
      hours: '24h, inclusive domingos e feriados',
      color: 'bg-accent'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Comercial',
      purpose: 'Cotações, adesão, dúvidas gerais e acompanhamento',
      value: '(84) 4042-0869',
      link: 'https://wa.me/558440420869?text=Olá!%20Preciso%20de%20atendimento%20comercial%20da%20Lock.',
      hours: 'Seg-Qui 08h-18h | Sex 08h-17h | Sáb 08h-12h',
      color: 'bg-green-500'
    },
    {
      icon: Phone,
      title: 'Emergências e Sinistros (Canal 2)',
      purpose: 'Canal secundário para ocorrências urgentes e apoio emergencial',
      value: '0800 879 2604',
      link: 'tel:08008792604',
      hours: '24h, inclusive domingos e feriados',
      color: 'bg-primary'
    }
  ];

  const intentCards = [
    {
      icon: AlertTriangle,
      title: 'Preciso de ajuda urgente',
      description: 'Use para emergências com seu veículo ou acionamento imediato da proteção.',
      recommended: 'Canal recomendado: 0800 591 8701 (24h)',
      actionLabel: 'Ligar Agora',
      actionLink: 'tel:08005918701',
      actionClass: 'btn-accent'
    },
    {
      icon: Calculator,
      title: 'Quero cotar ou contratar',
      description: 'Use para novos planos, dúvidas de cobertura e proposta personalizada.',
      recommended: 'Canal recomendado: WhatsApp Comercial',
      actionLabel: 'Abrir WhatsApp',
      actionLink: 'https://wa.me/558440420869?text=Olá!%20Quero%20fazer%20uma%20cotação%20com%20a%20Lock.',
      actionClass: 'btn-primary'
    },
    {
      icon: CreditCard,
      title: 'Tenho assunto financeiro',
      description: 'Use para boletos, pagamentos, pendências e solicitações financeiras.',
      recommended: 'Canal recomendado: Formulário (setor financeiro)',
      actionLabel: 'Ir para Formulário',
      actionLink: '#formulario-contato',
      actionClass: 'btn-outline2'
    }
  ];

  const emergencyServices = [
    'Guincho 24 horas',
    'Assistência elétrica',
    'Troca de pneu',
    'Pane seca',
    'Bateria descarregada'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const weightedTargets = {
      billing: [
        { phone: '5584981677829', weight: 45 }, // Gleysiane
        { phone: '5584986639591', weight: 45 }, // Geovanna
        { phone: '5584987756889', weight: 10 }, // Isabelle (baixo volume)
      ],
      support: [
        { phone: '5584981761133', weight: 85 }, // Ysac
        { phone: '5584981331131', weight: 15 }, // Lucas (baixo volume)
      ],
      claim: [
        { phone: '5584981761133', weight: 85 },
        { phone: '5584981331131', weight: 15 },
      ],
      quote: [
        { phone: '558440420869', weight: 100 },
      ],
      suggestion: [
        { phone: '558440420869', weight: 100 },
      ],
      other: [
        { phone: '558440420869', weight: 100 },
      ]
    };

    const chooseWeightedPhone = (pool: Array<{ phone: string; weight: number }>) => {
      const totalWeight = pool.reduce((acc, item) => acc + item.weight, 0);
      let randomWeight = Math.random() * totalWeight;

      for (const item of pool) {
        randomWeight -= item.weight;
        if (randomWeight <= 0) return item.phone;
      }

      return pool[0].phone;
    };

    const selectedPool = weightedTargets[formData.subject as keyof typeof weightedTargets] || weightedTargets.other;
    const phone = chooseWeightedPhone(selectedPool);
    const subjectText = subjectDetails[formData.subject]?.label || 'Outros';

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

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');

    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-primary text-white pt-32 pb-16">
        <div className="container">
          <div className="max-w-5xl mx-auto text-center">
            <p className="font-montserrat font-semibold text-white/90 mb-4 tracking-wide uppercase text-sm">
              Central de Atendimento Lock
            </p>
            <h1 className="heading-hero mb-6">
              Fale com o canal certo em <span className="text-accent">menos tempo</span>
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 leading-relaxed">
              Escolha seu objetivo, veja para que serve cada contato e fale direto com a equipe correta.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#intencoes" className="btn-accent inline-flex items-center gap-2">
                Escolher Canal de Atendimento
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href="tel:08005918701" className="btn-outline inline-flex items-center gap-2">
                Emergência 24h: 0800 591 8701
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div id="intencoes" className="text-center mb-12">
            <h2 className="heading-xl text-primary mb-4">
              Como podemos te <span className="text-accent">ajudar hoje</span>?
            </h2>
            <p className="text-lg-responsive text-gray-600 max-w-3xl mx-auto">
              Selecione o tipo de atendimento para falar com o setor certo e ganhar tempo no atendimento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {intentCards.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <IconComponent className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="heading-md text-text mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{item.description}</p>
                  <p className="text-sm font-montserrat font-semibold text-primary mb-5">{item.recommended}</p>
                  <a
                    href={item.actionLink}
                    target={item.actionLink.startsWith('http') ? '_blank' : undefined}
                    rel={item.actionLink.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`${item.actionClass} inline-flex items-center justify-center gap-2`}
                  >
                    {item.actionLabel}
                  </a>
                </div>
              );
            })}
          </div>

          <div className="text-center mb-10">
            <h3 className="heading-lg text-primary mb-3">Canais Principais e Finalidade</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Cada canal abaixo está organizado por tipo de atendimento e horário para facilitar sua escolha.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactChannels.map((channel, index) => {
              const IconComponent = channel.icon;
              return (
                <a
                  key={index}
                  href={channel.link}
                  target={channel.link.startsWith('http') ? '_blank' : undefined}
                  rel={channel.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="bg-white rounded-2xl p-6 shadow-custom border border-gray-100 hover:shadow-custom-lg transition-all duration-300"
                >
                  <div className={`${channel.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>
                  <h4 className="heading-md text-text mb-2">{channel.title}</h4>
                  <p className="text-gray-600 mb-3">{channel.purpose}</p>
                  <p className="font-montserrat font-semibold text-primary mb-2">{channel.value}</p>
                  <p className="text-sm text-gray-500">{channel.hours}</p>
                </a>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div id="formulario-contato" className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
              <h2 className="heading-lg text-primary mb-2">
                Envie sua <span className="text-accent">Mensagem</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Ao enviar, o sistema direciona automaticamente para o setor responsável no WhatsApp, sem expor contatos internos.
              </p>

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

                  {formData.subject && (
                    <div className="bg-primary/5 border border-primary/10 rounded-xl p-4">
                      <p className="text-sm font-montserrat font-semibold text-primary mb-1">
                        {subjectDetails[formData.subject]?.label}
                      </p>
                      <p className="text-sm text-gray-600">
                        {subjectDetails[formData.subject]?.guidance}
                      </p>
                    </div>
                  )}

                  <div>
                    <label className="form-label">Mensagem *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="form-input resize-none"
                      placeholder="Descreva sua solicitação para agilizar o atendimento..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn-accent w-full flex items-center justify-center space-x-2"
                  >
                    <Send className="h-5 w-5" />
                    <span>Enviar e Abrir WhatsApp</span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="heading-md text-green-600 mb-4">
                    Mensagem preparada com sucesso!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Seu WhatsApp foi aberto com os dados preenchidos para agilizar seu atendimento.
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

            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-6 shadow-custom border border-gray-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-primary p-3 rounded-full">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="heading-md text-primary">Horários de Atendimento</h3>
                </div>

                <div className="space-y-4">
                  {officialHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0 gap-4">
                      <span className="font-montserrat font-medium text-gray-700">{schedule.day}</span>
                      <span className="text-primary font-semibold text-right">{schedule.hours}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 bg-accent/10 rounded-xl p-4 border border-accent/20">
                  <p className="text-accent font-montserrat font-semibold text-center">
                    Emergência: use 0800 591 8701 para atendimento imediato.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-custom border border-gray-100">
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a
                      href="tel:08005918701"
                      className="btn-accent w-full flex items-center justify-center space-x-2"
                    >
                      <Phone className="h-5 w-5" />
                      <span>Ligar 0800 591 8701</span>
                    </a>
                    <a
                      href="tel:08008792604"
                      className="btn-primary w-full flex items-center justify-center space-x-2"
                    >
                      <Phone className="h-5 w-5" />
                      <span>Ligar 0800 879 2604</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-custom border border-gray-100 relative z-0">
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
                  className="btn-primary w-full text-center block"
                >
                  Ver no Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-xl text-center text-primary mb-12">
              Dúvidas <span className="text-accent">Frequentes</span>
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: 'Como entro em contato em caso de emergência?',
                  answer: 'Use o 0800 591 8701, disponível 24h. Esse canal é exclusivo para ocorrências urgentes como pane, colisão e guincho.'
                },
                {
                  question: 'Quando devo usar o WhatsApp comercial?',
                  answer: 'Use o WhatsApp para cotação, contratação, dúvidas gerais e acompanhamento. O atendimento ocorre em horário comercial informado na página.'
                },
                {
                  question: 'Para que serve o atendimento administrativo?',
                  answer: 'Assuntos administrativos são tratados por roteamento interno via formulário para os setores de financeiro e rastreamento.'
                },
                {
                  question: 'Como funciona o atendimento aos finais de semana?',
                  answer: 'No sábado, o atendimento comercial e administrativo funciona das 08:00 às 12:00. No domingo, permanece apenas o plantão de emergência pelo 0800 591 8701.'
                },
                {
                  question: 'Existe mais de um canal de emergência?',
                  answer: 'Sim. Você pode acionar emergência pelos números 0800 591 8701 e 0800 879 2604, ambos com atendimento 24h.'
                },
                {
                  question: 'O formulário envia e-mail?',
                  answer: 'Não. O formulário organiza suas informações e abre o WhatsApp do setor responsável para agilizar a conversa com nossa equipe.'
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
