let linkedinProUrlValidation = ((pattern,url)=>{
    if(pattern.test(url)){
        return "Valid linked-in profile url";
    }
    return "Invalid url";
})

const urlPattern = /^https:\/\/www.linkedin.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

console.log(linkedinProUrlValidation(urlPattern,"https://www.linkedin.com/in/gauravmahor978"));
console.log(linkedinProUrlValidation(urlPattern,"https://www.linkedin.com/in/9484"));
console.log(linkedinProUrlValidation(urlPattern,"https://www.linkedin.com/in/aditi-9393"));