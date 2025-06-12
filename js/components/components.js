
// Получение пункта списка
function getItemEl(classList) {
    const liEl = document.createElement('li');
    liEl.classList.add(classList);
    return liEl;
}

// Получаем обёртку Div для карточки и внутренних блоков
function getDivEl(classList) {
    const divEl = document.createElement('div');
    divEl.classList.add(classList);
    return divEl;
}

// Получаем изображение для карточки товара
function getImagesEl(classList, src, height, width, alt) {
    const imagesEl = document.createElement('img');
    imagesEl.classList.add(classList);
    imagesEl.src = src;
    imagesEl.height = height;
    imagesEl.width = width;
    imagesEl.alt = alt;
    return imagesEl;
}

// Получаем ссылку
function getLinkEl(href, classListArray, dataId) {
    const linkEl = document.createElement('a');
    linkEl.href = href;
    linkEl.classList.add(...classListArray);
    linkEl.setAttribute('data-id', dataId);
    return linkEl;
}

// Получаем строчный элемент
function getSpanEl(classList, textContent) {
    const spanEl = document.createElement('span');
    spanEl.classList.add(classList);
    spanEl.textContent = textContent;
    return spanEl;
}

// Получаем формат векторной графики
function getVectorGraphEl(classList, width, height, ariaHidden, xlinkhref) {
    const svgEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgEl.classList.add(classList);
    svgEl.setAttribute('width', width);
    svgEl.setAttribute('height', height);
    svgEl.setAttribute('aria-hidden', ariaHidden);
    
    
    const useEl = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    useEl.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', xlinkhref);

    svgEl.append(useEl);
    return svgEl;
}

//  Получаем заголовок для карточки
function getHeadingEl(classList, textContent) {
    const headingEl = document.createElement('h2');
    headingEl.classList.add(classList);
    headingEl.textContent = textContent;
    return headingEl
}

// Получаем кнопку подсказки
function getButtonEl (classList, type, id, dataId, ariaLabal) {
    const buttonEl = document.createElement('button');
    buttonEl.classList.add(classList);
    buttonEl.type = type;
    buttonEl.id = id;
    buttonEl.ariaLabel = ariaLabal;
    buttonEl.setAttribute('data-id', dataId);
    return buttonEl;
}

function getButtonDelCartEl(classList, id, type, index) {
    const buttonDelCartEl = document.createElement('button');
    buttonDelCartEl.classList.add(classList);
    buttonDelCartEl.id = id;
    buttonDelCartEl.type = type;
    buttonDelCartEl.setAttribute('data-index', index);
    return buttonDelCartEl;
}

// Получаем список для городов с информацией о наличии товара
function getListEl(classList) {
    const listEl = document.createElement('ul');
    listEl.classList.add(classList);
    return listEl;
}

function getDivBasketEl (classList, textContent) {
    const divBasketEl = document.createElement('div');
    divBasketEl.classList.add(classList);
    divBasketEl.textContent = textContent;
    return divBasketEl;
}

export {
    getItemEl,
    getDivEl,
    getImagesEl,
    getLinkEl,
    getSpanEl,
    getVectorGraphEl,
    getHeadingEl,
    getButtonEl,
    getButtonDelCartEl,
    getListEl,
    getDivBasketEl
}