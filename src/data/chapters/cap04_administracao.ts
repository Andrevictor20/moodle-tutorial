export const administracao = [
  {
    id: "m4-gradebook",
    title: "Engenharia do Livro de Notas",
    category: "Administração & Gamificação",
    icon: "format_list_numbered",
    content: `
      <p>O <strong>Livro de Notas (Gradebook)</strong> no Moodle não é uma simples planilha estática; é um motor de cálculo em tempo real que recalcula notas e aplica lógicas de negócio em cada mudança de atividade do curso.</p>
      
      <div class="mermaid" style="text-align: center; margin: 2rem 0;">
      flowchart TD
        Total[Total do Curso]
        Total --> C1[Categoria: 1º Bimestre<br>Peso: 40%]
        Total --> C2[Categoria: 2º Bimestre<br>Peso: 60%]
        
        C1 --> A1(Fórum 1 - Nota 10)
        C1 --> A2(Tarefa 1 - Nota 8)
        
        C2 --> A3(Prova Final - Nota 7)
        C2 --> A4(Lição Opcional - Nota 10<br>Extra Credit!)
        
        style Total fill:#ffe58f,stroke:#faad14,stroke-width:2px
        style C1 fill:#f6ffed,stroke:#52c41a,stroke-width:2px
        style C2 fill:#f6ffed,stroke:#52c41a,stroke-width:2px
        style A4 fill:#fffbe6,stroke:#faad14,stroke-width:2px,stroke-dasharray: 5 5
      </div>

      <h3>Métricas e Tipos de Agregação</h3>
      <p>Para agrupar notas nas categorias (ilustradas acima), o Moodle oferece estratégias matemáticas (Agregações) muito poderosas, incluindo:</p>
      <ul>
        <li><strong>Média Simples (Mean):</strong> Soma todas e divide pela quantidade de atividades avaliativas que o aluno <em>tentou</em>.</li>
        <li><strong>Soma Natural (Natural):</strong> Soma puramente os pontos. Se a prova vale 50 e o fórum 50, o total é 100. Neste formato, você pode habilitar checkboxes para aplicar <strong>Pesos Relativos</strong> e até mesmo forçar uma atividade a ser <strong>Crédito Extra</strong> (como a Lição Opcional no diagrama), onde ela adiciona pontos mas não penaliza se o aluno não a fizer!</li>
      </ul>
      
      <h3>Fórmulas Matemáticas Escritas</h3>
      <p>A funcionalidade mais avançada do Livro de Notas é o uso de Fórmulas no padrão Excel. Você atribui "Números de Identificação (ID)" para cada atividade e digita lógicas diretas no Moodle, como: <code>=average(id1, id2, id3) * 0.7 + id4 * 0.3</code>, forçando um cálculo condicional preciso sobre os números brutos.</p>
    `,
    quiz: {
      question: "No formato de 'Soma Natural' do Moodle, o que acontece quando você marca a opção 'Crédito Extra' em uma atividade?",
      options: [
        "A nota daquela atividade é ignorada completamente.",
        "A nota da atividade ajuda o aluno a atingir o limite máximo da categoria, mas a nota máxima total do curso não sofre acréscimo de exigência (não o prejudica se tirar zero).",
        "O sistema gera um certificado de honra ao mérito.",
        "A atividade vira peso 2 automaticamente."
      ],
      correct_index: 1,
      feedback_correct: "Correto! Crédito Extra atua como uma 'ajuda' na soma bruta, permitindo recuperar pontos perdidos em provas sem inflar a pontuação máxima exigida no denominador."
    }
  },
  {
    id: "m4-badges",
    title: "Badges (Emblemas) e Psicologia EAD",
    category: "Administração & Gamificação",
    icon: "emoji_events",
    content: `
      <p>Baseados no padrão <strong>Mozilla OpenBadges 2.0</strong>, os Emblemas do Moodle carregam metadados criptográficos em sua própria imagem PNG, permitindo que os alunos os exportem para o "mochilão" público deles (Badgr, LinkedIn) validando matematicamente o seu currículo.</p>
      
      <div class="mermaid" style="text-align: center; margin: 2rem 0;">
      sequenceDiagram
        participant A as Aluno
        participant DB as Banco de Dados Moodle
        participant B as Motor de Badges
        
        A->>DB: Completa 3 cursos difíceis
        DB-->>B: Dispara evento (Critérios Batidos)
        B->>B: Pega PNG criptografa com Hash do Aluno
        B-->>A: Notificação e E-mail: Emblema Adquirido!
        A->>A: Clica para expor Badge no Perfil Público
      </div>

      <h3>Engenharia de Concessão</h3>
      <p>Os critérios de emissão não se limitam apenas à conclusão do curso atual. Os Emblemas suportam os seguintes gatilhos nativos:</p>
      <ul>
        <li><strong>Conclusão de Múltiplos Cursos:</strong> Um super-badge é emitido apenas se o sistema ler no banco que o aluno completou Cálculo 1, Cálculo 2 E Física.</li>
        <li><strong>Concessão Manual:</strong> Professores ou Gerentes clicam no painel para conceder o emblema manualmente (útil para avaliar 'Participação Destaque' em sala de aula).</li>
        <li><strong>Data Limite:</strong> "Badge Primeira Classe", programado para ser emitido apenas para quem bater as metas até 31 de Março, estimulando um senso de urgência absurdo!</li>
      </ul>
    `,
    quiz: {
      question: "A arquitetura de Emblemas (Badges) do Moodle possui compatibilidade técnica com qual formato padrão global de certificação visual?",
      options: [
        "Formato ISO 9001.",
        "Padrão Mozilla OpenBadges (onde o PNG carrega os metadados do aluno e do emissor internamente).",
        "Formato SCORM 1.2 exclusivamente.",
        "Não possui padrão, funciona apenas localmente."
      ],
      correct_index: 1,
      feedback_correct: "Exatamente! Graças a essa integração (OpenBadges), certificados de microlearning emitidos no seu Moodle podem ser auditados publicamente por empresas no LinkedIn!"
    }
  },
  {
    id: "m4-conclusion",
    title: "Projeto Final: Arquitetura de Produção",
    category: "Administração & Gamificação",
    icon: "workspace_premium",
    content: `
      <p>Compreender os alicerces teóricos e a engenharia de software do Moodle 4.x eleva seu projeto a outro patamar. Implementar um LMS robusto requer a união de UX (Experiência do Usuário) com as lógicas determinísticas que vimos: Papéis, Coortes, Gradebook e Restrições Condicionais.</p>
      
      <div style="background-color: #f0f7ff; border: 1px solid #cce4fc; border-radius: 8px; padding: 2rem; margin: 2rem 0;">
        <h3 style="color: #0b5cff; margin-top: 0; display:flex; align-items:center;">
          <span class="material-icons-round" style="margin-right:10px;">done_all</span> Diagrama de Decisão Profissional
        </h3>
        <p>Ao receber um requisito de negócio, lembre-se destas equivalências estruturais no Moodle:</p>
        <ul style="font-size: 1.1rem; line-height: 1.8;">
          <li>Matrícula de massa em Turmas Físicas = <strong>Sincronização de Coortes (Cohorts)</strong>.</li>
          <li>Delegar coordenação de área = <strong>Papel de Gerente atribuído na Categoria</strong>.</li>
          <li>Média Ponderada = <strong>Soma Natural no Gradebook + Pesos Checkbox Ativados</strong>.</li>
          <li>Jornada do Aluno Gamificada = <strong>Conclusão Automática (Activity Completion) ligada à Restrição de Acesso (Access Restriction)</strong>.</li>
          <li>Prova de Certificação = <strong>Quiz + Safe Exam Browser (SEB)</strong>.</li>
        </ul>
      </div>
      
      <div style="text-align: center; padding: 3rem 0;">
        <span class="material-icons-round" style="font-size: 5rem; color: #f98012;">stars</span>
        <h2 style="color: #f98012;">Projeto Mestre Concluído!</h2>
        <p style="font-size: 1.2rem; max-width: 600px; margin: 0 auto; color: #555;">Você acaba de concluir a leitura da mais aprofundada documentação moderna do Moodle 4, utilizando uma interface super otimizada com diagramas renderizados nativamente no cliente usando tecnologias web de ponta.</p>
      </div>
    `,
    quiz: {
      question: "Qual mecanismo seria o ideal (segundo as melhores práticas apresentadas) para obrigar um aluno a tirar no mínimo nota 7 num simulado antes que ele possa abrir o material avançado do curso?",
      options: [
        "Agendar o módulo para abrir mês que vem via configurações da Categoria.",
        "Configurar a 'Conclusão de Atividades' do simulado exigindo 'Nota de Aprovação 7' e, em seguida, travar o material avançado com a 'Restrição de Acesso' focada no simulado.",
        "Usar Sincronização de Coortes.",
        "Inserir uma senha no PDF avançado e mandar a senha por e-mail manual para quem passou."
      ],
      correct_index: 1,
      feedback_correct: "Brilhante! Conclusão condicionada + Restrição de acesso criam a mágica do EAD automatizado perfeito."
    }
  }
];
