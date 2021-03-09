const array1=[1,4,6,8,15,28,16];
let newarr =array1.filter((curElem,index,arr)=>
{
    return curElem >9;
})
console.log(newarr);