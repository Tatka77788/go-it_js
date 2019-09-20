function checkForSpam(str) {
    const lowerCase = str.toLowerCase();
    return lowerCase.includes('spam') || lowerCase.includes('sale');
   }
console.log(checkForSpam('Latest technology news'));  
console.log(checkForSpam('JavaScript weekly newsletter')); 
console.log(checkForSpam('Get best sale offers now!')); 
console.log(checkForSpam('[SPAM] How to earn fast money?')); 