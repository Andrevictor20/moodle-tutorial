export const fundamentos = [
  {
    id: "m4-intro",
    title: "Arquitetura e Navegação do Moodle 5.2",
    category: "Fundamentos",
    icon: "bolt",
    content: `
      <p>O <strong>Moodle 5.2</strong>, lançado em abril de 2026, consolida a maior revolução de UX da história da plataforma. Desde a versão 4.0, o antigo "Menu de Navegação" e o "Bloco de Administração" foram substituídos por uma interface orientada a <strong>abas horizontais</strong> e <strong>gavetas laterais expansíveis (Drawers)</strong>. O Moodle 5.2 refina ainda mais essa experiência com melhorias no Dashboard, uma nova página de login redesenhada e títulos de curso persistentes durante a rolagem da tela.</p>

      <div class="mermaid" style="text-align: center; margin: 2rem 0;">
      graph TD
        Login[Página de Login Redesenhada<br>Moodle 5.2] --> A[Dashboard / Painel<br>Fase 1 Melhorada]
        A --> B(Navegação Primária)
        B --> C[Início do Site]
        B --> D[Meus Cursos]
        B --> E[Administração do Site]
        
        D --> F(Dentro do Curso)
        F --> G[Índice do Curso<br>Gaveta Esquerda]
        F --> H[Gaveta de Blocos<br>Gaveta Direita]
        F --> I[Navegação Secundária<br>Abas do Curso]
        
        I --> I1[Configurações]
        I --> I2[Participantes]
        I --> I3[Notas]
        I --> I4[Relatórios]
        I --> I5[Banco de Questões]
      </div>

      <h3>Novidades da Interface no Moodle 5.2</h3>
      <p>A página de login foi completamente redesenhada com um visual moderno e novas opções de personalização. Os administradores agora podem definir uma <strong>imagem de fundo padrão</strong> e as configurações da página de login possuem uma seção dedicada na Administração do Site. A autenticação multifator (MFA) também recebeu uma interface visual atualizada.</p>

      <h3>A Navegação Primária e Secundária</h3>
      <p>No topo da tela, a <strong>Navegação Primária</strong> fixa oferece acesso universal ao Painel e Meus Cursos. Quando você entra em um curso, uma nova linha aparece abaixo dela: a <strong>Navegação Secundária</strong>. É nela que o professor encontra as configurações do curso, participantes, notas, relatórios e o Banco de Questões, sem precisar caçar blocos escondidos.</p>
      
      <h3>Dashboard Melhorado (Fase 1)</h3>
      <p>O Dashboard do Moodle 5.2 recebeu melhorias de <em>Fase 1</em>: novas instalações agora vêm com layouts otimizados de blocos, posicionamento específico para o <strong>Calendário</strong> e o bloco <strong>Visão Geral de Cursos</strong>. O bloco de Visão Geral ganhou controles persistentes para criar e gerenciar cursos diretamente, reduzindo a fricção para professores que gerenciam múltiplas turmas.</p>

      <img src="/images/moodle_dashboard.png" alt="Interface real do Dashboard do Moodle" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); margin: 2rem 0; border: 1px solid #eaeaea;" />

      <h3>Título Persistente e Course Index</h3>
      <p>Uma novidade sutil porém poderosa: o <strong>título do curso agora permanece visível</strong> enquanto o usuário rola a tela para baixo, garantindo que o contexto nunca se perde. O <strong>Course Index</strong> (Índice do Curso), localizado na gaveta esquerda, continua sendo um mapa interativo de todo o conteúdo, indicando visualmente com <em>círculos verdes</em> quais atividades o aluno já completou, e suportando <em>Drag and Drop</em> no Modo de Edição.</p>
    `,
    quiz: {
      question: "No Moodle 5.2, qual novidade de interface garante que o usuário nunca perca o contexto de qual curso está acessando, mesmo ao rolar a página?",
      options: [
        "O Bloco de Administração antigo foi restaurado na lateral esquerda.",
        "O título do curso agora permanece visível de forma persistente enquanto o usuário rola a página para baixo.",
        "A Gaveta de Blocos (Right Drawer) exibe o nome do curso em destaque.",
        "Um pop-up aparece a cada 30 segundos lembrando o nome do curso."
      ],
      correct_index: 1,
      feedback_correct: "Correto! O Moodle 5.2 introduziu títulos persistentes que mantêm o contexto visual para o usuário durante toda a navegação."
    }
  },
  {
    id: "m4-perfis",
    title: "Hierarquia de Contextos e Permissões",
    category: "Fundamentos",
    icon: "admin_panel_settings",
    content: `
      <p>A segurança do Moodle é construída sobre um sistema sofisticado de <strong>Papéis (Roles)</strong> e <strong>Contextos</strong>. Uma permissão nunca é simplesmente "global"; ela depende de <em>onde</em> o usuário está na hierarquia. Você pode ser Professor num curso e um simples Estudante em outro. O modelo oficial define <strong>5 níveis hierárquicos</strong> de contexto, e no Moodle 5.2 estes conceitos continuam sendo o pilar fundamental da arquitetura de segurança.</p>

      <div class="mermaid" style="text-align: center; margin: 2rem 0;">
      flowchart TD
        Sys[Contexto: Sistema<br>Administrador Global] --> User[Contexto: Usuário<br>Perfil Individual]
        Sys --> Cat1[Categoria: Ciências Exatas]
        Sys --> Cat2[Categoria: Ciências Humanas]
        
        Cat1 --> Sub1[Subcategoria: Engenharia]
        Cat1 --> Cur2[Curso: Física Geral<br>Professor Não-Editor]
        
        Sub1 --> Cur1[Curso: Cálculo I<br>Professor + Estudante]
        
        Cur1 --> Mod1[Módulo: Fórum de Dúvidas<br>Override: Moderador Local]
        Cur1 --> Mod2[Módulo: Questionário Final]
        Cur1 --> Blc1[Bloco: Calendário do Curso]
      </div>

      <h3>Os 5 Níveis de Contexto</h3>
      <p>O Moodle organiza toda a sua arquitetura de permissões em 5 camadas hierárquicas:</p>
      <ul>
        <li><strong>Sistema:</strong> O nível mais alto. Permissões aqui se propagam para todo o site. Administradores e Criadores de Cursos tipicamente operam neste nível.</li>
        <li><strong>Usuário:</strong> O contexto de perfil individual. Permite definir quem pode ver ou editar o perfil de outro usuário, gerenciar blogs pessoais, etc.</li>
        <li><strong>Categoria:</strong> Agrupa cursos. Um gerente atribuído à categoria "Humanas" administra todos os cursos dentro dela (e de suas subcategorias), sem tocar em "Exatas".</li>
        <li><strong>Curso:</strong> O nível onde professores e estudantes interagem. Cada curso possui seus próprios participantes e suas permissões específicas.</li>
        <li><strong>Módulo (Atividade) e Bloco:</strong> O nível mais granular. Permite overrides extremamente precisos, como dar a um aluno o poder de moderar apenas um Fórum específico.</li>
      </ul>

      <h3>Como as Permissões se Propagam (Cascata)</h3>
      <p>Se você atribui o papel de <em>Criador de Cursos</em> a um usuário no <strong>Contexto do Sistema</strong>, ele poderá criar cursos em qualquer lugar. Mas se você atribui esse mesmo papel no <strong>Contexto da Categoria 'Humanas'</strong>, ele só poderá agir ali dentro. As permissões <em>descem</em> (cascateiam) pela árvore hierárquica, nunca sobem.</p>

      <h3>Substituição de Papéis (Overrides)</h3>
      <p>Imagine que você tem um aluno brilhante e quer que ele seja um "Moderador" apenas em um Fórum específico, mas continue sendo Estudante no resto do curso. No Moodle, você acessa as permissões locais daquele <strong>Módulo</strong> e faz um <em>Override</em> (Sobreposição), dando a ele o poder temporário de apagar mensagens apenas ali.</p>
      
      <h3>Papéis Padrão do Moodle</h3>
      <p>O Moodle vem com papéis pré-definidos que cobrem os cenários mais comuns:</p>
      <ul>
        <li><strong>Administrador:</strong> Controle total do site (nível Sistema).</li>
        <li><strong>Gerente (Manager):</strong> Administra cursos e categorias sem alterar configurações do site.</li>
        <li><strong>Criador de Cursos:</strong> Pode criar novos cursos e atuar como professor neles.</li>
        <li><strong>Professor (Teacher):</strong> Edita conteúdo, avalia alunos e gerencia atividades dentro do curso.</li>
        <li><strong>Professor Não-Editor:</strong> Avalia e dá feedback, mas não pode alterar a estrutura do curso.</li>
        <li><strong>Estudante:</strong> Acessa conteúdo, realiza atividades e submete trabalhos.</li>
      </ul>
    `,
    quiz: {
      question: "Se um usuário recebe o papel de 'Gerente' (Manager) no contexto da Categoria 'Ciências Humanas', que contém 15 cursos e 3 subcategorias, o que acontece?",
      options: [
        "Ele se torna Gerente de todo o site Moodle, incluindo Ciências Exatas.",
        "Ele herda as permissões de Gerente para os 15 cursos e para todos os cursos dentro das 3 subcategorias, mas NÃO afeta outras categorias.",
        "Ele não pode mais ser aluno em nenhum curso do site.",
        "O Moodle bloqueia a ação, pois Gerentes só existem no Contexto de Sistema."
      ],
      correct_index: 1,
      feedback_correct: "Exatamente! As permissões 'descem' (cascateiam) pela hierarquia. Ele será gerente apenas naquele 'galho' da árvore, incluindo subcategorias."
    }
  }
];
