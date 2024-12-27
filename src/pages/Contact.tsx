import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ContactForm } from '../components/ContactForm';
import { MapPin, Phone, Mail, MessageSquare, Clock } from 'lucide-react';

export function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Entre em Contato"
        description="Estamos prontos para ajudar. Entre em contato conosco através de qualquer um dos nossos canais de atendimento."
      />

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-8">Como Podemos Ajudar?</h2>
            <ContactForm />
          </div>

          <div className="lg:pl-12">
            <h2 className="text-2xl font-bold mb-8">Canais de Atendimento</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-indigo-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Endereço</h3>
                  <p className="text-gray-600">Avenida Segurança Digital, 123<br />São Paulo - SP</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-6 h-6 text-indigo-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Telefone</h3>
                  <p className="text-gray-600">+55 11 98765-4321</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-6 h-6 text-indigo-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">E-mail</h3>
                  <p className="text-gray-600">contato@x3ti.com.br</p>
                </div>
              </div>

              <div className="flex items-start">
                <MessageSquare className="w-6 h-6 text-indigo-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">WhatsApp</h3>
                  <a href="#" className="text-indigo-600 hover:text-indigo-700">Iniciar conversa</a>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-6 h-6 text-indigo-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Horário de Atendimento</h3>
                  <p className="text-gray-600">Segunda a Sexta: 08h às 18h<br />
                    Sábados: 09h às 13h<br />
                    <span className="text-sm text-indigo-600">Suporte emergencial 24/7 para clientes contratados</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-lg font-semibold mb-4">Localização</h3>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975870299253!2d-46.6520298!3d-23.5635609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzQ4LjgiUyA0NsKwMzknMDcuMyJX!5e0!3m2!1sen!2sbr!4v1625761234567!5m2!1sen!2sbr"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}