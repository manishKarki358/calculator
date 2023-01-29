const numberBtns=document.querySelectorAll('[data-number]')
const operatorBtns=document.querySelectorAll('[data-operation]')
const equalsBtn=document.querySelector('[data-equals]')
const clearBtn=document.querySelector('[data-clear]')
const delBtn=document.querySelector('[data-delete]')
const inverseBtn=document.querySelector('[data-inverse]')
const previous=document.querySelector('[data-previous]')
const current=document.querySelector('[data-current]')

class calculator{
constructor(previous,current){
    this.previous=previous
    this.current=current
    this.clear()
}
clear(){
this.previousNumber=''
this.currentNumber=''
this.operation=undefined
}
delete(){
this.currentNumber=this.currentNumber.toString().slice(0,-1)
}
inverseNumber(){
    while(this.currentNumber!==''){
        if(this.currentNumber>0){
            this.currentNumber='-'+this.currentNumber
        }
       
    }
}
appendNumber(number){
    if(this.currentNumber.length>=15){
        return
    }
    if(number==='.' && this.currentNumber.includes('.')){
        return
    }
this.currentNumber= this.currentNumber.toString() +  number.toString()
}
chooseOperand(operation){
    if(this.currentNumber===''){
        return
    }
    if(this.previousNumber!==''){
        this.compute()
    }
    else{
        
        this.operation=operation
        this.previousNumber=this.currentNumber
        this.currentNumber=''
}
}
compute(){
let computation
const prev=parseFloat(this.previousNumber)
const curr=parseFloat(this.currentNumber)
if(isNaN(prev || curr)){
    return
}
switch(this.operation){
    case '+':
        computation=prev+curr
        break
    case '-':
            computation=prev-curr
            break
    case '÷':
        computation=prev/curr
        break
    case '*':
        computation=prev*curr
        break
    default:
        return
}

this.currentNumber=computation

this.operation=undefined
this.previousNumber=''
}
updateDisplay(){
    this.current.innerText=this.currentNumber
    if(this.current.innerText.length>10){
        this.current.innerText=this.current.innerText.slice(0,5).toString()
    }   
    
if(this.currentNumber==='' || this.previousNumber===''){
    this.previous.innerText=''
}

    this.previous.innerText=this.previousNumber +" "+ this.operation.toString()
  

}
}



const calculating=new calculator(previous,current)

numberBtns.forEach((button)=>{
button.addEventListener('click',()=>{
    calculating.appendNumber(button.innerText)
    calculating.updateDisplay()
})
})
operatorBtns.forEach((button)=>{
    button.addEventListener('click',()=>{
        calculating.chooseOperand(button.innerText)
        calculating.updateDisplay()
    })
    })
clearBtn.addEventListener('click',()=>{
    calculating.clear()
    calculating.updateDisplay()
})
equalsBtn.addEventListener('click',()=>{
    calculating.compute()
    calculating.updateDisplay()
})
delBtn.addEventListener('click',()=>{
    calculating.delete()
    calculating.updateDisplay()
})

inverseBtn.addEventListener('click',()=>{
    console.log('hrllll');
    calculating.inverseNumber()
    calculating.updateDisplay()
})