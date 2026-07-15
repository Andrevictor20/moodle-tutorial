export const questoes = [
  {
    id: "m5-qbank-sharing",
    title: "Bancos de Questões Compartilhados",
    category: "Banco de Questões",
    icon: "share",
    content: `
      <p>O Moodle 5.x revolucionou a forma como as questões são organizadas e compartilhadas. Antes, as questões ficavam presas ao curso onde foram criadas. Agora, o sistema suporta <strong>Bancos de Questões Compartilhados (Shared Question Banks)</strong>, permitindo que professores reutilizem e colaborem na criação de avaliações entre diferentes cursos.</p>

      <div class="mermaid" style="text-align: center; margin: 2rem 0;">
      flowchart TD
        ProfA[Professor A<br>Criador do Banco] --> BQ[Banco de Questões Compartilhado<br>250 questões de Matemática]
        ProfA -->|Concede Acesso| ProfB[Professor B<br>Colaborador]
        
        BQ --> Q1[Quiz: Prova de Cálculo I<br>Curso de Engenharia]
        BQ --> Q2[Quiz: Simulado de Cálculo<br>Curso de Física]
        BQ --> Q3[Quiz: Revisão de Matemática<br>Curso de Química]
        
        ProfB -->|Adiciona questões| BQ
      </div>

      <h3>Arquitetura de Compartilhamento</h3>
      <p>No Moodle 5.x, os bancos de questões operam em dois contextos:</p>
      <ul>
        <li><strong>Questões de Quiz:</strong> Questões criadas diretamente dentro de um Quiz ficam restritas ao contexto daquele questionário específico. São ideais para perguntas ad-hoc.</li>
        <li><strong>Bancos de Questões do Curso:</strong> Acessados via <em>Navegação do Curso → Mais → Bancos de Questões</em>, essas questões podem ser compartilhadas entre múltiplos cursos e com outros professores.</li>
      </ul>

      <img src="/images/moodle_question_bank.png" alt="Interface real do Banco de Questões no Moodle" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); margin: 2rem 0; border: 1px solid #eaeaea;" />
      
      <h3>Gerenciamento de Acesso</h3>
      <p>O proprietário de um banco pode conceder acesso a outros professores, que passam a poder:</p>
      <ul>
        <li>Visualizar e usar as questões em seus próprios quizzes.</li>
        <li>Adicionar novas questões ao banco compartilhado (se tiver permissão de edição).</li>
        <li>Criar cópias locais de questões para personalização.</li>
      </ul>

      <h3>Status de Questão: Draft vs Ready</h3>
      <p>Para coordenar equipes, o Moodle 5.x introduziu <strong>status de questão</strong>:</p>
      <ul>
        <li><strong>Draft (Rascunho):</strong> A questão está em desenvolvimento. <em>Não pode</em> ser adicionada a nenhum questionário. Perfeita para trabalho em andamento.</li>
        <li><strong>Ready (Pronta):</strong> A questão foi finalizada e revisada. Pode ser usada em quizzes.</li>
      </ul>
      <p>Esse workflow impede que questões incompletas ou com erros sejam acidentalmente apresentadas aos alunos!</p>

      <h3>Migração Automática na Atualização</h3>
      <p>Ao atualizar de Moodle 4.x para 5.x, as questões existentes são automaticamente migradas para um banco compartilhado nomeado como <em>"[Nome do Curso] shared question bank"</em>. É recomendado revisar a estrutura de categorias após a migração.</p>
    `,
    quiz: {
      question: "No Moodle 5.x, o que acontece se você tentar adicionar uma questão com status 'Draft' a um Questionário?",
      options: [
        "A questão é adicionada normalmente sem restrições.",
        "O sistema IMPEDE a adição, pois questões em 'Draft' precisam ser marcadas como 'Ready' antes de serem usadas em provas.",
        "A questão é adicionada mas aparece em cinza para o aluno.",
        "O Moodle converte automaticamente o status para 'Ready'."
      ],
      correct_index: 1,
      feedback_correct: "Correto! O sistema de status Draft/Ready funciona como um gate de qualidade, impedindo que questões inacabadas cheguem aos alunos."
    }
  },
  {
    id: "m5-qbank-versioning",
    title: "Versionamento e Categorias Avançadas",
    category: "Banco de Questões",
    icon: "history",
    content: `
      <p>O Moodle 5.x implementou um sistema completo de <strong>versionamento de questões</strong>, permitindo que professores editem perguntas com segurança, sabendo que podem reverter para versões anteriores a qualquer momento. No Moodle 5.2, as categorias de questões ganharam ainda mais recursos de usabilidade.</p>

      <div class="mermaid" style="text-align: center; margin: 2rem 0;">
      stateDiagram-v2
        [*] --> Criação: Professor cria questão
        Criação --> Draft: Status inicial
        Draft --> Ready: Revisão aprovada
        Ready --> EmUso: Adicionada ao Quiz
        EmUso --> NovaVersão: Professor edita
        NovaVersão --> Draft: v2 inicia como Draft
        Draft --> Ready: Revisada novamente
        NovaVersão --> Rollback: Reverter para v1
        Rollback --> EmUso: Versão anterior restaurada
      </div>

      <h3>Como Funciona o Versionamento</h3>
      <p>Cada vez que uma questão é editada, o Moodle cria uma <strong>nova versão</strong> automaticamente. A versão anterior é preservada intacta no histórico. Isso significa que:</p>
      <ul>
        <li>Se um professor alterar o enunciado de uma questão que já foi aplicada em uma prova, os <strong>resultados históricos não são afetados</strong> — eles continuam vinculados à versão original.</li>
        <li>O menu de <strong>Ações → Histórico</strong> permite visualizar todas as versões anteriores, comparar mudanças e restaurar qualquer versão.</li>
        <li>Quizzes podem ser configurados para usar sempre a <strong>última versão</strong> ou uma <strong>versão específica</strong> de cada questão.</li>
      </ul>

      <h3>Novidades de Categorias no Moodle 5.2</h3>
      <p>O gerenciamento de categorias recebeu melhorias significativas:</p>
      <ul>
        <li><strong>Drag-and-Drop:</strong> Reorganize categorias arrastando-as para novas posições na hierarquia.</li>
        <li><strong>Collapse/Expand:</strong> Categorias com muitas subcategorias podem ser colapsadas para melhor visualização.</li>
        <li><strong>Edição In-Place:</strong> Renomeie categorias diretamente na lista, sem abrir formulários separados.</li>
        <li><strong>Badges com Contagem:</strong> Cada categoria exibe o número total de questões, oferecendo visibilidade instantânea do tamanho dos bancos.</li>
      </ul>

      <h3>Filtros Avançados</h3>
      <p>Para bancos com centenas ou milhares de questões, o Moodle 5.2 oferece filtros poderosos:</p>
      <ul>
        <li>Filtrar por <strong>tipo de questão</strong> (múltipla escolha, dissertativa, numérica, etc.).</li>
        <li>Filtrar por <strong>categoria</strong> e subcategorias.</li>
        <li>Filtrar por <strong>status</strong> (Draft ou Ready).</li>
        <li>Filtrar por <strong>data de criação/modificação</strong>.</li>
        <li>Filtrar por <strong>autor</strong> (quem criou a questão).</li>
      </ul>
      <p>Esses filtros combinados permitem que coordenadores de disciplina gerenciem bancos enormes de forma eficiente, encontrando exatamente a questão que precisam em segundos.</p>
    `,
    quiz: {
      question: "Se um professor editar o enunciado de uma questão que já foi aplicada em 3 provas anteriores, o que acontece com os resultados dessas provas?",
      options: [
        "Todos os resultados são recalculados com o novo enunciado.",
        "Os resultados históricos permanecem intactos vinculados à versão original, pois o Moodle cria uma nova versão da questão a cada edição.",
        "As provas anteriores são automaticamente invalidadas.",
        "O sistema bloqueia a edição para proteger os resultados."
      ],
      correct_index: 1,
      feedback_correct: "Exato! O versionamento garante integridade histórica. Editar uma questão nunca afeta retroativamente os resultados de provas já aplicadas."
    }
  }
];
