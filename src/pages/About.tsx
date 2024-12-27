import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Timeline } from '../components/Timeline';
import { TeamMember } from '../components/TeamMember';
import { Shield, Cog, Heart } from 'lucide-react';

const timelineEvents = [
  {
    year: '2010',
    title: 'Fundação da X3TI SOLUÇÕES',
    description: 'Início da nossa jornada no mercado de segurança digital.',
  },
  {
    year: '2015',
    title: 'Certificação ISO 27001',
    description: 'Primeira certificação ISO 27001 obtida, marcando nosso compromisso com a excelência.',
  },
  {
    year: '2020',
    title: 'Expansão Internacional',
    description: 'Expansão dos serviços NOC/SOC e início das operações internacionais.',
  },
  {
    year: '2023',
    title: 'Portal de Clientes',
    description: 'Lançamento do portal de clientes com dashboard interativo.',
  },
];

const teamMembers = [
  {
    name: 'Ana Silva',
    role: 'Diretora de Segurança',
    specialization: 'ISO 27001 Lead Auditor',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Carlos Santos',
    role: 'Gerente NOC',
    specialization: 'ITIL Expert',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Marina Costa',
    role: 'Analista SOC',
    specialization: 'CISSP',
    imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

export function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Protegendo o Futuro com Tecnologia de Ponta"
        description="Na X3TI SOLUÇÕES, somos mais do que especialistas em tecnologia: somos guardiões da segurança digital."
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Nossa História</h2>
          <Timeline events={timelineEvents} />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nosso Time</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {teamMembers.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Shield className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Segurança</h3>
              <p>Proteção incansável dos seus dados e sistemas</p>
            </div>
            <div className="text-center p-6">
              <Cog className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Inovação</h3>
              <p>Sempre à frente com as últimas tecnologias</p>
            </div>
            <div className="text-center p-6">
              <Heart className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Comprometimento</h3>
              <p>Dedicação total ao sucesso dos nossos clientes</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}