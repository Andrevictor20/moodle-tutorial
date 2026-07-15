export const administracao = [
  {
    id: "m4-gradebook",
    title: "O Livro de Notas (Gradebook)",
    category: "Administração & Gamificação",
    icon: "format_list_numbered",
    content: `
      <p>O Livro de Notas é frequentemente o pesadelo dos professores iniciantes, mas com a interface modernizada do Moodle 4, ele se tornou uma planilha centralizada linda e poderosa.</p>
      <img src="/images/moodle_gradebook_premium.png" alt="Premium Gradebook" style="width: 100%; border-radius: 8px; margin: 1.5rem 0; box-shadow: 0 4px 15px rgba(0,0,0,0.1);" />
      <h3>Arquitetura do Livro de Notas:</h3>
      <ul>
        <li><strong>Categorias:</strong> Você deve agrupar as notas. Crie categorias como "Semestre 1", "Semestre 2", "Projetos Extras".</li>
        <li><strong>Cálculos Avançados:</strong> O Moodle não soma apenas notas (ex: Média Simples). Você pode usar <strong>Pesos</strong> (ex: A Prova Final vale 70% e as Atividades 30%) ou até mesmo inserir Fórmulas Matemáticas complexas nativamente (<code>=average(item1, item2)*0.8</code>).</li>
        <li><strong>Letras e Escalas:</strong> Em vez do aluno ver um frio "85", você pode configurar para exibir "Conceito A", "Muito Bom" ou "Aprovado com Louvor" usando escalas personalizadas.</li>
      </ul>
      <p>É crucial configurar o Livro de Notas <strong>antes</strong> do curso começar, para evitar recálculos massivos no fim do ano letivo.</p>
    `,
    quiz: {
      question: "Qual recurso do Livro de Notas permite que a Prova Final tenha mais importância que as demais atividades da média?",
      options: [
        "Abação Automática",
        "Atribuição de Pesos (Weights) nas Categorias",
        "Ocultar as atividades fracas",
        "Modo de Edição"
      ],
      correct_index: 1,
      feedback_correct: "Correto! Configurar os 'Pesos' é a forma ideal de criar médias ponderadas no sistema de cálculo do Moodle."
    }
  },
  {
    id: "m4-badges",
    title: "Emblemas (Badges) e Gamificação",
    category: "Administração & Gamificação",
    icon: "emoji_events",
    content: `
      <p>Gamificação não é apenas transformar tudo em um jogo do Mario. É usar dinâmicas de engajamento baseadas em recompensa e progresso! O Moodle possui um sistema robusto de <strong>Emblemas (Badges)</strong> inspirado no padrão OpenBadges.</p>
      <h3>Como os Badges funcionam:</h3>
      <ul>
        <li>Você faz o upload de uma imagem em PNG com fundo transparente bem legal (Ex: Um troféu dourado dizendo 'Mestre dos Fóruns').</li>
        <li>Define os critérios: O emblema é entregue automaticamente se o aluno postar em 5 fóruns e concluir 3 atividades específicas.</li>
        <li>Quando o critério é batido, o aluno recebe uma notificação instantânea e o Emblema vai para o perfil público dele como uma "condecoração militar".</li>
      </ul>
      <p>O poder dos emblemas é que eles criam micro-recompensas. O aluno não precisa esperar 6 meses pelo diploma final; a cada semana ele ganha uma medalha de progresso que o motiva a continuar no curso, reduzindo a taxa de evasão do seu EAD absurdamente.</p>
    `,
    quiz: {
      question: "Qual o impacto principal de distribuir Emblemas (Badges) ao longo do curso, em vez de apenas entregar um certificado no final?",
      options: [
        "Torna o site mais lento por causa de muitas imagens PNG.",
        "Fornece micro-recompensas, mantendo o aluno engajado e motivado, reduzindo assim a evasão escolar (drop-out).",
        "Aumenta a média das notas automaticamente.",
        "Não faz diferença pedagógica."
      ],
      correct_index: 1,
      feedback_correct: "Perfeitamente! A Gamificação ataca o psicológico positivo do aluno. Micro-recompensas seguram a atenção da geração acostumada com redes sociais e videogames."
    }
  },
  {
    id: "m4-conclusion",
    title: "Projeto Final: O Mestre Jedi",
    category: "Administração & Gamificação",
    icon: "workspace_premium",
    content: `
      <p>Chegamos ao fim! Você agora possui as habilidades avançadas para montar projetos Moodle profissionais do absoluto zero. Você não é mais um amador, é um Mestre!</p>
      <div style="background-color: #f0f7ff; border: 1px solid #cce4fc; border-radius: 8px; padding: 2rem; margin: 2rem 0;">
        <h3 style="color: #0b5cff; margin-top: 0; display:flex; align-items:center;">
          <span class="material-icons-round" style="margin-right:10px;">check_circle</span> Checklist do Especialista
        </h3>
        <ol style="margin-bottom:0; font-size: 1.1rem; line-height: 1.8;">
          <li>Sempre priorize a <strong>Experiência do Usuário (UX)</strong> usando formatos limpos, como o Collapse Topics do Moodle 4.</li>
          <li>Configure o <strong>Livro de Notas</strong> e os Pesos antes da primeira matrícula.</li>
          <li>Crie o <strong>Banco de Questões</strong> de forma estruturada por categorias e dificulade.</li>
          <li>Use <strong>H5P</strong> para quebrar textos longos com vídeos interativos e flashcards dinâmicos.</li>
          <li>Automatize trilhas de aprendizado combinando <strong>Rastreamento de Atividades</strong> com <strong>Restrição de Acesso</strong>.</li>
        </ol>
      </div>
      <div style="text-align: center; padding: 3rem 0;">
        <span class="material-icons-round" style="font-size: 5rem; color: #f98012;">stars</span>
        <h2 style="color: #f98012;">Parabéns! Missão Concluída!</h2>
        <p style="font-size: 1.2rem; max-width: 600px; margin: 0 auto; color: #555;">Este tutorial super interativo foi criado apenas com tecnologias modernas. Agora é a sua vez de usar os conceitos ensinados aqui na sua verdadeira plataforma Moodle!</p>
      </div>
    `,
    quiz: {
      question: "Qual é o segredo de um ambiente Moodle profissional altamente engajador?",
      options: [
        "Encher a tela principal de GIFs animados.",
        "Criar blocos de texto PDF enormes, sem usar H5P.",
        "Deixar o Moodle com as cores padrão da instalação e desativar restrições.",
        "Unir a nova interface limpa (UX) do Moodle 4 com trilhas automatizadas, emblemas e conteúdos interativos nativos (como H5P)."
      ],
      correct_index: 3,
      feedback_correct: "Missão Cumprida! Você absorveu perfeitamente a filosofia MoodleMaster. Um excelente LMS é fruto de Design + Automação Pedagógica. Sucesso!"
    }
  }
];
