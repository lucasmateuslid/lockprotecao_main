import React, { useState } from 'react';
import { Calculator, Shield, CheckCircle, User, Car, Phone, Mail, MapPin } from 'lucide-react';

const Quote: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal info
    name: '',
    email: '',
    phone: '',
    cpf: '',
    
    // Vehicle info
    brand: '',
    model: '',
    year: '',
    fipeValue: '',
    plate: '',
    zipCode: '',
    
    // Usage info
    usage: '',
    garage: '',
    
    // Plan preference
    coverage: '',
    plan: ''
  });
  
  const [quoteResult, setQuoteResult] = useState<any>(null);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Power CRM config
  const POWER_CRM_URL = 'https://api.powercrm.com.br/api/quotation/add';
  // avoid direct `process` identifier to prevent "Cannot find name 'process'" in the browser TS build
  const POWER_CRM_TOKEN = 'isE5YfZDAnYhU0KJZyZouLIfMPh9ZbByoixOKUwMntHJSZiD1ENgbtisV7UyJghtzLICzlrIvhpM5nQ2mQQimrXKJuWG7nmSJWcZGcgXkTssm6AW1qXuGvnvJSvc7sA5pn9zHQK23bcQFJl8Y9yJe6WgizMTyLgETURkgsjLEuYFcpTOv8hq2mjoEwNt1BtUOKbQIHeInZkNTsDA2UJCTx5j';

  const consultants = [
    // Numbers in international format without + (example placeholders)
    '5584998556267',
    '5584981331131'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generateQuote = () => {
    // Simulate quote calculation
    const baseValue = parseInt(formData.fipeValue.replace(/\D/g, '')) || 50000;
    const basicPrice = Math.round((baseValue * 0.024) / 12);
    const completePrice = Math.round((baseValue * 0.036) / 12);
    const premiumPrice = Math.round((baseValue * 0.054) / 12);

    setQuoteResult({
      basic: basicPrice,
      complete: completePrice,
      premium: premiumPrice,
      vehicle: `${formData.brand} ${formData.model} ${formData.year}`,
      fipeValue: formData.fipeValue
    });
    
    setCurrentStep(4);
  };

  const formatCurrency = (value: string) => {
    const numericValue = value.replace(/\D/g, '');
    return numericValue.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  };

  const formatPhone = (value: string) => {
    const numericValue = value.replace(/\D/g, '');
    return numericValue
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d{4})/, '$1-$2')
      .substring(0, 15);
  };

  const chooseRandomConsultant = () => {
    const idx = Math.floor(Math.random() * consultants.length);
    return consultants[idx];
  };

  const cleanPhoneForApi = (phone: string) => {
    let digits = phone.replace(/\D/g, '');
    // ensure country code 55 present
    if (!digits.startsWith('55')) {
      digits = '55' + digits;
    }
    return digits;
  };

  const sendToPowerCRM = async (coverageToSend: string) => {
    setIsSending(true);
    setErrorMessage(null);

    try {
      const payload = {
        name: formData.name,
        cpf: formData.cpf,
        email: formData.email,
        phone: cleanPhoneForApi(formData.phone),
        brand: formData.brand,
        model: formData.model,
        year: formData.year,
        plate: formData.plate,
        zipCode: formData.zipCode,
        fipeValue: formData.fipeValue,
        coverage: coverageToSend,
        // keep any extra info if needed
        plan: formData.plan,
        usage: formData.usage,
        garage: formData.garage
      };

      const res = await fetch(POWER_CRM_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${POWER_CRM_TOKEN}`
        },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        let errText = `Erro ao enviar a cotação: ${res.status}`;
        try {
          const errJson = await res.json();
          if (errJson && errJson.message) errText = `Erro ao enviar a cotação: ${errJson.message}`;
        } catch {
          // ignore parse errors
        }
        throw new Error(errText);
      }

      // Success
      const consultant = chooseRandomConsultant();
      redirectToConsultant(consultant, payload);
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err?.message || 'Erro desconhecido ao enviar a cotação.');
      window.alert(err?.message || 'Erro ao enviar a cotação. Tente novamente.');
    } finally {
      setIsSending(false);
    }
  };

  const redirectToConsultant = (consultantNumber: string, payload: any) => {
    const vehicle = `${payload.brand} ${payload.model} ${payload.year}`.trim();
    const msg = `Olá, meu nome é ${payload.name}. Gostaria de contratar o plano ${payload.coverage || ''} para o veículo ${vehicle}. CPF: ${payload.cpf}. E-mail: ${payload.email}. Telefone: ${payload.phone}. Valor FIPE: R$ ${payload.fipeValue}.`;
    const encoded = encodeURIComponent(msg);
    const waLink = `https://wa.me/${consultantNumber}?text=${encoded}`;
    // redirect user to WhatsApp
    window.location.href = waLink;
  };

  const handleContract = async (planKey: string) => {
    // planKey is like 'Básico' | 'Completo' | 'Premium' from the plan card
    // map to coverage keys used in the form (basic/complete/premium)
    const mapNameToCoverage = (name: string) => {
      const lower = name.toLowerCase();
      if (lower.includes('bás')) return 'basic';
      if (lower.includes('compl')) return 'complete';
      if (lower.includes('prem')) return 'premium';
      return formData.coverage || 'basic';
    };

    const coverageToSend = formData.coverage || mapNameToCoverage(planKey);
    // optionally set the formData.plan for record
    setFormData(prev => ({ ...prev, plan: planKey, coverage: coverageToSend }));
    await sendToPowerCRM(coverageToSend);
  };

  const steps = [
    { number: 1, title: 'Dados Pessoais', icon: User },
    { number: 2, title: 'Dados do Veículo', icon: Car },
    { number: 3, title: 'Informações de Uso', icon: MapPin },
    { number: 4, title: 'Sua Cotação', icon: Calculator }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white pt-32 pb-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-hero mb-6">
              Faça sua <span className="text-accent">Cotação Gratuita</span>
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 leading-relaxed">
              Em apenas 3 minutos você descobre quanto custa proteger seu veículo 
              com a melhor proteção veicular do mercado.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Progress Steps */}
            <div className="flex items-center justify-center space-x-4 mb-12">
              {steps.map((step) => {
                const IconComponent = step.icon;
                return (
                  <div key={step.number} className="flex items-center">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                      currentStep >= step.number 
                        ? 'bg-primary border-primary text-white' 
                        : 'bg-white border-gray-300 text-gray-500'
                    }`}>
                      {currentStep > step.number ? (
                        <CheckCircle className="h-6 w-6" />
                      ) : (
                        <IconComponent className="h-6 w-6" />
                      )}
                    </div>
                    <div className="hidden sm:block ml-3">
                      <p className={`font-montserrat font-medium ${
                        currentStep >= step.number ? 'text-primary' : 'text-gray-500'
                      }`}>
                        Etapa {step.number}
                      </p>
                      <p className="text-sm text-gray-600">{step.title}</p>
                    </div>
                    {step.number < steps.length && (
                      <div className={`hidden sm:block w-16 h-1 mx-4 rounded-full ${
                        currentStep > step.number ? 'bg-primary' : 'bg-gray-300'
                      }`}></div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Form Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              {/* Step 1: Personal Data */}
              {currentStep === 1 && (
                <div className="animate-fade-in">
                  <h2 className="heading-lg text-primary mb-8 text-center">
                    Primeiro, vamos nos conhecer melhor
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label">Nome Completo *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="Digite seu nome completo"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="form-label">CPF *</label>
                      <input
                        type="text"
                        name="cpf"
                        value={formData.cpf}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="000.000.000-00"
                        required
                      />
                    </div>
                    
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
                      <label className="form-label">Telefone/WhatsApp *</label>
                      <input
                        type="text"
                        name="phone"
                        value={formatPhone(formData.phone)}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="(11) 99999-9999"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Vehicle Data */}
              {currentStep === 2 && (
                <div className="animate-fade-in">
                  <h2 className="heading-lg text-primary mb-8 text-center">
                    Agora, conte-nos sobre seu veículo
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label">Marca *</label>
                      <select
                        name="brand"
                        value={formData.brand}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      >
                        <option value="">Selecione a marca</option>
                        <option value="Chevrolet">Chevrolet</option>
                        <option value="Ford">Ford</option>
                        <option value="Volkswagen">Volkswagen</option>
                        <option value="Fiat">Fiat</option>
                        <option value="Honda">Honda</option>
                        <option value="Toyota">Toyota</option>
                        <option value="Hyundai">Hyundai</option>
                        <option value="Nissan">Nissan</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="form-label">Modelo *</label>
                      <input
                        type="text"
                        name="model"
                        value={formData.model}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="Ex: Onix, Civic, Gol"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="form-label">Ano do Modelo *</label>
                      <select
                        name="year"
                        value={formData.year}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      >
                        <option value="">Selecione o ano</option>
                        {Array.from({ length: 10 }, (_, i) => {
                          const year = new Date().getFullYear() - i;
                          return (
                            <option key={year} value={year}>{year}</option>
                          );
                        })}
                      </select>
                    </div>
                    
                    <div>
                      <label className="form-label">Valor FIPE (R$) *</label>
                      <input
                        type="text"
                        name="fipeValue"
                        value={formData.fipeValue}
                        onChange={(e) => {
                          const formatted = formatCurrency(e.target.value);
                          setFormData(prev => ({ ...prev, fipeValue: formatted }));
                        }}
                        className="form-input"
                        placeholder="Ex: 45.000"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="form-label">Placa do Veículo *</label>
                      <input
                        type="text"
                        name="plate"
                        value={formData.plate}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="ABC-1234"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="form-label">CEP *</label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="00000-000"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Usage Information */}
              {currentStep === 3 && (
                <div className="animate-fade-in">
                  <h2 className="heading-lg text-primary mb-8 text-center">
                    Como você usa seu veículo?
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="form-label">Uso Principal do Veículo *</label>
                      <select
                        name="usage"
                        value={formData.usage}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      >
                        <option value="">Selecione o uso principal</option>
                        <option value="personal">Uso Pessoal/Familiar</option>
                        <option value="work">Trabalho/Profissional</option>
                        <option value="uber">Uber/App de Transporte</option>
                        <option value="delivery">Delivery</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="form-label">Onde fica estacionado à noite? *</label>
                      <select
                        name="garage"
                        value={formData.garage}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      >
                        <option value="">Selecione onde fica estacionado</option>
                        <option value="garage">Garagem Fechada</option>
                        <option value="covered">Garagem Coberta</option>
                        <option value="street-residential">Rua Residencial</option>
                        <option value="street-commercial">Rua Comercial</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="form-label">Cobertura Desejada *</label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {['basic', 'complete', 'premium'].map((coverage) => (
                          <label key={coverage} className="relative">
                            <input
                              type="radio"
                              name="coverage"
                              value={coverage}
                              checked={formData.coverage === coverage}
                              onChange={handleInputChange}
                              className="sr-only"
                            />
                            <div className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                              formData.coverage === coverage
                                ? 'border-primary bg-primary/5'
                                : 'border-gray-200 hover:border-primary/50'
                            }`}>
                              <h4 className="font-montserrat font-semibold text-center capitalize">
                                {coverage === 'basic' ? 'Básico' : coverage === 'complete' ? 'Completo' : 'Premium'}
                              </h4>
                              <p className="text-sm text-gray-600 text-center mt-1">
                                {coverage === 'basic' 
                                  ? 'Proteção essencial' 
                                  : coverage === 'complete' 
                                    ? 'Melhor custo-benefício' 
                                    : 'Proteção máxima'
                                }
                              </p>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-xl p-6">
                      <div className="flex items-start space-x-3">
                        <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-montserrat font-semibold text-primary mb-2">
                            Tudo pronto para sua cotação!
                          </h4>
                          <p className="text-gray-600 text-sm">
                            Clique em "Gerar Cotação" e descubra quanto custa proteger seu veículo com a Lock Proteção.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Quote Results */}
              {currentStep === 4 && quoteResult && (
                <div className="animate-fade-in">
                  <div className="text-center mb-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h2 className="heading-lg text-primary mb-4">
                      Sua cotação está pronta, {formData.name.split(' ')[0]}!
                    </h2>
                    <p className="text-gray-600">
                      Para <strong>{quoteResult.vehicle}</strong> • Valor FIPE: R$ {formData.fipeValue}
                    </p>
                  </div>

                  {/* Optional error message */}
                  {errorMessage && (
                    <div className="mb-4 text-center text-red-600">
                      {errorMessage}
                    </div>
                  )}

                  {/* Quote Results */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {[
                      {
                        name: 'Básico',
                        price: quoteResult.basic,
                        features: ['Cobertura até R$ 30k', 'Guincho 24h', 'Assistência básica']
                      },
                      {
                        name: 'Completo',
                        price: quoteResult.complete,
                        features: ['Cobertura até R$ 80k', 'Carro reserva', 'App exclusivo'],
                        popular: true
                      },
                      {
                        name: 'Premium',
                        price: quoteResult.premium,
                        features: ['Cobertura até R$ 200k', 'Concierge 24h', 'Proteção internacional']
                      }
                    ].map((plan, index) => (
                      <div key={index} className={`relative border-2 rounded-2xl p-6 ${
                        plan.popular ? 'border-primary bg-primary/5' : 'border-gray-200'
                      }`}>
                        {plan.popular && (
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                            <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                              Recomendado
                            </span>
                          </div>
                        )}
                        <h3 className="font-montserrat font-bold text-lg mb-2">{plan.name}</h3>
                        <div className="text-3xl font-montserrat font-bold text-primary mb-4">
                          R$ {plan.price}
                          <span className="text-sm text-gray-500 font-normal">/mês</span>
                        </div>
                        <ul className="space-y-2 mb-6">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <button
                          onClick={() => handleContract(plan.name)}
                          className={`w-full py-3 rounded-lg font-montserrat font-semibold transition-all duration-300 ${
                            plan.popular 
                              ? 'bg-accent hover:bg-red-600 text-white' 
                              : 'bg-primary hover:bg-blue-600 text-white'
                          }`}
                          disabled={isSending}
                        >
                          {isSending ? 'Enviando cotação...' : 'Contratar Agora'}
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Contact Options */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="font-montserrat font-semibold text-center mb-4">
                      Ficou com alguma dúvida? Fale conosco!
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <a
                        href={`https://wa.me/5511999999999?text=Olá! Gostaria de contratar o plano de proteção veicular.`}
                        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-xl text-center transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <Phone className="h-5 w-5" />
                        <span>WhatsApp</span>
                      </a>
                      <a
                        href="tel:+5511999999999"
                        className="bg-primary hover:bg-blue-600 text-white p-4 rounded-xl text-center transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <Phone className="h-5 w-5" />
                        <span>Ligar Agora</span>
                      </a>
                      <a
                        href="mailto:contato@lockprotecao.com.br"
                        className="bg-gray-600 hover:bg-gray-700 text-white p-4 rounded-xl text-center transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <Mail className="h-5 w-5" />
                        <span>E-mail</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              {currentStep < 4 && (
                <div className="flex justify-between items-center mt-12">
                  {currentStep > 1 ? (
                    <button
                      onClick={prevStep}
                      className="btn-outline"
                    >
                      Voltar
                    </button>
                  ) : (
                    <div></div>
                  )}
                  
                  {currentStep === 3 ? (
                    <button
                      onClick={generateQuote}
                      className="btn-accent flex items-center space-x-2"
                      disabled={!formData.coverage}
                    >
                      <Calculator className="h-5 w-5" />
                      <span>Gerar Cotação</span>
                    </button>
                  ) : (
                    <button
                      onClick={nextStep}
                      className="btn-primary"
                      disabled={
                        (currentStep === 1 && (!formData.name || !formData.email || !formData.phone)) ||
                        (currentStep === 2 && (!formData.brand || !formData.model || !formData.year || !formData.fipeValue))
                      }
                    >
                      Próximo
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;