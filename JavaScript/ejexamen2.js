function c(a, i, j) {
    let r;
    if (a[i] === a[j]) {
        r = 0;
    } else if (a[i] < a[j]) {
        r = -1;
    } else {
        r = 1;
    }
    return r;
}

let arreglo1 = [1,2,3,4,5];

console.log (c(arreglo1, 1, 2));



