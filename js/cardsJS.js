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
            antiDuplicate : '--'
        }
    };
}

var cardsJS = {
    create : function(args, code) {
        var program = new CardScript(code);
        
    }
};