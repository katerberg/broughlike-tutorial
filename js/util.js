function tryTo(description, callback) {
    for (let timeout = 1000; timeout > 0; timeout --) {
        if (callback()) {
            return;
        }
    }
    throw 'Timeout after 1000 tries to ' + description;
}

function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function shuffle(arr) {
    for (let i = 1; i < arr.length; i++) {
        const r = randomRange(0, 1);
        const temp = arr[i];
        arr[i] = arr[r];
        arr[r] = temp;
    }
    return arr;
}