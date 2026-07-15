export const fundamentos = [
  {
    id: "m4-intro",
    title: "Arquitetura e Navegação do Moodle 4.x",
    category: "Fundamentos",
    icon: "bolt",
    content: `
      <p>O Moodle 4.x representa a maior mudança arquitetural na história da plataforma. O antigo "Menu de Navegação" e o "Bloco de Administração" foram consolidados em uma interface orientada a abas e gavetas expansíveis (Drawers).</p>
      
      <div class="mermaid" style="text-align: center; margin: 2rem 0;">
      graph TD
        A[Dashboard / Painel] --> B(Navegação Primária)
        B --> C[Início do Site]
        B --> D[Meus Cursos]
        B --> E[Administração do Site]
        
        D --> F(Dentro do Curso)
        F --> G[Course Index Drawer<br>Gaveta Esquerda]
        F --> H[Block Drawer<br>Gaveta Direita]
        F --> I[Secondary Navigation<br>Abas do Curso]
        
        style A fill:#f9f9f9,stroke:#333,stroke-width:2px
        style F fill:#e6f7ff,stroke:#1890ff,stroke-width:2px
        style G fill:#f6ffed,stroke:#52c41a,stroke-width:2px
      </div>

      <h3>A Navegação Primária e Secundária</h3>
      <p>No topo da tela, a <strong>Navegação Primária</strong> fixa oferece acesso universal ao Painel e Meus Cursos. Quando você entra em um curso, uma nova linha aparece abaixo dela: a <strong>Navegação Secundária</strong>. É nela que o professor encontra as configurações do curso, participantes, notas e relatórios, sem precisar caçar blocos escondidos.</p>
      
      <h3>O Course Index (Índice do Curso)</h3>
      <p>Localizado na gaveta esquerda (Left Drawer), o Course Index é um mapa interativo de todo o conteúdo. Ele não apenas permite pular instantaneamente para qualquer módulo, como também indica visualmente (com círculos verdes) quais atividades o aluno já completou. Para professores em Modo de Edição, este índice permite reorganizar o curso inteiro via <em>Drag and Drop</em>.</p>
    `,
    quiz: {
      question: "No Moodle 4, onde o professor deve procurar para encontrar as configurações de Participantes e Relatórios de um curso específico?",
      options: [
        "No Bloco de Administração antigo, na lateral esquerda.",
        "Na Navegação Secundária, que aparece como abas horizontais no topo assim que você entra no curso.",
        "Na Gaveta de Blocos (Right Drawer).",
        "Apenas no Painel Principal do site."
      ],
      correct_index: 1,
      feedback_correct: "Correto! A Navegação Secundária contextual substituiu a necessidade de vasculhar o antigo bloco de administração do curso."
    }
  },
  {
    id: "m4-perfis",
    title: "Hierarquia de Contextos e Permissões",
    category: "Fundamentos",
    icon: "admin_panel_settings",
    content: `
      <p>A segurança do Moodle é baseada num sistema complexo de <strong>Papéis (Roles)</strong> e <strong>Contextos</strong>. Uma permissão não é global; ela depende de ONDE o usuário está. Você pode ser Professor num curso, e um simples Estudante em outro.</p>
      
      <div class="mermaid" style="text-align: center; margin: 2rem 0;">
      flowchart TD
        Sys[Contexto: Sistema<br>Admin, Criador de Cursos] --> Cat1[Categoria: Exatas]
        Sys --> Cat2[Categoria: Humanas]
        
        Cat1 --> Cur1[Curso: Cálculo I<br>Professor, Estudante]
        Cat1 --> Cur2[Curso: Física<br>Professor Não-Editor]
        
        Cur1 --> Mod1[Módulo: Fórum de Dúvidas]
        Cur1 --> Mod2[Módulo: Questionário Final]
        
        style Sys fill:#ffe58f,stroke:#faad14,stroke-width:2px
        style Cur1 fill:#bae7ff,stroke:#1890ff,stroke-width:2px
      </div>

      <h3>Como as Permissões se Propagam</h3>
      <p>Se você atribui o papel de <em>Criador de Cursos</em> a um usuário no <strong>Contexto do Sistema</strong>, ele poderá criar cursos em qualquer lugar. Mas se você atribui esse mesmo papel no <strong>Contexto da Categoria 'Humanas'</strong>, ele só poderá agir ali dentro.</p>
      
      <h3>Substituição de Papéis (Overrides)</h3>
      <p>Imagine que você tem um aluno brilhante e quer que ele seja um "Moderador" apenas em um Fórum específico, mas continue sendo Estudante no resto do curso. No Moodle, você acessa as permissões locais daquele <strong>Módulo</strong> e faz um <em>Override</em> (Sobreposição), dando a ele o poder temporário de apagar mensagens apenas ali.</p>
    `,
    quiz: {
      question: "Se um usuário recebe o papel de 'Gerente' (Manager) no contexto de uma Categoria específica, o que acontece?",
      options: [
        "Ele se torna Gerente de todo o site Moodle.",
        "Ele herda as permissões de Gerente apenas para os cursos que estão dentro daquela Categoria e de suas subcategorias.",
        "Ele não pode mais ser aluno em nenhum curso.",
        "O Moodle bloqueia a ação, pois Gerentes só existem no Contexto de Sistema."
      ],
      correct_index: 1,
      feedback_correct: "Exatamente! As permissões 'descem' (cascateiam) pela hierarquia. Ele será gerente apenas naquele 'galho' da árvore."
    }
  }
];
