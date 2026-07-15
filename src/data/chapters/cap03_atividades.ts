export const atividades = [
  {
    id: "m4-activities",
    title: "O Arsenal de Atividades Moodle",
    category: "Recursos Pedagógicos",
    icon: "extension",
    content: `
      <p>No Moodle, há uma diferença clara entre <strong>Recurso</strong> e <strong>Atividade</strong>. Recursos são materiais estáticos que o aluno "consome" (Lê, assiste). Atividades exigem que o aluno interaja (envie arquivo, responda, clique, grave áudio).</p>
      <h3>Os Campeões de Audiência:</h3>
      <ul>
        <li><strong>Tarefa (Assignment):</strong> O aluno envia um trabalho (PDF, Word) ou digita um texto online. O professor acessa uma interface linda de correção, onde pode até rabiscar no PDF do aluno sem precisar fazer download!</li>
        <li><strong>Fórum:</strong> Fundamental para EAD. Pode ser um fórum geral ou "Fórum de Perguntas e Respostas" (onde o aluno só vê a resposta dos colegas DEPOIS que ele enviar a dele, evitando cópias!).</li>
        <li><strong>Lição (Lesson):</strong> Cria trilhas ramificadas. O aluno lê a página 1 e responde uma pergunta. Se errar, vai para a página de revisão. Se acertar, pula para a página 3. É um construtor de narrativas fantástico!</li>
        <li><strong>H5P:</strong> O "queridinho" do Moodle moderno. Permite criar vídeos interativos (o vídeo pausa, faz uma pergunta pro aluno e só continua se ele acertar), flashcards e tours virtuais 360º. Tudo renderizado nativamente em HTML5!</li>
      </ul>
    `,
    quiz: {
      question: "Se um professor quiser evitar que os alunos copiem as respostas dos colegas num fórum avaliativo, que tipo de fórum ele deve usar?",
      options: [
        "Fórum Geral.",
        "Fórum de Perguntas e Respostas (Q&A).",
        "Fórum de 1 Tópico Único.",
        "Blog Pessoal."
      ],
      correct_index: 1,
      feedback_correct: "Exatamente! No fórum de Perguntas e Respostas, o aluno é forçado a postar sua reflexão original antes de ver as discussões anteriores."
    }
  },
  {
    id: "m4-quiz",
    title: "O Motor de Questionários",
    category: "Recursos Pedagógicos",
    icon: "quiz",
    content: `
      <p>O <strong>Questionário (Quiz)</strong> do Moodle é considerado um dos motores de avaliação mais poderosos do mundo, usado em universidades gigantes para testes de certificação pesados.</p>
      <img src="/images/moodle_quiz_premium.png" alt="Motor de Questionário" style="width: 100%; border-radius: 8px; margin: 1.5rem 0; box-shadow: 0 4px 15px rgba(0,0,0,0.1);" />
      <h3>Por que ele é tão poderoso?</h3>
      <ul>
        <li><strong>Banco de Questões Independente:</strong> Você não cria as perguntas "dentro" do Quiz. Você as cria no Banco de Questões do curso. Um Quiz é apenas um "recipiente" que puxa essas perguntas. Você pode reaproveitar a mesma pergunta em 5 provas diferentes!</li>
        <li><strong>Perguntas Aleatórias:</strong> Você pode mandar o Moodle sortear "10 perguntas da Categoria História". Em uma sala de 50 alunos, <strong>cada aluno receberá uma prova única e diferente</strong>. Adios, cola!</li>
        <li><strong>Feedback Condicional:</strong> Se o aluno tirar 10, aparece um meme feliz. Se tirar 4, aparece um link de recuperação.</li>
        <li><strong>Restrições de Segurança (Safe Exam Browser):</strong> Integração nativa para travar o navegador do aluno, impedindo-o de abrir outras abas para pesquisar no Google durante a prova.</li>
      </ul>
    `,
    quiz: {
      question: "Qual o benefício de usar o 'Banco de Questões' em vez de criar perguntas diretamente ligadas a apenas uma prova?",
      options: [
        "As perguntas ficam mais difíceis.",
        "Impede que o professor veja as respostas corretas.",
        "Permite reaproveitar a mesma pergunta em múltiplas provas e realizar sorteios aleatórios dinâmicos.",
        "Aumenta a velocidade de download do servidor."
      ],
      correct_index: 2,
      feedback_correct: "Isso aí! O Banco de Questões cria um 'arsenal' de conhecimentos que você pode puxar, sortear e reutilizar por anos."
    }
  },
  {
    id: "m4-completion",
    title: "Rastreamento e Conclusão de Atividades",
    category: "Recursos Pedagógicos",
    icon: "task_alt",
    content: `
      <p>Se você quer saber se o aluno realmente fez as tarefas, precisa ativar o <strong>Rastreamento de Conclusão</strong>. No Moodle 4, o aluno vê círculos cinzas ao lado de cada atividade que ficam <span style="color:green;font-weight:bold;">verdes</span> quando concluídas.</p>
      <p>As conclusões podem ser configuradas de forma inteligente:</p>
      <ul>
        <li><strong>Manual:</strong> O aluno mesmo clica no círculo e marca "Feito". Ótimo para leitura de PDFs e materiais simples.</li>
        <li><strong>Automática por Nota:</strong> Um questionário só marca como "Feito" se o aluno tirar a nota mínima de aprovação (ex: nota 7). Se tirar 6, a bolinha não fica verde e ele tem que tentar de novo!</li>
        <li><strong>Automática por Ação:</strong> Um fórum pode exigir que o aluno "Crie pelo menos 1 tópico de discussão" e "Responda pelo menos a 2 colegas" para ficar verde. Sensacional, não?</li>
      </ul>
      <p><strong>A Restrição de Acesso:</strong> Com o rastreamento ativo, você cria regras mágicas. O "Certificado Final" pode ficar bloqueado (invisível ou apagado) com a regra: <em>"O Certificado só libera se a Tarefa Final estiver marcada como verde"</em>.</p>
    `,
    quiz: {
      question: "Como você configuraria o Moodle para garantir que o 'Módulo 2' só possa ser acessado DEPOIS que o aluno tirar nota mínima na Prova do 'Módulo 1'?",
      options: [
        "Enviando e-mails manuais para liberar os alunos aprovados.",
        "Habilitando a Conclusão de Atividades na Prova 1 (exigindo nota) e configurando uma Restrição de Acesso na seção do Módulo 2.",
        "Não é possível fazer isso, todos os módulos sempre ficam abertos.",
        "Escondendo o Módulo 2 e pedindo para o administrador re-exibi-lo toda semana."
      ],
      correct_index: 1,
      feedback_correct: "Brilhante! A combinação Rastreamento de Atividades + Restrições de Acesso é o que permite montar trilhas de ensino automatizadas (Gamificação pura!)."
    }
  }
];
