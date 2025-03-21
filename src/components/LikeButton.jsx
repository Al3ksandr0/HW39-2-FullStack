const LikeButton = ({ onClick, disabled }) => {
    return (
        <button className="vote-button" onClick={onClick} disabled={disabled}>
            Vote
        </button>
    );
};

export default LikeButton;
