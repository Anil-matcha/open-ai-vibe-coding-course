export default function ToolStackCard({ data, analysisData }) {
    return (
        <div className="card animate-slide-up">
            <h2 className="card-title">Logistics & Tool Stack</h2>

            <div className="stats-grid">
                <div className="stat-box">
                    <span className="stat-label">Estimated Cost</span>
                    <span className="stat-value">{analysisData.estimatedCost}</span>
                </div>
                <div className="stat-box">
                    <span className="stat-label">Estimated Time</span>
                    <span className="stat-value">{analysisData.estimatedTime}</span>
                </div>
            </div>

            <h3 className="section-subtitle">Recommended Stack</h3>
            <div className="stack-grid">
                {Object.entries(data).map(([category, tools], index) => (
                    <div key={index} className="stack-category">
                        <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                        <ul>
                            {tools.map((tool, i) => (
                                <li key={i}>{tool}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
