const btn=document.getElementById("click-btn");
btn.addEventListener("click",function(){
    var area=document.getElementById("full-area");
    var transection=document.getElementById("transectionArea");
    area.style.display="none"
    transection.style.display="block";


})
const depo=document.getElementById("btn-deposite");
depo.addEventListener("click",function(){
            const  Depositeamount=document.getElementById("depositeamount").value;
            const DepositeNumber= parseFloat(Depositeamount);

            const currentAmount=document.getElementById("current_deposite").innerText;
            const currentAmountNumber=parseFloat(currentAmount)
            
            const totalDeposite=currentAmountNumber+DepositeNumber;
            document.getElementById("current_deposite").innerText=totalDeposite;

            
           
            // const balance=document.getElementById();
            const current_balanceAmount=document.getElementById("current_balance").innerText;
            const current_balanceAmountNum=parseFloat(current_balanceAmount);
           const balanceTotal=DepositeNumber+current_balanceAmountNum;
           document.getElementById("current_balance").innerText=balanceTotal;
          
           document.getElementById("depositeamount").value="";
   
    

})



const withdr=document.getElementById("btn-withdraw");
withdr.addEventListener("click",function(){
    // const withdrawAmount=document.getElementById("withdraw-amount").value;
    // const withdrawAmountNum=parseFloat(withdrawAmount);
    const amount=  getInputAmount("withdraw-amount")

    const currentWid=document.getElementById("currentWidraw").innerText;
    const currentWidrawNum=parseFloat(currentWid);
    const totalWidraw=amount+currentWidrawNum;
    document.getElementById("currentWidraw").innerText=totalWidraw;


    // const currentBalanceNew=document.getElementById("current_balance").innerText;
    // const currentBalanceNewNum=parseFloat(currentBalanceNew);
    
    // const totalWidraw=currentBalanceNewNum-totalWidraw;
    // document.getElementById("current_balance").innerText=totalWidraw;
    // document.getElementById("withdraw-amount").value=""
})

function getInputAmount(id)
{
    const withdrawAmount=document.getElementById(id).value;
    const withdrawAmountNum=parseFloat(withdrawAmount);
    return withdrawAmountNum;
}

var withdraw=document.getElementById("withdraw");
var deposite=document.getElementById("deposite");
var withdrawAmount=document.getElementById("withdraw-amount");
