export default function BuilderCard({ data }) {
    return (
        <div className="card animate-slide-up">
            <h2 className="card-title">Recommended Builder</h2>
            
            <div className="builder-highlight">
                <div className="builder-name">{data.name}</div>
                <p className="builder-why">{data.why}</p>
            </div>

            <div className="alternatives-section">
                <h3>Alternatives Considered</h3>
                <div className="alternatives-list">
                    {data.alternatives.map((alt, i) => (
                        <div key={i} className="alternative-tag">{alt}</div>
                    ))}
                </div>
            </div>
        </div>
    );
}
