'use strict';

class Shape {
    constructor(name, color) {
        this._name = name;
        this._color = color;
    }

    get name(){
        return this._name;
    }

    get color(){
        return this._color;
    }

    getInfo (){
        return `Shape: ${this._name}, Color: ${this._color}`
    }
}

function createShape(){
    const shapeSelect = document.getElementById('shape-select');
    const colorSelect = document.getElementById('color-select');
    const shape = shapeSelect.value;
    const color = colorSelect.value;

    const newShape = new Shape(shape, color);
    const grid = document.getElementById('grid');
    const shapeDiv = document.createElement('div');
    
    shapeDiv.className = shape === 'circle' ? 'circle' : 'square';
    shapeDiv.style.backgroundColor = color;
    shapeDiv.onclick = function(){
        alert(newShape.getInfo());
    }

    shapeDiv.addEventListener('click', function(){
        this.remove();
    })

    grid.appendChild(shapeDiv);
}