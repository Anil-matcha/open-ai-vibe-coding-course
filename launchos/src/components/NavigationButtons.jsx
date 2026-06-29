export default function NavigationButtons({ onNext, onPrev, isFirst, isLast, nextLabel = "Next" }) {
    return (
        <div className="nav-buttons">
            {!isFirst && (
                <button className="btn-secondary" onClick={onPrev}>
                    Previous
                </button>
            )}
            <button className="btn-primary" onClick={onNext}>
                {isLast ? "Finish" : nextLabel}
            </button>
        </div>
    );
}
