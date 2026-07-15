export const competencias = [
  {
    id: "m5-competency-frameworks",
    title: "Frameworks de Competências",
    category: "Competências & Planos",
    icon: "psychology",
    content: `
      <p>A <strong>Educação Baseada em Competências (CBE — Competency-Based Education)</strong> representa uma mudança de paradigma: em vez de avaliar se o aluno "passou no curso", o Moodle permite rastrear se ele <em>domina competências específicas</em>. Isso é fundamental para instituições que seguem frameworks nacionais como a <strong>BNCC</strong> (Brasil), <strong>ESCO</strong> (Europa) ou frameworks corporativos de RH.</p>

      <div class="mermaid" style="text-align: center; margin: 2rem 0;">
      flowchart TD
        FW[Framework de Competências<br>Ex: BNCC Matemática] --> C1[Competência: Raciocínio Lógico]
        FW --> C2[Competência: Resolução de Problemas]
        FW --> C3[Competência: Pensamento Algébrico]
        
        C1 --> Esc[Escala: Não Competente → Básico → Proficiente → Avançado]
        C2 --> Esc
        C3 --> Esc
        
        C1 --> Curso1[Curso: Cálculo I<br>Atividade: Quiz Final]
        C2 --> Curso1
        C2 --> Curso2[Curso: Física<br>Atividade: Projeto Lab]
        C3 --> Curso1
      </div>

      <h3>Habilitando Competências</h3>
      <p>Para ativar o sistema de competências, o administrador deve acessar:</p>
      <p><strong>Site Administration → General → Advanced Features → Enable Competencies ✅</strong></p>
      <p>Sem essa ativação, o menu de competências não aparece em nenhum lugar do site.</p>

      <h3>Criando um Framework de Competências</h3>
      <p>Um Framework é o contêiner de nível superior que agrupa competências relacionadas. Para criar:</p>
      <ol>
        <li>Acesse <strong>Site Administration → Competencies → Competency frameworks</strong>.</li>
        <li>Clique em <strong>"Add new competency framework"</strong>.</li>
        <li>Defina o nome (ex: "BNCC Matemática"), a descrição e a <strong>escala de avaliação</strong>.</li>
        <li>Adicione competências individuais dentro do framework, podendo criar hierarquias (competências pai e filhas).</li>
      </ol>

      <h3>Escalas de Competência</h3>
      <p>Cada competência é avaliada numa <strong>escala personalizada</strong>. Exemplos:</p>
      <ul>
        <li><strong>Escala Simples:</strong> "Não competente" → "Competente".</li>
        <li><strong>Escala Detalhada:</strong> "Não demonstrado" → "Básico" → "Proficiente" → "Avançado".</li>
        <li><strong>Escala Numérica:</strong> 1 → 2 → 3 → 4 → 5.</li>
      </ul>
      <p>O administrador define qual nível da escala é o <strong>limiar de proficiência</strong> (ex: "Proficiente" ou nível 3+).</p>

      <h3>Vinculando Competências a Atividades</h3>
      <p>Dentro de um curso, o professor pode vincular competências específicas a atividades avaliativas. Por exemplo, o Quiz Final do Cálculo I pode avaliar simultaneamente "Raciocínio Lógico" e "Pensamento Algébrico". Quando o aluno obtém a nota de aprovação, o Moodle automaticamente marca aquelas competências como atingidas.</p>

      <h3>Importação e Exportação</h3>
      <p>Frameworks inteiros podem ser exportados como <strong>arquivos CSV</strong> e importados em outras instâncias do Moodle. Isso permite que órgãos educacionais criem frameworks padronizados e os distribuam para todas as escolas da rede.</p>
    `,
    quiz: {
      question: "Qual é o primeiro passo obrigatório para habilitar o sistema de Competências em uma instalação Moodle?",
      options: [
        "Criar um curso e adicionar atividades avaliativas.",
        "Acessar Site Administration → General → Advanced Features e marcar 'Enable Competencies'.",
        "Instalar um plugin de terceiros chamado 'Competency Framework Manager'.",
        "Enviar um formulário de solicitação ao Moodle HQ."
      ],
      correct_index: 1,
      feedback_correct: "Correto! Sem habilitar a feature flag em Advanced Features, os menus de competências não aparecem em lugar nenhum do site."
    }
  },
  {
    id: "m5-learning-plans",
    title: "Planos de Aprendizagem (Learning Plans)",
    category: "Competências & Planos",
    icon: "route",
    content: `
      <p>Os <strong>Planos de Aprendizagem (Learning Plans)</strong> são a camada de orquestração que conecta competências individuais a jornadas completas de desenvolvimento. Eles permitem que administradores criem <strong>templates reutilizáveis</strong> e os atribuam em massa a alunos ou coortes inteiras.</p>

      <div class="mermaid" style="text-align: center; margin: 2rem 0;">
      flowchart LR
        Template[Template do Plano<br>Formação em Data Science] --> C1[Competência: Python Básico]
        Template --> C2[Competência: SQL Avançado]
        Template --> C3[Competência: Machine Learning]
        Template --> C4[Competência: Visualização de Dados]
        
        Template -->|Atribuição em massa| Coorte[Coorte: Turma DS 2026<br>200 alunos]
        
        Coorte --> Aluno1[Plano Individual: João<br>2 de 4 competências]
        Coorte --> Aluno2[Plano Individual: Maria<br>4 de 4 competências ✅]
        Coorte --> AlunoN[Plano Individual: Carlos<br>0 de 4 competências]
      </div>

      <h3>Templates de Planos de Aprendizagem</h3>
      <p>Templates são modelos reutilizáveis que definem:</p>
      <ul>
        <li>Quais <strong>competências</strong> devem ser desenvolvidas.</li>
        <li>O <strong>período de validade</strong> do plano (data de início e fim).</li>
        <li>Se o plano é <strong>baseado em datas</strong> (ex: semestre letivo) ou <strong>autogerido</strong> (sem prazo fixo).</li>
      </ul>

      <h3>Atribuição em Massa via Coortes</h3>
      <p>Em vez de atribuir planos individualmente a cada aluno, o administrador pode vincular um template diretamente a uma <strong>Coorte</strong>. Quando um novo aluno é adicionado à coorte, ele recebe automaticamente um plano individual baseado no template. Se o aluno sai da coorte, o plano é desvinculado.</p>

      <h3>Evidências de Aprendizagem Prévia</h3>
      <p>O sistema permite registrar <strong>Evidências de Aprendizagem Prévia (Prior Learning)</strong>. Se um aluno já domina uma competência por experiência profissional ou estudos anteriores, o avaliador pode registrar essa evidência manualmente, marcando a competência como atingida sem que o aluno precise realizar a atividade formal.</p>

      <h3>Papéis e Permissões Necessárias</h3>
      <p>Por padrão, professores de curso <strong>não podem</strong> visualizar os planos de aprendizagem dos alunos. As seguintes capabilities precisam ser atribuídas:</p>
      <ul>
        <li><code>moodle/competency:usercompetencyview</code> — Visualizar competências do aluno.</li>
        <li><code>moodle/competency:usercompetencyreview</code> — Revisar e avaliar competências.</li>
        <li><code>moodle/competency:planmanage</code> — Gerenciar e criar planos de aprendizagem.</li>
      </ul>
      <p>Essas permissões podem ser atribuídas no contexto do Sistema ou da Categoria, dependendo do escopo de atuação do professor.</p>

      <h3>Visualização do Progresso</h3>
      <p>Cada aluno pode acessar seu plano individual e visualizar:</p>
      <ul>
        <li>Quais competências já foram demonstradas (verde).</li>
        <li>Quais estão em progresso (amarelo).</li>
        <li>Quais ainda não foram iniciadas (cinza).</li>
        <li>Detalhes de cada competência com links para as atividades e cursos relacionados.</li>
      </ul>
    `,
    quiz: {
      question: "Como atribuir um Plano de Aprendizagem a 200 alunos de uma turma de forma eficiente no Moodle?",
      options: [
        "Acessar o perfil de cada aluno individualmente e criar um plano manual.",
        "Criar um Template de Plano de Aprendizagem e vinculá-lo a uma Coorte (Cohort), onde os 200 alunos serão atribuídos automaticamente.",
        "Exportar uma planilha CSV com os nomes e enviar por e-mail.",
        "O Moodle não suporta atribuição em massa de planos."
      ],
      correct_index: 1,
      feedback_correct: "Exato! A combinação de Templates + Coortes é a forma escalável de atribuir planos a turmas inteiras, com sincronização automática quando alunos entram ou saem da coorte."
    }
  }
];
