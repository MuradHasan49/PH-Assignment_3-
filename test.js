//Problem-01: New Price for Eid Sale
function newPrice(currentPrice, discount) {

    let isValid = (typeof currentPrice === 'number' && typeof discount === 'number' && discount >= 0 && discount < 100);

    if (!isValid) {
        return "Invalid"
    } else {
        let cal = (currentPrice * discount) / 100;
        let result = currentPrice - cal;
        return result.toFixed(3);
    }
}


//Problem-02: OTP Validation for Zapshift
function validOtp(otp) {
    let isOk = (typeof otp == 'string' && otp.length <= 9 )
    if (!isOk) {
        return "Invalid"
    } else if ( otp.startsWith("ph-") == false || otp.length < 8) {
        return false
    }else{
        return true
    }
}


//Problem-03: BCS Final Score Calculator
function finalScore(omr) {
    let add = omr.wrong + omr.right + omr.skip
    let rightAnsMark = omr.right * 1
    let worngMark = omr.wrong * 0.5
    let resultIs = rightAnsMark - worngMark

    let con = (typeof omr == 'object' && add == 100)
    if (!con) {
        return "Invalid"
    } else {
        return Math.round(resultIs)
    }
}


//Problem-04: Upcoming Gono Vote
function gonoVote(array) {
    if (!Array.isArray(array)) {
        return "Invalid"

    }
    
    let haIs = [];
    let naIs = [];
    for (let i of array) {
        if (i == "ha") {
            haIs.push(i)
        } else if (i == "na") {
            naIs.push(i)
        }
    }

    if (haIs.length > naIs.length) {
        return true
    } else if (haIs.length === naIs.length) {
        return "equal"

    } else {
        return false
    }
}

//Problem-05: Text Analyzer for an AI Company
function analyzeText(str) {

    let isTrue = (typeof str === "string" && str.length > 0)
    if (!isTrue) {
        return "Invalid";
    }
    let sp = str.split(" ").join("")

    let words = str.split(" ")
    let longestWord = words[0]
    for( let word of words){
        if (word.length > longestWord.length){
            longestWord = word
        }
    }
return {
    longwords: longestWord,
    "token"  : sp.length
}
}

