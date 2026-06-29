import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BusinessCard from "../components/BusinessCard";

const TYPES = [
    { title: "SaaS", description: "Subscription software product" },
    { title: "AI Agency", description: "Service business powered by AI" },
    { title: "Ecommerce", description: "Sell physical or digital goods" },
    { title: "Creator", description: "Content, courses, community" },
];

export default function BusinessType() {
    const [selected, setSelected] = useState(null);
    const navigate = useNavigate();

    const handleContinue = () => {
        if (!selected) return;
        localStorage.setItem("businessType", selected);
        navigate("/onboarding");
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                padding: "120px 48px 80px",
                maxWidth: 680,
                margin: "0 auto",
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
                Step 01 of 02
            </span>

            <h1
                style={{
                    fontSize: 36,
                    fontWeight: 400,
                    margin: "14px 0 8px",
                    letterSpacing: "-0.01em",
                }}
            >
                What are you building?
            </h1>
            <p style={{ color: "#555", fontSize: 15, marginBottom: 36 }}>
                We'll tailor your entire plan to your business model.
            </p>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 12,
                    maxWidth: 560,
                    marginBottom: 32,
                }}
            >
                {TYPES.map((t, i) => (
                    <BusinessCard
                        key={t.title}
                        index={i + 1}
                        title={t.title}
                        description={t.description}
                        selected={selected === t.title}
                        onClick={() => setSelected(t.title)}
                    />
                ))}
            </div>

            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <button
                    onClick={handleContinue}
                    disabled={!selected}
                    style={{
                        background: selected ? "#d97706" : "#161510",
                        color: selected ? "#0e0d0b" : "#333",
                        border: `0.5px solid ${selected ? "#d97706" : "#2e2d28"}`,
                        borderRadius: 8,
                        padding: "12px 28px",
                        fontSize: 14,
                        fontWeight: 500,
                        cursor: selected ? "pointer" : "not-allowed",
                        transition: "all .2s",
                    }}
                >
                    Continue →
                </button>
                {!selected && (
                    <span style={{ fontSize: 13, color: "#333" }}>Select a type to continue</span>
                )}
            </div>
        </div>
    );
}