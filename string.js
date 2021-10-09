

    let text= 'helenilson correa de oliveira';
    console.log(text);

    //length
    const textLength = text.length;
    console.log(textLength);
    
    //split
    const splitedText = text.split(' ');
    console.log(splitedText);
    //indexof
    const indeBusca = text.indexOf('de');
    console.log(indeBusca);
    
    //replace
    const replacedText = text.replace("helenilson","nilson");
    console.log(replacedText);

    //splice retorna a fatia de um valor

    const lastText = text.slice(-1);
    console.log(lastText);

    // a função recebe dois parametros o primeiro e o inicio e op segungo e fim

    const inicioFimText = text.slice(5,20);
    console.log(inicioFimText);

    const segUltimaText = text.slice(1);
    console.log(segUltimaText);
    
    //substr
    const substrText = text.substr(0 ,2);
    console.log(substrText);


