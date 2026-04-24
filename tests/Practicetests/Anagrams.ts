let str1 = "Silent";
let str2 = "Listen";
 
function isAnagram(s1:String, s2: String) {
    s1 = str1.toLowerCase();
    s2 = str2.toLowerCase();
 

    if (s1.length !== s2.length) {
        return false;
    }
 
    let sorted1 = s1.split("").sort().join("");
    let sorted2 = s2.split("").sort().join("");
 
    return sorted1 === sorted2;
}
 
if (isAnagram(str1, str2)) {
    console.log(`"${str1}" and "${str2}" are anagrams of each other`);
} else {
    console.log(`"${str1}" and "${str2}" are NOT anagrams of each other`);
}