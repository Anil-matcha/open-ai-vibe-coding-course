import { useState, useEffect } from "react";

export default function LoadingScreen() {
    const steps = [
        "Analyzing startup idea...",
        "Evaluating market demand...",
        "Selecting optimal builder...",
        "Curating tool stack...",
        "Building execution roadmap...",
    ];

    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
        }, 1200);
        return () => clearInterval(interval);
    }, [steps.length]);

    return (
        <div className="loading-screen animate-fade-in">
            <div className="spinner"></div>
            <div className="loading-steps">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={`loading-step ${index === currentStep ? "active" : ""} ${
                            index < currentStep ? "completed" : ""
                        }`}
                    >
                        {index < currentStep ? "✓" : index === currentStep ? "➤" : "○"} {step}
                    </div>
                ))}
            </div>
        </div>
    );
}
