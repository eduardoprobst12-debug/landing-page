import './App.css';

function App() {
  return (
    <div className="app">

      <header className="header">
        <div className="container">
          <div className="logo">Desenvolvimento de Sistemas</div>
          <nav className="nav">
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre</a>
            <a href="#aprende">Aprendizados</a>
            <a href="#tecnologias">Tecnologias</a>
            <a href="#atuacao">Mercado</a>
            <a href="#projetos">Projetos</a>
          </nav>
        </div>
      </header>


      <section id="inicio" className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <h1>Transforme ideias em sistemas</h1>
            <p>Desenvolvendo soluções, aprendendo novas tecnologias e construindo não só o meu, quanto o futuro na área de TI com o curso Técnico em Desenvolvimento de Sistemas do SENAI</p>
            <a href="#cta" className="btn">Conhecer o curso</a>
          </div>
          <div className="hero-image">
            <img src="https://www.bing.com/images/search?view=detailV2&ccid=LV9TU70G&id=938774C7BB1F3D84C4ED372187D3A2ADD49BD327&thid=OIP.LV9TU70Gus1nfB6GS_moQAHaEK&mediaurl=https%3a%2f%2fwww.slideteam.net%2fwp%2fwp-content%2fuploads%2f2023%2f10%2fProcesso-de-ciclo-de-vida-de-desenvolvimento-de-sistema-8.png&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.2d5f5353bd06bacd677c1e864bf9a840%3frik%3dJ9Ob1K2i04chNw%26pid%3dImgRaw%26r%3d0&exph=1080&expw=1920&q=desenvolvimento+de+sistemas&FORM=IRPRST&ck=D4B0506256D5B70B2C8B1F0E3586D2DB&selectedIndex=1&itb=0" alt="" />
          </div>
        </div>
      </section>


      <section id="sobre" className="section">
        <div className="container">
          <h2 className="section-title">Sobre o Curso</h2>
          <div className="content-text">
            <p><strong>Desenvolvimento de Sistemas</strong> é a área responsável por criar soluções digitais / sites, aplicativos e sistemas que automatizam processos e conectam pessoas</p>
            <p>O curso tem como objetivo formar profissionais capazes de projetar, desenvolver, testar e manter sistemas computacionais, utilizando tecnologias modernas e boas práticas do mercado</p>
            <p>Como cursante da área, tento transformar necessidades em soluções concretas: escrever código, estruturar bancos de dados, integrar serviços e entregar aplicações funcionais e eficientes</p>
          </div>
        </div>
      </section>

      {/* APRENDIZADOS */}
      <section id="aprende" className="section bg-light">
        <div className="container">
          <h2 className="section-title">O que você aprende</h2>
          <div className="cards-grid">
            {[
              { titulo: "Lógica de Programação", desc: "Fundamentos para criar comandos e estruturar soluções" },
              { titulo: "Desenvolvimento Web", desc: "Criação de sites e plataformas responsivas" },
              { titulo: "Frontend", desc: "Interface visual e experiência do usuário" },
              { titulo: "Backend", desc: "Lógica, regras de negócio e servidores" },
              { titulo: "Banco de Dados", desc: "Armazenamento e organização de informações" },
              { titulo: "APIs", desc: "Integração entre sistemas e serviços" },
              { titulo: "Aplicativos", desc: "Desenvolvimento de soluções multiplataforma" },
              { titulo: "Versionamento", desc: "Controle de código com Git e GitHub" }
            ].map((item, i) => (
              <div key={i} className="card">
                <h3>{item.titulo}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECNOLOGIAS */}
      <section id="tecnologias" className="section">
        <div className="container">
          <h2 className="section-title">Tecnologias</h2>
          <div className="tech-grid">
            {["HTML", "CSS", "JavaScript", "React", "Node.js", "SQL", "Git", "GitHub"].map((tech, i) => (
              <div key={i} className="tech-item">{tech}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ÁREAS DE ATUAÇÃO */}
      <section id="atuacao" className="section bg-light">
        <div className="container">
          <h2 className="section-title">Áreas de Atuação</h2>
          <ul className="atuacao-list">
            <li><strong>Desenvolvimento Frontend</strong> — Criação da interface com a qual o usuário interage</li>
            <li><strong>Desenvolvimento Backend</strong> — Construção da lógica e estrutura dos servidores</li>
            <li><strong>Full Stack</strong> — Domínio tanto da interface quanto do servidor</li>
            <li><strong>Aplicações</strong> — Desenvolvimento de softwares e aplicativos</li>
            <li><strong>Banco de Dados</strong> — Modelagem, administração e consulta de dados</li>
            <li><strong>Suporte e Manutenção</strong> — Atualização e correção de sistemas existentes</li>
          </ul>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="section">
        <div className="container">
          <h2 className="section-title">Exemplos de Projetos</h2>
          <div className="cards-grid">
            {[
              "Sistema de cadastro de clientes",
              "Sistema de controle de estoque",
              "Aplicação de agendamentos",
              "Loja virtual completa",
              "Painel administrativo (Dashboard)",
              "Aplicativo de organização de tarefas"
            ].map((proj, i) => (
              <div key={i} className="card-projeto">
                <p>{proj}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHAMADA PARA AÇÃO */}
      <section id="cta" className="section cta">
        <div className="container cta-content">
          <h2>Meu futuro na tecnologia pode começar aqui</h2>
          <p>Conheça o curso Técnico em Desenvolvimento de Sistemas e prepare-se para o mercado que mais cresce no mundo</p>
          <a href="https://cursos.sesisenai.org.br/cursos-tecnicos/tecnico-em-desenvolvimento-de-sistemas/8006" className="btn btn-large">Inscreva-se e saiba mais</a>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="footer">
        <div className="container">
          <p><strong>Curso Técnico em Desenvolvimento de Sistemas — SENAI</strong></p>
          <p>Ano: 2026 | Aluno: Eduardo Probst</p>
        </div>
      </footer>
    </div>
  );
}

export default App;