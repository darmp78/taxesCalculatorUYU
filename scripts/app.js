//Capturar y validar salario
function getSalaryAmound(){
    var inputSalary = parseFloat(document.getElementById('inputSalary').value);
    if(!isNaN(inputSalary) && inputSalary != null && inputSalary != ""){
        return inputSalary;
    }else{
        return 0;
    }
}
//Calculo de jubilacion
function calRetirementSavings (inputSalaryin){
        var calRetirement = inputSalaryin * -0.15;
        return calRetirement;
}

//Calculo FONASA
function calFONASA (inputSalaryin){
    var calcFONASA = inputSalaryin * -0.05;
    return calcFONASA;
}

//Calculo FRL
function calFRL (inputSalaryin){
    var calcFRL = inputSalaryin * -0.001;
    return calcFRL;
}


document.getElementById("calculateSalary").addEventListener('click', function(){

    const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
    const selectedTable = document.getElementById("tableMonthlySalary");        
    var contentable = "";
    var formattedSalary = formatter.format(getSalaryAmound());
    var formattedCalRetirement = formatter.format(calRetirementSavings(getSalaryAmound()));
    var formattedCalFONASA = formatter.format(calFONASA(getSalaryAmound()));
    var formattedCalFRL = formatter.format(calFRL(getSalaryAmound()));
    var totalTaxes = calRetirementSavings(getSalaryAmound())+calFONASA(getSalaryAmound())+calFRL(getSalaryAmound());
    var formattedCalTotalTaxes = formatter.format(totalTaxes);
    var totalNetSalary = getSalaryAmound() + totalTaxes;
    var formattedTotalNetsalary = formatter.format(totalNetSalary);
    var salaryBonus = totalNetSalary / 2;
    var formattedSalaryBonus = formatter.format(salaryBonus);
    var anualSalary = (totalNetSalary * 12) + totalNetSalary;
    var formattedAnualSalary = formatter.format(anualSalary);

    if(getSalaryAmound()==0){
        document.getElementById("labelNumericError").className = 'errorShow';
        document.getElementById("inputSalaryShow").innerHTML = "<th scope='col' id='inputSalaryShow'>$0.00</th>";
        document.getElementById("calRetirement").innerHTML = "<td id='calRetirement'>$0.00</td>";
        document.getElementById("calFONASA").innerHTML = "<td id='calFONASA'>$0.00</td>";
        document.getElementById("calFRN").innerHTML = "<td id='calFRN'>$0.00</td>";
        document.getElementById("calTotalTaxes").innerHTML = "<td id='calTotalTaxes'>$0.00</td>";
        document.getElementById("calTotalNetSalary").innerHTML = "<td id='calTotalNetSalary'>$0.00</td>";
        document.getElementById('inputSalary').value = "";
        contentable = "";
        selectedTable.innerHTML = contentable;
        
    }else{
        document.getElementById("labelNumericError").className = 'hidden errorShow';
        document.getElementById("inputSalaryShow").innerHTML = "<th scope='col' id='inputSalaryShow'>"+formattedSalary+"</th>";
        document.getElementById("calRetirement").innerHTML = "<td id='calRetirement'>"+formattedCalRetirement+"</td>";
        document.getElementById("calFONASA").innerHTML = "<td id='calFONASA'>"+formattedCalFONASA+"</td>";
        document.getElementById("calFRN").innerHTML = "<td id='calFRN'>"+formattedCalFRL+"</td>";
        document.getElementById("calTotalTaxes").innerHTML = "<td id='calTotalTaxes'>"+formattedCalTotalTaxes+"</td>";
        document.getElementById("calTotalNetSalary").innerHTML = "<td id='calTotalNetSalary'>"+formattedTotalNetsalary+"*</td>";
        document.getElementById('inputSalary').value = formattedSalary;

        //calculo de salario mensual
        

        for (let i = 0; i < 12; i++){
            if(i==5 || i==11){
                contentable +=  "<tr><td>"+(i+1)+"</td><td class='col-salary-num'>"+formattedTotalNetsalary+" + "+formattedSalaryBonus+"</td></tr>";
            }else{
                contentable +=  "<tr><td>"+(i+1)+"</td><td class='col-salary-num'>"+formattedTotalNetsalary+"</td></tr>";
            }               
        }

        contentable += "<tr class='font-weight-bold'><td>Total Aguinaldos</td><td class='col-salary-num'>"+formattedTotalNetsalary+"</td></tr>";
        contentable += "<tr class='font-weight-bold'><td>Total Anual</td><td class='col-salary-num'>"+formattedAnualSalary+"</td></tr>";
        selectedTable.innerHTML = contentable;

        
    }

})

document.getElementById("inputSalary").addEventListener('click', function(){
    document.getElementById('inputSalary').value = "";
})


