import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  Terminal, 
  Database, 
  Globe, 
  Cpu, 
  GitBranch, 
  Server, 
  Layout, 
  Smartphone, 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X, 
  BookOpen, 
  Briefcase, 
  Layers, 
  Award, 
  Users, 
  ChevronRight, 
  ExternalLink, 
  Copy, 
  Check, 
  Sparkles, 
  Building2, 
  GraduationCap, 
  Clock, 
  Zap,
  Filter,
  Eye,
  Send,
  HelpCircle
} from 'lucide-react';

const TECH_STACK = [
  { name: 'HTML5', category: 'frontend', icon: '🌐', level: 'Fundamental', description: 'Estruturação e semântica para páginas e aplicações web modernas.' },
  { name: 'CSS3', category: 'frontend', icon: '🎨', level: 'Fundamental', description: 'Estilização, Flexbox, Grid Layout, responsividade e animações.' },
  { name: 'JavaScript', category: 'frontend', icon: '⚡', level: 'Avançado', description: 'Lógica, ES6+, manipulação da DOM, assincronismo e consumo de APIs.' },
  { name: 'React', category: 'frontend', icon: '⚛️', level: 'Avançado', description: 'Criação de SPAs dinâmicas, gerenciamento de estado e componentes reutilizáveis.' },
  { name: 'Node.js', category: 'backend', icon: '🟢', level: 'Intermediário', description: 'Construção de servidores backend escaláveis e APIs RESTful.' },
  { name: 'SQL / MySQL', category: 'database', icon: '🗄️', level: 'Intermediário', description: 'Modelagem de dados, consultas relacionais, DDL, DML e otimização.' },
  { name: 'Git & GitHub', category: 'tools', icon: '🐙', level: 'Essencial', description: 'Controle de versão, ramificação (branches) e trabalho colaborativo.' },
  { name: 'Docker', category: 'tools', icon: '🐳', level: 'Básico', description: 'Containerização de aplicações para padronização de ambientes.' },
  { name: 'Python / Java', category: 'backend', icon: '☕', level: 'Intermediário', description: 'Fundamentos de Orientação a Objetos e lógica de backend robusta.' }
];

const MODULES = [
  {
    id: 'logica',
    title: 'Lógica de Programação',
    icon: Terminal,
    desc: 'Construa a base do pensamento computacional.',
    topics: ['Algoritmos e Estruturas de Controle', 'Vetores e Matrizes', 'Funções e Escopo', 'Resolução de Problemas Práticos']
  },
  {
    id: 'frontend',
    title: 'Desenvolvimento Frontend',
    icon: Layout,
    desc: 'Crie interfaces interativas e atraentes.',
    topics: ['HTML5 Semântico & CSS3 Avançado', 'JavaScript Moderno (ES6+)', 'ReactJS e Componentização', 'Design Responsivo e Tailwind']
  },
  {
    id: 'backend',
    title: 'Desenvolvimento Backend',
    icon: Server,
    desc: 'Projete o motor e as regras de negócio das aplicações.',
    topics: ['Node.js & Express Framework', 'Arquitetura de Software', 'Autenticação JWT e Segurança', 'Integração de Serviços']
  },
  {
    id: 'database',
    title: 'Banco de Dados',
    icon: Database,
    desc: 'Armazene e gerencie informações de forma segura.',
    topics: ['Modelagem Entidade-Relacionamento', 'Linguagem SQL (MySQL/PostgreSQL)', 'NoSQL (MongoDB intro)', 'ORM e Integração com Backend']
  },
  {
    id: 'apis',
    title: 'Desenvolvimento de APIs',
    icon: Cpu,
    desc: 'Conecte diferentes sistemas e plataformas.',
    topics: ['Padrão RESTful', 'Métodos HTTP & Status Codes', 'Consumo e Testes com Postman', 'Documentação de APIs']
  },
  {
    id: 'git',
    title: 'Versionamento & DevTools',
    icon: GitBranch,
    desc: 'Trabalhe com boas práticas de mercado e Git.',
    topics: ['Git Flow (Commits, Branches, Merge)', 'GitHub & Pull Requests', 'Terminal e Linha de Comando', 'Vite & Build Tools']
  },
  {
    id: 'mobile',
    title: 'Aplicações Mobile',
    icon: Smartphone,
    desc: 'Crie apps para dispositivos móveis.',
    topics: ['Fundamentos de React Native', 'Layouts para Telas Múltiplas', 'Acesso a Recursos do Dispositivo', 'Build e Publicação']
  },
  {
    id: 'eng',
    title: 'Engenharia & Metodologias',
    icon: Layers,
    desc: 'Aprenda metodologias ágeis e qualidade de código.',
    topics: ['Scrum e Kanban', 'Análise e Levantamento de Requisitos', 'Testes Unitários Básicos', 'Documentação de Projetos']
  }
];

