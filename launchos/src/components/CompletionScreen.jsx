import { useNavigate } from "react-router-dom";

export default function CompletionScreen({ firstWeek, mistakes, roadmapData }) {
    const navigate = useNavigate();

    const handleStartBuilding = () => {
        // Navigate back home to start a new project or dashboard
        navigate("/");
    };

    const handleSaveProject = () => {
        localStorage.setItem("savedRoadmap", JSON.stringify(roadmapData));
        alert("Project saved successfully!");
    };

    const handleDownloadPDF = () => {
        if (!roadmapData) return;
        
        const { analysis, builder, stages } = roadmapData;
        const content = `
# Your LaunchOS Roadmap

## Startup Analysis
- Score: ${analysis.startupScore}/10
- Market Demand: ${analysis.marketDemand}
- Competition: ${analysis.competition}
- Estimated Cost: ${analysis.estimatedCost}
- Estimated Time: ${analysis.estimatedTime}

## Recommended Builder: ${builder.name}
${builder.why}

## Execution Stages
${stages.map((s, i) => `
### Stage ${i + 1}: ${s.title}
- Goal: ${s.goal}
- Tasks:
${s.tasks.map(t => `  - ${t}`).join('\n')}
`).join('')}
`;
        const blob = new Blob([content.trim()], { type: "text/markdown" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "LaunchOS-Roadmap.md";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="card animate-slide-up completion-card">
            <div className="completion-icon">🎉</div>
            <h2 className="card-title text-center">Your Roadmap is Ready</h2>
            <p className="text-center text-muted">You have everything you need to start building.</p>

            <div className="completion-details">
                <div className="detail-box">
                    <h3>First Week Checklist</h3>
                    <ul className="tasks-list">
                        {firstWeek.map((task, i) => (
                            <li key={i} className="task-item">
                                <span className="checkbox"></span>
                                {task}
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div className="detail-box warning-box">
                    <h3>Mistakes to Avoid</h3>
                    <ul>
                        {mistakes.map((mistake, i) => (
                            <li key={i}>{mistake}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="action-buttons-vertical">
                <button className="btn-primary" onClick={handleStartBuilding}>Start Building Now</button>
                <button className="btn-secondary" onClick={handleSaveProject}>Save Project</button>
                <button className="btn-secondary" onClick={handleDownloadPDF}>Download Plan</button>
            </div>
        </div>
    );
}
