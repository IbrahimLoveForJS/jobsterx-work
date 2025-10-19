import { useState } from "react";
import { Steps } from "../components/Steps";
import { ChevronLeft, Check, Save } from "lucide-react";
import { WorkExperienceStep, Icon } from "../components/Steps";
import { useNavigate } from "react-router-dom";

const STEPS_CONFIG = [
  {
    title: "Personal Information",
    icon: "user",
    content: <Steps />,
  },
  {
    title: "Work Experience",
    icon: "briefcase",
    content: <WorkExperienceStep />,
  },
  {
    title: "Education",
    icon: "graduation-cap",
    content: <div className="p-6">Education Form Content</div>,
  },
  {
    title: "Skills & Expertise",
    icon: "star",
    content: <div className="p-6">Skills Form Content</div>,
  },
  {
    title: "Certifications",
    icon: "award",
    content: <div className="p-6">Certifications Form Content</div>,
  },
  {
    title: "Auto-Apply Settings",
    icon: "settings",
    content: <div className="p-6">Settings Form Content</div>,
  },
];

const UpdateProfile = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate()
  const totalSteps = STEPS_CONFIG.length;
  const progressPercent = Math.round((currentStep / (totalSteps - 1)) * 100);

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps - 1));
  };

  const handleBack = () => {
    if(currentStep === 0) {
        navigate('/dashboard')
    }
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 flex flex-col items-center font-sans">
      <div className="w-full max-w-4xl bg-white p-6 md:p-8 rounded-xl shadow-2xl space-y-8">
        {/* Progress Header and Bar */}
        <div className="border-b border-gray-100 pb-6 mb-4">
          <div className="flex justify-between items-center text-sm font-medium mb-3">
            <span className="text-gray-900">
              Step {currentStep + 1} of {totalSteps}
            </span>
            <span className="text-purple-600">{progressPercent}% Complete</span>
          </div>

          {/* Actual Progress Bar */}
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-purple-600 transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>

        {/* Step Navigation Tabs */}
        <div className="flex justify-between overflow-x-auto whitespace-nowrap scrollbar-hide mb-8">
          {STEPS_CONFIG.map((step, index) => {
            const isCurrent = index === currentStep;
            const isCompleted = index < currentStep;

            return (
              <div
                key={step.title}
                className={`flex flex-col items-center mx-2 p-2 cursor-pointer transition-all duration-300 ${
                  isCurrent || isCompleted ? "opacity-100" : "opacity-60"
                }`}
                onClick={() => setCurrentStep(index)}
              >
                {/* Icon Container */}
                <div
                  className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 
                  ${
                    isCompleted
                      ? "bg-purple-600 border-purple-600 text-white"
                      : isCurrent
                      ? "bg-purple-50 border-purple-600 text-purple-600 shadow-lg"
                      : "bg-gray-100 border-gray-300 text-gray-500"
                  }`}
                >
                  {isCompleted ? (
                    <Check className="w-4 h-4 text-white" />
                  ) : (
                    <Icon name={step.icon} className="w-4 h-4 md:w-5 md:h-5" />
                  )}
                </div>
                {/* Title */}
                <span
                  className={`text-xs md:text-sm mt-2 transition-colors duration-300 
                  ${
                    isCurrent
                      ? "text-purple-600 font-semibold"
                      : "text-gray-600"
                  }`}
                >
                  {step.title}
                </span>

                {/* Active Indicator Line */}
                <div
                  className={`mt-1 h-0.5 w-full max-w-[80px] rounded-full transition-colors duration-300 ${
                    isCurrent ? "bg-purple-600" : "bg-transparent"
                  }`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-xl overflow-hidden min-h-[300px]">
          {STEPS_CONFIG[currentStep].content}
        </div>

        {/* Footer Navigation */}
        <div className="pt-6 flex justify-between items-center border-t border-gray-100">
          <button
            onClick={handleBack}
            className={`flex items-center gap-1 text-gray-600 font-medium px-4 py-2 rounded-lg transition-colors`}
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </button>

          <div className="flex gap-3">
            <button className="flex items-center gap-2 bg-white border border-gray-300 text-gray-700 text-sm font-medium px-5 py-2.5 rounded-full shadow-sm hover:bg-gray-50 transition">
              <Save className="w-4 h-4" />
              Save Progress
            </button>
            <button
              onClick={handleNext}
              disabled={currentStep === totalSteps - 1}
              className={`flex items-center gap-2 bg-pink-500 text-white text-sm font-medium px-5 py-2.5 rounded-full shadow-lg hover:bg-pink-600 transition disabled:bg-pink-300 disabled:cursor-not-allowed`}
            >
              {currentStep === totalSteps - 1 ? "Finish" : "Next Step"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UpdateProfile;
