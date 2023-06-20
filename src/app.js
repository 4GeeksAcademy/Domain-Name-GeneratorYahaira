
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let con = [".com", ".org", ".net", ".cr"];
var i = null
var j = null
var x = null
var l = null
for (i = 0; i <= 1; i++) {
    var paso1 = pronoun[i];
    for (j = 0; j <= 1; j++) {
        var paso2 = adj[j];
        for (x = 0; x <= 1; x++) {
            var paso3 = noun[x];
            for (l = 0; l <= 3; l++) {
                var paso4 = con[l];
                console.log(paso1 + paso2 + paso3 + paso4);
                
            }
        }
    }
}

