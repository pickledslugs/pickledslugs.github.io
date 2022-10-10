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
    let i, j, lndCell;
    i = j = halfMapSize;
    for (let k = 0; k < (mapSize * (halfMapSize + Math.floor(Math.random() * halfMapSize))); k++){
        lndCell = `<div class='cell row_${i+1} col_${j+1} isl${randInt(3)}'></div>`;
        if (i > 1 && i < (mapSize - 2) && j > 1 && j < (mapSize - 2)) {
            switch (randInt(8)) {
                case 0:
                    map[i-1][j]   = lndCell;  // n
                    i--;
                    break;
                case 1:
                    map[i-1][j+1] = lndCell;  // ne
                    i--;
                    j++;
                    break;
                case 2:
                    map[i][j+1]   = lndCell;  // e
                    j++
                    break;
                case 3:
                    map[i+1][j+1] = lndCell;  // se
                    i++;
                    j++;
                    break;
                case 4:
                    map[i+1][j]   = lndCell;  // s
                    i++;
                    break;
                case 5:
                    map[i+1][j-1] = lndCell;  // sw
                    i++;
                    j--;
                    break;
                case 6:
                    map[i][j-1]   = lndCell;  // w
                    j--;
                    break;
                case 7:
                    map[i-1][j-1] = lndCell;  // nw
                    i--;
                    j--;
                    break;
                default:
                    i = j = halfMapSize;
                    break;
            }
        } else {
            i = j = halfMapSize;
        }
        iterCounter = k;
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
    // do {
    //     size = prompt('map size (5 - 100):', 50);
    // } while (!mapSizeIsValid(size))
    size = 64;
    return size;
}

mapLog(myMap)
document.write(`
    <div id='caption'>
        <p>map size: ${Math.ceil(mapSize)} x ${Math.ceil(mapSize)}</p>
        <p>${iterCounter} iterations</p>
    </div>
`);