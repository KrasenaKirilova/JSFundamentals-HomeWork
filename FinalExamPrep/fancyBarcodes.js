function solve(input) {
  let num = Number(input.shift());

  const pattern = /@#+(?<barcode>[A-Z][A-Za-z0-9]{4,}[A-Z])@#+/;
  const pattern2 = /\d/g;

  for (let i = 0; i < num; i++) {
    let current = input[i];
    let match = current.match(pattern);
   
    if (!match) {
      console.log('Invalid barcode');
      continue;
    } else {
      let barcode = match.groups.barcode;
      let match2 = barcode.match(pattern2);
      let productGroup;
      if (!match2) {
        productGroup = '00';
      } else {
        productGroup = match2.join('');
      }
      console.log(`Product group: ${productGroup}`);
    }
  }
}



solve(["3",
  "@#FreshFisH@#",
  "@###Brea0D@###",
  "@##Che4s6E@##"]);

console.log('===========');

solve(["6",
  "@###Val1d1teM@###",
  "@#ValidIteM@#",
  "##InvaliDiteM##",
  "@InvalidIteM@",
  "@#Invalid_IteM@#",
  "@#ValiditeM@#"]);