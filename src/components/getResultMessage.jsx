export function getResultMessage(votes, smiles) {
    const maxVotes = Math.max(...votes); // вернет число макс голсоов

    // проверка есть ли голоса вообще 
    let totalVotes = 0;
    for (let vote of votes) {
        totalVotes += vote;
    }

    // победитель 
    let winners = [];
    votes.forEach((vote, i) => {
        if (vote === maxVotes) {
            winners.push(smiles[i]);
        }
    });

    if (totalVotes === 0) {
        return "Никто не проголосовал 😢";
    }

    if (winners.length === smiles.length) {
        return "Победила дружба 🤝";
    }

    if (winners.length > 1) {
        return `Ничья! 🫅`;
    }

    return `Победитель: ${winners[0].emoji}`;
}
