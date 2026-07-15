# Relatório de Correção Visual - Tutorial Moodle 5.2

Este relatório documenta a auditoria e as alterações feitas nas imagens do projeto `moodle-tutorial`, garantindo que todas reflitam capturas reais da instância de produção `moodle.rasppi.cloud`.

## 1. Correção do Bug Principal (Hashes Duplicados)

O problema reportado onde `moodle_h5p_quiz.png` e `moodle_question_bank.png` eram o mesmo arquivo binário foi corrigido.
- **Antes**: Ambas as imagens partilhavam o mesmo hash MD5 (`7fb8029bac85aeee0670fc6558103210`).
- **Depois**: 
  - `moodle_h5p_quiz.png` foi recapturado na tela de edição da atividade H5P (Capítulo 3).
  - `moodle_question_bank.png` foi recapturado na tela real do Banco de Questões (Capítulo 6).
  - Hashes atuais são completamente distintos (verificados via `md5sum`).

## 2. Imagens Substituídas (Mockups -> Reais)

Todas as imagens listadas como "suspeitas" foram substituídas por screenshots reais (resolução 1920x1080) obtidos na instância via script Puppeteer autenticado como administrador, em um curso temporário (`TESTE-TUTORIAL-DELETAR`), que já foi removido.

| Arquivo Substituído | Capítulo | O que foi capturado |
| :--- | :--- | :--- |
| `moodle_dashboard.png` | Cap. 01 | Dashboard real logado como administrador. |
| `moodle_course_edit.png` | Cap. 02 | Curso de teste com "Modo de Edição" ativado. |
| `moodle_gradebook.png` | Cap. 04 | Tela de configuração do Livro de Notas. |
| `moodle_ai_providers.png` | Cap. 05 | Tela de busca e configuração de Provedores de IA. |
| `moodle_competencies.png` | Cap. 07 | Listagem de Frameworks de Competências. |
| `moodle_backup.png` | Cap. 08 | Assistente (Wizard) de Backup de Cursos. |
| `moodle_report_builder.png`| Cap. 08 | Tela principal do Report Builder nativo. |

## 3. Novas Imagens Adicionadas

Seguindo a sugestão do escopo, foram capturadas e incluídas no texto do tutorial as seguintes novas imagens, enriquecendo o conteúdo de seções que antes possuíam apenas texto:

1. **Configuração de Questionário**: Adicionada `moodle_quiz_config.png` no `cap03_atividades.ts` (Seção: O Motor de Questionários Avançado).
2. **Criação de Emblema (Badge)**: Adicionada `moodle_badge_create.png` no `cap04_administracao.ts` (Seção: Badges e Gamificação).
3. **Planos de Aprendizagem (Learning Plans)**: Adicionada `moodle_learning_plan.png` no `cap07_competencias.ts` (Seção: Planos de Aprendizagem).

## 4. Análise de Divergências

Durante o processo de captura navegando na interface real do Moodle:
- **Ausência de divergências bloqueantes**: O Moodle real apresenta todas as seções (Navigation Drawer, Course Index, Edit Mode Toggle) conforme descrito nos textos. A nomenclatura de menus se manteve aderente ao tutorial. Não foram necessárias alterações drásticas no texto descritivo.

## 5. Checklist de Segurança Realizado
- [x] O curso de teste `TESTE-TUTORIAL-DELETAR` foi criado e completamente deletado após a execução.
- [x] Nenhuma senha de administrador, token de API ou e-mail de aluno real foi vazado nas capturas (ambiente testado em curso limpo).
- [x] O bug de imagens duplicadas foi resolvido e checado por hash.
- [x] As alterações não foram commitadas, aguardando revisão do usuário no repositório local.
