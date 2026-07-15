export const administracao = [
  {
    id: "m4-gradebook",
    title: "Engenharia do Livro de Notas",
    category: "Administração & Gamificação",
    icon: "format_list_numbered",
    content: `
      <p>O <strong>Livro de Notas (Gradebook)</strong> no Moodle não é uma simples planilha estática; é um motor de cálculo em tempo real que recalcula notas e aplica lógicas de negócio em cada mudança de atividade do curso. Ele é organizado em uma <strong>árvore hierárquica de categorias</strong>, onde cada categoria pode ter sua própria estratégia de agregação.</p>

      <div class="mermaid" style="text-align: center; margin: 2rem 0;">
      flowchart TD
        Total["Total do Curso<br>Agregação: Soma Natural"]
        Total --> C1["1º Bimestre<br>Peso: 40%"]
        Total --> C2["2º Bimestre<br>Peso: 60%"]
        
        C1 --> A1("Fórum Avaliativo - 10 pts")
        C1 --> A2("Tarefa Escrita - 20 pts")
        C1 --> A3("Quiz Rápido - 20 pts")
        
        C2 --> A4("Projeto em Grupo - 30 pts")
        C2 --> A5("Prova Final - 50 pts")
        C2 --> A6("Lição Opcional - 10 pts<br>Crédito Extra!")
      </div>

      <h3>Métricas e Tipos de Agregação</h3>
      <p>Para agrupar notas nas categorias, o Moodle oferece estratégias matemáticas poderosas:</p>
      <ul>
        <li><strong>Soma Natural (Natural):</strong> O padrão moderno. Soma os pontos brutos. Se a prova vale 50 e o fórum 10, o total possível é 60. Neste formato, checkboxes permitem aplicar <strong>Pesos Relativos</strong> e definir atividades como <strong>Crédito Extra</strong> (adiciona pontos sem penalizar quem não fez).</li>
        <li><strong>Média Simples (Mean of Grades):</strong> Calcula a média aritmética de todas as atividades que o aluno <em>tentou</em>. Atividades não tentadas são excluídas do cálculo.</li>
        <li><strong>Média Ponderada (Weighted Mean):</strong> Cada atividade recebe um peso manual. Útil quando a prova vale 70% e o fórum 30%.</li>
        <li><strong>Menor Nota (Lowest Grade):</strong> Retorna a menor nota. Pode ser usada com a opção "Excluir X menores" para descartar as piores avaliações.</li>
        <li><strong>Maior Nota (Highest Grade):</strong> Retorna a maior nota. Útil para atividades de recuperação.</li>
        <li><strong>Mediana:</strong> Retorna o valor central das notas, ignorando extremos.</li>
      </ul>

      <img src="/images/moodle_gradebook.png" alt="Interface real do Gradebook Setup no Moodle" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); margin: 2rem 0; border: 1px solid #eaeaea;" />

      <h3>Fórmulas Matemáticas Avançadas</h3>
      <p>A funcionalidade mais poderosa do Livro de Notas é o uso de <strong>Fórmulas no padrão Excel</strong>. Você atribui "Números de Identificação (ID)" para cada atividade e digita lógicas diretamente:</p>
      <ul>
        <li><code>=average([[id1]], [[id2]], [[id3]]) * 0.7 + [[id4]] * 0.3</code> — Média ponderada manual.</li>
        <li><code>=max([[id1]], [[id2]])</code> — Pega a maior nota entre duas provas.</li>
        <li><code>=min([[id1]], [[id2]])</code> — Pega a menor nota.</li>
        <li><code>=if(([[id1]] + [[id2]]) / 2 >= 7, 10, ([[id1]] + [[id2]]) / 2)</code> — Se a média for >= 7, arredonda para 10; senão, mantém a média.</li>
      </ul>
      <p>Essas fórmulas permitem replicar qualquer regimento acadêmico dentro do Moodle sem plugins externos!</p>
    `,
    quiz: {
      question: "No formato de 'Soma Natural' do Moodle, o que acontece quando você marca a opção 'Crédito Extra' em uma atividade avaliativa?",
      options: [
        "A nota daquela atividade é ignorada completamente pelo sistema.",
        "A nota da atividade ajuda o aluno a subir a pontuação na categoria, mas a nota máxima total do curso NÃO aumenta (ou seja, não prejudica quem tirar zero).",
        "O sistema gera um certificado de honra ao mérito automaticamente.",
        "A atividade passa a valer o dobro dos pontos automaticamente."
      ],
      correct_index: 1,
      feedback_correct: "Correto! Crédito Extra atua como uma 'ajuda' na soma bruta, permitindo recuperar pontos perdidos em provas sem inflar a pontuação máxima exigida no denominador."
    }
  },
  {
    id: "m4-badges",
    title: "Badges (Emblemas) e Gamificação",
    category: "Administração & Gamificação",
    icon: "emoji_events",
    content: `
      <p>Baseados no padrão <strong>Mozilla OpenBadges 2.0</strong>, os Emblemas do Moodle carregam metadados criptográficos na própria imagem PNG, permitindo que os alunos os exportem para plataformas externas como <strong>Badgr</strong> e <strong>LinkedIn</strong>, onde empregadores podem validar matematicamente a autenticidade do certificado digital.</p>
      <img src="/images/moodle_badge_create.png" alt="Tela de criação de emblemas (badges) no Moodle" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); margin: 2rem 0; border: 1px solid #eaeaea;" />

      <div class="mermaid" style="text-align: center; margin: 2rem 0;">
      sequenceDiagram
        participant A as Aluno
        participant M as Moodle
        participant B as Motor de Badges
        participant E as Plataforma Externa
        
        A->>M: Completa todas as atividades exigidas
        M->>B: Evento: Critérios de Emissão Satisfeitos
        B->>B: Gera PNG com metadados criptografados
        B->>A: Notificação + E-mail: Emblema Conquistado!
        A->>A: Visualiza Badge no Perfil Moodle
        A->>E: Exporta Badge para Badgr / LinkedIn
        E->>E: Valida Hash criptográfico do emissor
        E-->>A: Badge verificado e exibido publicamente
      </div>

      <h3>Engenharia de Concessão</h3>
      <p>Os critérios de emissão não se limitam à conclusão do curso atual. Os Emblemas suportam gatilhos nativos poderosos:</p>
      <ul>
        <li><strong>Conclusão de Atividades Específicas:</strong> O badge é emitido quando o aluno conclui atividades X, Y e Z dentro do mesmo curso.</li>
        <li><strong>Conclusão de Múltiplos Cursos (Super-Badge):</strong> Um badge de "Especialista" emitido apenas quando o sistema confirma que o aluno completou Cálculo 1, Cálculo 2 E Física Geral.</li>
        <li><strong>Concessão Manual por Papel:</strong> Professores, Gerentes ou Administradores podem conceder emblemas manualmente (útil para premiar "Participação Destaque" ou "Melhor Projeto").</li>
        <li><strong>Competências:</strong> Badge emitido quando o aluno demonstra proficiência em um conjunto de competências definido no Framework de Competências.</li>
        <li><strong>Data Limite:</strong> "Badge Primeira Classe" programado para ser emitido apenas para quem bater as metas até uma data específica, criando senso de urgência.</li>
      </ul>

      <h3>Psicologia por Trás da Gamificação</h3>
      <p>Badges não são apenas "figurinhas digitais". Eles ativam os circuitos de recompensa do cérebro, especialmente quando combinados com:</p>
      <ul>
        <li><strong>Escassez:</strong> Badges com data limite ou disponíveis apenas para os primeiros 10 alunos.</li>
        <li><strong>Progressão Visual:</strong> Uma coleção de badges no perfil do aluno cria um senso de conquista acumulada.</li>
        <li><strong>Validação Social:</strong> A exportação para LinkedIn transforma o aprendizado em credencial profissional verificável.</li>
      </ul>
    `,
    quiz: {
      question: "O que diferencia tecnicamente um Badge do Moodle de uma simples imagem PNG enviada por e-mail?",
      options: [
        "Nada, é apenas uma imagem decorativa sem valor técnico.",
        "O Badge segue o padrão OpenBadges e carrega metadados criptográficos do emissor e do aluno DENTRO do próprio PNG, permitindo validação pública em plataformas como LinkedIn e Badgr.",
        "O Badge é um arquivo PDF protegido por senha.",
        "O Badge só funciona se o aluno estiver conectado ao Moodle."
      ],
      correct_index: 1,
      feedback_correct: "Exatamente! Graças à integração OpenBadges, certificados de microlearning emitidos no seu Moodle podem ser auditados publicamente por empresas e recrutadores!"
    }
  },
  {
    id: "m4-conclusion",
    title: "Projeto Final: Arquitetura de Produção",
    category: "Administração & Gamificação",
    icon: "workspace_premium",
    content: `
      <p>Compreender os alicerces teóricos e a engenharia de software do Moodle 5.2 eleva seu projeto a outro patamar. Implementar um LMS robusto requer a união de UX (Experiência do Usuário) com as lógicas determinísticas que vimos: Papéis, Coortes, Gradebook, Restrições Condicionais, IA e Competências.</p>

      <div style="background: linear-gradient(135deg, rgba(249,128,18,0.1) 0%, rgba(11,92,255,0.1) 100%); border: 1px solid #cce4fc; border-radius: 12px; padding: 2rem; margin: 2rem 0;">
        <h3 style="color: #0b5cff; margin-top: 0; display:flex; align-items:center;">
          <span class="material-icons-round" style="margin-right:10px;">done_all</span> Mapa de Decisão Profissional — Moodle 5.2
        </h3>
        <p>Ao receber um requisito de negócio, use estas equivalências estruturais:</p>
        <ul style="font-size: 1.05rem; line-height: 2;">
          <li>Matrícula de massa em Turmas Físicas = <strong>Sincronização de Coortes (Cohorts)</strong>.</li>
          <li>Delegar coordenação de área = <strong>Papel de Gerente atribuído na Categoria</strong>.</li>
          <li>Média Ponderada = <strong>Soma Natural no Gradebook + Pesos Checkbox Ativados</strong>.</li>
          <li>Jornada Gamificada = <strong>Conclusão Automática + Restrição de Acesso + Badges</strong>.</li>
          <li>Prova de Certificação = <strong>Quiz + Safe Exam Browser (SEB)</strong>.</li>
          <li>Geração de Conteúdo = <strong>Provedores de IA (Gemini/Bedrock)</strong>.</li>
          <li>Provas com Banca = <strong>Multiple Markers (Avaliação Colaborativa)</strong>.</li>
          <li>Educação por Competências = <strong>Frameworks de Competências + Learning Plans</strong>.</li>
          <li>Relatórios Customizados = <strong>Report Builder com filtros avançados</strong>.</li>
          <li>Versionamento de Provas = <strong>Banco de Questões Compartilhado + Versionamento</strong>.</li>
        </ul>
      </div>

      <div style="text-align: center; padding: 3rem 0;">
        <span class="material-icons-round" style="font-size: 5rem; color: #f98012;">stars</span>
        <h2 style="color: #f98012;">Projeto Mestre Concluído!</h2>
        <p style="font-size: 1.15rem; max-width: 650px; margin: 0 auto; color: #555;">Você acaba de concluir a leitura da documentação mais aprofundada e atualizada do Moodle 5.2, cobrindo desde fundamentos de navegação até inteligência artificial, bancos de questões versionados, competências e infraestrutura de produção.</p>
      </div>
    `,
    quiz: {
      question: "Qual combinação de mecanismos seria ideal para criar um curso 100% autogerido onde o aluno recebe um badge ao final, após cumprir todas as metas condicionais?",
      options: [
        "Inscrição Manual + Fórum Social aberto.",
        "Conclusão de Atividades Automática (exigindo nota mínima) + Restrição de Acesso (desbloqueio progressivo) + Badge com critério de Conclusão do Curso.",
        "Sincronização de Coortes + Report Builder.",
        "Safe Exam Browser + Backup Automático."
      ],
      correct_index: 1,
      feedback_correct: "Brilhante! Conclusão Automática + Restrição de Acesso + Badge é a tríade da gamificação estrutural perfeita no Moodle 5.2."
    }
  }
];