const CAREERS = [
  {
    role: 'Desenvolvedor Frontend',
    salary: 'R$ 3.500 - R$ 8.000',
    demand: 'Alta',
    desc: 'Especialista em construir a parte visual e interativa dos sites e sistemas webs, focando em UX/UI.'
  },
  {
    role: 'Desenvolvedor Backend',
    salary: 'R$ 4.000 - R$ 9.500',
    demand: 'Altíssima',
    desc: 'Responsável pelas regras de negócio, conexão com banco de dados, servidores e segurança das aplicações.'
  },
  {
    role: 'Desenvolvedor Full Stack',
    salary: 'R$ 5.000 - R$ 12.000',
    demand: 'Muito Alta',
    desc: 'Profissional completo com domínio tanto do frontend quanto do backend, altamente valorizado.'
  },
  {
    role: 'Desenvolvedor Mobile',
    salary: 'R$ 4.000 - R$ 9.000',
    demand: 'Crescente',
    desc: 'Cria aplicativos para smartphones e tablets (Android e iOS) utilizando tecnologias modernas.'
  },
  {
    role: 'Analista de Banco de Dados',
    salary: 'R$ 4.500 - R$ 10.000',
    demand: 'Estável',
    desc: 'Cuida da estrutura, desempenho, backups e segurança das bases de dados da organização.'
  },
  {
    role: 'Analista de Suporte & QA',
    salary: 'R$ 3.000 - R$ 6.500',
    demand: 'Alta',
    desc: 'Garante a qualidade do código através de testes e auxilia na manutenção de sistemas legados ou em produção.'
  }
];

