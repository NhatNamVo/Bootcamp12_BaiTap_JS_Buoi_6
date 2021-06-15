// gán function
var getEle = function(id){
    return document.getElementById(id);
}

// Bài 1

getEle("btn-result__no1").onclick=minNumber;

function minNumber(){
    var i=0;
    var sum=0;
    while(sum<10000){
        sum+=i;
        i++;
    }
    getEle("result__no1").innerHTML=i;
}


// Bài 2:
getEle("btn-result__no2").onclick=sumNo2;

function sumNo2(){
    var inputNum1=parseInt(getEle("dataInNo2__num1").value);
    var inputNum2=parseInt(getEle("dataInNo2__num2").value);
    var sumNo2=0;
    for(var i=1;i<=inputNum2;i++){
        var luythua=1;
        var j=1;
        while(j<=i){
            luythua*=inputNum1;
            j++;
        }
        sumNo2+=luythua;
    }
    getEle("result__no2").innerHTML=sumNo2;
}

// bài 3:
getEle("btn-result__no3").onclick=sumNo3;

function sumNo3(){
    var inputNumNo3=parseInt(getEle("dataIn").value);
    var resultNo3=1;
    var bien=1;
    do{
        resultNo3*=bien;
        bien++
    } while(bien<=inputNumNo3);
    getEle("result__no3").innerHTML=resultNo3;
}
// Bài 4:
getEle("btn-result__no4").onclick=sumNo4;
getEle("btn-remove__no4").onclick=deleteNo4;
function sumNo4(){
    for (var i=0;i<=9;i++){
        
        document.getElementById("resultNo4").appendChild(document.createElement("div")).classList.add("color");
    if((i+1)%2!==0){
        document.
        getElementsByClassName("color")[i].style.backgroundColor="red";
    }
    else{
        document.getElementsByClassName("color")[i].style.backgroundColor="blue";
    }
}
}
function deleteNo4(){
    document.getElementById("resultNo4").innerHTML="";

}
// bài 5
getEle("btn-result__no5").onclick=sumNo5;
getEle("data-nID").onchange=function(){
    getEle("result__no5").value="";
}
function sumNo5(){
    var dataN=parseInt(getEle("data-nID").value);
    var stringOutput = '';
    for(var i=1; i<=dataN; i++){
        stringOutput +=  i + " ";
    }
    getEle("result__no5").innerHTML = stringOutput;
}