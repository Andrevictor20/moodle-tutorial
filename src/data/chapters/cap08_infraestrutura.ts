export const infraestrutura = [
  {
    id: "m5-backup",
    title: "Backup e Restauração de Cursos",
    category: "Infraestrutura & Produção",
    icon: "backup",
    content: `
      <p>A estratégia de backup é o pilar de qualquer operação de produção no Moodle. O sistema gera arquivos <strong>.mbz</strong> (Moodle Backup Zip) que encapsulam todo o conteúdo, configurações, atividades e opcionalmente dados de alunos de um curso. No Moodle 5.2, o framework de backup continua sendo robusto e bem estabelecido.</p>

      <div class="mermaid" style="text-align: center; margin: 2rem 0;">
      flowchart TD
        Curso[Curso: Cálculo I<br>15 atividades + 200 alunos] --> Wizard[Backup Wizard]
        
        Wizard --> Sel{Selecionar Conteúdo}
        Sel --> Inc1[✅ Atividades e Recursos]
        Sel --> Inc2[✅ Configurações do Curso]
        Sel --> Inc3[⬜ Dados de Alunos]
        Sel --> Inc4[⬜ Notas e Submissões]
        
        Inc1 --> MBZ[Arquivo .mbz Gerado]
        Inc2 --> MBZ
        
        MBZ --> D1[Download Local]
        MBZ --> D2[Área Privada de Backup]
        
        D1 --> Restore[Restaurar em Outro Curso]
        D2 --> Restore
        
        Restore --> New[Novo Curso Vazio]
        Restore --> Merge[Merge com Curso Existente]
      </div>

      <h3>Backup Manual — Passo a Passo</h3>
      <ol>
        <li>Dentro do curso, acesse <strong>Navegação do Curso → Mais → Reutilização de Curso (Course Reuse)</strong>.</li>
        <li>Selecione <strong>Backup</strong>.</li>
        <li>O <strong>Backup Wizard</strong> abre com checkboxes para selecionar o que incluir:
          <ul>
            <li><strong>Atividades e Recursos:</strong> Todo o conteúdo pedagógico (fóruns, quizzes, tarefas, H5P, etc.).</li>
            <li><strong>Configurações do Curso:</strong> Formato, datas, configurações de inscrição.</li>
            <li><strong>Dados de Usuários:</strong> Submissões de tarefas, posts de fórum, tentativas de quiz (CUIDADO: aumenta massivamente o tamanho do arquivo).</li>
            <li><strong>Notas:</strong> Livro de notas completo.</li>
          </ul>
        </li>
        <li>Confirme a seleção e aguarde a geração do arquivo.</li>
        <li>Faça o <strong>download</strong> do <code>.mbz</code> ou deixe-o na Área Privada de Backup do Moodle.</li>
      </ol>

      <h3>Restauração de Curso</h3>
      <p>O processo de restauração oferece duas opções:</p>
      <ul>
        <li><strong>Restaurar como Novo Curso:</strong> Cria um curso completamente novo com o conteúdo do backup. Ideal para replicar cursos entre semestres.</li>
        <li><strong>Merge (Mesclar):</strong> Adiciona o conteúdo do backup a um curso existente. Útil para importar atividades de um colega sem sobrescrever o seu conteúdo.</li>
      </ul>

      <h3>Backup Automatizado</h3>
      <p>Para operações de produção, o agendamento automático é essencial:</p>
      <ol>
        <li>Acesse <strong>Site Administration → Courses → Backups → Automated backup setup</strong>.</li>
        <li>Ative o backup automático (<code>backup_auto_active = Enabled</code>).</li>
        <li>Selecione os <strong>dias da semana</strong> para execução.</li>
        <li>Configure o <strong>horário</strong> (recomenda-se madrugada para evitar impacto de performance).</li>
        <li>Defina o <strong>diretório de destino</strong> — preferencialmente em um disco ou servidor diferente do Moodle!</li>
        <li>Configure a <strong>política de retenção</strong>: quantos backups manter ou quantos dias reter.</li>
      </ol>

      <h3>Compatibilidade entre Versões</h3>
      <p>Arquivos <code>.mbz</code> são portáveis entre instâncias, mas é melhor manter versões compatíveis. Restaurar um backup do Moodle 5.2 em uma instância 4.0, por exemplo, pode falhar em atividades que usam features novas. A regra geral é: restaure <strong>para frente</strong> (versão igual ou mais nova), nunca para trás.</p>
    `,
    quiz: {
      question: "Qual é a melhor prática para o diretório de destino dos backups automáticos do Moodle?",
      options: [
        "Salvar no mesmo disco onde o Moodle está instalado para acesso rápido.",
        "Configurar o destino para um disco ou servidor DIFERENTE do que hospeda o Moodle, protegendo contra falhas de hardware.",
        "Salvar na pasta Downloads do administrador.",
        "Enviar os backups por e-mail para o reitor da universidade."
      ],
      correct_index: 1,
      feedback_correct: "Correto! Armazenar backups no mesmo disco é um risco: se o disco falhar, você perde o Moodle E os backups simultaneamente."
    }
  },
  {
    id: "m5-infra",
    title: "Requisitos Técnicos e Report Builder",
    category: "Infraestrutura & Produção",
    icon: "dns",
    content: `
      <p>Planejar a infraestrutura para um Moodle 5.2 em produção exige atenção aos requisitos mínimos de software, dimensionamento de hardware e conhecimento das ferramentas de monitoramento nativas, como o <strong>Report Builder</strong>.</p>

      <div class="mermaid" style="text-align: center; margin: 2rem 0;">
      flowchart LR
        Browser[Navegador do Usuário<br>Chrome / Firefox / Safari] --> Web[Servidor Web<br>Apache ou Nginx]
        Web --> PHP[PHP 8.3+ ou 8.4<br>Módulos: curl, mbstring,<br>xml, zip, gd, intl]
        PHP --> DB[(Banco de Dados)]
        
        DB --> PG[PostgreSQL 16+]
        DB --> MY[MySQL 8.4+]
        DB --> MA[MariaDB 10.11+]
        DB --> MS[SQL Server 2019+]
        
        PHP --> FS[Sistema de Arquivos<br>moodledata/]
        PHP --> Cache[Cache: Redis / Memcached]
        PHP --> Cron[Cron Job<br>Executa a cada 1 min]
      </div>

      <h3>Requisitos Mínimos do Moodle 5.2</h3>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
        <thead>
          <tr style="background: rgba(249,128,18,0.1);">
            <th style="padding: 0.75rem; text-align: left; border-bottom: 2px solid #f98012;">Componente</th>
            <th style="padding: 0.75rem; text-align: left; border-bottom: 2px solid #f98012;">Versão Mínima</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding: 0.5rem; border-bottom: 1px solid #eee;"><strong>PHP</strong></td><td style="padding: 0.5rem; border-bottom: 1px solid #eee;">8.3.0 (8.4.x também suportado)</td></tr>
          <tr><td style="padding: 0.5rem; border-bottom: 1px solid #eee;"><strong>PostgreSQL</strong></td><td style="padding: 0.5rem; border-bottom: 1px solid #eee;">16.0</td></tr>
          <tr><td style="padding: 0.5rem; border-bottom: 1px solid #eee;"><strong>MySQL</strong></td><td style="padding: 0.5rem; border-bottom: 1px solid #eee;">8.4</td></tr>
          <tr><td style="padding: 0.5rem; border-bottom: 1px solid #eee;"><strong>MariaDB</strong></td><td style="padding: 0.5rem; border-bottom: 1px solid #eee;">10.11.0</td></tr>
          <tr><td style="padding: 0.5rem; border-bottom: 1px solid #eee;"><strong>SQL Server</strong></td><td style="padding: 0.5rem; border-bottom: 1px solid #eee;">2019</td></tr>
          <tr><td style="padding: 0.5rem; border-bottom: 1px solid #eee;"><strong>Atualização de</strong></td><td style="padding: 0.5rem; border-bottom: 1px solid #eee;">Moodle 4.4 ou superior</td></tr>
        </tbody>
      </table>

      <h3>O Cron Job — O Coração Oculto</h3>
      <p>O Moodle depende criticamente de um <strong>Cron Job</strong> configurado no servidor para executar tarefas de fundo: envio de e-mails, processamento de badges, limpeza de sessões, cálculo de conclusão de atividades, backup automatizado, e muito mais. Sem o cron funcionando, o Moodle parece "vivo" mas muitas features simplesmente não funcionam.</p>
      <p>Configuração recomendada (Linux):</p>
      <p><code>* * * * * /usr/bin/php /var/www/moodle/admin/cli/cron.php > /dev/null 2>&1</code></p>
      <p>Isso executa o cron <strong>a cada minuto</strong>, garantindo que todas as tarefas agendadas sejam processadas rapidamente.</p>

      <h3>Report Builder</h3>
      <p>O <strong>Report Builder</strong> do Moodle 5.2 permite que administradores criem <strong>relatórios customizados</strong> sem conhecimento de SQL, usando uma interface visual de drag-and-drop:</p>
      <ul>
        <li><strong>Fontes de Dados:</strong> Usuários, cursos, atividades, notas, conclusões, logs de acesso.</li>
        <li><strong>Colunas Personalizadas:</strong> Arraste e solte as colunas que deseja ver no relatório.</li>
        <li><strong>Filtros Avançados:</strong> Filtre por data, categoria de curso, papel do usuário, status de conclusão, grupo, coorte, e muito mais.</li>
        <li><strong>Condições:</strong> Defina condições para quais dados aparecem (ex: "apenas alunos que completaram mais de 50% do curso").</li>
        <li><strong>Exportação:</strong> Relatórios podem ser exportados em CSV, Excel, PDF e outros formatos.</li>
        <li><strong>Agendamento:</strong> Relatórios podem ser agendados para envio automático por e-mail a gestores e coordenadores.</li>
      </ul>

      <h3>Cache e Performance</h3>
      <p>Para instâncias com mais de 500 usuários simultâneos, é altamente recomendado configurar camadas de cache:</p>
      <ul>
        <li><strong>Redis:</strong> Cache de sessão e dados de aplicação. Reduz drasticamente as queries ao banco.</li>
        <li><strong>OPcache:</strong> Cache de bytecode PHP. Obrigatório para performance aceitável.</li>
        <li><strong>CDN:</strong> Para arquivos estáticos (CSS, JS, imagens), considere servir via CloudFront ou Cloudflare.</li>
      </ul>
    `,
    quiz: {
      question: "O que acontece com o Moodle se o Cron Job do servidor parar de funcionar?",
      options: [
        "Nada, o Moodle funciona perfeitamente sem o cron.",
        "O site fica fora do ar imediatamente com erro 500.",
        "O site continua acessível, mas tarefas de fundo param: e-mails não são enviados, badges não são emitidos, conclusões de atividade não são processadas e backups automáticos não executam.",
        "O Moodle automaticamente desativa todas as funcionalidades que dependem do cron."
      ],
      correct_index: 2,
      feedback_correct: "Exatamente! O cron é o 'coração oculto' do Moodle. Sem ele, o site parece funcionar superficialmente, mas as funcionalidades assíncronas críticas simplesmente param."
    }
  }
];
