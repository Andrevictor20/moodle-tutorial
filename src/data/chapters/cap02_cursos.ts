export const cursos = [
  {
    id: "m4-course-creation",
    title: "O Construtor de Cursos e UX",
    category: "Cursos & Módulos",
    icon: "library_add",
    content: `
      <p>A filosofia do Moodle 4.x para a construção de cursos é: <strong>"Mantenha o professor no contexto"</strong>. Antigamente, para mover uma atividade ou mudar uma configuração, o professor era redirecionado para páginas longas de formulários. Hoje, a edição ocorre de forma fluida e direta na tela.</p>
      
      <div class="mermaid" style="text-align: center; margin: 2rem 0;">
      sequenceDiagram
        participant P as Professor
        participant T as Tela do Curso
        participant M as Modal
        
        P->>T: Ativa Modo de Edição (Toggle)
        T-->>P: Exibe ícones de Drag-and-Drop
        P->>T: Arrasta Atividade A para o Tópico 2
        T-->>P: Salva via AJAX (Sem refresh)
        P->>T: Clica em "Adicionar Atividade"
        T-->>M: Abre Modal sobreposto
        M-->>P: Seleciona "Fórum"
        P->>M: Preenche dados básicos e Salva
        M-->>T: Fecha modal e retorna a tela intacta
      </div>

      <h3>A Mágica do "Modo de Edição"</h3>
      <p>Ao ativar o <em>Toggle Switch</em> no canto superior, toda a tela ganha superpoderes. O grande destaque é o suporte a <strong>Drag-and-Drop Bidirecional</strong>: você pode mover uma atividade arrastando-a na região central (útil para mover pertinho) ou arrastando-a diretamente para o <strong>Course Index</strong> (gaveta esquerda) se precisar enviá-la lá para o Módulo 15 sem rolar a tela!</p>
      
      <h3>Padrões de Nomenclatura</h3>
      <p>Todo curso exige um <strong>Nome Completo</strong> (exibido no topo) e um <strong>Nome Curto</strong>. O Nome Curto é um identificador único de banco de dados (ex: <code>MAT101-2026</code>). Ele é fundamental pois é usado como chave em integrações LDAP, migrações de CSV e exibido no Breadcrumb de navegação para economizar espaço.</p>
    `,
    quiz: {
      question: "Por que o 'Nome Curto' de um curso é tão importante na arquitetura do Moodle?",
      options: [
        "Porque ele é a única coisa que os alunos podem ler.",
        "Ele funciona como um identificador único (ID) no banco de dados, sendo essencial para integrações, plugins de matrícula externa (CSV) e breadcrumbs.",
        "Ele determina o limite de alunos que podem se matricular.",
        "É apenas uma questão estética sem impacto técnico."
      ],
      correct_index: 1,
      feedback_correct: "Correto! Nomes Curtos são chaves de integração técnica e navegação compacta."
    }
  },
  {
    id: "m4-enroll",
    title: "Engenharia de Inscrições em Massa",
    category: "Cursos & Módulos",
    icon: "how_to_reg",
    content: `
      <p>A escalabilidade de um LMS (Learning Management System) é medida pela facilidade com que ele gerencia milhares de acessos. O Moodle possui diversos "Plugins de Inscrição" modulares que podem ser ligados ou desligados.</p>
      
      <div class="mermaid" style="text-align: center; margin: 2rem 0;">
      graph LR
        subgraph Fontes Externas
          LDAP[Active Directory / LDAP]
          CSV[Planilha CSV Automática]
          API[Integração API / SIGAA]
        end
        
        subgraph Motor Moodle
          C[Cohorts / Grupos Globais]
        end
        
        subgraph Cursos Moodle
          M1[Matemática]
          M2[Física]
        end
        
        LDAP --> C
        CSV --> C
        API --> C
        
        C -->|Cohort Sync| M1
        C -->|Cohort Sync| M2
      </div>

      <h3>Sincronização de Coortes (Cohort Sync)</h3>
      <p>Um "Coorte" é um grupo a nível de sistema (Ex: "Turma de Enfermagem Noturno 2026"). Em vez de matricular 200 alunos manualmente nos 10 cursos da grade deles, você vincula a Coorte aos 10 cursos usando o método <strong>Sincronização de Coorte</strong>. Se o Joãozinho trancar a matrícula e for removido da Coorte pelo sistema acadêmico (via LDAP ou API), ele perde o acesso aos 10 cursos de forma instantânea e automática!</p>
      
      <h3>Autoinscrição e Chaves (Self-Enrollment)</h3>
      <p>Para cursos abertos (MOOCs), a Autoinscrição é o padrão ouro. O sistema permite configurar senhas (Chaves de Inscrição). Um truque avançado é criar <strong>Chaves de Inscrição de Grupo</strong>. Se um usuário usar a senha "VIP", ele é matriculado no curso E colocado dentro do grupo "Alunos VIPs", permitindo ao professor filtrar relatórios específicos só para aquele grupo.</p>
    `,
    quiz: {
      question: "Se a sua universidade já possui um sistema acadêmico e deseja que os alunos percam o acesso ao Moodle caso tranque a matrícula, qual o fluxo ideal?",
      options: [
        "Inscrição Manual pelos professores todo semestre.",
        "O sistema acadêmico atualiza uma Coorte (Cohort), e os cursos utilizam 'Cohort Sync'. Assim que ele sai da Coorte, o acesso cai automaticamente.",
        "Deixar o curso público e enviar as senhas por WhatsApp.",
        "Excluir a conta do usuário."
      ],
      correct_index: 1,
      feedback_correct: "Brilhante! O 'Cohort Sync' é a espinha dorsal de qualquer integração corporativa ou acadêmica robusta."
    }
  }
];
