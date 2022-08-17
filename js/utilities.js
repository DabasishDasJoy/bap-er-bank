function getInputFieldValueByID(inputFieldId){
    const inputFieldValueElement = document.getElementById(inputFieldId);
    const inputFieldElementValue = inputFieldValueElement.value;
    inputFieldValueElement.value = "";
    return parseFloat(inputFieldElementValue);
}

function getElementValueById(elementId){
    const elementValueString = document.getElementById(elementId).innerText;
    return parseFloat(elementValueString);
}

function setElementValueById(elementId, newValue){
    document.getElementById(elementId).innerText = newValue;
}
