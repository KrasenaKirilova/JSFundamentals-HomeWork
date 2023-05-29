function solve(people, type, day) {
let price = 0;


 if (type === 'Students')  {
    switch (day) {
        case "Friday": price = people * 8.45; break;
        case "Saturday": price = people * 9.8; break;
        case "Sunday": price = people * 10.46; break;
            }
        if (people >=30){
         price = price * 0.85;  
            }   
        } 
else if (type === "Business") { 
    if( people >=100) {
    people = people - 10;
    }
    switch (day) {
        case "Friday": price = people * 10.9; break;
        case "Saturday": price = people * 15.6; break;
        case "Sunday": price = people * 16; break;
     
     }
    }
else if (type === "Regular") {
            switch (day) {
                case "Friday": price = people * 15; break;
                case "Saturday": price = people * 20; break;
                case "Sunday": price = people * 22.5; break;
     } if (people >=10 && people <=20) {  
           price = price * 0.95;
        }
    }
    console.log(`Total price: ${price.toFixed(2)} `);
}

       
    

    

    solve(40, "Students", "Friday")
   // solve(15, "Regular", "Saturday")
   // solve(80, "Business", "Sunday")

