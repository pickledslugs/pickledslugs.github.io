let iterCounter = 0;
let mapSize = getMapSize();
let halfMapSize = Math.floor(mapSize / 2);
let myMap = mapFill(mapCreate(mapSize));

function randInt(max) {
    return Math.floor(Math.random() * max);
}

function mapCreate(size) {
    let map = [];
    for (let i = 0; i < size; i++) {
        map[i]=[];
        for (let j = 0; j < size; j++) {
            map[i][j] = `<div class='cell row_${i+1} col_${j+1} sea'></div>`;
        }
    }
    return map;
}

function mapFill(map) {
    for (let i = randInt(halfMapSize) + 1; i < randInt(halfMapSize) + halfMapSize; i++) {
        for (let j = randInt(halfMapSize) + 1; j < randInt(halfMapSize) + halfMapSize; j++) {
            randInt(10) ? map[i][j] = `<div class='cell row_${i+1} col_${j+1} isl${randInt(3)}'></div>` : map[i][j] = `<div class='cell row_${i+1} col_${j+1} sea'></div>`;
        }
        iterCounter = i;
    }
    return map;
}

function mapLog(map) {
    document.write(`<div id='map' style='display: grid; grid-template-columns:`);
    for (let i = 0; i < mapSize; i++) {
        document.write(` auto`)
    }
    document.write(`'>`);
    for (let i = 0; i < mapSize; i++) {
        for (let j = 0; j < mapSize; j++) {
            document.write(map[i][j].toString());
        }
    }
    document.write('</div>');
}

function mapSizeIsValid(size) {
    let isTrue;
    if (Number.isInteger(parseInt(size, 10))) {
        if (size >= 5 && size <= 100) {
            isTrue = true
        } else {
            alert('map size should be an integer between 5 and 100')
        }
    } else {
        size ? alert(`${size} is not a number`) : alert(`enter a number`);
    }
    return isTrue;
}

function getMapSize() {
    do {
        size = prompt('map size (5 - 100):', 50);
    } while (!mapSizeIsValid(size))
    return size;
}

mapLog(myMap)
document.write(`
    <div id='caption'>
        <p>map size: ${Math.ceil(mapSize)} x ${Math.ceil(mapSize)}</p>
        <p>${iterCounter} iterations</p>
    </div>
`);