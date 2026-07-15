"use client";

import { useState, useEffect } from "react";
import mermaid from "mermaid";
import { chapters } from "@/data/chapters";

export default function App() {
  const [activeChapter, setActiveChapter] = useState(chapters[0]);
  const [theme, setTheme] = useState("light");
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [completed, setCompleted] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const savedTheme = localStorage.getItem("moodle_tutorial_theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);

    const savedProgress = localStorage.getItem("moodle_tutorial_progress");
    if (savedProgress) {
      setCompleted(JSON.parse(savedProgress));
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("moodle_tutorial_theme", newTheme);
  };

  const markCompleted = (id: string) => {
    if (!completed.includes(id)) {
      const newCompleted = [...completed, id];
      setCompleted(newCompleted);
      localStorage.setItem("moodle_tutorial_progress", JSON.stringify(newCompleted));
    }
  };

  useEffect(() => {
    markCompleted(activeChapter.id);
  }, [activeChapter]);

  const progressPercent = Math.round((completed.length / chapters.length) * 100);

  const filteredChapters = chapters.filter(
    (chap) =>
      chap.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chap.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const grouped = filteredChapters.reduce((acc, chap) => {
    if (!acc[chap.category]) acc[chap.category] = [];
    acc[chap.category].push(chap);
    return acc;
  }, {} as Record<string, typeof chapters>);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: theme === "dark" ? "dark" : "default",
    });
  }, [theme]);

  useEffect(() => {
    if (activeChapter) {
      // Pequeno timeout para garantir que o DOM do dangerouslySetInnerHTML foi pintado
      setTimeout(() => {
        const elements = document.querySelectorAll('.mermaid');
        if (elements.length > 0) {
          // Limpa o atributo 'data-processed' para o mermaid re-renderizar caso mudemos de aba/tema
          elements.forEach(el => el.removeAttribute('data-processed'));
          mermaid.run({ querySelector: '.mermaid' }).catch(console.error);
        }
      }, 50);
    }
  }, [activeChapter, theme]);

  return (
    <>
      {/* Sidebar Navigation */}
      <nav className={`sidebar ${!isSidebarOpen ? "collapsed" : ""}`} id="sidebar">
        <div className="sidebar-header">
          <div className="logo">
            <span className="material-icons-round">school</span>
            <h2>MoodleMaster</h2>
          </div>
          <button className="toggle-btn" onClick={() => setSidebarOpen(!isSidebarOpen)}>
            <span className="material-icons-round">
              {isSidebarOpen ? "menu_open" : "menu"}
            </span>
          </button>
        </div>

        <div className="search-bar">
          <span className="material-icons-round">search</span>
          <input 
            type="text" 
            placeholder="Buscar na apostila..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="menu-container">
          <ul className="menu-list">
            {Object.keys(grouped).map((category) => (
              <div key={category}>
                <li className="menu-category">{category}</li>
                {grouped[category].map((chap) => (
                  <li
                    key={chap.id}
                    className={`menu-item ${activeChapter.id === chap.id ? "active" : ""}`}
                    onClick={() => setActiveChapter(chap)}
                  >
                    <span className="material-icons-round">{chap.icon}</span>{" "}
                    <span className="menu-text">{chap.title}</span>
                  </li>
                ))}
              </div>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="main-content">
        {/* Topbar */}
        <header className="topbar">
          <div className="topbar-left">
            <button className="mobile-menu-btn" onClick={() => setSidebarOpen(!isSidebarOpen)}>
              <span className="material-icons-round">menu</span>
            </button>
            <div className="progress-container">
              <span className="progress-text">{progressPercent}% Concluído</span>
              <div className="progress-bar-bg">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="topbar-right">
            <button className="icon-btn theme-toggle" onClick={toggleTheme}>
              <span className="material-icons-round">
                {theme === "light" ? "dark_mode" : "light_mode"}
              </span>
            </button>
            <a href="/print" target="_blank" className="icon-btn" title="Gerar PDF para Impressão">
              <span className="material-icons-round">picture_as_pdf</span>
            </a>
          </div>
        </header>

        {/* Dynamic Content Container */}
        <div className="content-wrapper" id="content-area">
          <div className="chapter-container">
            <div className="chapter-header">
              <div className="chapter-meta">
                <span className="material-icons-round" style={{ fontSize: "1.1rem" }}>
                  schedule
                </span>
                <span>{Math.ceil(activeChapter.content.length / 500)} minutos de leitura</span>
                <span style={{ margin: "0 0.5rem" }}>•</span>
                <span className="material-icons-round" style={{ fontSize: "1.1rem" }}>
                  local_offer
                </span>
                <span>{activeChapter.category}</span>
              </div>
              <h1>{activeChapter.title}</h1>
            </div>

            <div
              className="content-section"
              dangerouslySetInnerHTML={{ __html: activeChapter.content }}
            />

            <QuizComponent quiz={activeChapter.quiz} />
          </div>
        </div>
      </main>
    </>
  );
}

function QuizComponent({ quiz }: { quiz: any }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [verified, setVerified] = useState(false);

  // Reset when quiz changes
  useEffect(() => {
    setSelected(null);
    setVerified(false);
  }, [quiz]);

  if (!quiz) return null;

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <span className="material-icons-round">psychology</span>
        <h3>Verifique seu conhecimento</h3>
      </div>
      <p className="quiz-question">{quiz.question}</p>

      <div className="quiz-options">
        {quiz.options.map((opt: string, idx: number) => {
          let className = "quiz-option";
          if (selected === idx) className += " selected";
          if (verified) {
            if (idx === quiz.correct_index) className += " correct";
            else if (selected === idx) className += " wrong";
          }

          return (
            <label
              key={idx}
              className={className}
              onClick={() => {
                if (!verified) setSelected(idx);
              }}
            >
              <div className="option-marker"></div>
              <span>{opt}</span>
            </label>
          );
        })}
      </div>

      <div className="quiz-actions">
        <button
          className="btn btn-primary btn-verify"
          disabled={selected === null || verified}
          onClick={() => setVerified(true)}
        >
          Verificar
        </button>
      </div>

      {verified && (
        <div
          className={`quiz-feedback show ${
            selected === quiz.correct_index ? "success" : "error"
          }`}
        >
          {selected === quiz.correct_index ? (
            <span dangerouslySetInnerHTML={{__html: `<strong>Correto!</strong> ${quiz.feedback_correct}`}}></span>
          ) : (
             <span dangerouslySetInnerHTML={{__html: `<strong>Incorreto.</strong> ${quiz.feedback_wrong}`}}></span>
          )}
        </div>
      )}
    </div>
  );
}
