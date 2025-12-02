import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";

export default function DecemberLeadQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    usingSocialMedia: '',
    monthlyLeads: '',
    howFast: '',
    howLong: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const steps = [
    {
      id: 'contact',
      title: 'Your Contact Information',
      subtitle: 'Fill in your details below',
      fields: ['firstName', 'lastName', 'email', 'phone']
    },
    {
      id: 'socialMedia',
      title: 'Are you currently using social media as a lead source?',
      subtitle: 'If yes, how many leads are you getting monthly?',
      type: 'select',
      field: 'usingSocialMedia',
      options: [
        "No, not currently",
        "Yes, 1-5 leads/month",
        "Yes, 6-15 leads/month",
        "Yes, 16-30 leads/month",
        "Yes, 30+ leads/month"
      ]
    },
    {
      id: 'howFast',
      title: 'How fast do you want to start?',
      type: 'select',
      field: 'howFast',
      options: [
        "Immediately - ready to go now",
        "Within the next week",
        "Within the next 2 weeks",
        "Within the next month",
        "Just exploring options"
      ]
    },
    {
      id: 'howLong',
      title: 'How long have you been looking to implement this into your business?',
      type: 'select',
      field: 'howLong',
      options: [
        "Just started looking",
        "A few weeks",
        "1-3 months",
        "3-6 months",
        "Over 6 months"
      ]
    }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const canProceed = () => {
    const step = steps[currentStep];
    if (step.fields) {
      if (step.id === 'contact') {
        return formData.firstName && formData.lastName && formData.email && formData.phone;
      }
      return step.fields.every(field => formData[field]);
    }
    if (step.field) {
      return formData[step.field];
    }
    return true;
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      // Fire DECEMBER LEAD pixel event
      if (window.fbq) {
        window.fbq('track', 'Lead', {
          content_name: 'DECEMBER LEAD',
          content_category: 'Quiz Submission',
          value: 0,
          currency: 'USD'
        });
        
        window.fbq('trackCustom', 'DecemberLead', {
          first_name: formData.firstName,
          last_name: formData.lastName,
          using_social_media: formData.usingSocialMedia,
          how_fast: formData.howFast,
          how_long: formData.howLong,
          timestamp: new Date().toISOString()
        });
      }
      
      // Fire tracking pixel
      const trackingPixel = new Image(1, 1);
      trackingPixel.src = `https://www.facebook.com/tr?id=614618117913023&ev=Lead&cd[content_name]=DECEMBER%20LEAD&noscript=1`;

      // Submit to webhook or form handler
      const submissionData = new URLSearchParams({
        'form-name': 'december-lead-quiz',
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        usingSocialMedia: formData.usingSocialMedia,
        howFast: formData.howFast,
        howLong: formData.howLong,
        submittedAt: new Date().toISOString()
      });

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: submissionData.toString()
      });

      setIsComplete(true);
      
      // Redirect to Instagram after delay
      setTimeout(() => {
        window.location.href = 'https://www.instagram.com/p1.creative';
      }, 2000);
      
    } catch (error) {
      console.error('Submission error:', error);
      // Still mark as complete and redirect
      setIsComplete(true);
      setTimeout(() => {
        window.location.href = 'https://www.instagram.com/p1.creative';
      }, 2000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const progress = ((currentStep + 1) / steps.length) * 100;
  const currentStepData = steps[currentStep];

  if (isComplete) {
    return (
      <section className="py-16 md:py-24 bg-neutral-900">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Thank You!
            </h3>
            <p className="text-white/70 mb-4">
              Redirecting you to our Instagram...
            </p>
            <div className="animate-spin w-8 h-8 border-2 border-white/20 border-t-white rounded-full mx-auto"></div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-neutral-900">
      {/* Hidden Netlify Form for bot detection */}
      <form name="december-lead-quiz" method="POST" data-netlify="true" netlify-honeypot="bot-field" hidden>
        <input type="hidden" name="form-name" value="december-lead-quiz" />
        <input name="bot-field" />
        <input type="text" name="firstName" />
        <input type="text" name="lastName" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <input type="text" name="usingSocialMedia" />
        <input type="text" name="howFast" />
        <input type="text" name="howLong" />
        <input type="text" name="submittedAt" />
      </form>

      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-[#006eff]" />
            <span className="text-xs sm:text-sm uppercase tracking-wider text-[#006eff]">
              December Special
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
            See If You Qualify
          </h2>
          <p className="text-white/60">
            Answer a few quick questions to get started
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-white/60 mb-2">
            <span>Step {currentStep + 1} of {steps.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#006eff] to-[#0080ff]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Quiz Card */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
            {currentStepData.title}
          </h3>
          {currentStepData.subtitle && (
            <p className="text-white/60 text-sm mb-6">
              {currentStepData.subtitle}
            </p>
          )}

          {/* Contact Fields - All in one step */}
          {currentStepData.id === 'contact' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white/70 mb-2">First Name *</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    placeholder="John"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#006eff] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/70 mb-2">Last Name *</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    placeholder="Smith"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#006eff] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-2">Email *</label>
                <p className="text-xs text-white/50 mb-2">The best email to reach out to in case we need to.</p>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="john@business.com"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#006eff] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-2">Phone Number *</label>
                <p className="text-xs text-white/50 mb-2">In case it's something urgent, we will send an SMS / Call.</p>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="(555) 123-4567"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#006eff] transition-colors"
                />
              </div>
            </div>
          )}

          {/* Select Options */}
          {currentStepData.type === 'select' && (
            <div className="space-y-3">
              {currentStepData.options.map((option, index) => {
                const isSelected = formData[currentStepData.field] === option;
                return (
                  <button
                    key={index}
                    onClick={() => handleInputChange(currentStepData.field, option)}
                    className={`w-full text-left px-4 py-4 rounded-xl border-2 transition-all duration-200 ${
                      isSelected
                        ? 'border-[#006eff] bg-[#006eff]/20 text-white'
                        : 'border-white/20 bg-white/5 text-white/80 hover:border-white/40 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center flex-shrink-0 ${
                        isSelected ? 'border-[#006eff] bg-[#006eff]' : 'border-white/40'
                      }`}>
                        {isSelected && <CheckCircle className="w-3 h-3 text-white" />}
                      </div>
                      <span>{option}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-white/10">
            <button
              onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
              disabled={currentStep === 0}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentStep === 0
                  ? 'text-white/30 cursor-not-allowed'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              ← Back
            </button>

            <button
              onClick={handleNext}
              disabled={!canProceed() || isSubmitting}
              className={`px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all ${
                canProceed() && !isSubmitting
                  ? 'bg-gradient-to-r from-[#006eff] to-[#0080ff] text-white hover:shadow-lg hover:shadow-[#006eff]/30'
                  : 'bg-white/20 text-white/50 cursor-not-allowed'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                  Submitting...
                </>
              ) : currentStep === steps.length - 1 ? (
                <>
                  Submit
                  <CheckCircle className="w-5 h-5" />
                </>
              ) : (
                <>
                  Next
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

