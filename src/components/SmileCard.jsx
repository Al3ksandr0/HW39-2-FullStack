import LikeButton from "./LikeButton";

const SmileCard = ({ smile, votes, onVote, disabled }) => {
    return (
        <div className="smile-card">
            <span>{smile.emoji} - {smile.description} ({votes})</span>
            <LikeButton onClick={onVote} disabled={disabled} />
        </div>
    );
};

export default SmileCard;