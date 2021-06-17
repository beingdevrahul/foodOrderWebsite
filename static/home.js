console.log("hello")
// btn=document.getElementById('btn')
// btn.onclick
let r=()=>{
    const name=prompt("please enter your name")
    const conformation= confirm("do you want to place order")
    if(conformation==true){
       
       const address=prompt("enter your addresss")
       const order=prompt("Okay!! please give your order")
       alert("thanks for ordering bro")
       alert(`your order"${order}" will be delivered at your address "${address}" in just hallf an hour`)
       alert(`thankyou ${name}for using our services`)
    }
    else alert("we are glad for you");
   
}

let sub=()=>{
    alert("your information has been submited your agent will call you soon");
}