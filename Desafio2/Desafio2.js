function validarString(str, tam){
    dataVal = [];
        dataVal['completa']=false
        dataVal['tamanho']=false
        dataVal['numero']=false
        dataVal['minuscula']=false
        dataVal['maiuscula']=false
        dataVal['charSpecial']=false
    
    if (str.length>=tam){
        dataVal.tamanho=true;
    }
    for (var i in str){
        
        if (!isNaN(str[i])){
            dataVal.numero = true;
        } else if (charSpecial.indexOf(str[i])>0){
            dataVal.charSpecial=true;
        }  else if (str[i]===str[i].toUpperCase()){
            dataVal.maiuscula = true;
        } else if (str[i]===str[i].toLowerCase()){
            dataVal.minuscula = true;
        }
        if (dataVal.tamanho && dataVal.numero && dataVal.minuscula && dataVal.maiuscula && dataVal.charSpecial){
            dataVal.completa = true;
            return dataVal;
        }
    }
    return dataVal;
}

function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }