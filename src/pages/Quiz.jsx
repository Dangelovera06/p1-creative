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
  Home,
  Calendar
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
  },
  {
    id: 7,
    question: "How would you prefer us to contact you with your results?",
    type: "single",
    options: [
      "Email me the detailed report",
      "Call me to discuss the results",
      "Text me a summary first",
      "Schedule a strategy session",
      "Send me everything via email"
    ]
  }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showContactForm, setShowContactForm] = useState(false);
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

  // Handle contact form submission - let Netlify handle it natively
  const handleContactSubmit = (e) => {
    // Let the form submit naturally to Netlify
    setIsSubmitting(true);
    // After a brief delay, show results (form will submit in background)
    setTimeout(() => {
      setShowResults(true);
      setShowContactForm(false);
    }, 1000);
  };

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
      setShowContactForm(true);
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
      <div className="min-h-screen bg-gradient-to-br from-black to-gray-800 flex flex-col text-white">
        {/* Header */}
        <div className="bg-black/20 backdrop-blur-sm border-b border-white/10 px-4 py-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <Badge className="bg-green-100 text-green-800 border-green-200 text-sm px-3 py-1">
              Assessment Complete
            </Badge>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center px-4 py-6 sm:px-6 pb-12">
          <div className="max-w-2xl mx-auto w-full text-center">
            {/* Success Icon */}
            <div className="mb-8">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 sm:h-12 sm:w-12 text-black" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">Thank You!</h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                We've received your quiz results and will send you a personalized growth strategy within 24 hours.
              </p>
            </div>

            {/* Email Notice */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <p className="text-lg sm:text-xl">
                📧 Check your email for your detailed business growth analysis
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4 mb-8">
              <Button 
                onClick={() => window.open('https://calendly.com/p1creative/30min', '_blank')}
                className="w-full bg-white text-black hover:bg-gray-100 py-4 text-lg font-semibold rounded-2xl shadow-lg"
              >
                <Calendar className="mr-2 h-6 w-6" />
                Book a Strategy Call
              </Button>
              
              <Button 
                onClick={goHome}
                variant="outline"
                className="w-full border-2 border-white text-white hover:bg-white hover:text-black py-4 text-lg font-semibold rounded-2xl"
              >
                <Home className="mr-2 h-6 w-6" />
                Back to Home
              </Button>
            </div>

            {/* Additional Info */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-400">
                🚀 Ready to accelerate your business growth? Book a call to discuss your personalized strategy.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showContactForm) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex flex-col">
        {/* Header */}
        <div className="bg-white shadow-sm border-b px-4 py-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <Badge className="bg-green-100 text-green-800 border-green-200 text-sm px-3 py-1">
              Almost Done!
            </Badge>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col px-4 py-6 sm:px-6">
          <div className="max-w-2xl mx-auto w-full">
            <div className="text-center mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                Get Your Personalized Results
              </h1>
              <p className="text-base sm:text-lg text-gray-700">
                Enter your contact information to receive your business growth analysis and personalized recommendations.
              </p>
            </div>

            <form 
              name="quiz-contact"
              method="POST"
              netlify
              action="/Quiz#results"
              onSubmit={handleContactSubmit}
              className="space-y-6"
            >
              {/* Hidden fields for individual quiz questions */}
              <input type="hidden" name="question_1_business_type" value={answers[1] || ''} />
              <input type="hidden" name="question_2_monthly_customers" value={answers[2] || ''} />
              <input type="hidden" name="question_3_biggest_challenge" value={answers[3] || ''} />
              <input type="hidden" name="question_4_current_marketing" value={Array.isArray(answers[4]) ? answers[4].join(', ') : (answers[4] || '')} />
              <input type="hidden" name="question_5_marketing_budget" value={answers[5] || ''} />
              <input type="hidden" name="question_6_primary_goal" value={answers[6] || ''} />
              <input type="hidden" name="question_7_contact_preference" value={answers[7] || ''} />
              <input type="hidden" name="quiz_completion_date" value={new Date().toISOString()} />
              <input type="hidden" name="growth_score" value={getResults().score} />
              <input type="hidden" name="potential_increase" value={getResults().potentialIncrease} />
              
              <div>
                <label className="block text-sm font-medium text-black mb-3">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Smith"
                  value={leadInfo.name}
                  onChange={(e) => setLeadInfo({...leadInfo, name: e.target.value})}
                  required
                  className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-black focus:ring-0 text-base sm:text-lg bg-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-black mb-3">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@business.com"
                  value={leadInfo.email}
                  onChange={(e) => setLeadInfo({...leadInfo, email: e.target.value})}
                  required
                  className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-black focus:ring-0 text-base sm:text-lg bg-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-black mb-3">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="(555) 123-4567"
                  value={leadInfo.phone}
                  onChange={(e) => setLeadInfo({...leadInfo, phone: e.target.value})}
                  required
                  className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-black focus:ring-0 text-base sm:text-lg bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-3">Business Name</label>
                <input
                  type="text"
                  name="business"
                  placeholder="Your Business Name"
                  value={leadInfo.business}
                  onChange={(e) => setLeadInfo({...leadInfo, business: e.target.value})}
                  className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-black focus:ring-0 text-base sm:text-lg bg-white"
                />
              </div>

              {/* Navigation - Fixed at bottom */}
              <div className="flex justify-between items-center pt-8 border-t bg-white sticky bottom-0 -mx-4 px-4 py-4 sm:-mx-6 sm:px-6 mt-8">
                <Button
                  type="button"
                  onClick={() => {
                    setShowContactForm(false);
                    setCurrentQuestion(quizQuestions.length - 1);
                  }}
                  variant="outline"
                  className="border-gray-300 px-4 py-2 sm:px-6 sm:py-3"
                  size="sm"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-black hover:bg-gray-800 disabled:bg-gray-400 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-2xl text-base font-semibold flex items-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Zap className="mr-2 h-5 w-5" />
                      Get Results
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  if (showResults && !showLeadCapture) {
    const results = getResults();
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex flex-col">
        {/* Header */}
        <div className="bg-white shadow-sm border-b px-4 py-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <Badge className="bg-green-100 text-green-800 border-green-200 text-sm px-3 py-1">
              Analysis Complete
            </Badge>
          </div>
        </div>

        {/* Main Content - Scrollable */}
        <div className="flex-1 flex flex-col px-4 py-6 sm:px-6 pb-8">
          <div className="max-w-2xl mx-auto w-full">
            {/* Results Header */}
            <div className="text-center mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-black mb-6 leading-tight">
                {results.title}
              </h1>
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg mb-6">
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="text-center">
                    <div className="text-5xl sm:text-6xl font-bold text-green-600 mb-2">{results.score}%</div>
                    <div className="text-lg text-gray-600 font-medium">Growth Potential</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Growth Potential */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg mb-6">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <TrendingUp className="h-8 w-8 text-green-600" />
                <div className="text-center">
                  <div className="text-lg sm:text-xl font-semibold text-black">Potential Customer Increase</div>
                  <div className="text-2xl sm:text-3xl text-green-600 font-bold">{results.potentialIncrease}</div>
                </div>
              </div>
            </div>
            
            {/* Recommendations */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg mb-8">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 mr-3 text-blue-600" />
                  <h3 className="text-lg sm:text-xl font-semibold text-black">Recommended Next Steps</h3>
                </div>
              </div>
              <ul className="space-y-4">
                {results.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                    <span className="text-base sm:text-lg text-gray-700 leading-relaxed">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button - Fixed at bottom */}
            <div className="mt-8">
              <Button 
                onClick={() => setIsComplete(true)}
                className="w-full bg-black hover:bg-gray-800 text-white py-4 text-lg font-semibold rounded-2xl"
              >
                <Zap className="mr-2 h-6 w-6" />
                Complete Assessment
              </Button>
            </div>
          </div>
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex flex-col">
      {/* Header - Fixed at top */}
      <div className="bg-white shadow-sm border-b px-4 py-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-3">
            <Badge variant="secondary" className="bg-black text-white border-black text-sm">
              Business Growth Quiz
            </Badge>
            <span className="text-sm text-gray-500">
              {currentQuestion + 1} of {quizQuestions.length}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
          <div className="text-center mt-2">
            <span className="text-sm text-gray-600">{Math.round(progress)}% Complete</span>
          </div>
        </div>
      </div>

      {/* Main Content - Scrollable */}
      <div className="flex-1 flex flex-col px-4 py-6 sm:px-6">
        <div className="max-w-2xl mx-auto w-full flex-1 flex flex-col">
          {/* Question */}
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-black mb-6 leading-tight">
              {currentQuestionData.question}
            </h1>
          </div>
          
          {/* Options */}
          <div className="space-y-3 mb-8 flex-1">
            {currentQuestionData.options.map((option, index) => {
              const isSelected = currentQuestionData.type === 'multiple'
                ? (currentAnswer || []).includes(option)
                : currentAnswer === option;
              
              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(currentQuestionData.id, option)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border-2 transition-all duration-200 text-base sm:text-lg ${
                    isSelected
                      ? 'border-black bg-black text-white shadow-lg transform scale-[1.02]'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center flex-shrink-0 ${
                      isSelected ? 'bg-white border-white' : 'border-gray-400'
                    }`}>
                      {isSelected && <CheckCircle className="w-4 h-4 text-black" />}
                    </div>
                    <span className="leading-relaxed">{option}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Navigation - Fixed at bottom */}
          <div className="flex justify-between items-center pt-4 border-t bg-white sticky bottom-0 -mx-4 px-4 py-4 sm:-mx-6 sm:px-6">
            <Button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              variant="outline"
              className="border-gray-300 px-4 py-2 sm:px-6 sm:py-3"
              size="sm"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            
            <Button
              onClick={nextQuestion}
              disabled={!canProceed}
              className="bg-black hover:bg-gray-800 text-white px-6 py-2 sm:px-8 sm:py-3 text-base font-semibold"
              size="sm"
            >
              {currentQuestion === quizQuestions.length - 1 ? 'Continue' : 'Next'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
