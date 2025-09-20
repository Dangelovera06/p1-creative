import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowRight, 
  ArrowLeft,
  CheckCircle,
  TrendingUp,
  Users,
  Target,
  Zap
} from "lucide-react";

const quizQuestions = [
  {
    id: 1,
    question: "What type of medical practice do you run?",
    type: "single",
    options: [
      "General Practice/Family Medicine",
      "Dental Practice", 
      "Dermatology",
      "Cardiology",
      "Orthopedics",
      "Pediatrics",
      "Other Specialty"
    ]
  },
  {
    id: 2,
    question: "How many new patients do you currently get per month?",
    type: "single",
    options: [
      "0-10 patients",
      "11-25 patients",
      "26-50 patients", 
      "51-100 patients",
      "100+ patients"
    ]
  },
  {
    id: 3,
    question: "What's your biggest challenge in growing your practice?",
    type: "single",
    options: [
      "Not enough new patient inquiries",
      "Low online visibility/presence",
      "Difficulty converting leads to appointments",
      "Competing with other practices",
      "Managing online reputation",
      "All of the above"
    ]
  },
  {
    id: 4,
    question: "What marketing efforts are you currently using? (Select all that apply)",
    type: "multiple",
    options: [
      "Google Ads",
      "Facebook/Instagram Ads",
      "SEO/Website optimization",
      "Email marketing",
      "Referral programs",
      "None/Very limited"
    ]
  },
  {
    id: 5,
    question: "What's your monthly marketing budget?",
    type: "single",
    options: [
      "$0 - $1,000",
      "$1,001 - $3,000",
      "$3,001 - $5,000",
      "$5,001 - $10,000",
      "$10,000+"
    ]
  },
  {
    id: 6,
    question: "What's your primary goal for the next 6 months?",
    type: "single",
    options: [
      "Double my new patient flow",
      "Improve my online presence",
      "Increase revenue by 25-50%",
      "Dominate local search results",
      "Build a sustainable marketing system"
    ]
  }
];

