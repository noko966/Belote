const CARDS_LIST = [{
        rank: 7,
        power: 0,
        points: 0,
        allTrumpsPower: 0,
        allTrumpsPoints: 0,
    },
    {
        rank: 8,
        power: 1,
        points: 0,
        allTrumpsPower: 1,
        allTrumpsPoints: 0,
    },
    {
        rank: 9,
        power: 2,
        points: 0,
        allTrumpsPower: 6,
        allTrumpsPoints: 14,
    },
    {
        rank: 10,
        power: 3,
        points: 10,
        allTrumpsPower: 2,
        allTrumpsPoints: 10,
    },
    {
        rank: 'J',
        power: 4,
        points: 2,
        allTrumpsPower: 7,
        allTrumpsPoints: 20,
    },
    {
        rank: 'Q',
        power: 5,
        points: 3,
        allTrumpsPower: 3,
        allTrumpsPoints: 3,
    },
    {
        rank: 'K',
        power: 6,
        points: 4,
        allTrumpsPower: 4,
        allTrumpsPoints: 4,
    },
    {
        rank: 'A',
        power: 7,
        points: 11,
        allTrumpsPower: 5,
        allTrumpsPoints: 11,
    },
];

const SUITES = {
    SPADES: 'SPADES',
    DIAMONDS: 'DIAMONDS',
    HEARTS: 'HEARTS',
    CLUBS: 'CLUBS',
};

const CARDS = {
    SPADES: {},
    HEARTS: {},
    DIAMONDS: {},
    CLUBS: {}
};

Object.keys(CARDS).forEach(suit => {
    CARDS_LIST.forEach(card => {
        CARDS[suit][card.rank] = {
            ...card,
            suit
        }
    })
})

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}


function getShuffledDeck() {
    const cards = Object
        .values(CARDS)
        .map(s => Object.values(s))
        .reduce((res, arr) => res.concat(arr), []);
    shuffle(cards);
    return cards;
}

const createPlayer = (id, name, conn) => ({
    id,
    name,
    conn,
    cards: [],
    points: [],
    declarations: [],
});

const nextPlayer = state => {
    if (state.currentPlayer === 2) {
        state.currentPlayer = 0;
    } else {
        state.currentPlayer += 1;
    }
};


const initialState = {
    deck: getShuffledDeck(),
    currentCards: [],
    players: [
        {id: 1, cards: []},
        {id: 2, cards: []},
        //{ id: 1, name: 'a', cards: [], points: [], declarations: [], conn: null },
    ],
    claims: [
        // FORMAT: [player_id, claim]
        // [2, SPADES], [1, DIAMONDS], ...
    ],
    currentPlayer: 0,
    score: [
        //[TeamA points, Team B points] 
        //[20, 4], [5, 11],
    ],
}


//toto1023


// console.log(initialState.deck);


const Mutations = {
    resetCurrentPlayer: function (state) {
        state.currentPlayer = state.players.indexOf(
            state.players.find(p => p.id === state.claims[0][0])
        );
    },

    handOutCards: function(state, num){
        state.players.forEach(p => {
            p.cards.push(...state.deck.splice(0,num));
        })
    }
}


Mutations.handOutCards(initialState, 6);






