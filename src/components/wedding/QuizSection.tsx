import { useState } from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Где познакомились Лев и Яна?",
    options: ["В университете", "На работе", "В путешествии", "Через друзей"],
    correct: 0
  },
  {
    id: 2,
    question: "Сколько лет они вместе?",
    options: ["1 год", "2 года", "3 года", "4 года"],
    correct: 1
  },
  {
    id: 3,
    question: "Какое любимое место для свиданий?",
    options: ["Кино", "Кафе у реки", "Парк", "Дома за настольными играми"],
    correct: 2
  },
  {
    id: 4,
    question: "Кто первым признался в любви?",
    options: ["Лев", "Яна", "Одновременно", "Пока секрет"],
    correct: 0
  },
  {
    id: 5,
    question: "Какое хобби у них общее?",
    options: ["Готовка", "Путешествия", "Спорт", "Фотография"],
    correct: 1
  },
  {
    id: 6,
    question: "Где было сделано предложение?",
    options: ["На крыше дома", "В ресторане", "На природе", "В парке аттракционов"],
    correct: 2
  }
];

const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answeredCorrect, setAnsweredCorrect] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    const isCorrect = answerIndex === questions[currentQuestion].correct;
    setAnsweredCorrect(isCorrect);
    
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setAnsweredCorrect(false);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setAnsweredCorrect(false);
  };

  const getResultMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) {
      return { title: "Невероятно! 🎉", message: "Вы знаете о молодожёнах всё! Настоящий друг семьи!" };
    } else if (percentage >= 70) {
      return { title: "Отлично! 🌟", message: "Вы очень хорошо знаете Льва и Яну!" };
    } else if (percentage >= 50) {
      return { title: "Неплохо! 👍", message: "Вы знакомы с молодожёнами, но есть что узнать!" };
    } else {
      return { title: "Есть куда расти! 😊", message: "Самое время узнать их получше на свадьбе!" };
    }
  };

  return (
    <section className="space-y-8 scroll-reveal">
      <div className="text-center space-y-4 scroll-reveal delay-100">
        <div className="flex flex-col items-center gap-4">
          <Icon name="HelpCircle" className="text-amber-700/40 animate-pulse-glow" size={32} />
          <h2 className="font-serif text-5xl text-primary tracking-wide">Квиз о молодожёнах</h2>
          <div className="flex items-center gap-2">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-amber-700/30" />
            <div className="w-2 h-2 bg-amber-700/40 rounded-full animate-pulse" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-amber-700/30" />
          </div>
        </div>
      </div>

      <Card className="p-6 sm:p-10 max-w-2xl mx-auto shadow-2xl border-2 border-amber-700/30 bg-gradient-to-br from-amber-50/95 via-white/90 to-amber-50/95 backdrop-blur-sm relative overflow-hidden scroll-reveal-scale delay-200">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        <div className="absolute top-8 right-8 text-3xl opacity-6">🎯</div>
        <div className="absolute bottom-8 right-8 text-3xl opacity-5">💡</div>
        
        <div className="relative z-10">
          {!showResult ? (
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <div className="font-sans text-sm text-muted-foreground">
                  Вопрос {currentQuestion + 1} из {questions.length}
                </div>
                <div className="font-sans text-sm text-primary font-semibold">
                  Счёт: {score}
                </div>
              </div>

              <div className="h-2 bg-amber-100 rounded-full overflow-hidden mb-6">
                <div 
                  className="h-full bg-gradient-to-r from-amber-600 to-amber-500 transition-all duration-500"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                />
              </div>

              <div className="mb-6">
                <Icon name="MessageCircle" className="text-amber-700/60 mb-3" size={28} />
                <h3 className="font-serif text-2xl text-primary mb-6">
                  {questions[currentQuestion].question}
                </h3>
              </div>

              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={selectedAnswer !== null}
                    className={`w-full p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                      selectedAnswer === null
                        ? 'border-amber-700/20 hover:border-amber-700/40 hover:bg-amber-50/50'
                        : selectedAnswer === index
                        ? index === questions[currentQuestion].correct
                          ? 'border-green-600 bg-green-50 shadow-lg'
                          : 'border-red-600 bg-red-50 shadow-lg'
                        : index === questions[currentQuestion].correct
                        ? 'border-green-600 bg-green-50'
                        : 'border-amber-700/20 opacity-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                        selectedAnswer === index
                          ? index === questions[currentQuestion].correct
                            ? 'border-green-600 bg-green-100'
                            : 'border-red-600 bg-red-100'
                          : selectedAnswer !== null && index === questions[currentQuestion].correct
                          ? 'border-green-600 bg-green-100'
                          : 'border-amber-700/30'
                      }`}>
                        {selectedAnswer !== null && index === questions[currentQuestion].correct && (
                          <Icon name="Check" className="text-green-600" size={16} />
                        )}
                        {selectedAnswer === index && index !== questions[currentQuestion].correct && (
                          <Icon name="X" className="text-red-600" size={16} />
                        )}
                      </div>
                      <span className="font-sans">{option}</span>
                    </div>
                  </button>
                ))}
              </div>

              {selectedAnswer !== null && (
                <div className="mt-6 pt-6 border-t border-amber-700/20">
                  <div className={`flex items-start gap-3 p-4 rounded-lg ${
                    answeredCorrect ? 'bg-green-50 border border-green-200' : 'bg-amber-50 border border-amber-200'
                  }`}>
                    <Icon 
                      name={answeredCorrect ? "CheckCircle" : "Info"} 
                      className={answeredCorrect ? "text-green-600" : "text-amber-600"} 
                      size={24} 
                    />
                    <div>
                      <p className="font-sans font-semibold mb-1">
                        {answeredCorrect ? "Правильно! 🎉" : "Не совсем так 😊"}
                      </p>
                      <p className="font-sans text-sm text-muted-foreground">
                        {answeredCorrect 
                          ? "Вы отлично знаете молодожёнов!" 
                          : "Но теперь вы точно это запомните!"}
                      </p>
                    </div>
                  </div>

                  <Button
                    onClick={handleNext}
                    className="w-full mt-4 bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-800 hover:to-amber-700 text-white py-3 text-lg font-sans shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {currentQuestion < questions.length - 1 ? "Следующий вопрос" : "Показать результаты"}
                    <Icon name="ArrowRight" className="ml-2" size={20} />
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center space-y-6 py-8">
              <div className="mb-6">
                <div className="text-6xl mb-4">
                  {(score / questions.length) * 100 === 100 ? "🏆" : 
                   (score / questions.length) * 100 >= 70 ? "🌟" :
                   (score / questions.length) * 100 >= 50 ? "👍" : "😊"}
                </div>
                <h3 className="font-serif text-3xl text-primary mb-2">
                  {getResultMessage().title}
                </h3>
                <p className="font-sans text-lg text-muted-foreground">
                  {getResultMessage().message}
                </p>
              </div>

              <div className="bg-gradient-to-r from-amber-100 to-amber-50 p-6 rounded-lg border border-amber-700/20">
                <div className="font-serif text-5xl text-primary mb-2">
                  {score} / {questions.length}
                </div>
                <div className="font-sans text-muted-foreground">
                  Правильных ответов
                </div>
              </div>

              <Button
                onClick={handleRestart}
                variant="outline"
                className="mt-6 border-amber-700/30 hover:bg-amber-50"
              >
                <Icon name="RotateCcw" className="mr-2" size={18} />
                Пройти ещё раз
              </Button>
            </div>
          )}
        </div>
      </Card>
    </section>
  );
};

export default QuizSection;
