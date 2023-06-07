function carWash(arr) {
    let value = 0;
    
    let soap = 10;
    let arrLength = arr.length;
   

    for (index = 0; index = arrLength; index ++) {
        let currentElement = arr[index];

        if(currentElement === 'soap') {
            value += soap;
            console.log(value);
        } else {
           console.log(currentElement);
        }
        
            }
    } 
    

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap',
'water']);