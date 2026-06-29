export default function StageCard({ data, stageNumber, totalStages }) {
    return (
        <div className="card animate-slide-up">
            <div className="stage-header">
                <span className="stage-badge">Stage {stageNumber} of {totalStages}</span>
                <h2 className="card-title">{data.title}</h2>
            </div>
            
            <div className="goal-box">
                <strong>Goal:</strong> {data.goal}
            </div>

            <div className="stage-details">
                <div className="detail-column">
                    <h3>Recommended Tools</h3>
                    <ul>
                        {data.tools.map((tool, i) => (
                            <li key={i}>{tool}</li>
                        ))}
                    </ul>
                </div>
                <div className="detail-column">
                    <h3>Deliverables</h3>
                    <ul>
                        {data.deliverables.map((del, i) => (
                            <li key={i}>{del}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="tasks-section">
                <h3>Action Items</h3>
                <ul className="tasks-list">
                    {data.tasks.map((task, i) => (
                        <li key={i} className="task-item">
                            <span className="checkbox"></span>
                            {task}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
