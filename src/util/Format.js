class Format {
    
    /*
    * Essa função recebe o id dos objetos separados por '-' ex: list-button-xx
    * e irá transformá-lo em dataset, ao fazer isso, o proprio JS o transforma em camelCase
    * ex: listButtonXx
    */ 
    static getCamelCase(text){

        let div = document.createElement('div');

        div.innerHTML = `<div data-${text}="id"></div>`;

        return Object.keys(div.firstChild.dataset)[0];
    }
}