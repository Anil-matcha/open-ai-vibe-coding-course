import { useEffect, useState } from "react";
import { generateBusinessPlan } from "../api/gemini";
import LoadingScreen from "../components/LoadingScreen";
import AnalysisCard from "../components/AnalysisCard";
import BuilderCard from "../components/BuilderCard";
import ToolStackCard from "../components/ToolStackCard";
import StageCard from "../components/StageCard";
import CompletionScreen from "../components/CompletionScreen";
import ProgressBar from "../components/ProgressBar";
import NavigationButtons from "../components/NavigationButtons";

export default function Roadmap() {
    const [roadmapData, setRoadmapData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        generateRoadmap();
    }, []);

    async function generateRoadmap() {
        try {
            const startup = JSON.parse(
                localStorage.getItem("startupIdea") || "{}"
            );

            const prompt = `
You are LaunchOS. Act as a world-class startup mentor.
Analyze the following startup.

Startup Idea: ${startup.idea}
Target Audience: ${startup.audience}
Budget: ${startup.budget}
Technical Experience: ${startup.experience}
Hours Available Per Week: ${startup.hours}

Return ONLY a valid JSON object matching this exact schema:

{
  "analysis": {
    "startupScore": "Number between 1-10",
    "marketDemand": "High/Medium/Low",
    "competition": "High/Medium/Low",
    "estimatedCost": "Dollar amount range",
    "estimatedTime": "Timeframe",
    "strengths": ["...", "..."],
    "weaknesses": ["...", "..."]
  },
  "builder": {
    "name": "One builder from: Lovable, Bolt, v0, FlutterFlow, Bubble, Shopify, Webflow, Framer, Gumroad, Lemon Squeezy",
    "why": "Explanation",
    "alternatives": ["...", "..."]
  },
  "toolStack": {
    "design": ["..."],
    "database": ["..."],
    "payments": ["..."],
    "authentication": ["..."],
    "automation": ["..."],
    "analytics": ["..."],
    "marketing": ["..."]
  },
  "stages": [
    {
      "title": "Stage title",
      "goal": "...",
      "tools": ["...", "..."],
      "deliverables": ["...", "..."],
      "tasks": ["...", "..."]
    }
  ],
  "firstWeek": ["...", "..."],
  "mistakes": ["...", "..."]
}

Generate at least 5 stages. Ensure the response is pure JSON without markdown backticks.
`;

            const result = await generateBusinessPlan(prompt);
            
            // Clean the result in case it contains markdown formatting
            const cleanedResult = result.replace(/^```json\s*/i, "").replace(/\s*```$/i, "");
            
            const parsedData = JSON.parse(cleanedResult);
            setRoadmapData(parsedData);
        } catch (e) {
            console.error(e);
            setError("Unable to generate roadmap. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return (
            <div className="roadmap-container">
                <LoadingScreen />
            </div>
        );
    }

    if (error) {
        return (
            <div className="roadmap-container error-container">
                <div className="card">
                    <h2>Error</h2>
                    <p>{error}</p>
                    <button className="btn-primary" onClick={() => { setLoading(true); setError(null); generateRoadmap(); }}>Retry</button>
                </div>
            </div>
        );
    }

    if (!roadmapData) return null;

    const totalSteps = 4 + roadmapData.stages.length; // Analysis, Builder, Tools, Stages..., Completion

    const renderStep = () => {
        if (currentStep === 0) {
            return <AnalysisCard data={roadmapData.analysis} />;
        }
        if (currentStep === 1) {
            return <BuilderCard data={roadmapData.builder} />;
        }
        if (currentStep === 2) {
            return <ToolStackCard data={roadmapData.toolStack} analysisData={roadmapData.analysis} />;
        }
        
        const stageIndex = currentStep - 3;
        if (stageIndex >= 0 && stageIndex < roadmapData.stages.length) {
            return <StageCard 
                data={roadmapData.stages[stageIndex]} 
                stageNumber={stageIndex + 1}
                totalStages={roadmapData.stages.length}
            />;
        }

        return <CompletionScreen firstWeek={roadmapData.firstWeek} mistakes={roadmapData.mistakes} roadmapData={roadmapData} />;
    };

    return (
        <div className="roadmap-container">
            <div className="wizard-layout">
                <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
                
                <div className="step-content">
                    {renderStep()}
                </div>

                <NavigationButtons 
                    onNext={() => setCurrentStep(prev => Math.min(prev + 1, totalSteps - 1))}
                    onPrev={() => setCurrentStep(prev => Math.max(prev - 1, 0))}
                    isFirst={currentStep === 0}
                    isLast={currentStep === totalSteps - 1}
                    nextLabel={currentStep === 0 ? "See Recommended Builder" : 
                               currentStep === 1 ? "See Recommended Tools" : 
                               currentStep === 2 ? "Start Roadmap" : "Next Stage"}
                />
            </div>
        </div>
    );
}