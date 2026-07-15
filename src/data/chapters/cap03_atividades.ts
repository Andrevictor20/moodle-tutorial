export const atividades = [
  {
    id: "m4-activities",
    title: "O Ecossistema de Atividades e H5P",
    category: "Recursos Pedagógicos",
    icon: "extension",
    content: `
      <p>A separação entre <strong>Recurso</strong> (passivo — o aluno apenas lê/assiste) e <strong>Atividade</strong> (ativo — o aluno produz algo avaliável) é o núcleo pedagógico do Moodle. Entre as atividades nativas, a <em>Lição (Lesson)</em> e o <em>H5P</em> representam o estado da arte para conteúdo interativo e adaptativo.</p>

      <div class="mermaid" style="text-align: center; margin: 2rem 0;">
      flowchart TD
        Start(("Início")) --> L1["Página de Conteúdo: Anatomia Humana"]
        L1 --> Q1{"Pergunta: Qual o maior órgão?"}
        Q1 -->|Errou| R1["Página de Revisão: A Pele"]
        R1 --> Q1
        Q1 -->|Acertou| L2["Página de Conteúdo: O Cérebro"]
        L2 --> Q2{"Pergunta: Quantos neurônios?"}
        Q2 -->|Errou| R2["Revisão: Neurociência Básica"]
        R2 --> Q2
        Q2 -->|Acertou| F(("Fim da Lição"))
      </div>

      <h3>Trilhas Ramificadas com a 'Lição'</h3>
      <p>A atividade <strong>Lição</strong> permite criar grafos de decisão como o diagrama acima. O aluno nunca avança linearmente se não compreendeu o assunto base. Isso automatiza o conceito pedagógico de <em>Recuperação Paralela</em>: o aluno fraco é redirecionado para textos de reforço, enquanto o aluno avançado pula direto para os exercícios difíceis. Cada página pode conter conteúdo HTML rico, imagens, vídeos e perguntas de ramificação.</p>

      <h3>Integração Nativa com H5P no Moodle 5.2</h3>
      <p>O Moodle absorveu o H5P diretamente no Core do sistema via o <strong>Banco de Conteúdo (Content Bank)</strong>. O professor cria conteúdo interativo diretamente no navegador ou faz upload de um arquivo <code>.h5p</code>. O Moodle registra todas as interações e lança a pontuação diretamente no <strong>Livro de Notas</strong>, tudo renderizado em HTML5 responsivo!</p>
      <img src="/images/moodle_h5p_quiz.png" alt="Interface de edição de questão H5P no Moodle" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); margin: 2rem 0; border: 1px solid #eaeaea;" />
      
      <h3>Tipos de Conteúdo H5P Mais Populares</h3>
      <p>São mais de 40 tipos de conteúdo disponíveis, incluindo:</p>
      <ul>
        <li><strong>Vídeo Interativo (Interactive Video):</strong> Adiciona pontos de parada ao vídeo com questões pop-up. O aluno só avança se responder corretamente.</li>
        <li><strong>Apresentação de Curso (Course Presentation):</strong> Um PowerPoint interativo com slides navegáveis contendo quizzes embutidos.</li>
        <li><strong>Cenário de Ramificação (Branching Scenario):</strong> Cria narrativas interativas estilo "escolha sua aventura" com caminhos condicionais.</li>
        <li><strong>Flashcards e Memory Game:</strong> Cartões de memorização e jogos de memória para revisão.</li>
        <li><strong>Hotspots em Imagem:</strong> Áreas clicáveis em imagens para exploração interativa (ideal para anatomia, mapas, diagramas).</li>
        <li><strong>Tour Virtual 360°:</strong> Imagens panorâmicas com pontos de informação interativos.</li>
        <li><strong>Timeline:</strong> Linha do tempo interativa para conteúdos históricos.</li>
        <li><strong>Arrastar e Soltar (Drag and Drop):</strong> Atividades de classificação e organização.</li>
      </ul>
    `,
    quiz: {
      question: "Qual recurso do Moodle é ideal para criar vídeos interativos onde a reprodução pausa para o aluno responder a uma questão, gerando nota automática no Livro de Notas?",
      options: [
        "Fórum Geral com anexo de vídeo.",
        "Integração Nativa H5P via Banco de Conteúdo, usando o tipo 'Vídeo Interativo'.",
        "Atividade SCORM 1.2 com embed de YouTube.",
        "Recurso Página HTML padrão com iframe."
      ],
      correct_index: 1,
      feedback_correct: "Correto! O H5P revolucionou a interatividade EAD trazendo objetos de aprendizagem dinâmicos (vídeos interativos, tours 360, flashcards, cenários de ramificação) perfeitamente integrados ao Livro de Notas."
    }
  },
  {
    id: "m4-quiz",
    title: "O Motor de Questionários Avançado",
    category: "Recursos Pedagógicos",
    icon: "quiz",
    content: `
      <p>Nenhuma outra plataforma possui um motor de questionários com a engenharia de segurança e flexibilidade do Moodle. Projetado para testes de alto risco (exames de certificação de engenharia e medicina), ele separa a <strong>arquitetura das perguntas</strong> (Banco de Questões) da <strong>interface da prova</strong> (Questionário), permitindo reutilização massiva.</p>

      <div class="mermaid" style="text-align: center; margin: 2rem 0;">
      flowchart LR
        subgraph Banco de Questões
          C1["Cat: Fácil<br>50 questões"]
          C2["Cat: Médio<br>80 questões"]
          C3["Cat: Difícil<br>30 questões"]
        end
        
        subgraph Quiz 1 - Recuperação
          Q1("10 aleatórias de Fácil")
        end
        
        subgraph Quiz 2 - Prova Final
          Q2("5 Fácil + 5 Médio + 5 Difícil")
        end
        
        subgraph Quiz 3 - Desafio
          Q3("10 aleatórias de Difícil")
        end
        
        C1 -.-> Q1
        C1 -.-> Q2
        C2 -.-> Q2
        C3 -.-> Q2
        C3 -.-> Q3
      </div>

      <h3>Segurança Anti-Cola</h3>
      <p>Além da extração aleatória de categorias (ilustrada acima), o Moodle suporta integrações profundas com <strong>Safe Exam Browser (SEB)</strong>. O SEB é um navegador blindado: se configurado, o aluno só consegue abrir a prova usando o SEB, que trava a barra de tarefas do Windows/macOS, bloqueia atalhos como ALT+TAB, impede gravação de tela, bloqueia área de transferência (copy/paste) e proíbe acesso a qualquer outro site durante o exame.</p>

      <h3>Avaliação Colaborativa (Novo no Moodle 5.2)</h3>
      <p>O Moodle 5.2 introduziu o conceito de <strong>Multiple Markers (Múltiplos Avaliadores)</strong> como funcionalidade nativa. Agora, múltiplos professores ou tutores podem avaliar a mesma submissão de forma independente. O sistema calcula automaticamente a nota final com base nas avaliações individuais, e permite ajustes manuais quando necessário para reconciliação. Isso é essencial para cursos com bancas examinadoras, TCC ou processos de certificação profissional.</p>

      <h3>Os 6 Comportamentos de Questão</h3>
      <p>O Moodle oferece 6 modos distintos de interação com questões:</p>
      <ul>
        <li><strong>Feedback Adiado (Deferred Feedback):</strong> O aluno responde tudo e só vê a nota no final. Modo clássico de prova.</li>
        <li><strong>Feedback Imediato:</strong> Após cada resposta, o aluno vê se acertou ou errou, mas não pode mudar.</li>
        <li><strong>Múltiplas Tentativas Interativas:</strong> O aluno responde, recebe feedback e pode tentar novamente com penalidade progressiva (ex: -30% por tentativa). Dicas programadas são reveladas a cada erro.</li>
        <li><strong>Adaptativo:</strong> Similar ao Interativo, mas as penalidades são configuráveis por questão e o aluno pode mudar a resposta quantas vezes quiser.</li>
        <li><strong>Adaptativo sem Penalidade:</strong> O aluno tenta até acertar, sem perder pontos.</li>
        <li><strong>CBM - Certainty-Based Marking:</strong> O aluno informa o grau de certeza da sua resposta (Baixo/Médio/Alto). Se acertou com alta certeza, ganha mais pontos. Se errou com alta certeza, perde mais. Estimula o pensamento metacognitivo.</li>
      </ul>
    `,
    quiz: {
      question: "No Moodle 5.2, o que a nova funcionalidade 'Multiple Markers' permite fazer nas atividades de Tarefa?",
      options: [
        "Permite que o aluno envie múltiplas versões do trabalho.",
        "Permite que múltiplos professores/tutores avaliem independentemente a mesma submissão, com cálculo automático da nota final.",
        "Permite marcar questões como favoritas para revisão posterior.",
        "Permite que o aluno marque quais questões achou mais difíceis."
      ],
      correct_index: 1,
      feedback_correct: "Isso aí! A Avaliação Colaborativa (Multiple Markers) é uma das grandes novidades do Moodle 5.2, facilitando bancas examinadoras e processos de certificação."
    }
  },
  {
    id: "m4-completion",
    title: "Conclusão de Atividades e Restrições",
    category: "Recursos Pedagógicos",
    icon: "task_alt",
    content: `
      <p>No Moodle, o rastreamento do progresso do aluno é calculado deterministicamente através do sistema de <strong>Conclusão de Atividades</strong> (Activity Completion), e suas engrenagens servem de motor para a <strong>Restrição de Acesso</strong> (Restrict Access). Juntas, essas ferramentas transformam um curso passivo em uma <em>jornada gamificada autogerida</em>.</p>

      <div class="mermaid" style="text-align: center; margin: 2rem 0;">
      stateDiagram-v2
        [*] --> Forum: Início do Curso
        Forum --> Tarefa: Postar 2 mensagens no Fórum
        Tarefa --> Quiz: Obter nota >= 7.0 na Tarefa
        Quiz --> Certificado: Concluir Questionário
        Certificado --> Badge: Receber Certificado
        Badge --> [*]: Emblema Desbloqueado!
      </div>

      <h3>Tipos de Conclusão</h3>
      <p>O Moodle oferece 3 formas de marcar uma atividade como concluída:</p>
      <ul>
        <li><strong>Manual:</strong> O próprio aluno clica num checkbox para marcar como concluído. Útil para leituras livres.</li>
        <li><strong>Automática por Visualização:</strong> O sistema marca como concluído quando o aluno <em>abre</em> a atividade.</li>
        <li><strong>Automática por Condição:</strong> A mais poderosa. Pode exigir combinações como: receber nota de aprovação, enviar arquivo, postar X mensagens no fórum, etc.</li>
      </ul>

      <h3>Regras de Conclusão Avançadas</h3>
      <p>Um indicador de conclusão (o círculo verde do Moodle 5.x) não é apenas um checkbox visual. Ele pode ser atrelado a <em>eventos complexos do banco de dados</em>. Por exemplo: um fórum avaliativo só marca como concluído quando todas estas condições forem satisfeitas simultaneamente: <code>Criou_Topicos >= 1 AND Respondeu_Colegas >= 2 AND Recebeu_Nota = TRUE</code>.</p>

      <h3>Restrições de Acesso e Lógica Booleana</h3>
      <p>Ao construir Restrições de Acesso no seu curso, você pode usar <strong>conjuntos de restrições</strong> com lógica booleana complexa. Exemplo prático:</p>
      <p>O <em>Módulo Bônus</em> só abre <strong>SE</strong>:</p>
      <ul>
        <li>(O aluno pertence à Coorte de Alunos Especiais <strong>OU</strong> tirou Nota 10 na Prova Final)</li>
        <li><strong>E</strong></li>
        <li>(Preencheu a Pesquisa de Satisfação)</li>
      </ul>
      <p>Isso permite construir jornadas altamente personalizadas, onde cada aluno vive uma experiência diferente do mesmo curso!</p>

      <h3>Transparência no Moodle 5.2</h3>
      <p>No Moodle 5.2, quando uma atividade está restringida, o aluno vê uma <strong>página explicativa dedicada</strong> que detalha exatamente quais condições precisa cumprir para desbloquear o conteúdo. Isso reduz drasticamente a confusão e as perguntas do tipo "Professor, por que não consigo acessar o módulo 3?".</p>
    `,
    quiz: {
      question: "Qual o impacto prático de combinar Conclusão de Atividades Automática com Restrições de Acesso em um curso Moodle 5.2?",
      options: [
        "O sistema envia e-mails diários de spam aos alunos alertando-os.",
        "Permite que o curso se torne autogerido com Trilhas Gamificadas, onde módulos, prêmios e certificados só são revelados quando o aluno bate as metas condicionais programadas, com páginas explicativas claras sobre o que falta.",
        "Bloqueia a capacidade do administrador de acessar o sistema.",
        "Aumenta absurdamente o uso do banco de dados, sendo não recomendado."
      ],
      correct_index: 1,
      feedback_correct: "Exato! A união destas duas ferramentas é o coração da Gamificação Estrutural, forçando o engajamento através do desbloqueio progressivo de conteúdo com total transparência."
    }
  }
];
