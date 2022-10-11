const refreshBtn = document.getElementById('refresh');
const mapElement = document.getElementById('map');
const mapCaption = document.querySelector('.caption');

let mapSize, iterCounter, halfMapSize;
const randInt = max => Math.floor(Math.random() * max);

refreshBtn.addEventListener('click', () => mapCreator());

const mapCreator = () => {
    iterCounter = 0;
    mapSize = getMapSize();
    halfMapSize = Math.floor(mapSize / 2);
    mapElement.innerHTML = '';
    mapDraw(
        mapFill(mapCreate(mapSize))
    );
    // write caption
    mapCaption.innerHTML = `
        <p>map size: ${Math.ceil(mapSize)} x ${Math.ceil(mapSize)}</p>
        <p>${iterCounter} iterations</p>
    `;
}

function mapCreate(size) {
    const map = [];
        for (let i = 0; i < size; i++) {
        map[i] = [];
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

function mapDraw(map) {
    mapElement.style = `grid-template-columns: repeat(${mapSize}, auto);`;
    for (let i = 0; i < mapSize; i++) {
        mapElement.innerHTML += [...map[i]].join('');
    }
}

function validateMapSize(size) {
    let isValid = false;
    if (Number.isInteger(+size)) {
        if (size >= 5 && size <= 100) isValid = true
            else alert('map size should be an integer between 5 and 100')
    } else size ? alert(`${size} is not a number`) : alert(`enter a number`);
    return isValid;
}

function getMapSize() {
    // do {
    //     size = prompt('map size (5 - 100):', 50);
    // } while (!validateMapSize(size))
    size = 10 + randInt(91);
    return size;
}

(() => mapCreator())();