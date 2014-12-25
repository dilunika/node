
var censoredWords = ["sad", "bad", "mad"]

function censor(stament){

    for(word in censoredWords){
        stament = stament.replace(word, "* * * *")
    }

    return stament
}

function getCensoredWords(){
    return censoredWords
}

function addCensoredWord(censorWord){
    censoredWords.push(censorWord)
}

exports.censor = censor
exports.addCensoredWords = addCensoredWord
exports.getCensoredWords = getCensoredWords