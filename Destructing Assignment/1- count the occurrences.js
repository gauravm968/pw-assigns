function wordCountGenerator(text){

    let wordCount = new Map();
    let words = text.split(" ");

    for(let w of words){
        if(!wordCount.has(w)){
            wordCount.set(w,1);
        }
        else{
            wordCount.set(w, wordCount.get(w)+1);    //if word(w) is already in wordcount Map
        }
    }
    return wordCount;
}

const text = "i wanna start career as a fresher web dev, as a fresher dev okay";

console.log(wordCountGenerator(text));
