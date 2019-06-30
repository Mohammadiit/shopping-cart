
cardNumber=[];

numberOfSelected=0;

function counter(number) {
    console.log(number);
    i=0,flag=0;
    numberOfSelected=localStorage.getItem('number');
    cardNumber =JSON.parse(localStorage.getItem('cards'));
    for (i=0;i<cardNumber.length;i++){
        if(cardNumber[i]==number){
            flag=1;
            console.log(number,'n',flag,'f');
        }
    }
    if(flag==0) {
        cardNumber.push(number);
    }
    numberOfSelected=cardNumber.length;
    localStorage.setItem('number',numberOfSelected);
    localStorage.setItem('cards',JSON.stringify(cardNumber));
    // debugger;
    document.getElementById("0").innerHTML = JSON.stringify(numberOfSelected);
}
