document.querySelector(".plus").onclick=function(){
let number1=document.querySelector('.number1').value
let number2=document.querySelector('.number2').value


    alert(parseFloat(number1)+parseFloat(number2))

}
document.querySelector(".minus").onclick=function(){
    let number1=document.querySelector('.number1').value
    let number2=document.querySelector('.number2').value
    
    
        alert(parseFloat(number1)-parseFloat(number2))
    
    }
document.querySelector(".multiply").onclick=function(){
    let number1=document.querySelector('.number1').value
    let number2=document.querySelector('.number2').value
        
        
        alert(parseFloat(number1)*parseFloat(number2))
        
        }
document.querySelector(".devide").onclick=function(){
    let number1=document.querySelector('.number1').value
    let number2=document.querySelector('.number2').value
            
            
        alert(parseFloat(number1)/parseFloat(number2))
            
            }