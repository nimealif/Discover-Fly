const addTiceket = document.getElementById("addVipTiceket");

const removeTiceket = document.getElementById("removeVipTiceket");

const addEco = document.getElementById("addEconomy");

const removeEco = document.getElementById("removeEconomy");

const bookedBtn = document.getElementById("bookingBtn");


// plus buuton for vip

addTiceket.addEventListener("click", function () {
    ticketHandler("vip", true);       
});

 // minus buuton for vip

removeTiceket.addEventListener("click", function () {
    ticketHandler("vip", false);      
});

// plus buuton for eco

addEco.addEventListener("click", function () {

    ticketHandler("eco", true); 
       
});

// minus buuton for eco

removeEco.addEventListener("click", function () {

    ticketHandler("eco", false);
       
});

// Ticket Handler

function ticketHandler(category, isIncrease) {
    const ticketInput = document.getElementById(category + "-count");
    const ticketCount = getInputValue(category);

    let newTicketCount = 0;

    if(isIncrease == true){

        newTicketCount = ticketCount + 1;
    }
    if(isIncrease == false && ticketCount > 0 ){

        newTicketCount = ticketCount - 1;
    }
    ticketInput.value = newTicketCount;

    let totalTicket = 0;

    if(category == "vip"){

        totalTicket = newTicketCount * 150;
    }
    if(category == "eco"){

        totalTicket = newTicketCount * 100;
    }
    document.getElementById(category + "-price").innerText = totalTicket;
    ticketCalculator();
        
};

// amount calculator 

function ticketCalculator() {

    const vipCount = getInputValue("vip")
    
    const ecoCount = getInputValue("eco")

    const subTotalPrice = vipCount * 150 + ecoCount * 100;

    const vat = subTotalPrice / 10;

    const total = subTotalPrice + vat;

    document.getElementById("sub-total").innerText = subTotalPrice;

    document.getElementById("vatDisplay").innerText = vat;

    document.getElementById("totalDisplay").innerText = total;

    document.getElementById("totalPayment").innerText = total;

    document.getElementById("vatDisplayed").innerText = vat;

};

//get input value


function getInputValue(category){
    const ticketInput = document.getElementById(category + "-count") 
    const productCount = parseInt(ticketInput.value);
    return  productCount;      
}

//booking button with pop up information


bookedBtn.addEventListener("click", function(){
    var bookDisplay = document.getElementById("booking");

    bookDisplay.style.display = "none";

    var navDisplay = document.getElementById("navbar");

    navDisplay.style.display = "none";

    var popUp = document.getElementById("pop-up");

    popUp.style.display = "block";

    //Departure popup info
    const departureDisplay = document.getElementById("departure");
    const departureCount = departureDisplay.value;
    document.getElementById("departuredDate").innerText = departureCount;

    //return popup info
    const returnDisplay = document.getElementById("return");
    const returnCount = returnDisplay.value;
    document.getElementById("returnDisplay").innerText = returnCount;

    //Flying From popup info
    const flyingFromInput = document.getElementById("flyingFrom");
    const flyingFromCount = flyingFromInput.value;
    document.getElementById("flyingFromPlace").innerText = flyingFromCount;

    //Flying From popup info
    const flyingToLocation = document.getElementById("flyingTo");
    const flyingToCount = flyingToLocation.value;
    document.getElementById("flyingToPlace").innerText = flyingToCount;
    
    
})