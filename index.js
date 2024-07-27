const endDate = "2 June 2024 00:00"
document.getElementById("enddate").innerText=endDate;
const input=document.querySelectorAll("input");
function clock () {
    const end=new Date (endDate);
    const now= new Date();
    const diff=(end-now)/1000;

    if (diff<0) {
        return;
    }

    //converting into days 

    input [0].value=Math.floor(diff/3600/24); 

    // converting into hours 

    input [1].value=Math.floor(diff/3600)%24;

    // converting into Minutes
    input[2].value=Math.floor (diff/60)%60;

    // converting into Seconds
    
    input[3].value=Math.floor (diff)%60;

}

// initial clock

clock ();


setInterval(() => {
    clock(); // Assuming clock is a defined function
}, 1000);