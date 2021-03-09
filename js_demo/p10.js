number=22;
iflag=true;
if (number ==1){
    console.log("1 isnot prime or not composite number");
}
else if (number>1){
    for(i=2;i<number;i++)
    {
        iflag=false;
        break;
    }

 if(iflag=true){
    console.log(number);
    console.log("Prime number");
}else{
    console.log("not Prime number");
}}