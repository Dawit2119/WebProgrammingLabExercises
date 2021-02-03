var inputLabel = document.getElementById('inputLabel');
     
function pushBtn(obj) {
    var pushed = obj.innerHTML;
    if (pushed == 'max'){
        if(inputLabel.value !='0'){
        const array = inputLabel.value.split(" ").map(item=>parseInt(item))
        max = array[0]
        for (var i = 0; i < array.length;i++){
            if(max < array[i]){
                max = array[i]
            }
        }
        inputLabel.value = "max = " + max;
    }}
   else if (pushed == 'min'){
        if(inputLabel.value !='0'){
        const array = inputLabel.value.split(" ").map(item=>parseInt(item))
        min = array[0]
        for (var i = 0; i < array.length;i++){
            if(min > array[i]){
                min = array[i]
            }
        }
        inputLabel.value = "min = " + min;
    }}
    else if(pushed == 'back'){
        inputLabel.value = inputLabel.value.substring(0,(inputLabel.value.length - 1))
    }
    else if(pushed == 'space'){
        inputLabel.value += " "
    }
    else if (pushed == 'X^2'){
        inputLabel.value = Math.pow(inputLabel.value,2)
    }
    else if (pushed == 'X^3'){
        inputLabel.value = Math.pow(inputLabel.value,3)
    }
    else if (pushed == 'sqrt'){
        inputLabel.value = Math.pow(inputLabel.value,0.5)
    }
              
    else if (pushed == '=') {
        // Calculate
        inputLabel.value = eval(inputLabel.value);
         
    } else if (pushed == 'AC') {
        // All Clear
        inputLabel.value = '0';
         
    } else {
        if (inputLabel.value == '0') {
            inputLabel.value = pushed;
             
        } else {
            inputLabel.value += pushed;   
        }
    }
}
function Add(){
    temp = inputLabel.value.split(" ");
    sum = 0       
    for(i of temp){
        sum += parseInt(i)
    }
    inputLabel.value = sum
};
function subtract(){
    var temp = inputLabel.value.split(" ")
    if(temp.length >=2){
    inputLabel.value = (temp[0] - temp[1])}
    else{
        inputLabel.value = temp[0]
    }
};
function multiply(){
    var temp = inputLabel.value.split(" ")
    product = 1
    for (i of temp){
        product *=i
    }
    inputLabel.value = product;
}
function divide(){
    var temp = inputLabel.value.split(" ")
    if(temp.length >=2 ){
        numOne = temp[0]
        numTwo = temp[1]
        if(numTwo !=0){
            inputLabel.value = (numOne / numTwo)
        }
        else{
            inputLabel.value = "Zero division"
        }
         }
    else{
        inputLabel.value = temp[0]
     }
}