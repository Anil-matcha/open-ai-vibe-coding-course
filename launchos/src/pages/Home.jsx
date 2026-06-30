import { useNavigate } from "react-router-dom";

const stats = [
    ["12k+", "Businesses launched"],
    ["4 min", "Avg. to first plan"],
    ["100%", "AI-generated"],
];

export default function Home() {
    const navigate = useNavigate();

    return (
        <div
            style={{
                minHeight: "100vh",
                padding: "140px 48px 80px",
                maxWidth: 720,
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
            }}
        >
            <span
                style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 11,
                    color: "#d97706",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                }}
            >
                v0.1 beta
            </span>

            <div style={{ marginTop: 28, marginBottom: 16 }}>
                <span
                    style={{
                        fontSize: 80,
                        fontWeight: 300,
                        lineHeight: 1,
                        letterSpacing: "-0.025em",
                        color: "#f0ece3",
                    }}
                >
                    Launch
                </span>
                <span
                    style={{
                        fontSize: 80,
                        fontWeight: 300,
                        lineHeight: 1,
                        letterSpacing: "-0.025em",
                        color: "#d97706",
                    }}
                >
                    OS
                </span>
            </div>

            <p
                style={{
                    color: "#666",
                    fontSize: 17,
                    maxWidth: 380,
                    lineHeight: 1.7,
                    marginBottom: 44,
                }}
            >
                Build and launch an online business — with AI doing the heavy lifting.
            </p>

            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <button
                    onClick={() => navigate("/business-type")}
                    style={{
                        background: "#d97706",
                        color: "#0e0d0b",
                        border: "none",
                        borderRadius: 8,
                        padding: "13px 30px",
                        fontSize: 14,
                        fontWeight: 500,
                        cursor: "pointer",
                    }}
                >
                    Get started →
                </button>
                <span style={{ fontSize: 13, color: "#444" }}>No account needed</span>
            </div>

            <hr
                style={{
                    border: "none",
                    borderTop: "0.5px solid #1e1d18",
                    margin: "56px 0",
                    width: "100%",
                }}
            />

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: 12,
                    width: "100%",
                }}
            >
                {stats.map(([val, label]) => (
                    <div
                        key={label}
                        style={{
                            padding: "18px 16px",
                            border: "0.5px solid #1e1d18",
                            borderRadius: 8,
                            background: "#111009",
                            textAlign: "center",
                        }}
                    >
                        <div
                            style={{
                                fontFamily: "'DM Mono', monospace",
                                fontSize: 24,
                                fontWeight: 500,
                                color: "#d97706",
                                marginBottom: 6,
                            }}
                        >
                            {val}
                        </div>
                        <div style={{ fontSize: 12, color: "#444", lineHeight: 1.4 }}>
                            {label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}