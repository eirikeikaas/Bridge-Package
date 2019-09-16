// ================================================================
// Enum Object
const Enum = Object.freeze({
    // Suits
    suits2num: Object.freeze({
        'clubs': 0,
        'diamonds': 1,
        'hearts': 2,
        'spades': 3,
        'notrump': 4
    }),
    num2suits: Object.freeze({
        0: 'clubs',
        1: 'diamonds',
        2: 'hearts',
        3: 'spades',
        4: 'notrump'
    }),

    // Vulnerable
    vulnerable2num: Object.freeze({
        'none': 0,
        'north-south': 1,
        'east-west': 2,
        "all": 3
    }),
    num2vulnerable: Object.freeze({
        0: "none",
        1: "north-south",
        2: "east-west",
        3: "all"
    }),

    // Declarer
    declarer2num: Object.freeze({
        "north": 0,
        "east": 1,
        "south": 2,
        "west": 3
    }),
    num2declarer: Object.freeze({
        0: "north",
        1: "east",
        2: "south",
        3: "west"
    }),

    // Double
    double2num: Object.freeze({
        "none": 0,
        "double": 1,
        "redouble": 2
    }),
    num2double: Object.freeze({
        0: "none",
        1: "double",
        2: "redouble"
    })
});

// ================================================================
// Exports
module.exports = {
    Enum
}
