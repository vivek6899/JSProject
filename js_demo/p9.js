a=5;

if(a<0){
    console.log('Error negative number not allowed! ');
}
else if(a==0){
    console.log('fact of ${a} is 1');
}
else{
    fact =1;
    for(i=1;i<=a;i++){
        fact = fact*i;
    }
    console.log(fact);
    //console.log('factorial of ${a}  ${fact}...');
}