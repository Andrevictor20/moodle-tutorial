export const chapters = [
  {
    id: "cap01",
    title: "Introdução ao Moodle",
    icon: "home",
    category: "Fundamentos",
    time: "5 minutos",
    content: `
      <h2><span class="material-icons-round">school</span> O que é o Moodle?</h2>
      <p>O <strong>Moodle</strong> (<em>Modular Object-Oriented Dynamic Learning Environment</em>) é um sistema de gestão da aprendizagem (LMS - <em>Learning Management System</em>) de código aberto.</p>
      
      <div class="ui-mockup">
          <div class="ui-mockup-header">
              <div class="ui-dot"></div><div class="ui-dot"></div><div class="ui-dot"></div>
              <span style="margin-left: 1rem; font-size: 0.8rem; color: #64748b; font-family: monospace;">Painel Típico</span>
          </div>
          <div class="ui-mockup-body" style="background: #f8fafc; padding: 2rem; text-align: center;">
              <div style="background: white; border-radius: 8px; padding: 1rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1); display: inline-block; min-width: 200px; margin: 1rem;">
                  <div style="height: 100px; background: #e2e8f0; border-radius: 4px; margin-bottom: 1rem;"></div>
                  <div style="height: 20px; background: #cbd5e1; border-radius: 4px; width: 80%; margin: 0 auto;"></div>
              </div>
          </div>
      </div>
      
      <div class="alert alert-tip">
          <span class="material-icons-round alert-icon">lightbulb</span>
          <div class="alert-content">
              <h4>Dica de Ouro</h4>
              <p>Muitas instituições utilizam o Moodle em conjunto com sistemas como o BigBlueButton ou Zoom.</p>
          </div>
      </div>
    `,
    quiz: {
      question: "Qual é a sigla que define o tipo de sistema que o Moodle é?",
      options: ["CMS (Content Management System)", "LMS (Learning Management System)", "ERP (Enterprise Resource Planning)"],
      correct_index: 1,
      feedback_correct: "Exatamente! O Moodle é um LMS.",
      feedback_wrong: "Ops! Lembre-se que LMS significa Learning Management System."
    }
  },
  {
    id: "cap02",
    title: "Perfis de Usuários",
    icon: "people",
    category: "Fundamentos",
    time: "4 minutos",
    content: `
      <p>No Moodle, cada usuário possui um papel (role) que define o que ele pode ou não fazer no sistema. Esses papéis são fundamentais para manter a segurança e a organização do ambiente.</p>
      <div class="card-grid">
          <div class="card">
              <div class="card-icon"><span class="material-icons-round">manage_accounts</span></div>
              <div class="card-title">Administrador</div>
              <div class="card-text">Tem controle total sobre o site. Pode instalar plugins, mudar o tema, gerenciar todos os cursos e usuários.</div>
          </div>
          <div class="card">
              <div class="card-icon"><span class="material-icons-round">supervisor_account</span></div>
              <div class="card-title">Gerente (Manager)</div>
              <div class="card-text">Um papel administrativo menor. Geralmente pode criar cursos, gerenciar categorias e matricular usuários, mas não altera o sistema central.</div>
          </div>
          <div class="card">
              <div class="card-icon"><span class="material-icons-round">local_library</span></div>
              <div class="card-title">Professor</div>
              <div class="card-text">Pode alterar as atividades, avaliar alunos, criar conteúdo dentro de um curso específico onde foi designado.</div>
          </div>
          <div class="card">
              <div class="card-icon"><span class="material-icons-round">person</span></div>
              <div class="card-title">Estudante</div>
              <div class="card-text">O papel mais comum. Pode acessar conteúdos, participar de fóruns e responder questionários, mas não pode editar o curso.</div>
          </div>
      </div>
    `,
    quiz: {
        question: "Qual usuário tem permissão para alterar o tema visual de todo o Moodle?",
        options: ["Professor", "Estudante", "Administrador", "Gerente"],
        correct_index: 2,
        feedback_correct: "Correto! Apenas o Administrador do Site tem acesso às configurações de aparência global.",
        feedback_wrong: "Incorreto. Usuários comuns ou de nível de curso não podem alterar o design de toda a plataforma."
    }
  },
  {
    id: "cap03",
    title: "Painel Administrativo",
    icon: "dashboard",
    category: "Fundamentos",
    time: "6 minutos",
    content: `
      <p>O <strong>Painel Administrativo</strong> (ou <em>Site Administration</em>) é o coração da configuração do Moodle. Ele só é visível para Administradores (e parcialmente para Gerentes).</p>
      <p>Nesta área, você encontrará tudo dividido em abas ou categorias (Geral, Usuários, Cursos, Notas, Plugins, etc). É altamente recomendável não alterar configurações se não souber o que fazem, pois isso pode afetar todos os alunos.</p>
    `,
    quiz: {
        question: "A aba 'Administração do Site' fica visível para um estudante?",
        options: ["Sim, para que ele mude sua senha.", "Não, apenas para Administradores/Gerentes.", "Depende das configurações do professor."],
        correct_index: 1,
        feedback_correct: "Correto! O estudante não vê essa opção.",
        feedback_wrong: "Incorreto. A Administração do Site é estritamente restrita."
    }
  },
  {
    id: "cap35",
    title: "Projeto Completo",
    icon: "military_tech",
    category: "Avançado & Admin",
    time: "15 minutos",
    content: `
      <p>Chegamos ao fim! Você agora possui as habilidades para montar o projeto final.</p>
      <div class="alert alert-info">
          <span class="material-icons-round alert-icon">task_alt</span>
          <div class="alert-content">
              <h4>Checklist do Especialista</h4>
              <p>1. Crie a Categoria.<br>
              2. Crie o Curso configurando Rastreamento.<br>
              3. Construa o Menu (Rótulos) e insira PDFs.<br>
              4. Crie H5P e Tarefas.<br>
              5. Monte o Questionário com banco aleatório.<br>
              6. Configure Restrição de Acesso no Certificado Final.</p>
          </div>
      </div>
      <div style="text-align: center; margin-top: 3rem;">
          <span class="material-icons-round" style="font-size: 5rem; color: var(--warning);">workspace_premium</span>
          <h2 style="color: var(--primary);">Parabéns! Você concluiu a jornada!</h2>
          <p>Este tutorial simulou a experiência interativa que você mesmo pode criar para os seus alunos no Moodle.</p>
      </div>
    `,
    quiz: {
        question: "Qual é a chave para o sucesso em EAD com Moodle?",
        options: ["Apenas jogar PDFs longos na tela", "Planejamento pedagógico unido às ferramentas certas de interatividade e métricas"],
        correct_index: 1,
        feedback_correct: "Exatamente! O Moodle brilha quando existe planejamento. Vá em frente e construa cursos incríveis!",
        feedback_wrong: "Nem brinque com isso!"
    }
  }
];

export const getMenuCategories = () => {
    return chapters.reduce((acc, chap) => {
        if (!acc.includes(chap.category)) {
            acc.push(chap.category);
        }
        return acc;
    }, []);
};
