function a(v){
    let r = [];
    let b=0;
    for(let i=0; i<v.length; i++){
        if(v[i] % 2==0){
            r[b] = v[i];
            b++;
        }
    }
    return r;
}

let arreglo = [1,2,3,4,5]
console.log (a(arreglo))
