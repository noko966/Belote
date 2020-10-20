function createCard(card, container = document.body) {
    let cardWrapper = document.createElement('div');
    cardWrapper.className = 'card card-' + determineCardColor(card);

    let top = document.createElement('div');
    top.className = 'card_rank';
    top.innerText = card.rank;

    let mid = document.createElement('div');
    mid.className = 'card_suit';
    mid.innerText = determineSuitSymbol(card);


    let bot = document.createElement('div');
    bot.className = 'card_rank card_rank-bot';
    bot.innerText = card.rank;

    cardWrapper.appendChild(top);
    cardWrapper.appendChild(mid);
    cardWrapper.appendChild(bot);

    container.appendChild(cardWrapper);
}

function determineSuitSymbol(card) {
    let symbol = "";
    switch (card.suit) {
        case "SPADES":
            symbol = "♠"
            break;
        case "HEARTS":
            symbol = "♥"
            break;
        case "DIAMONDS":
            symbol = "♦"
            break;
        case "CLUBS":
            symbol = "♣"
            break;
        default:
            break;
    }
    return symbol
}

function determineCardColor(card) {
    let className = "";
    if (card.suit == "SPADES" || card.suit == "CLUBS") {
        className = "black"

    } else {
        className = "red"
    }
    return className
}