const PROJECTS = [
  {
    title: 'Sistema de Gestão & Cadastro',
    badge: 'Módulo Web',
    desc: 'Plataforma para gestão de clientes e produtos com relatórios automatizados.',
    techs: ['React', 'Node.js', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'E-Commerce / Loja Virtual',
    badge: 'Módulo Fullstack',
    desc: 'Loja completa com carrinho de compras, checkout interativo e catálogo de itens.',
    techs: ['React', 'Tailwind', 'Express', 'APIs'],
    image: 'https://images.unsplash.com/photo-1556742049-0a670f4a4591?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Dashboard de Indicadores',
    badge: 'Módulo Frontend',
    desc: 'Painel administrativo com gráficos interativos e acompanhamento de métricas.',
    techs: ['JavaScript', 'ChartJS', 'CSS Grid'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'App de Tarefas (Kanban)',
    badge: 'Módulo React',
    desc: 'Aplicativo estilo Trello para gerenciamento de fluxo de trabalho e projetos.',
    techs: ['React', 'Context API', 'LocalStorage'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Sistema de Agendamentos',
    badge: 'Módulo Backend',
    desc: 'Sistema para marcação de consultas e horários com notificações e agenda.',
    techs: ['Node.js', 'PostgreSQL', 'APIs'],
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800'
  }
];

const GIT_COMMANDS = [
  { step: '1', cmd: 'npm create vite@latest', desc: 'Inicia a criação do projeto React com Vite' },
  { step: '2', cmd: 'cd landing-page-desenvolvimento-sistemas', desc: 'Entra no diretório do projeto criado' },
  { step: '3', cmd: 'npm install', desc: 'Instala todas as dependências do projeto' },
  { step: '4', cmd: 'git init', desc: 'Inicializa o repositório Git local' },
  { step: '5', cmd: 'git add .', desc: 'Adiciona todos os arquivos ao staging' },
  { step: '6', cmd: 'git commit -m "criação inicial do projeto React"', desc: 'Cria o commit inicial' },
  { step: '7', cmd: 'git branch -M main', desc: 'Define a branch principal como main' },
  { step: '8', cmd: 'git remote add origin https://github.com/seuusuario/landing-page-desenvolvimento-sistemas.git', desc: 'Vincula o repositório local ao GitHub' },
  { step: '9', cmd: 'git push -u origin main', desc: 'Envia o código para o GitHub' },
  { step: '10', cmd: 'npm run dev', desc: 'Inicia o servidor de desenvolvimento local' }
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTechCategory, setActiveTechCategory] = useState('all');
  const [selectedModule, setSelectedModule] = useState(null);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [showGitModal, setShowGitModal] = useState(false);
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', shift: 'noturno' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Close modals with Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedModule(null);
        setShowGitModal(false);
        setShowEnrollModal(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleCopyCommand = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setShowEnrollModal(false);
        setFormData({ name: '', email: '', phone: '', shift: 'noturno' });
      }, 3000);
    }
  };

  const filteredTechs = activeTechCategory === 'all' 
    ? TECH_STACK 
    : TECH_STACK.filter(t => t.category === activeTechCategory);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
      
      {}
      <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo & Brand */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-cyan-500 flex items-center justify-center font-black text-white text-xl shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
              S
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg tracking-tight text-white">SENAI</span>
                <span className="text-xs bg-blue-500/20 text-blue-400 font-semibold px-2 py-0.5 rounded-full border border-blue-500/30">Oficial</span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">Técnico em Desenvolvimento de Sistemas</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
            <a href="#inicio" className="hover:text-blue-400 transition-colors">Início</a>
            <a href="#sobre" className="hover:text-blue-400 transition-colors">Sobre</a>
            <a href="#aprendizados" className="hover:text-blue-400 transition-colors">Aprendizados</a>
            <a href="#tecnologias" className="hover:text-blue-400 transition-colors">Tecnologias</a>
            <a href="#mercado" className="hover:text-blue-400 transition-colors">Mercado</a>
            <a href="#projetos" className="hover:text-blue-400 transition-colors">Projetos</a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setShowGitModal(true)}
              className="flex items-center gap-2 text-xs font-mono bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-2 rounded-lg border border-slate-700 transition-all"
              title="Guia de Comandos Git do Projeto"
            >
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>Guia Git & Vite</span>
            </button>
            <button 
              onClick={() => setShowEnrollModal(true)}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold text-sm px-4 py-2.5 rounded-lg shadow-lg shadow-blue-600/25 transition-all hover:scale-105"
            >
              Quero Me Inscrever
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
            <a 
              href="#inicio" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 font-medium hover:text-blue-400 border-b border-slate-800/50"
            >
              Início
            </a>
            <a 
              href="#sobre" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 font-medium hover:text-blue-400 border-b border-slate-800/50"
            >
              Sobre o Curso
            </a>
            <a 
              href="#aprendizados" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 font-medium hover:text-blue-400 border-b border-slate-800/50"
            >
              Aprendizados
            </a>
            <a 
              href="#tecnologias" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 font-medium hover:text-blue-400 border-b border-slate-800/50"
            >
              Tecnologias
            </a>
            <a 
              href="#mercado" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 font-medium hover:text-blue-400 border-b border-slate-800/50"
            >
              Mercado de Trabalho
            </a>
            <a 
              href="#projetos" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 font-medium hover:text-blue-400 border-b border-slate-800/50"
            >
              Projetos dos Alunos
            </a>
            <div className="pt-2 space-y-2">
              <button
                onClick={() => { setMobileMenuOpen(false); setShowGitModal(true); }}
                className="w-full flex items-center justify-center gap-2 text-xs font-mono bg-slate-800 text-slate-200 py-2.5 rounded-lg border border-slate-700"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Guia Git & Comandos</span>
              </button>
              <button 
                onClick={() => { setMobileMenuOpen(false); setShowEnrollModal(true); }}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 rounded-lg text-sm shadow-md"
              >
                Quero Me Inscrever
              </button>
            </div>
          </div>
        )}
      </header>

      {}
      <section id="inicio" className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column - Hero Text */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-medium px-4 py-2 rounded-full shadow-inner">
                <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span>Curso Técnico Homologado e Reconhecido pelo Mercado</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                Transforme ideias em <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-300">soluções digitais</span> com o SENAI
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Desenvolva sistemas webs, aplicativos móveis e APIs robustas. Aprenda as linguagens mais requisitadas pelas empresas e conquiste sua vaga na área da tecnologia.
              </p>

              {/* Call to Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => setShowEnrollModal(true)}
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-base px-8 py-4 rounded-xl shadow-xl shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3"
                >
                  <span>Garantir Minha Vaga</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <a
                  href="#sobre"
                  className="w-full sm:w-auto bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-base px-6 py-4 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <span>Conhecer o Curso</span>
                </a>
              </div>

              {/* Course Quick Highlights */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-800/80 max-w-lg mx-auto lg:mx-0">
                <div>
                  <p className="text-2xl font-bold text-white">1200h</p>
                  <p className="text-xs text-slate-400">Carga Horária</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-cyan-400">Prático</p>
                  <p className="text-xs text-slate-400">Foco do Curso</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-emerald-400">92%</p>
                  <p className="text-xs text-slate-400">Empregabilidade</p>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Mock IDE */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl shadow-blue-900/20 overflow-hidden font-mono text-sm">
                  {/* IDE Header */}
                  <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-xs text-slate-400 font-sans">App.jsx — SENAI Dev</span>
                    <span className="text-xs bg-slate-800 text-slate-300 px-2 py-0.5 rounded">React</span>
                  </div>

                  {/* IDE Code Snippet Body */}
                  <div className="p-5 text-slate-300 space-y-2 text-xs sm:text-sm overflow-x-auto">
                    <p><span className="text-purple-400">import</span> React <span className="text-purple-400">from</span> <span className="text-emerald-300">'react'</span>;</p>
                    <p><span className="text-purple-400">import</span> &#123; <span className="text-yellow-300">Sucesso</span> &#125; <span className="text-purple-400">from</span> <span className="text-emerald-300">'@senai/carreira'</span>;</p>
                    <br />
                    <p><span className="text-blue-400">function</span> <span className="text-yellow-300">FuturoDev</span>() &#123;</p>
                    <p className="pl-4"><span className="text-purple-400">const</span> aluno = &#123;</p>
                    <p className="pl-8">nome: <span className="text-emerald-300">'Você'</span>,</p>
                    <p className="pl-8">curso: <span className="text-emerald-300">'Técnico em Dev de Sistemas'</span>,</p>
                    <p className="pl-8">skills: [<span className="text-emerald-300">'React'</span>, <span className="text-emerald-300">'Node'</span>, <span className="text-emerald-300">'SQL'</span>, <span className="text-emerald-300">'Git'</span>],</p>
                    <p className="pl-8">status: <span className="text-emerald-300">'Pronto para o Mercado'</span></p>
                    <p className="pl-4">&#125;;</p>
                    <br />
                    <p className="pl-4"><span className="text-purple-400">return</span> (</p>
                    <p className="pl-8 text-cyan-300">&lt;<span className="text-blue-400">Sucesso</span> <span className="text-purple-300">aluno</span>=&#123;aluno&#125; <span className="text-purple-300">metodologia</span>=<span className="text-emerald-300">"100% Prática"</span> /&gt;</p>
                    <p className="pl-4">);</p>
                    <p>&#125;</p>
                  </div>

                  {/* IDE Footer Status */}
                  <div className="bg-slate-950/80 px-4 py-2 text-xs border-t border-slate-800 flex justify-between text-slate-400 font-sans">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      Status: Compilado com Sucesso
                    </span>
                    <span>UTF-8</span>
                  </div>
                </div>

                {/* Floating Tech Badges around IDE */}
                <div className="absolute -top-4 -right-4 bg-blue-600/90 text-white font-semibold text-xs px-3 py-1.5 rounded-lg shadow-lg border border-blue-400/40 backdrop-blur-sm hidden sm:block">
                  🚀 Hands-on Labs
                </div>
                <div className="absolute -bottom-4 -left-4 bg-slate-800/90 text-cyan-300 text-xs px-3 py-1.5 rounded-lg shadow-lg border border-slate-700 backdrop-blur-sm hidden sm:block font-mono">
                  git commit -m "Meu Primeiro Sistema"
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {}
      <section id="sobre" className="py-20 bg-slate-900/60 border-y border-slate-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400">O que você precisa saber</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Sobre o Curso Técnico SENAI</h3>
            <p className="text-slate-300 text-base sm:text-lg">
              O curso foi projetado para formar profissionais completos, unindo teoria essencial e prática intensiva com as ferramentas reais do ecossistema de software.
            </p>
          </div>

          {/* 3 Main Explanatory Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all space-y-4 group">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Code2 className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white">O que é a área?</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Desenvolvimento de Sistemas é o processo de criação, projeto, testes e manutenção de softwares. É a ciência de transformar problemas em soluções computacionais autônomas e eficientes.
              </p>
            </div>

            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all space-y-4 group">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white">Objetivo do Curso</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Capacitar o aluno para analisar, projetar, documentar, especificar, testar, implantar e manter sistemas computacionais e aplicações web ou mobile com excelência.
              </p>
            </div>

            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition-all space-y-4 group">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Briefcase className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white">O que o Dev faz?</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                O desenvolvedor escreve códigos limpos, projeta bancos de dados, integra APIs, corrige bugs e colabora com equipes para criar aplicações funcionais e inovadoras.
              </p>
            </div>
          </div>

          {/* Methodology Badges */}
          <div className="mt-16 bg-gradient-to-r from-blue-950/40 via-slate-900 to-slate-950 p-8 rounded-2xl border border-slate-800">
            <h4 className="text-lg font-bold text-white mb-6 text-center">Diferenciais da Metodologia SENAI</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800/80">
                <div className="text-cyan-400 font-bold text-lg mb-1">100% Prático</div>
                <div className="text-xs text-slate-400">Aulas em laboratórios equipados</div>
              </div>
              <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800/80">
                <div className="text-blue-400 font-bold text-lg mb-1">Projetos Reais</div>
                <div className="text-xs text-slate-400">Desafios baseados em empresas</div>
              </div>
              <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800/80">
                <div className="text-indigo-400 font-bold text-lg mb-1">Diploma Valioso</div>
                <div className="text-xs text-slate-400">Reconhecido em todo o Brasil</div>
              </div>
              <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800/80">
                <div className="text-emerald-400 font-bold text-lg mb-1">Docentes Devs</div>
                <div className="text-xs text-slate-400">Professores atuantes no mercado</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {}
      <section id="aprendizados" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400">Grade Curricular de Impacto</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">O Que Você Aprende no Curso</h3>
            <p className="text-slate-300 text-base">
              Clique nos cards para expandir e visualizar os tópicos detalhados de cada módulo.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MODULES.map((mod) => {
              const IconComp = mod.icon;
              return (
                <div
                  key={mod.id}
                  onClick={() => setSelectedModule(mod)}
                  className="bg-slate-900/70 hover:bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-blue-500/60 transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">{mod.title}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">{mod.desc}</p>
                  </div>

                  <div className="pt-6 flex items-center text-xs font-semibold text-blue-400 group-hover:text-cyan-300 gap-1">
                    <span>Ver Tópicos</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {}
      <section id="tecnologias" className="py-20 bg-slate-900/60 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400">Stack de Tecnologia</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Ferramentas & Linguagens Ensinadas</h3>
            <p className="text-slate-300 text-base">
              Domine as tecnologias exigidas pelas vagas de estágio e cargos juniores no mercado de TI.
            </p>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {[
                { id: 'all', label: 'Todas' },
                { id: 'frontend', label: 'Frontend' },
                { id: 'backend', label: 'Backend' },
                { id: 'database', label: 'Banco de Dados' },
                { id: 'tools', label: 'Ferramentas / Git' }
              ].map(btn => (
                <button
                  key={btn.id}
                  onClick={() => setActiveTechCategory(btn.id)}
                  className={`text-xs font-medium px-4 py-2 rounded-xl transition-all ${
                    activeTechCategory === btn.id
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                      : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tech Cards Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {filteredTechs.map((tech, idx) => (
              <div 
                key={idx}
                className="bg-slate-950 p-6 rounded-2xl border border-slate-800/90 hover:border-slate-700 transition-all space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-3xl">{tech.icon}</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-slate-800 text-cyan-300 border border-slate-700">
                      {tech.level}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white">{tech.name}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed mt-2">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {}
      <section id="mercado" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400">Oportunidades de Carreira</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Onde Você Poderá Atuar?</h3>
            <p className="text-slate-300 text-base">
              A área de Tecnologia da Informação é uma das poucas com déficit permanente de profissionais qualificados.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAREERS.map((car, idx) => (
              <div key={idx} className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2.5 py-1 rounded-full">
                      Demanda: {car.demand}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-white">{car.role}</h4>
                  <p className="text-slate-300 text-xs leading-relaxed">{car.desc}</p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Média Salarial Estimada:</span>
                  <span className="text-sm font-bold text-cyan-300">{car.salary}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {}
      <section id="projetos" className="py-20 bg-slate-900/60 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400">Portfólio Prático</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Projetos Desenvolvidos no Curso</h3>
            <p className="text-slate-300 text-base">
              Ao longo das aulas, você não fica apenas na teoria. Você desenvolve sistemas completos para construir seu primeiro portfólio no GitHub.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((proj, idx) => (
              <div key={idx} className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden group hover:border-slate-700 transition-all flex flex-col justify-between">
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={proj.image} 
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" 
                    />
                    <div className="absolute top-3 right-3 bg-slate-900/90 text-cyan-300 text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm border border-slate-700">
                      {proj.badge}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h4 className="text-lg font-bold text-white">{proj.title}</h4>
                    <p className="text-slate-300 text-xs leading-relaxed">{proj.desc}</p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 flex flex-wrap gap-2">
                  {proj.techs.map((t, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-mono bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl shadow-blue-600/30 space-y-6 relative overflow-hidden">
            
            {/* Background pattern inside banner */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)] pointer-events-none" />

            <span className="inline-block bg-white/10 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/20">
              Vagas Limitadas para a Próxima Turma
            </span>

            <h3 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight max-w-2xl mx-auto">
              Seu futuro na tecnologia começa agora!
            </h3>

            <p className="text-blue-100 text-base sm:text-lg max-w-xl mx-auto font-normal">
              Inscreva-se hoje mesmo no curso Técnico em Desenvolvimento de Sistemas e dê o primeiro passo para uma carreira global.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setShowEnrollModal(true)}
                className="w-full sm:w-auto bg-slate-950 hover:bg-slate-900 text-white font-bold text-base px-8 py-4 rounded-xl shadow-xl transition-all"
              >
                Inscrição & Informações
              </button>
              <button
                onClick={() => setShowGitModal(true)}
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold text-base px-6 py-4 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <Terminal className="w-5 h-5 text-cyan-200" />
                <span>Ver Passos no Git</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {}
      <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 text-xs py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-sm">
                  S
                </div>
                <span className="font-bold text-white text-base">SENAI</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Serviço Nacional de Aprendizagem Industrial — Referência em formação profissional e tecnologia no Brasil.
              </p>
            </div>

            <div>
              <h5 className="font-bold text-white text-sm mb-3">O Curso</h5>
              <ul className="space-y-2">
                <li><a href="#sobre" className="hover:text-white transition-colors">Sobre o Curso</a></li>
                <li><a href="#aprendizados" className="hover:text-white transition-colors">Grade Curricular</a></li>
                <li><a href="#tecnologias" className="hover:text-white transition-colors">Tecnologias</a></li>
                <li><a href="#mercado" className="hover:text-white transition-colors">Mercado de Trabalho</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-white text-sm mb-3">Links Acadêmicos</h5>
              <ul className="space-y-2">
                <li><button onClick={() => setShowGitModal(true)} className="hover:text-white transition-colors">Comandos Git do Projeto</button></li>
                <li><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">GitHub <ExternalLink className="w-3 h-3" /></a></li>
                <li><a href="https://vitejs.dev" target="_blank" rel="noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">Vite Documentation <ExternalLink className="w-3 h-3" /></a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-white text-sm mb-3">Projeto Acadêmico</h5>
              <p className="text-slate-400 leading-relaxed mb-2">
                Desenvolvido como atividade prática para a disciplina de React / Frontend do SENAI.
              </p>
              <span className="inline-block bg-slate-900 border border-slate-800 text-cyan-400 font-mono text-[11px] px-2.5 py-1 rounded">
                Ano Letivo: 2026
              </span>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p>© 2026 SENAI — Técnico em Desenvolvimento de Sistemas. Todos os direitos reservados.</p>
            <p className="text-slate-400 font-medium">Desenvolvido por Aluno SENAI</p>
          </div>

        </div>
      </footer>

      {}
      {selectedModule && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 space-y-6 relative shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => setSelectedModule(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center">
                {React.createElement(selectedModule.icon, { className: 'w-5 h-5' })}
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">{selectedModule.title}</h4>
                <p className="text-xs text-slate-400">Módulo do Curso Técnico SENAI</p>
              </div>
            </div>

            <p className="text-slate-300 text-sm">{selectedModule.desc}</p>

            <div className="space-y-3">
              <h5 className="text-xs font-bold uppercase tracking-wider text-cyan-400">Principais Tópicos Abordados</h5>
              <div className="space-y-2">
                {selectedModule.topics.map((top, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm bg-slate-950 p-3 rounded-lg border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-slate-200">{top}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setSelectedModule(null)}
              className="w-full bg-slate-800 hover:bg-slate-700 text-white font-medium py-2.5 rounded-xl text-sm transition-colors"
            >
              Fechar Detalhes
            </button>
          </div>
        </div>
      )}

      {}
      {showGitModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full p-6 space-y-6 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setShowGitModal(false)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">Guia de Comandos Git & Vite</h4>
                <p className="text-xs text-slate-400">Passo a passo das instruções da atividade acadêmica</p>
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm">
              Utilize esta referência rápida de terminal para a criação do repositório, configuração do Vite e commit inicial no GitHub.
            </p>

            <div className="space-y-3 font-mono text-xs">
              {GIT_COMMANDS.map((item, idx) => (
                <div key={idx} className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
                  <div className="flex items-center justify-between text-slate-400 text-[11px] font-sans">
                    <span>Passo {item.step}: {item.desc}</span>
                    <button
                      onClick={() => handleCopyCommand(item.cmd, idx)}
                      className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      {copiedIndex === idx ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400 font-sans">Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span className="font-sans">Copiar</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="text-cyan-300 font-bold select-all overflow-x-auto py-1">
                    $ {item.cmd}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowGitModal(false)}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 rounded-xl text-sm shadow-md"
            >
              Entendido, voltar à landing page
            </button>
          </div>
        </div>
      )}

      {}
      {showEnrollModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 space-y-6 relative shadow-2xl">
            <button 
              onClick={() => setShowEnrollModal(false)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">Inscreva-se ou Tire Dúvidas</h4>
                <p className="text-xs text-slate-400">Técnico em Desenvolvimento de Sistemas - SENAI</p>
              </div>
            </div>

            {formSubmitted ? (
              <div className="bg-emerald-950/60 border border-emerald-800 text-emerald-200 p-6 rounded-xl text-center space-y-2">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h5 className="font-bold text-lg">Inscrição Solicitada!</h5>
                <p className="text-xs text-slate-300">
                  A equipe de atendimento do SENAI entrará em contato em breve via e-mail ou WhatsApp.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 text-sm">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Seu Nome Completo</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Ex: Gabriel Santos"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">E-mail Principal</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="exemplo@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Telefone / WhatsApp</label>
                  <input 
                    type="tel" 
                    placeholder="(00) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Turno de Preferência</label>
                  <select 
                    value={formData.shift}
                    onChange={(e) => setFormData({...formData, shift: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="matutino">Matutino (Manhã)</option>
                    <option value="vespertino">Vespertino (Tarde)</option>
                    <option value="noturno">Noturno (Noite)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold py-3.5 rounded-xl text-sm shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirmar Pré-Inscrição</span>
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
}