export default function QuizFunnel() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [leadInfo, setLeadInfo] = useState({
    name: '',
    email: '',
    phone: '',
    practice: ''
  });
  const [showLeadCapture, setShowLeadCapture] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  const handleAnswer = (questionId, answer) => {
    const question = quizQuestions.find(q => q.id === questionId);
    
    if (question.type === 'multiple') {
      const currentAnswers = answers[questionId] || [];
      const updatedAnswers = currentAnswers.includes(answer)
        ? currentAnswers.filter(a => a !== answer)
        : [...currentAnswers, answer];
      
      setAnswers({
        ...answers,
        [questionId]: updatedAnswers
      });
    } else {
      setAnswers({
        ...answers,
        [questionId]: answer
      });
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const getResults = () => {
    const practiceType = answers[1] || "Medical Practice";
    const currentPatients = answers[2] || "Unknown";
    const budget = answers[5] || "Not specified";
    
    return {
      title: "Your Practice Growth Potential Analysis",
      score: Math.floor(Math.random() * 20) + 80, // 80-100% score
      recommendations: [
        "Implement targeted Google Ads campaigns",
        "Optimize your website for local SEO",
        "Set up automated patient review system",
        "Create compelling social media presence"
      ],
      potentialIncrease: "150-300%"
    };
  };

  const handleLeadCapture = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to Netlify Forms
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          'form-name': 'quiz-results',
          ...leadInfo,
          'quiz-answers': JSON.stringify(answers),
          'quiz-results': JSON.stringify(getResults())
        }).toString(),
      });

      if (response.ok) {
        setIsComplete(true);
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentQuestionData = quizQuestions[currentQuestion];
  const currentAnswer = answers[currentQuestionData?.id];
  const canProceed = currentAnswer && (
    Array.isArray(currentAnswer) ? currentAnswer.length > 0 : true
  );

  if (isComplete) {
    return (
      <Card className="border border-gray-200 shadow-lg bg-gradient-to-br from-black to-gray-800 text-white">
        <CardContent className="p-8 text-center">
          <div className="space-y-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="h-8 w-8 text-black" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
              <p className="text-gray-300">
                We've received your quiz results and will send you a personalized growth strategy within 24 hours.
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-sm">
                📧 Check your email for your detailed practice growth analysis
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (showResults && !showLeadCapture) {
    const results = getResults();
    
    return (
      <Card className="border border-gray-200 shadow-lg">
        <CardContent className="p-8">
          <div className="text-center space-y-6">
            <Badge className="bg-green-100 text-green-800 border-green-200">
              Analysis Complete
            </Badge>
            
            <div>
              <h3 className="text-2xl font-bold text-black mb-2">{results.title}</h3>
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="text-3xl font-bold text-green-600">{results.score}%</div>
                <div className="text-gray-600">Growth Potential</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-6 w-6 text-green-600" />
                <div className="text-left">
                  <div className="font-semibold">Potential Patient Increase</div>
                  <div className="text-green-600 font-bold">{results.potentialIncrease}</div>
                </div>
              </div>
              
              <div className="text-left space-y-2">
                <div className="font-semibold flex items-center">
                  <Target className="h-5 w-5 mr-2 text-blue-600" />
                  Recommended Next Steps:
                </div>
                <ul className="space-y-1 text-sm text-gray-700">
                  {results.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Button 
              onClick={() => setShowLeadCapture(true)}
              className="w-full bg-black hover:bg-gray-800 text-white py-3"
            >
              <Zap className="mr-2 h-5 w-5" />
              Get My Personalized Growth Plan
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (showLeadCapture) {
    return (
      <Card className="border border-gray-200 shadow-lg">
        <CardContent className="p-8">
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-black mb-2">
                Get Your Personalized Growth Strategy
              </h3>
              <p className="text-gray-700">
                Enter your details to receive a custom marketing plan based on your quiz results.
              </p>
            </div>

            <form 
              onSubmit={handleLeadCapture}
              name="quiz-results"
              method="POST"
              data-netlify="true"
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="quiz-results" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={leadInfo.name}
                  onChange={(e) => setLeadInfo({...leadInfo, name: e.target.value})}
                  required
                  className="border-gray-300 focus:border-black focus:ring-black"
                />
                <Input
                  name="practice"
                  placeholder="Practice Name"
                  value={leadInfo.practice}
                  onChange={(e) => setLeadInfo({...leadInfo, practice: e.target.value})}
                  required
                  className="border-gray-300 focus:border-black focus:ring-black"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={leadInfo.email}
                  onChange={(e) => setLeadInfo({...leadInfo, email: e.target.value})}
                  required
                  className="border-gray-300 focus:border-black focus:ring-black"
                />
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={leadInfo.phone}
                  onChange={(e) => setLeadInfo({...leadInfo, phone: e.target.value})}
                  required
                  className="border-gray-300 focus:border-black focus:ring-black"
                />
              </div>

              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black hover:bg-gray-800 text-white py-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Generating Your Plan...
                  </>
                ) : (
                  <>
                    <Zap className="mr-2 h-5 w-5" />
                    Send My Growth Strategy
                  </>
                )}
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border border-gray-200 shadow-lg">
      <CardContent className="p-8">
        <div className="space-y-6">
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-black">
              {currentQuestionData.question}
            </h3>
            
            <div className="space-y-2">
              {currentQuestionData.options.map((option, index) => {
                const isSelected = currentQuestionData.type === 'multiple'
                  ? (currentAnswer || []).includes(option)
                  : currentAnswer === option;
                
                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(currentQuestionData.id, option)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      isSelected
                        ? 'border-black bg-black text-white'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                        isSelected ? 'bg-white border-white' : 'border-gray-400'
                      }`}>
                        {isSelected && <CheckCircle className="w-4 h-4 text-black" />}
                      </div>
                      {option}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              variant="outline"
              className="border-gray-300"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
            
            <Button
              onClick={nextQuestion}
              disabled={!canProceed}
              className="bg-black hover:bg-gray-800 text-white"
            >
              {currentQuestion === quizQuestions.length - 1 ? 'See Results' : 'Next'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
