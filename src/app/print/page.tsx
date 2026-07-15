"use client";

import { useEffect } from "react";
import { chapters } from "@/data/chapters";

export default function PrintPage() {
  useEffect(() => {
    // Processa os diagramas antes de abrir a janela de impressão
    import('mermaid').then((mermaid) => {
      mermaid.default.initialize({ startOnLoad: false, theme: 'default', securityLevel: 'loose' });
      mermaid.default.run({ querySelector: '.mermaid' }).finally(() => {
        // Dá um tempinho para a renderização visual e fontes
        const timer = setTimeout(() => {
          window.print();
        }, 1500);
      });
    });
  }, []);

  // Agrupar capítulos por categoria para o sumário
  const grouped = chapters.reduce((acc, chap, idx) => {
    if (!acc[chap.category]) acc[chap.category] = [];
    acc[chap.category].push({ ...chap, index: idx + 1 });
    return acc;
  }, {} as Record<string, (typeof chapters[0] & { index: number })[]>);

  return (
    <div className="print-only-layout" style={{ backgroundColor: 'white', color: 'black', minHeight: '100vh' }}>
      
      {/* Capa */}
      <div style={{ textAlign: "center", padding: "5rem 0", pageBreakAfter: "always", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <span className="material-icons-round" style={{ fontSize: "8rem", color: "#f98012" }}>
          school
        </span>
        <h1 style={{ fontSize: "4rem", marginTop: "2rem", color: "black" }}>MoodleMaster</h1>
        <h2 style={{ fontSize: "2rem", color: "#444", fontWeight: "normal" }}>O Guia Definitivo do Moodle 5.2</h2>
        <p style={{ marginTop: "2rem", color: "#666", fontSize: "1.15rem", maxWidth: "500px", lineHeight: "1.8" }}>
          Cobrindo Fundamentos, Cursos, Atividades, H5P, Questionários,
          Gamificação, Inteligência Artificial, Banco de Questões,
          Competências e Infraestrutura de Produção.
        </p>
        <p style={{ marginTop: "4rem", color: "#999", fontSize: "1rem" }}>
          Gerado automaticamente a partir da versão Web — {chapters.length} capítulos
        </p>
      </div>

      {/* Sumário */}
      <div style={{ pageBreakAfter: "always", padding: "2cm" }}>
        <h1 style={{ fontSize: "2.5rem", color: "black", borderBottom: "3px solid #f98012", paddingBottom: "1rem", marginBottom: "2rem" }}>
          <span className="material-icons-round" style={{ fontSize: "2.5rem", verticalAlign: "bottom", marginRight: "1rem", color: "#f98012" }}>toc</span>
          Sumário
        </h1>
        {Object.keys(grouped).map((category) => (
          <div key={category} style={{ marginBottom: "1.5rem" }}>
            <h3 style={{ color: "#f98012", fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.75rem", borderBottom: "1px solid #eee", paddingBottom: "0.5rem" }}>
              {category}
            </h3>
            {grouped[category].map((chap) => (
              <div key={chap.id} style={{ display: "flex", alignItems: "center", padding: "0.4rem 0", fontSize: "1.1rem" }}>
                <span className="material-icons-round" style={{ fontSize: "1.2rem", marginRight: "0.75rem", color: "#888" }}>{chap.icon}</span>
                <span style={{ flex: 1 }}>{chap.title}</span>
                <span style={{ color: "#aaa", fontSize: "0.95rem" }}>Capítulo {chap.index}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Capítulos */}
      {chapters.map((chap, idx) => (
        <div key={chap.id} className="chapter-container" style={{ pageBreakAfter: "always", margin: 0, maxWidth: "100%", padding: "2cm" }}>
          <div className="chapter-header" style={{ borderBottom: "2px solid #eee", paddingBottom: "1rem", marginBottom: "2rem" }}>
            <div className="chapter-meta" style={{ display: "flex", alignItems: "center", color: "#666", marginBottom: "1rem" }}>
              <span style={{ fontSize: "0.95rem", fontWeight: "bold", color: "#f98012", marginRight: "1rem" }}>
                Capítulo {idx + 1} de {chapters.length}
              </span>
              <span style={{ margin: "0 0.5rem", color: "#ccc" }}>•</span>
              <span className="material-icons-round" style={{ fontSize: "1.2rem", marginRight: "0.5rem" }}>
                local_offer
              </span>
              <span style={{ fontSize: "1.1rem" }}>{chap.category}</span>
            </div>
            <h1 style={{ fontSize: "2.5rem", color: "black", margin: 0 }}>
              <span className="material-icons-round" style={{ fontSize: "2.5rem", verticalAlign: "bottom", marginRight: "1rem", color: "#f98012" }}>{chap.icon}</span>
              {chap.title}
            </h1>
          </div>

          <div
            className="content-section"
            style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#333", boxShadow: "none", border: "none", padding: 0 }}
            dangerouslySetInnerHTML={{ __html: chap.content }}
          />

          {/* Quiz de Impressão */}
          {chap.quiz && (
            <div className="quiz-container" style={{ marginTop: "3rem", border: "2px dashed #ccc", padding: "1.5rem", borderRadius: "8px", boxShadow: "none" }}>
              <div className="quiz-header" style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
                <span className="material-icons-round" style={{ fontSize: "1.5rem", marginRight: "0.5rem", color: "#555" }}>psychology</span>
                <h3 style={{ margin: 0, fontSize: "1.2rem", color: "#444" }}>Exercício Prático</h3>
              </div>
              <p style={{ fontWeight: "bold", marginBottom: "1rem" }}>{chap.quiz.question}</p>
              
              <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
                {chap.quiz.options.map((opt: string, optIdx: number) => {
                  const isCorrect = optIdx === chap.quiz.correct_index;
                  return (
                    <li key={optIdx} style={{ padding: "0.5rem", marginBottom: "0.5rem", border: "1px solid #ddd", borderRadius: "4px", backgroundColor: isCorrect ? "#f0fff4" : "white" }}>
                      {isCorrect ? (
                        <strong><span style={{ color: "#38a169", marginRight: "0.5rem" }}>✓</span> {opt}</strong>
                      ) : (
                        <span><span style={{ display: "inline-block", width: "14px", height: "14px", border: "1px solid #999", borderRadius: "50%", marginRight: "0.5rem", verticalAlign: "middle" }}></span> {opt}</span>
                      )}
                    </li>
                  )
                })}
              </ul>
              
              <div style={{ marginTop: "1rem", padding: "1rem", backgroundColor: "#f9f9f9", borderLeft: "4px solid #f98012" }}>
                <strong>Explicação:</strong> <span dangerouslySetInnerHTML={{ __html: chap.quiz.feedback_correct }} />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
