function compute()
{
    p = document.getElementById("principal").value;

    var principal = document.getElementById("principal").value;

    if( principal<=0 ){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    var result = `

    If you deposit ${principal}
    at an interest rate of ${rate};
    You will receive an amount of ${interest}
    in the year ${year}
    `;  
                
    document.getElementById("result").innerText=result;
        
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
