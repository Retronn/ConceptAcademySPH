import React from "react";


function TestFooter(){
    return (
    <footer className="test-header test-footer">
        <div className="grid-container">
            <div className="part-name-section">
                <h4>Alexandr Tkachyov</h4>
                
            </div>

            <div className="timer-section">
                <button id="test-questions-button"><h5>Question 1 of 27</h5></button>
            </div>


            <div className="timer-section">
                <button id="next-sat-button"><h5>Next</h5></button>
            </div>
        </div>
    </footer>
    )
}

export default TestFooter;