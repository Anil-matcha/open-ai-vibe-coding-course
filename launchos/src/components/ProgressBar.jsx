export default function ProgressBar({ currentStep, totalSteps }) {
    const progress = (currentStep / (totalSteps - 1)) * 100;

    return (
        <div className="progress-container">
            <div
                className="progress-bar"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
}
