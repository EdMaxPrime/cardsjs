function CardScript(code) {
    //code
    this.options = {
        prefix : "rank",
        separators: ["_"," of ",":"],
        suits: ["!", "Spades", "^", "Diamonds", "&", "Clubs", "@", "Hearts"],
        ranks: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"],
        operators : {
            union : '+',
            complement : '-',
            duplicates : '++',
            antiDuplicate : '--',
            add : '+',
            minus : '-',
            multiply : '*',
            divide : '/',
            assign : '=',
            relative : '~',
            globalStack : '$',
            lengthOfThis : '.',
            syncBoth : '<=>',
            syncR2L : '=>',
            syncL2R : '<=',
            string : '"',
            endFunction : '/',
            returnOP : '>>',
            funcStatementStart : '<',
            funcStatementEnd : '>',
            anonymous : '\\',
            random : '?',
            accessProperty : '(',
            endPropertyAccess : ')',
            startList : '[',
            endList : ']',
            listSeparator : ','
        },
        constants : {
            bool : {
                bool : 'BOOLEAN',
                True : 'true',
                False : 'false'
            },
            number : {
                number : 'NUMBER',
                fraction : 'FRACTION',
                decimal : 'DECIMAL',
                integer : 'INTEGER',
                whole : 'WHOLE',
                natural : 'NATURAL'
            },
            string : 'STRING',
            array : 'ARRAY',
            generic : 'GENERIC',
            nil : 'NULL',
            error : 'ERROR',
            func : 'FUNCTION',
            card : {
                card : 'CARD',
                suit : 'SUIT',
                rank : 'RANK',
                wild : 'WILDCARD'
            }
        },
        variables : {
            deck : '$',
            ranks : 'Ranks',
            suits : 'Suits'
        }
    };
}

var cardsJS = {
    create : function(args, code) {
        var program = new CardScript(code);
        
    }
};