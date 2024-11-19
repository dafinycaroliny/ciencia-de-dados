const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
};

const tickConfig = {
    color: getCSS('--primary-color')
    size: 20;
    
}

