export const cursos = [
  {
    id: "m4-course-creation",
    title: "O Construtor de Cursos e UX",
    category: "Cursos & Módulos",
    icon: "library_add",
    content: `
      <p>A filosofia do Moodle 5.2 para a construção de cursos é: <strong>"Mantenha o professor no contexto"</strong>. Antigamente, para mover uma atividade ou mudar uma configuração, o professor era redirecionado para páginas longas de formulários. Hoje, a edição ocorre de forma fluida e direta na tela, com operações AJAX que salvam sem recarregar a página.</p>

      <div class="mermaid" style="text-align: center; margin: 2rem 0;">
      sequenceDiagram
        participant P as Professor
        participant T as Tela do Curso
        participant M as Modal / Drawer
        participant S as Servidor Moodle
        
        P->>T: Ativa Modo de Edição (Toggle)
        T-->>P: Exibe ícones de Drag-and-Drop
        P->>T: Arrasta Atividade para Tópico 2
        T->>S: Salva posição via AJAX
        S-->>T: Confirmação silenciosa
        P->>T: Clica em "Adicionar Atividade"
        T->>M: Abre Activity Chooser (Modal)
        M-->>P: Lista categorizada de atividades
        P->>M: Seleciona "Fórum" e configura
        M->>S: Salva e fecha modal
        S-->>T: Retorna tela intacta com novo Fórum
      </div>

      <h3>A Mágica do "Modo de Edição"</h3>
      <p>Ao ativar o <em>Toggle Switch</em> no canto superior, toda a tela ganha superpoderes. O grande destaque é o suporte a <strong>Drag-and-Drop Bidirecional</strong>: você pode mover uma atividade arrastando-a na região central (útil para mover pertinho) ou arrastando-a diretamente para o <strong>Course Index</strong> (gaveta esquerda) se precisar enviá-la lá para o Módulo 15 sem rolar a tela!</p>

      <img src="/images/moodle_course_edit.png" alt="Interface real do Modo de Edição de Cursos no Moodle" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); margin: 2rem 0; border: 1px solid #eaeaea;" />

      <h3>O Activity Chooser</h3>
      <p>O botão <em>"Adicionar uma atividade ou recurso"</em> abre o <strong>Activity Chooser</strong>, um modal categorizado que exibe todas as atividades e recursos disponíveis com ícones, descrições e até uma funcionalidade de busca. No Moodle 5.2, atividades favoritas e as mais usadas aparecem em destaque no topo, agilizando o fluxo de trabalho do professor.</p>

      <h3>Formatos de Curso</h3>
      <p>O Moodle oferece diferentes layouts para organizar o conteúdo:</p>
      <ul>
        <li><strong>Formato por Tópicos:</strong> O padrão. Cada seção é um tópico numerado. Ideal para cursos autogeridos sem data fixa.</li>
        <li><strong>Formato Semanal:</strong> Cada seção corresponde a uma semana do calendário. Ideal para turmas presenciais com cronograma definido.</li>
        <li><strong>Formato de Atividade Única:</strong> O curso inteiro é uma única atividade (ex: um SCORM ou um questionário). Perfeito para treinamentos corporativos pontuais.</li>
        <li><strong>Formato Social:</strong> O curso é essencialmente um grande Fórum. Utilizado para comunidades de prática e discussões abertas.</li>
      </ul>

      <h3>Transparência de Restrições (Novo no 5.2)</h3>
      <p>No Moodle 5.2, conteúdo restringido por regras de acesso ou conclusão agora exibe <strong>páginas dedicadas</strong> explicando as condições de disponibilidade. Antes, o aluno via apenas um ícone cinza sem entender o porquê. Agora, ele recebe uma explicação clara do tipo: <em>"Este módulo estará disponível quando você concluir o Fórum de Discussão com nota mínima de 7.0"</em>.</p>

      <h3>Padrões de Nomenclatura</h3>
      <p>Todo curso exige um <strong>Nome Completo</strong> (exibido no topo) e um <strong>Nome Curto</strong>. O Nome Curto é um identificador único de banco de dados (ex: <code>MAT101-2026</code>). Ele é fundamental pois é usado como chave em integrações LDAP, migrações de CSV e exibido no Breadcrumb de navegação para economizar espaço.</p>
    `,
    quiz: {
      question: "No Moodle 5.2, o que acontece quando um aluno tenta acessar um conteúdo restringido por regras de Conclusão de Atividades?",
      options: [
        "O conteúdo simplesmente desaparece sem explicação.",
        "O aluno vê uma página dedicada explicando claramente quais condições precisa cumprir para desbloquear o conteúdo.",
        "O sistema envia um e-mail automático ao professor pedindo autorização.",
        "O Moodle mostra uma página de erro 404."
      ],
      correct_index: 1,
      feedback_correct: "Correto! O Moodle 5.2 introduziu transparência nas restrições, substituindo ícones cinzas confusos por páginas explicativas dedicadas."
    }
  },
  {
    id: "m4-enroll",
    title: "Engenharia de Inscrições em Massa",
    category: "Cursos & Módulos",
    icon: "how_to_reg",
    content: `
      <p>A escalabilidade de um LMS (Learning Management System) é medida pela facilidade com que ele gerencia milhares de acessos. O Moodle possui diversos <strong>Plugins de Inscrição</strong> modulares que podem ser ligados ou desligados independentemente. Cada curso pode ter múltiplos métodos de inscrição ativos simultaneamente.</p>

      <div class="mermaid" style="text-align: center; margin: 2rem 0;">
      graph LR
        subgraph Fontes Externas
          LDAP[Active Directory / LDAP]
          CSV[Planilha CSV Automática]
          API[Integração API / SIGAA]
        end
        
        subgraph Motor de Inscrição Moodle
          Manual[Inscrição Manual]
          Auto[Autoinscrição com Senha]
          C[Coortes / Grupos Globais]
          Guest[Acesso como Visitante]
        end
        
        subgraph Cursos Moodle
          M1[Matemática<br>200 alunos]
          M2[Física<br>150 alunos]
          M3[MOOC Aberto<br>5.000 alunos]
        end
        
        LDAP --> C
        CSV --> C
        API --> C
        
        C -->|Cohort Sync| M1
        C -->|Cohort Sync| M2
        Auto --> M3
        Manual --> M1
        Guest --> M3
      </div>

      <h3>Sincronização de Coortes (Cohort Sync)</h3>
      <p>Um <strong>Coorte (Cohort)</strong> é um grupo definido a nível de sistema ou de categoria (Ex: "Turma de Enfermagem Noturno 2026"). Em vez de matricular 200 alunos manualmente nos 10 cursos da grade deles, você vincula a Coorte aos 10 cursos usando o método <strong>Sincronização de Coorte</strong>. Se o Joãozinho trancar a matrícula e for removido da Coorte pelo sistema acadêmico (via LDAP ou API), ele perde o acesso aos 10 cursos de forma instantânea e automática, sem intervenção humana!</p>

      <h3>Inscrição Manual e Papéis</h3>
      <p>O método mais básico, onde o professor ou administrador adiciona participantes um a um. Ao inscrever manualmente, você define o <strong>papel</strong> (Estudante, Professor Não-Editor, etc.) e opcionalmente uma <strong>data de expiração</strong> da matrícula. Útil para cursos pequenos ou para adicionar co-professores e monitores.</p>

      <h3>Autoinscrição e Chaves de Grupo</h3>
      <p>Para cursos abertos (MOOCs) ou treinamentos corporativos, a <strong>Autoinscrição</strong> é o padrão ouro. O sistema permite configurar senhas (<strong>Chaves de Inscrição</strong>). Um truque avançado é criar <strong>Chaves de Inscrição de Grupo</strong>: se um usuário usar a senha "TURMA-A", ele é matriculado no curso E automaticamente colocado dentro do grupo "Turma A". Usando a senha "TURMA-B", vai para o grupo "Turma B". Isso permite que o professor filtre relatórios, notas e fóruns separados por turma, tudo dentro de um único curso!</p>
      
      <h3>Acesso como Visitante (Guest Access)</h3>
      <p>Permite que usuários não autenticados (ou autenticados mas não inscritos) visualizem o conteúdo do curso sem poder interagir (não podem postar em fóruns, enviar tarefas ou fazer provas). Ideal para cursos demonstrativos ou catálogos de cursos abertos.</p>
    `,
    quiz: {
      question: "Se a sua universidade já possui um sistema acadêmico (SIGAA) e deseja que os alunos percam o acesso ao Moodle caso tranquem a matrícula, qual o fluxo ideal?",
      options: [
        "Inscrição Manual pelos professores todo semestre, excluindo alunos um a um.",
        "O sistema acadêmico atualiza uma Coorte via API, e os cursos utilizam 'Cohort Sync'. Quando o aluno sai da Coorte, o acesso cai automaticamente em todos os cursos vinculados.",
        "Deixar o curso público e enviar as senhas por WhatsApp.",
        "Excluir a conta do usuário do Moodle inteiro."
      ],
      correct_index: 1,
      feedback_correct: "Brilhante! O 'Cohort Sync' é a espinha dorsal de qualquer integração corporativa ou acadêmica robusta, eliminando trabalho manual repetitivo."
    }
  }
];
