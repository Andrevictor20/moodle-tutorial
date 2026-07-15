export const atividades = [
  {
    id: "m4-activities",
    title: "O Ecossistema de Atividades e H5P",
    category: "Recursos Pedagógicos",
    icon: "extension",
    content: `
      <p>A separação entre <strong>Recurso</strong> (passivo) e <strong>Atividade</strong> (ativo) é o núcleo pedagógico do Moodle. Entre as atividades nativas, a <em>Lição (Lesson)</em> e o <em>H5P</em> representam o estado da arte para conteúdo interativo.</p>
      
      <div class="mermaid" style="text-align: center; margin: 2rem 0;">
      graph TD
        Start((Início)) --> L1[Página de Conteúdo: Anatomia]
        L1 --> Q1{Pergunta: Qual o maior órgão?}
        Q1 -->|Errou| R1[Página de Revisão: A Pele]
        R1 --> Q1
        Q1 -->|Acertou| L2[Página de Conteúdo: Cérebro]
        L2 --> F((Fim da Lição))
        
        style Start fill:#f9f0ff,stroke:#722ed1,stroke-width:2px
        style Q1 fill:#fffbe6,stroke:#faad14,stroke-width:2px
        style F fill:#f6ffed,stroke:#52c41a,stroke-width:2px
      </div>

      <h3>Trilhas Ramificadas com a 'Lição'</h3>
      <p>A atividade <strong>Lição</strong> permite criar grafos de decisão (como o diagrama acima). O aluno nunca avança linearmente se ele não compreendeu o assunto base. Isso automatiza o conceito pedagógico de <em>Recuperação Paralela</em>: o aluno fraco é redirecionado para textos mais fáceis, enquanto o aluno avançado pula direto para os exercícios difíceis.</p>
      
      <h3>Integração Nativa com H5P</h3>
      <p>O Moodle 4 absorveu o H5P diretamente no Core (Núcleo) do sistema via o Banco de Conteúdo. Agora, um professor cria um vídeo interativo no seu próprio computador e faz o upload. O Moodle lê os pontos de parada do vídeo, registra quantas vezes o aluno assistiu a resposta da questão pop-up e lança a pontuação diretamente no <strong>Livro de Notas</strong>, tudo renderizado em HTML5 responsivo!</p>
    `,
    quiz: {
      question: "Qual recurso do Moodle é ideal para criar vídeos interativos onde a reprodução pausa para o aluno responder a uma questão, gerando nota automática?",
      options: [
        "Fórum Geral.",
        "Integração Nativa H5P via Banco de Conteúdo.",
        "Atividade SCORM 1.2.",
        "Recurso Página HTML padrão."
      ],
      correct_index: 1,
      feedback_correct: "Correto! O H5P revolucionou a interatividade EAD trazendo objetos de aprendizagem dinâmicos (vídeos, tours 360, flashcards) perfeitamente integrados ao Livro de Notas."
    }
  },
  {
    id: "m4-quiz",
    title: "O Motor de Questionários Avançado",
    category: "Recursos Pedagógicos",
    icon: "quiz",
    content: `
      <p>Nenhuma outra plataforma possui um motor de questionários com a engenharia de segurança e flexibilidade do Moodle. Projetado para testes de alto risco (exames de certificação de engenharia e medicina), ele separa a arquitetura das perguntas da interface da prova.</p>
      
      <div class="mermaid" style="text-align: center; margin: 2rem 0;">
      flowchart LR
        subgraph Banco de Questões
          C1[Cat: Fácil]
          C2[Cat: Difícil]
        end
        
        subgraph Questionário 1 (Recuperação)
          Q1(Puxa 10 aleatórias de Fácil)
        end
        
        subgraph Questionário 2 (Prova Final)
          Q2(Puxa 5 de Fácil + 5 de Difícil)
        end
        
        C1 -.-> Q1
        C1 -.-> Q2
        C2 -.-> Q2
      </div>

      <h3>Segurança Anti-Cola</h3>
      <p>Além da extração aleatória de categorias (ilustrada acima), o Moodle suporta integrações profundas com <strong>Safe Exam Browser (SEB)</strong>. O SEB é um navegador blindado. Se configurado, o aluno só consegue abrir a prova se estiver usando o SEB, que trava a barra de tarefas do Windows, bloqueia atalhos como ALT+TAB, impede a gravação de tela e bloqueia acesso a qualquer outro site durante o exame.</p>
      
      <h3>Comportamentos de Questão</h3>
      <p>Você não é obrigado a usar "Feedback Adiado" (o aluno só vê a nota no final). O modo <strong>Múltiplas Tentativas Interativas</strong> permite que o aluno marque a resposta, aperte "Verificar" e descubra na hora se acertou. Se errou, ele perde 30% do valor da questão, recebe uma "Dica" programada pelo professor e pode tentar de novo ali mesmo!</p>
    `,
    quiz: {
      question: "O que o 'Safe Exam Browser (SEB)' faz quando integrado a um Questionário do Moodle?",
      options: [
        "Ele traduz a prova para outros idiomas.",
        "Ele bloqueia o computador do aluno (travando ALT+TAB, outras abas de navegação e gravação de tela) para garantir um ambiente seguro contra colas.",
        "Ele aumenta a velocidade de carregamento das perguntas com cache local.",
        "Ele faz o download do questionário para que o aluno responda offline."
      ],
      correct_index: 1,
      feedback_correct: "Isso aí! O SEB transforma o computador do usuário num terminal travado exclusivo para provas de alta segurança."
    }
  },
  {
    id: "m4-completion",
    title: "Conclusão de Atividades e Restrições",
    category: "Recursos Pedagógicos",
    icon: "task_alt",
    content: `
      <p>No Moodle, o rastreamento do progresso do aluno é calculado deterministicamente através do sistema de <strong>Conclusão de Atividades</strong> (Activity Completion), e suas engrenagens servem de motor para a <strong>Restrição de Acesso</strong> (Access Restrictions).</p>
      
      <div class="mermaid" style="text-align: center; margin: 2rem 0;">
      stateDiagram-v2
        [*] --> Forum: Início do Curso
        Forum --> Tarefa: Condição - Aluno deve postar 2 mensagens
        Tarefa --> Questionario: Condição - Obter nota de aprovação >= 7.0
        Questionario --> Certificado: Condição - Questionario Finalizado
        Certificado --> [*]: Fim
      </div>

      <h3>Regras de Conclusão Avançadas</h3>
      <p>Um círculo de conclusão (agora nativamente verde no Moodle 4) não é apenas um checkbox. Ele pode ser atrelado a <em>eventos do banco de dados</em>. Por exemplo: um fórum avaliativo só marca como verde quando a seguinte query for satisfeita: <code>Criou_Topicos >= 1 AND Respondeu_Colegas >= 2 AND Recebeu_Nota = TRUE</code>.</p>
      
      <h3>Encadeamento de Regras e Lógica Booleana</h3>
      <p>Ao construir Restrições de Acesso no seu curso, você pode usar blocos booleanos complexos (Conjuntos de Restrições). Exemplo prático: O módulo bônus só abre <strong>SE</strong> (O aluno pertence à Coorte de Alunos Especiais <strong>OU</strong> tirou Nota 10 na Prova) <strong>E</strong> (Preencheu a pesquisa de satisfação). Isso permite construir jornadas altamente personalizadas!</p>
    `,
    quiz: {
      question: "Qual o impacto prático de combinar Conclusão de Atividades Automática com Restrições de Acesso em um curso Moodle?",
      options: [
        "O sistema envia e-mails diários de spam aos alunos alertando-os.",
        "Permite que o curso se torne auto-gerido (Trilhas Gamificadas), onde módulos, prêmios ou certificados só são revelados quando o aluno bate as metas condicionais programadas.",
        "Bloqueia a capacidade do administrador de acessar o sistema.",
        "Aumenta absurdamente o uso do banco de dados, sendo não recomendado."
      ],
      correct_index: 1,
      feedback_correct: "Exato! A união destas duas ferramentas é o coração da Gamificação Estrutural, forçando o engajamento através do desbloqueio progressivo de conteúdo."
    }
  }
];
