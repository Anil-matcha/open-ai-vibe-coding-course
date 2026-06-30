export default function AnalysisCard({ data }) {
    return (
        <div className="card animate-slide-up">
            <h2 className="card-title">Startup Analysis</h2>
            
            <div className="score-container">
                <div className="score-circle">
                    {data.startupScore}
                </div>
                <div className="score-label">Overall Score</div>
            </div>

            <div className="stats-grid">
                <div className="stat-box">
                    <span className="stat-label">Market Demand</span>
                    <span className="stat-value">{data.marketDemand}</span>
                </div>
                <div className="stat-box">
                    <span className="stat-label">Competition</span>
                    <span className="stat-value">{data.competition}</span>
                </div>
            </div>

            <div className="analysis-lists">
                <div className="list-box">
                    <h3>Strengths</h3>
                    <ul>
                        {data.strengths.map((s, i) => (
                            <li key={i}>{s}</li>
                        ))}
                    </ul>
                </div>
                <div className="list-box">
                    <h3>Weaknesses</h3>
                    <ul>
                        {data.weaknesses.map((w, i) => (
                            <li key={i}>{w}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
