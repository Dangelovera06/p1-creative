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
  Zap,
  Home
} from "lucide-react";

const quizQuestions = [
  {
    id: 1,
    question: "What type of business do you run?",
    type: "single",
    options: [
      "Medical Practice",
      "Dental Practice", 
      "Law Firm",
      "Real Estate Agency",
      "Restaurant/Food Service",
      "Retail Store",
      "Professional Services",
      "Other"
    ]
  },
  {
    id: 2,
    question: "How many new customers are you getting per month?",
    type: "single",
    options: [
      "0-10 customers",
      "11-25 customers",
      "26-50 customers", 
      "51-100 customers",
      "100+ customers"
    ]
  },
  {
    id: 3,
    question: "What's your biggest challenge in growing your business?",
    type: "single",
    options: [
      "Not enough new customer inquiries",
      "Low online visibility/presence",
      "Difficulty converting leads to sales",
      "Competing with other businesses",
      "Managing online reputation",
      "Limited marketing budget",
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
      "Social media posting",
      "Referral programs",
      "Print advertising",
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
      "Double my new customer flow",
      "Improve my online presence",
      "Increase revenue by 25-50%",
      "Dominate local search results",
      "Build a sustainable marketing system",
      "Expand to new locations"
    ]
  }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [leadInfo, setLeadInfo] = useState({
    name: '',
    email: '',
    phone: '',
    business: ''
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
    const businessType = answers[1] || "Business";
    const currentCustomers = answers[2] || "Unknown";
    const budget = answers[5] || "Not specified";
    
    return {
      title: "Your Business Growth Potential Analysis",
      score: Math.floor(Math.random() * 20) + 80, // 80-100% score
      recommendations: [
        "Implement targeted digital advertising campaigns",
        "Optimize your website for local search",
        "Set up automated customer review system",
        "Create compelling social media presence",
        "Develop a comprehensive content strategy"
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

  const goHome = () => {
    window.location.href = '/';
  };

  const currentQuestionData = quizQuestions[currentQuestion];
  const currentAnswer = answers[currentQuestionData?.id];
  const canProceed = currentAnswer && (
    Array.isArray(currentAnswer) ? currentAnswer.length > 0 : true
  );

  if (isComplete) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Card className="border border-gray-200 shadow-lg bg-gradient-to-br from-black to-gray-800 text-white">
            <CardContent className="p-12 text-center">
              <div className="space-y-8">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="h-10 w-10 text-black" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
                  <p className="text-xl text-gray-300 mb-6">
                    We've received your quiz results and will send you a personalized growth strategy within 24 hours.
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <p className="text-lg">
                    📧 Check your email for your detailed business growth analysis
                  </p>
                </div>
                <Button 
                  onClick={goHome}
                  className="bg-white text-black hover:bg-gray-100 px-8 py-3"
                >
                  <Home className="mr-2 h-5 w-5" />
                  Back to Home
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (showResults && !showLeadCapture) {
    const results = getResults();
    
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Card className="border border-gray-200 shadow-lg">
            <CardContent className="p-12">
              <div className="text-center space-y-8">
                <Badge className="bg-green-100 text-green-800 border-green-200 text-lg px-4 py-2">
                  Analysis Complete
                </Badge>
                
                <div>
                  <h1 className="text-3xl font-bold text-black mb-4">{results.title}</h1>
                  <div className="flex items-center justify-center space-x-4 mb-6">
                    <div className="text-5xl font-bold text-green-600">{results.score}%</div>
                    <div className="text-xl text-gray-600">Growth Potential</div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-8 space-y-6">
                  <div className="flex items-center justify-center space-x-4">
                    <TrendingUp className="h-8 w-8 text-green-600" />
                    <div className="text-center">
                      <div className="text-xl font-semibold">Potential Customer Increase</div>
                      <div className="text-3xl text-green-600 font-bold">{results.potentialIncrease}</div>
                    </div>
                  </div>
                  
                  <div className="text-left space-y-4">
                    <div className="text-xl font-semibold flex items-center justify-center">
                      <Target className="h-6 w-6 mr-3 text-blue-600" />
                      Recommended Next Steps:
                    </div>
                    <ul className="space-y-3 text-gray-700 max-w-2xl mx-auto">
                      {results.recommendations.map((rec, index) => (
                        <li key={index} className="flex items-center text-lg">
                          <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button 
                  onClick={() => setShowLeadCapture(true)}
                  className="bg-black hover:bg-gray-800 text-white py-4 px-8 text-lg"
                >
                  <Zap className="mr-2 h-6 w-6" />
                  Get My Personalized Growth Plan
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (showLeadCapture) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <Card className="border border-gray-200 shadow-lg">
            <CardContent className="p-12">
              <div className="space-y-8">
                <div className="text-center">
                  <h1 className="text-2xl font-semibold text-black mb-4">
                    Get Your Personalized Growth Strategy
                  </h1>
                  <p className="text-lg text-gray-700">
                    Enter your details to receive a custom marketing plan based on your quiz results.
                  </p>
                </div>

                <form 
                  name="quiz-results"
                  method="POST"
                  netlify
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="quiz-results" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">Your Name *</label>
                      <Input
                        name="name"
                        placeholder="John Smith"
                        value={leadInfo.name}
                        onChange={(e) => setLeadInfo({...leadInfo, name: e.target.value})}
                        required
                        className="border-gray-300 focus:border-black focus:ring-black h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">Business Name *</label>
                      <Input
                        name="business"
                        placeholder="Your Business Name"
                        value={leadInfo.business}
                        onChange={(e) => setLeadInfo({...leadInfo, business: e.target.value})}
                        required
                        className="border-gray-300 focus:border-black focus:ring-black h-12"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">Email Address *</label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="john@business.com"
                        value={leadInfo.email}
                        onChange={(e) => setLeadInfo({...leadInfo, email: e.target.value})}
                        required
                        className="border-gray-300 focus:border-black focus:ring-black h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">Phone Number *</label>
                      <Input
                        name="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={leadInfo.phone}
                        onChange={(e) => setLeadInfo({...leadInfo, phone: e.target.value})}
                        required
                        className="border-gray-300 focus:border-black focus:ring-black h-12"
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-black hover:bg-gray-800 text-white py-4 text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                        Generating Your Plan...
                      </>
                    ) : (
                      <>
                        <Zap className="mr-2 h-6 w-6" />
                        Send My Growth Strategy
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="bg-black text-white border-black mb-4">
            Business Growth Quiz
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Discover Your Growth Potential
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Take our quick assessment to get a personalized marketing strategy for your business.
          </p>
        </div>

        <Card className="border border-gray-200 shadow-lg">
          <CardContent className="p-12">
            <div className="space-y-8">
              {/* Progress Bar */}
              <div className="space-y-3">
                <div className="flex justify-between text-lg text-gray-600">
                  <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
                  <span>{Math.round(progress)}% Complete</span>
                </div>
                <Progress value={progress} className="h-3" />
              </div>

              {/* Question */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-black">
                  {currentQuestionData.question}
                </h2>
                
                <div className="space-y-3">
                  {currentQuestionData.options.map((option, index) => {
                    const isSelected = currentQuestionData.type === 'multiple'
                      ? (currentAnswer || []).includes(option)
                      : currentAnswer === option;
                    
                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswer(currentQuestionData.id, option)}
                        className={`w-full text-left p-6 rounded-xl border-2 transition-all text-lg ${
                          isSelected
                            ? 'border-black bg-black text-white'
                            : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center">
                          <div className={`w-5 h-5 rounded-full border-2 mr-4 flex items-center justify-center ${
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
              <div className="flex justify-between pt-6">
                <Button
                  onClick={prevQuestion}
                  disabled={currentQuestion === 0}
                  variant="outline"
                  className="border-gray-300 px-6 py-3"
                >
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Previous
                </Button>
                
                <Button
                  onClick={nextQuestion}
                  disabled={!canProceed}
                  className="bg-black hover:bg-gray-800 text-white px-6 py-3"
                >
                  {currentQuestion === quizQuestions.length - 1 ? 'See Results' : 'Next'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
