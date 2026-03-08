import { useState } from "react";
import confetti from "canvas-confetti";

interface Question {
  question: string;
  options: string[];
  correct: number;
  fact: string;
}

const questions: Question[] = [
  {
    question: "Who was the first woman to win a Nobel Prize?",
    options: ["Rosalind Franklin", "Marie Curie", "Dorothy Hodgkin", "Ada Lovelace"],
    correct: 1,
    fact: "Marie Curie won the Nobel Prize in Physics in 1903!",
  },
  {
    question: "Who was the first woman in space?",
    options: ["Sally Ride", "Valentina Tereshkova", "Kalpana Chawla", "Mae Jemison"],
    correct: 1,
    fact: "Valentina Tereshkova orbited Earth in 1963 aboard Vostok 6.",
  },
  {
    question: "Who is the youngest Nobel Prize laureate?",
    options: ["Greta Thunberg", "Malala Yousafzai", "Emma Watson", "Anne Frank"],
    correct: 1,
    fact: "Malala won the Nobel Peace Prize at age 17 in 2014.",
  },
  {
    question: "Who painted 'The Two Fridas'?",
    options: ["Georgia O'Keeffe", "Artemisia Gentileschi", "Frida Kahlo", "Mary Cassatt"],
    correct: 2,
    fact: "Frida Kahlo painted this iconic self-portrait in 1939.",
  },
  {
    question: "Who refused to give up her bus seat in 1955?",
    options: ["Harriet Tubman", "Sojourner Truth", "Rosa Parks", "Maya Angelou"],
    correct: 2,
    fact: "Rosa Parks' act of defiance sparked the Montgomery Bus Boycott.",
  },
  {
    question: "Who is considered the first computer programmer?",
    options: ["Grace Hopper", "Ada Lovelace", "Hedy Lamarr", "Margaret Hamilton"],
    correct: 1,
    fact: "Ada Lovelace wrote the first algorithm for Charles Babbage's machine in 1843.",
  },
];

const WomenQuiz = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showFact, setShowFact] = useState(false);
  const [finished, setFinished] = useState(false);

  const q = questions[currentQ];

  const handleAnswer = (index: number) => {
    if (selected !== null) return;
    setSelected(index);
    setShowFact(true);
    if (index === q.correct) {
      setScore((s) => s + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQ + 1 >= questions.length) {
      setFinished(true);
      if (score >= questions.length - 1) {
        confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
      }
    } else {
      setCurrentQ((c) => c + 1);
      setSelected(null);
      setShowFact(false);
    }
  };

  const restart = () => {
    setCurrentQ(0);
    setScore(0);
    setSelected(null);
    setShowFact(false);
    setFinished(false);
  };

  return (
    <section className="py-24 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
          Women's <span className="text-gradient">Quiz</span>
        </h2>
        <p className="text-center text-muted-foreground font-body mb-12">
          Test your knowledge about amazing women in history!
        </p>

        {finished ? (
          <div className="gradient-card rounded-2xl p-10 shadow-glow text-center animate-slide-up">
            <p className="text-5xl mb-4">{score >= questions.length - 1 ? "🏆" : score >= questions.length / 2 ? "🌟" : "💪"}</p>
            <p className="font-display text-3xl font-bold text-foreground mb-2">
              {score} / {questions.length}
            </p>
            <p className="font-body text-muted-foreground mb-6">
              {score >= questions.length - 1
                ? "Amazing! You're a women's history expert!"
                : score >= questions.length / 2
                ? "Great job! Keep learning!"
                : "Good try! Every day is a chance to learn more!"}
            </p>
            <button
              onClick={restart}
              className="px-8 py-3 rounded-full gradient-accent text-primary-foreground font-body font-bold hover:scale-105 transition-transform"
            >
              🔄 Play Again
            </button>
          </div>
        ) : (
          <div className="gradient-card rounded-2xl p-8 shadow-card">
            {/* Progress */}
            <div className="flex items-center justify-between mb-6">
              <span className="font-body text-sm text-muted-foreground">
                Question {currentQ + 1} of {questions.length}
              </span>
              <span className="font-body text-sm font-bold text-primary">
                Score: {score}
              </span>
            </div>

            <div className="w-full h-2 rounded-full bg-muted mb-6">
              <div
                className="h-full rounded-full gradient-accent transition-all duration-500"
                style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
              />
            </div>

            <p className="font-display text-xl md:text-2xl font-semibold text-foreground mb-6">
              {q.question}
            </p>

            <div className="space-y-3 mb-6">
              {q.options.map((opt, i) => {
                let classes = "w-full text-left px-5 py-4 rounded-xl font-body text-sm transition-all border ";
                if (selected === null) {
                  classes += "border-border bg-background hover:border-primary/50 hover:bg-muted cursor-pointer";
                } else if (i === q.correct) {
                  classes += "border-green-400 bg-green-50 text-green-800";
                } else if (i === selected) {
                  classes += "border-destructive bg-red-50 text-red-800";
                } else {
                  classes += "border-border bg-background opacity-50";
                }

                return (
                  <button key={i} onClick={() => handleAnswer(i)} className={classes}>
                    <span className="font-bold mr-2">{String.fromCharCode(65 + i)}.</span>
                    {opt}
                  </button>
                );
              })}
            </div>

            {showFact && (
              <div className="rounded-xl bg-primary/5 border border-primary/20 p-4 mb-4 animate-slide-up">
                <p className="font-body text-sm text-foreground">
                  💡 <strong>Fun Fact:</strong> {q.fact}
                </p>
              </div>
            )}

            {selected !== null && (
              <button
                onClick={nextQuestion}
                className="w-full py-3 rounded-xl gradient-accent text-primary-foreground font-body font-bold hover:opacity-90 transition-opacity"
              >
                {currentQ + 1 >= questions.length ? "See Results 🎉" : "Next Question →"}
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default WomenQuiz;
