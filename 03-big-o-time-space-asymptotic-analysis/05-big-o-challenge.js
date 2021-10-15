function containsDuplicates(aa) {
    for (let i = 0; i < aa.length; i++) {
       for (let j = i + 1; j < aa.length; j++) {
           if (aa[i] === aa[j])  {
               return true
           }
       } 
    }
}

function isPalindrome(aa) {
    let index = 0
    while (index < aa.length / 2) {
        let c1 = aa[0]
        let c2 = aa[aa.length - index]
        if (c1 !== c2) {
            return false
        }
    }
    return true
}
