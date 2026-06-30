import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Onboarding() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        idea: "",
        audience: "",
        budget: "",
        experience: "",
        hours: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        setLoading(true);

        localStorage.setItem(
            "startupIdea",
            JSON.stringify(form)
        );

        setTimeout(() => {
            navigate("/roadmap");
        }, 500);
    };

    const allFilled =
        form.idea &&
        form.audience &&
        form.budget &&
        form.experience &&
        form.hours;

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#0e0d0b",
                color: "#f0ece3",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "40px",
            }}
        >
            <div
                style={{
                    width: "700px",
                }}
            >
                <h1
                    style={{
                        fontSize: "46px",
                        marginBottom: "10px",
                    }}
                >
                    Describe Your Startup
                </h1>

                <p
                    style={{
                        color: "#999",
                        marginBottom: "35px",
                    }}
                >
                    Tell LaunchOS about your idea and we'll build your complete startup roadmap.
                </p>

                <textarea
                    rows={7}
                    name="idea"
                    placeholder="Example:
I want to build an AI platform that helps engineering students prepare for placements."
                    value={form.idea}
                    onChange={handleChange}
                    style={{
                        width: "100%",
                        padding: "18px",
                        background: "#171717",
                        color: "white",
                        border: "1px solid #333",
                        borderRadius: "10px",
                        marginBottom: "20px",
                        resize: "vertical",
                        fontSize: "15px",
                    }}
                />

                <input
                    name="audience"
                    placeholder="Who is your target audience?"
                    value={form.audience}
                    onChange={handleChange}
                    style={inputStyle}
                />

                <input
                    name="budget"
                    placeholder="Budget (Example: $100)"
                    value={form.budget}
                    onChange={handleChange}
                    style={inputStyle}
                />

                <select
                    name="experience"
                    value={form.experience}
                    onChange={handleChange}
                    style={inputStyle}
                >
                    <option value="">Technical Experience</option>
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                </select>

                <input
                    name="hours"
                    placeholder="Hours available per week"
                    value={form.hours}
                    onChange={handleChange}
                    style={inputStyle}
                />

                <button
                    disabled={!allFilled || loading}
                    onClick={handleSubmit}
                    style={{
                        width: "100%",
                        marginTop: "20px",
                        padding: "16px",
                        background: "#d97706",
                        border: "none",
                        borderRadius: "10px",
                        cursor: "pointer",
                        fontSize: "16px",
                        fontWeight: "bold",
                    }}
                >
                    {loading
                        ? "Analyzing Startup..."
                        : "Analyze My Startup 🚀"}
                </button>
            </div>
        </div>
    );
}

const inputStyle = {
    width: "100%",
    padding: "15px",
    marginBottom: "18px",
    background: "#171717",
    color: "white",
    border: "1px solid #333",
    borderRadius: "10px",
    fontSize: "15px",
};