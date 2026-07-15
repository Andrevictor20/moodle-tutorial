export const ia = [
  {
    id: "m5-ai-intro",
    title: "Inteligência Artificial no Moodle 5.2",
    category: "IA & Provedores",
    icon: "smart_toy",
    content: `
      <p>O Moodle 5.2 trouxe uma das adições mais revolucionárias da história da plataforma: a integração nativa de <strong>provedores de Inteligência Artificial</strong> diretamente no Core do sistema. Isso significa que administradores não precisam mais de plugins de terceiros para conectar modelos de IA — tudo é configurado via <em>Site Administration → General → AI providers</em>.</p>

      <div class="mermaid" style="text-align: center; margin: 2rem 0;">
      flowchart TD
        Admin["Administrador do Site"] --> Config["Site Admin → General → AI Providers"]
        Config --> Inst["Criar Instância de Provedor"]
        
        Inst --> G["Google Gemini<br>API Key do AI Studio"]
        Inst --> B["Amazon Bedrock<br>IAM User + Region"]
        
        G --> Actions["Ações de IA Disponíveis"]
        B --> Actions
        
        Actions --> A1["Gerar Texto"]
        Actions --> A2["Resumir Conteúdo"]
        Actions --> A3["Gerar Imagem"]
        
        A1 --> Prof["Professor usa no Curso"]
        A2 --> Prof
        A3 --> Prof
      </div>

      <h3>O Subsistema de IA (AI Subsystem)</h3>
      <p>O Moodle 5.2 implementa um <strong>framework unificado de IA</strong> que abstrai as diferenças entre provedores. Isso significa que, da perspectiva do professor, não importa se a IA por trás é Gemini, Claude ou Llama — a interface de uso é idêntica. O administrador escolhe qual provedor usar para cada tipo de ação.</p>

      <h3>Provedores Core do Moodle 5.2</h3>
      <ul>
        <li><strong>Google Gemini:</strong> Integra a família de modelos Gemini do Google. Requer apenas uma API Key obtida no <em>Google AI Studio</em>. Ideal para geração de texto, resumo de conteúdos e criação de materiais didáticos.</li>
        <li><strong>Amazon Bedrock:</strong> Abre as portas para modelos de múltiplos fornecedores hospedados na AWS, incluindo:
          <ul>
            <li><strong>Anthropic Claude</strong> — Raciocínio complexo e análise textual.</li>
            <li><strong>Amazon Titan e Nova</strong> — Modelos proprietários da AWS otimizados para diferentes tarefas.</li>
            <li><strong>Meta Llama</strong> — Modelo open-source de alta performance.</li>
          </ul>
          Requer uma conta AWS com acesso ao Bedrock e um IAM User com permissões adequadas.
        </li>
      </ul>

      <h3>Ações de IA Suportadas</h3>
      <p>Atualmente, o subsistema de IA do Moodle 5.2 suporta as seguintes ações nativamente:</p>
      <ul>
        <li><strong>Geração de Texto (Text Generation):</strong> Auxilia professores na criação de descrições de atividades, introduções de cursos, e enunciados de questões.</li>
        <li><strong>Resumo de Conteúdo (Summarisation):</strong> Resume automaticamente textos longos, documentos de apoio ou discussões de fórum.</li>
        <li><strong>Geração de Imagem (Image Generation):</strong> Cria imagens ilustrativas para materiais didáticos diretamente dentro do Moodle.</li>
      </ul>
    `,
    quiz: {
      question: "Quais são os dois provedores de IA integrados nativamente no Core do Moodle 5.2, sem necessidade de plugins adicionais?",
      options: [
        "OpenAI GPT-4 e Microsoft Copilot.",
        "Google Gemini e Amazon Bedrock.",
        "IBM Watson e Salesforce Einstein.",
        "Hugging Face e Stability AI."
      ],
      correct_index: 1,
      feedback_correct: "Correto! O Moodle 5.2 integrou nativamente o Google Gemini e o Amazon Bedrock como provedores core do subsistema de IA."
    }
  },
  {
    id: "m5-ai-config",
    title: "Configuração Prática de Provedores de IA",
    category: "IA & Provedores",
    icon: "settings_suggest",
    content: `
      <p>Configurar provedores de IA no Moodle 5.2 é um processo administrativo que envolve credenciais, seleção de modelos e definição de políticas. O sistema permite criar <strong>múltiplas instâncias</strong> do mesmo provedor (ex: uma instância Gemini para tarefas leves e outra para tarefas complexas).</p>

      <div class="mermaid" style="text-align: center; margin: 2rem 0;">
      sequenceDiagram
        participant A as Admin
        participant S as Site Admin Panel
        participant P as Provedor de IA
        participant Prof as Professor
        
        A->>S: Acessa AI Providers
        A->>S: Cria instância Google Gemini
        S->>A: Solicita API Key
        A->>S: Insere API Key do AI Studio
        S->>S: Valida conexão com Google
        A->>S: Define ações permitidas
        Note over S: Gerar Texto ✅<br>Resumir ✅<br>Gerar Imagem ❌
        A->>S: Define ordem de processamento
        S-->>Prof: IA disponível no editor do curso
        Prof->>P: Solicita resumo de texto
        P-->>Prof: Retorna texto resumido
      </div>

      <h3>Passo a Passo: Configurando o Google Gemini</h3>
      <ol>
        <li>Acesse <strong>Site Administration → General → AI providers</strong>.</li>
        <li>Clique em <strong>"Create a new provider instance"</strong>.</li>
        <li>Selecione <strong>"Gemini API"</strong> da lista de plugins disponíveis.</li>
        <li>Insira a <strong>API Key</strong> obtida no <a href="https://aistudio.google.com" target="_blank">Google AI Studio</a>.</li>
        <li>Escolha o <strong>modelo</strong> desejado (ex: Gemini Pro, Gemini Flash).</li>
        <li>Defina quais <strong>ações</strong> esta instância pode executar.</li>
        <li>Salve a configuração.</li>
      </ol>

      <h3>Passo a Passo: Configurando o Amazon Bedrock</h3>
      <ol>
        <li>No painel da AWS, crie um <strong>IAM User</strong> com permissões de acesso ao Amazon Bedrock.</li>
        <li>Habilite o acesso aos modelos desejados no console do Bedrock (cada modelo requer aceitação de termos individual).</li>
        <li>No Moodle, crie uma nova instância selecionando <strong>"Amazon Bedrock"</strong>.</li>
        <li>Insira o <strong>Access Key ID</strong>, <strong>Secret Access Key</strong> e a <strong>Região AWS</strong>.</li>
        <li>Selecione o modelo (Claude, Titan, Nova ou Llama).</li>
        <li>Defina as ações permitidas e salve.</li>
      </ol>

      <h3>Ordem de Processamento e Fallback</h3>
      <p>Quando múltiplas instâncias estão configuradas, o administrador define uma <strong>ordem de processamento (Processing Order)</strong>. Se a primeira instância falhar (ex: API Key expirada ou cota excedida), o Moodle automaticamente tenta a próxima instância da fila, garantindo resiliência.</p>

      <h3>Segurança e Privacidade</h3>
      <p>É fundamental que o administrador avalie as <strong>políticas de privacidade</strong> de cada provedor antes de habilitar a IA. Dados de alunos enviados para APIs externas estão sujeitos às políticas de retenção do provedor. Recomendações:</p>
      <ul>
        <li>Desabilite a IA para cursos que lidam com dados sensíveis (saúde, jurídico).</li>
        <li>Informe professores e alunos sobre o uso de IA via políticas do site.</li>
        <li>Para máxima privacidade, considere o Amazon Bedrock com modelos hospedados na sua própria região AWS.</li>
      </ul>
    `,
    quiz: {
      question: "Se um administrador configura duas instâncias de IA (Gemini como primária e Bedrock como secundária), o que acontece quando a API do Gemini retorna erro por cota excedida?",
      options: [
        "O sistema exibe um erro permanente e o professor precisa contactar o suporte.",
        "O Moodle automaticamente tenta a próxima instância na fila (Bedrock), garantindo resiliência no processamento.",
        "O Moodle desativa permanentemente o Gemini e só usa Bedrock a partir dali.",
        "O professor precisa manualmente alternar para o Bedrock nas configurações."
      ],
      correct_index: 1,
      feedback_correct: "Exato! O sistema de Processing Order com fallback automático garante que a IA continue funcionando mesmo quando um provedor tem problemas temporários."
    }
  }
];
