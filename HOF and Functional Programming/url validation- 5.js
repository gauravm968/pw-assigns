let validUrl = ( (pattern, url) =>{
    if(pattern.test(url)){
        return "Conditions matched, valid URL";
    }
    return "Not valid";
})

const urlPattern = /^https?:\/\/[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+[a-zA-Z]{2,}$/;

console.log(validUrl(urlPattern,"https://www.linkedin.com/gaurav-mahor"))
console.log(validUrl(urlPattern,"http://www.pwskills.com"))