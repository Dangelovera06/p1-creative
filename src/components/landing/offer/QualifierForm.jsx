import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, X } from "lucide-react";

const questions = [
  {
    id: 1,
    question: "How many patients are you booking per month?",
    options: ["0-10", "10-25", "25-50", "50+"]
  },
  {
    id: 2,
    question: "What's your biggest challenge right now?",
    options: [
      "Not enough leads",
      "Leads not converting",
      "Can't keep up with follow-ups",
      "Ads aren't working"
    ]
  },
  {
    id: 3,
    question: "How much are you currently spending on marketing per month?",
    options: ["$0-$2,000", "$2,000-$5,000", "$5,000-$10,000", "$10,000+"]
  },
  {
    id: 4,
    question: "Are you ready to invest in a done-for-you system?",
    options: ["Yes, I'm ready now", "Yes, within 30 days", "Just exploring", "Not sure yet"]
  },
  {
    id: 5,
    question: "What type of practice do you run?",
    options: ["Dental/Implants", "Med Spa/Aesthetics", "Medical Practice", "Other"]
  }
];

export default function QualifierForm({ isOpen, onClose }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const isQualifierPhase = currentStep < questions.length;
  const currentQuestion = questions[currentStep];

  const handleAnswer = (answer) => {
    setAnswers({ ...answers, [currentQuestion.id]: answer });
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Qualifier Answers:", answers);
    console.log("Contact Info:", formData);
    
    if (window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: 'Qualifier Form Completed',
        content_category: 'Form Submission'
      });
    }
    
    // You can add your form submission logic here
    alert("Application submitted! We'll be in touch soon.");
    onClose();
  };

  const progress = ((currentStep + 1) / (questions.length + 1)) * 100;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-2xl bg-neutral-900 rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5 text-white/60" />
        </button>

        {/* Progress Bar */}
        <div className="h-2 bg-white/5">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
            className="h-full bg-gradient-to-r from-[#006eff] to-[#0080ff]"
          />
        </div>

        <div className="p-6 sm:p-8 md:p-12">
          <AnimatePresence mode="wait">
            {isQualifierPhase ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-sm text-white/40 mb-4">
                  Question {currentStep + 1} of {questions.length}
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">
                  {currentQuestion.question}
                </h3>

                <div className="space-y-3">
                  {currentQuestion.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(option)}
                      className="w-full p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#006eff] hover:bg-white/[0.05] transition-all text-left text-white font-medium"
                    >
                      {option}
                    </button>
                  ))}
                </div>

                {currentStep > 0 && (
                  <button
                    onClick={handleBack}
                    className="mt-6 flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="contact-form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Apply to Work With P1 Creative
                </h3>
                <p className="text-white/60 mb-8">
                  You're almost there! Enter your details to complete your application.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-white/80 font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-4 rounded-xl bg-white/[0.05] border border-white/10 focus:border-[#006eff] focus:outline-none text-white"
                      placeholder="Dr. John Smith"
                    />
                  </div>

                  <div>
                    <label className="block text-white/80 font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-4 rounded-xl bg-white/[0.05] border border-white/10 focus:border-[#006eff] focus:outline-none text-white"
                      placeholder="john@practice.com"
                    />
                  </div>

                  <div>
                    <label className="block text-white/80 font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-4 rounded-xl bg-white/[0.05] border border-white/10 focus:border-[#006eff] focus:outline-none text-white"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div className="flex gap-3 mt-8">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white hover:bg-white/[0.08] transition-all"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </button>

                    <button
                      type="submit"
                      className="flex-1 relative overflow-hidden px-6 py-3 rounded-xl bg-gradient-to-b from-[#0080ff] via-[#006eff] to-[#0050cc] text-white font-bold shadow-[0_0_20px_rgba(0,110,255,0.5)] hover:scale-105 transition-all"
                    >
                      <span className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-b from-white/20 via-transparent to-transparent" />
                      <span className="pointer-events-none absolute inset-0 translate-x-[-100%] animate-[shimmer_2.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Submit Application
                        <ArrowRight className="w-5 h-5" />
                      </span>
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}


