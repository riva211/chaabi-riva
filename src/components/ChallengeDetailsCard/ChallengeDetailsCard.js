import './ChallengeDetailsCard.css';

export const ChallengeDetailsCard = ({ cardName, cardValue }) => {
    return (
        <div className="details-card-container rounded-3xl bg-green-300 m-3">
            <p className="card-name">{cardName}</p>
            <p className="card-value">{cardValue}</p>
        </div>
    )    
}
