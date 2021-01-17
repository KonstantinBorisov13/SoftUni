function extract(str) {
    let i = str.lastIndexOf('.');
    let name = str.slice(str.lastIndexOf('\\') + 1, i)
    let extension = str.substring(i + 1);
    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);



}

extract('C:\\Internal\\training-internal\\Template.pptx')