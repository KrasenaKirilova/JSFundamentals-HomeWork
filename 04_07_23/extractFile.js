function solve(text) {
    let lastSlash = text.lastIndexOf('\\');
    let lastPoint = text.lastIndexOf('.');

    let fileName = text.substring(lastSlash + 1, lastPoint);
    let fileExtention = text.substring(lastPoint + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtention}`);
}

solve('C:\\Projects\\Data-Structures\\LinkedList.cs');