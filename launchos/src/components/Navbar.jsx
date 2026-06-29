import { useNavigate, useLocation } from "react-router-dom";

const steps = [
  { label: "Home", path: "/" },
  { label: "Business type", path: "/business-type" },
  { label: "Onboarding", path: "/onboarding" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "14px 48px",
        borderBottom: "0.5px solid #1e1d18",
        background: "#0e0d0b",
      }}
    >
      <span
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 15,
          fontWeight: 500,
          letterSpacing: "-0.01em",
          cursor: "pointer",
          color: "#f0ece3",
        }}
        onClick={() => navigate("/")}
      >
        Launch<span style={{ color: "#d97706" }}>OS</span>
      </span>

      <div style={{ display: "flex", gap: 6 }}>
        {steps.map((s) => {
          const active = pathname === s.path;
          return (
            <button
              key={s.path}
              onClick={() => navigate(s.path)}
              style={{
                background: active ? "#d97706" : "transparent",
                color: active ? "#0e0d0b" : "#555",
                border: `0.5px solid ${active ? "#d97706" : "#2e2d28"}`,
                borderRadius: 20,
                padding: "5px 14px",
                fontSize: 12,
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: active ? 500 : 400,
                transition: "all .15s",
              }}
            >
              {s.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}