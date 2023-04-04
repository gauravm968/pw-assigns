const marks = [220,530,330,560,505];

let max = marks[0];
for(let i=1; i<marks.length; i++){
    max = marks[i]>max ? marks[i] : max;
}

console.log("Highest Marks : ",max);