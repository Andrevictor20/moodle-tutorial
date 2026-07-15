export const cursos = [
  {
    id: "m4-course-creation",
    title: "O Novo Construtor de Cursos",
    category: "Cursos & Módulos",
    icon: "library_add",
    content: `
      <p>A experiência de criar cursos no Moodle mudou drasticamente. Diga adeus aos cliques intermináveis para mover recursos de lugar!</p>
      <img src="/images/moodle_course_creation_premium.png" alt="Construtor de Cursos" style="width: 100%; border-radius: 8px; margin: 1.5rem 0; box-shadow: 0 4px 15px rgba(0,0,0,0.1);" />
      <h3>A Mágica do "Modo de Edição"</h3>
      <p>Ao ativar o toggle switch no canto superior, a tela inteira se transforma:</p>
      <ul>
        <li><strong>Drag and Drop Aprimorado:</strong> Agora você pode arrastar módulos inteiros ou atividades individuais diretamente pelo <strong>Índice do Curso (Course Index)</strong> na barra lateral esquerda!</li>
        <li><strong>Seletor de Atividades Flutuante:</strong> Clicar em "Adicionar atividade ou recurso" abre um modal lindo, com abas para Atividades, Recursos e até "Recomendados/Favoritos" com ícones coloridos.</li>
        <li><strong>Navegação sem Refresh:</strong> Várias configurações agora abrem em janelas modais laterais, evitando que o professor perca sua posição no curso.</li>
      </ul>
      <p>Ao criar um curso, lembre-se sempre de preencher um <strong>Nome Curto</strong> objetivo, pois é ele que aparecerá na navegação principal e em migrações via CSV.</p>
    `,
    quiz: {
      question: "Qual o grande benefício do novo Índice de Curso (Course Index) ao construir um curso?",
      options: [
        "Ele gera vídeos automaticamente.",
        "Ele permite arrastar e soltar (drag and drop) atividades para reorganizá-las rapidamente sem ter que rolar a tela principal.",
        "Ele proíbe alunos de pular tópicos.",
        "Ele deleta seções antigas."
      ],
      correct_index: 1,
      feedback_correct: "Exato! O Course Index na esquerda serve tanto para navegação quanto para reorganizar todo o esqueleto do curso rapidamente via drag-and-drop."
    }
  },
  {
    id: "m4-formats",
    title: "Formatos e Layouts de Curso",
    category: "Cursos & Módulos",
    icon: "view_quilt",
    content: `
      <p>O Moodle oferece diversas formas de organizar as "pastinhas" ou módulos do seu curso. O formato escolhido muda drasticamente a estética.</p>
      <ul>
        <li><strong>Tópicos (Padrão do Moodle 4):</strong> O conteúdo é empilhado em seções chamadas "Tópicos". O Moodle 4 introduziu a capacidade nativa de <em>recolher (Collapse)</em> tópicos em acordeões. Se você tiver 20 tópicos, o aluno não precisa rolar eternamente para baixo!</li>
        <li><strong>Formato Semanal:</strong> Ideal para turmas EAD com cronograma fixo. Em vez de "Tópico 1", o sistema nomeia automaticamente como "12 de Abril a 18 de Abril".</li>
        <li><strong>Formato Social:</strong> Focado 100% num Fórum gigante na página inicial. Bom para comunidades de prática ou mural de avisos institucionais.</li>
      </ul>
      <p>Dica: Existem dezenas de formatos extras criados pela comunidade (plugins como "Tiles", "Grid", "Onetopic"). Instalá-los eleva a beleza do curso a um nível de Netflix!</p>
    `,
    quiz: {
      question: "Qual formato de curso é ideal se eu tenho um cronograma onde os alunos devem acessar um módulo específico a cada semana?",
      options: [
        "Formato Social",
        "Formato Grid",
        "Formato Semanal",
        "Tópico Único"
      ],
      correct_index: 2,
      feedback_correct: "Correto! O formato Semanal mapeia as datas automaticamente e até mesmo grifa a semana atual com uma cor de destaque para o aluno não se perder."
    }
  },
  {
    id: "m4-enroll",
    title: "Inscrições e Autoinscrições",
    category: "Cursos & Módulos",
    icon: "how_to_reg",
    content: `
      <p>Matricular alunos no Moodle pode ser feito de várias formas, dependendo do tamanho da sua escola:</p>
      <ol>
        <li><strong>Inscrição Manual:</strong> O professor ou gerente pesquisa o nome do usuário e clica em "Matricular". Viável apenas para turmas pequenininhas (10 a 20 pessoas).</li>
        <li><strong>Autoinscrição (Self-enrollment):</strong> A favorita de todos! O aluno procura o curso, clica em "Inscrever-me" e entra sozinho. Opcionalmente, você pode configurar uma <strong>Chave de Inscrição (Senha)</strong>, limitando a entrada apenas a quem comprou ou recebeu o código.</li>
        <li><strong>Inscrição por Coorte (Cohort):</strong> Um "Coorte" é uma Turma global (Ex: "Turma de Enfermagem 2026"). Se você inscrever a Coorte no curso de Anatomia, todos os 200 alunos são matriculados instantaneamente! Se um aluno sair da Coorte, ele perde acesso ao curso.</li>
        <li><strong>Upload de Lote (CSV):</strong> O administrador faz o upload de uma planilha do Excel já colocando os alunos dentro dos cursos corretos.</li>
      </ol>
    `,
    quiz: {
      question: "Qual o melhor método para matricular automaticamente 300 alunos em 5 cursos simultâneos usando grupos globais do sistema?",
      options: [
        "Inscrição Manual, clicando aluno por aluno em cada curso.",
        "Deixar o curso público e sem senha.",
        "Inscrição via Coorte (Cohort sync).",
        "Autoinscrição usando uma senha fácil de adivinhar."
      ],
      correct_index: 2,
      feedback_correct: "Brilhante! Coortes sincronizam turmas globais, economizando milhares de cliques do administrador."
    }
  }
];
