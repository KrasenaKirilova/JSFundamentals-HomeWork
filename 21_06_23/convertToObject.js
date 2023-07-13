function converttoObject (jsString) {
    let person = JSON.parse(jsString);
    for (const key of Object.keys(person)) {
         console.log(`${key}: ${person[key]}`);   
    }

}

converttoObject('{"name": "George", "age": 40, "town": "Sofia"}');