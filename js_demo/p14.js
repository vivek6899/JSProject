//even index values
//even values print
var a=[11,22,44,55,66,77,88,99,120,550,23,47]

for(let element in a){
    if(a[element]%2==0){
        console.log(element+"=="+a[element]);
    }
}