// 189. Rotate Array
let rotate = function (numsa, k) {
    let final = numsa.splice(numsa.length - k);
    for (let i = 0; i < final.length; i++) {
        numsa.splice(i, 0, final[i]);
    }
    return numsa;
};

