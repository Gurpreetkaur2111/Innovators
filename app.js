const BASE_URL="https://2024-03-06.currency-api.pages.dev/v1/currencies";
const dropdowns=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const msg=document.querySelector(".msg");


document.addEventListener(){
    
}

for(let select of dropdowns)
{
    for (let currCode in countryList)
    {
        //  let currCode=countryList[countryCode];
        //  console.log("Adding currency: " + currCode);

        let newOption=document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;
        if(select.name==="From"&&currCode==="USD")
        {
            newOption.selected="selected";
        }
        else if(select.name==="To"&&currCode==="INR")
        {
            newOption.selected="selected";
        }
        select.append(newOption);
    }

select.addEventListener("change",(evt)=>{
    UpdateFlag(evt.target);
});
}
const UpdateFlag=(element)=>
{
    let currCode=element.value;
    let countryCode=countryList(currCode);
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    element.parentElement.querySelector("img");
    img.src=newSrc;

};

btn.addEventListener("click",async(evt)=>{
    evt.preventDefault();
    let amount=document.querySelector(".amount input");
    let amtVal=amount.value;
    console.log(amtVal);
    if(amtVal===" "||amtVal<1)
    {
        amtVal=1;
        amount.value="1";
    }

// console.log(fromCurr,toCurr);
const URL=`${BASE_URL}/${fromCurr.value.tolowerCase()}/${toCurr.value.tolowerCase()}.json`;
let response=await fetch(URL);
console.log(response);
let rate=data(toCurr.value.toLowerCase());
// console.log(rate);


let finalAmount=amtVal*rate;
msg.innerText=`${amtVal} ${fromCurr.value}=${finalAmount} ${toCurr.value}`;

});