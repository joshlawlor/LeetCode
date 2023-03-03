
const alphabet = function(x){
    console.log(x)
    let index = 0
    let answer = ""
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    for(let i = 0; i < x.length; i++){
        
        if(x == "z"){
            answer += "a"
        }else{
            index = alphabet.indexOf(alphabet[i])+1
            answer += alphabet[index]
        }

    }
    console.log(answer)
}


alphabet("abc")