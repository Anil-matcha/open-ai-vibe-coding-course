export default function BusinessCard({ index, title, description, selected, onClick }) {
    return (
        <div
            onClick={onClick}
            style={{
                border: `0.5px solid ${selected ? "#d97706" : "#2e2d28"}`,
                background: selected ? "#1a1914" : "#161510",
                borderRadius: 10,
                padding: "20px 22px",
                cursor: "pointer",
                transition: "border-color .15s, background .15s",
                position: "relative",
            }}
        >
            {selected && (
                <div
                    style={{
                        position: "absolute",
                        top: 14,
                        right: 14,
                        width: 18,
                        height: 18,
                        borderRadius: "50%",
                        background: "#d97706",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="#0e0d0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            )}
            <div
                style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 11,
                    color: selected ? "#d97706" : "#333",
                    marginBottom: 10,
                    transition: "color .15s",
                }}
            >
                {String(index).padStart(2, "0")}
            </div>
            <div style={{ fontSize: 16, fontWeight: 500, color: "#f0ece3", marginBottom: 4 }}>
                {title}
            </div>
            <div style={{ fontSize: 13, color: "#555", lineHeight: 1.5 }}>
                {description}
            </div>
        </div>
    );
}