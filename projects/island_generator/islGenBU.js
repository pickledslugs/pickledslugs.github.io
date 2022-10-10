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
            map[i][j] = '⠀';
        }
    }
    return map;
}

function mapFill(map) {
    for (let i = randInt(halfMapSize) + 1; i < randInt(halfMapSize) + halfMapSize; i++) {
        for (let j = randInt(halfMapSize) + 1; j < randInt(halfMapSize) + halfMapSize; j++) {
            randInt(10) ? map[i][j] = '🏝️' : map[i][j] = '⠀';
        }
        iterCounter = i;
    }
    return map;
}

function mapLog(map) {
    document.write('<div id=\'map\'>');
    for (let i = 0; i < mapSize; i++) {
        for (let j = 0; j < mapSize; j++) {
            document.write(map[i][j].toString());
        }
        document.write('<br>')
    }
    document.write('</div>');
}

function mapSizeIsValid(size) {
    let isTrue;
    if (Number.isInteger(parseInt(size, 10))) {
        if (size >= 5 && size <= 100) {
            isTrue = true
        } else {
            alert('Map size should be an integer between 5 and 100')
        }
    } else {
        alert(`${size} is not a number`);
    }
    return isTrue;
}

function getMapSize() {
    do {
        size = prompt('Map Size (5 - 100):', 50);
    } while (!mapSizeIsValid(size))
    return size;
}

mapLog(myMap)
document.write(`
    <div id='caption'>
        <p>Map size: ${Math.ceil(mapSize)} x ${Math.ceil(mapSize)}</p>
        <p>${iterCounter} iterations</p>
    </div>
`);