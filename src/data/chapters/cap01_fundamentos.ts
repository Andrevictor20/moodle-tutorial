export const fundamentos = [
  {
    id: "m4-intro",
    title: "A Revolução do Moodle 4.x",
    category: "Fundamentos",
    icon: "bolt",
    content: `
      <p>O Moodle 4 chegou revolucionando a experiência de ensino a distância. Com um foco cirúrgico em <strong>Experiência do Usuário (UX)</strong>, a nova interface (Boost) remove a complexidade e abraça o design limpo.</p>
      <img src="/images/moodle_dashboard_premium.png" alt="Dashboard Premium Moodle 4" style="width: 100%; border-radius: 8px; margin: 1.5rem 0; box-shadow: 0 4px 15px rgba(0,0,0,0.1);" />
      <h3>Principais Novidades:</h3>
      <ul>
        <li><strong>Navegação Principal (Topo):</strong> O menu esquerdo antigo foi substituído por uma barra superior limpa com links diretos para <em>Painel</em>, <em>Meus Cursos</em> e <em>Administração</em>.</li>
        <li><strong>Índice do Curso:</strong> Uma nova gaveta expansível na esquerda permite navegar instantaneamente entre os tópicos do curso sem perder o contexto.</li>
        <li><strong>Modo de Edição Rápido:</strong> O botão "Ativar Edição" agora é um moderno <em>Toggle Switch</em> no canto superior direito.</li>
      </ul>
    `,
    quiz: {
      question: "Qual foi a principal motivação por trás do Moodle 4?",
      options: [
        "Aumentar o uso de memória do servidor",
        "Simplificar a interface focando na Experiência do Usuário (UX)",
        "Remover totalmente o suporte a temas",
        "Tornar o sistema exclusivo para smartphones"
      ],
      correct_index: 1,
      feedback_correct: "Exatamente! O Moodle 4 focou pesado em UX, trazendo gavetas laterais modernas, barra de navegação no topo e uma interface muito mais limpa."
    }
  },
  {
    id: "m4-dashboard",
    title: "O Novo Dashboard e Linha do Tempo",
    category: "Fundamentos",
    icon: "space_dashboard",
    content: `
      <p>O <strong>Dashboard (Painel)</strong> é a tela de boas-vindas do usuário. No Moodle 4, ele foi completamente redesenhado para destacar o que realmente importa: <strong>O Progresso do Aluno</strong>.</p>
      <h3>Componentes Chave do Dashboard:</h3>
      <ul>
        <li><strong>Bloco de Cursos:</strong> Exibe os cursos do aluno em formato de Cartões (Cards) arredondados com barras de progresso circulares maravilhosas.</li>
        <li><strong>Linha do Tempo (Timeline):</strong> Um bloco super inteligente que lista todas as atividades e prazos que estão vencendo nos próximos dias. Ele possui botões diretos como "Enviar Tarefa" ali mesmo no painel!</li>
        <li><strong>Calendário Integrado:</strong> Destaca datas de provas, fechamento de fóruns e eventos do sistema.</li>
      </ul>
      <div class="alert-tip" style="margin-top: 1rem; padding: 1rem; border-left: 4px solid #38a169; background: rgba(56,161,105,0.1);">
        <strong>Dica de Mestre:</strong> Como administrador, você pode "forçar" um layout de painel padrão para todos os novos usuários, garantindo que eles vejam a Linha do Tempo no lugar perfeito!
      </div>
    `,
    quiz: {
      question: "Qual bloco do Dashboard é responsável por avisar o aluno sobre prazos próximos e provas vencendo?",
      options: [
        "Bloco HTML",
        "Resumo dos Cursos",
        "Linha do Tempo (Timeline)",
        "Usuários Online"
      ],
      correct_index: 2,
      feedback_correct: "Correto! A Linha do Tempo é a ferramenta central de organização de tempo no Moodle."
    }
  },
  {
    id: "m4-perfis",
    title: "Gestão de Perfis de Usuário",
    category: "Fundamentos",
    icon: "people",
    content: `
      <p>O Moodle baseia-se em <strong>Papéis (Roles)</strong>, que definem o que cada um pode fazer (Permissões) dentro de um Contexto (Curso, Categoria ou Sistema).</p>
      <p>Os papéis padrão mais importantes são:</p>
      <ul>
        <li><strong>Administrador:</strong> O "Deus" do sistema. Tem acesso a TUDO, pode instalar plugins, mudar o tema visual e criar categorias.</li>
        <li><strong>Gerente (Manager):</strong> Um administrador com poderes ligeiramente reduzidos. Pode criar cursos e matricular pessoas, mas geralmente não mexe no código do servidor.</li>
        <li><strong>Criador de Cursos:</strong> Permissão apenas para criar cursos dentro das categorias liberadas.</li>
        <li><strong>Professor (Editing Teacher):</strong> O dono do curso. Pode adicionar aulas, PDFs, questionários, dar notas e apagar mensagens do fórum.</li>
        <li><strong>Professor Não-Editor:</strong> Ideal para "Monitores" ou tutores auxiliares. Pode dar nota e interagir, mas não pode alterar o conteúdo da aula.</li>
        <li><strong>Estudante:</strong> Tem permissão para consumir conteúdo, enviar tarefas e responder quizzes. Não pode editar o curso.</li>
      </ul>
      <p>Você pode inclusive criar <strong>papéis personalizados</strong>, como "Coordenador Pedagógico" que tem permissão apenas para ver o Livro de Notas de todos os cursos, mas não pode editar aulas.</p>
    `,
    quiz: {
      question: "Qual a diferença entre o Professor e o Professor Não-Editor?",
      options: [
        "O Professor não pode dar notas, o Não-Editor pode.",
        "O Professor pode alterar o conteúdo do curso (adicionar PDFs, quizzes), o Não-Editor só pode dar notas e interagir com alunos.",
        "Não existe diferença no Moodle 4.",
        "O Professor Não-Editor é um administrador do site."
      ],
      correct_index: 1,
      feedback_correct: "Perfeito! Professores Não-Editores são tutores/monitores: avaliam alunos e moderam fóruns, mas não constroem a página do curso."
    }
  }
];
