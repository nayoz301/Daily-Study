문제1
function sumTo(num) {
    if (num === 0) {
        return 0;
    }
    return num + sumTo(num - 1)
}

문제2
function isOdd(num) {
    num = Math.abs(num)
    if (num === 1) {
        return true;
    } else if (num === 0) {
        return false;
    }
    return isOdd(num - 2);
}

문제3
function factorial(num) {
    if (num === 0) {
        return 1
    }
    return num * factorial(num - 1)
}

문제4
function fibonacci(num) {
    if (num === 0) {
        return 0;
    } else if (num === 1) {
        return 1
    }
    return num = fibonacci(num - 1) + fibonacci(num - 2)
}

문제5
function arrSum(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + arrSum(arr.slice(1))
}

문제6
function arrProduct(arr) {
    if (arr.length === 0) {
        return 1;
    }
    return arr[0] * arrProduct(arr.slice(1))
}

문제7
function arrLength(arr) {
    if (arr.isEmpty() === true) {
        return 0
    }
    return 1 + arrLength(arr.slice(1))
}

문제8
function drop(num, arr) {
    if (num > arr.length) {
        num = arr.length;
    }
    if (arr.length === 0) {
        return [];
    } else if (num === 0) {
        return arr;
    }
    return drop(num - 1, arr.slice(1))
}

문제9
function take(num, arr) {
    if (num >= arr.length) {
        return arr;;
    }
    if (arr.length === 0) {
        return [];
    } else if (num === 0) {
        return [];
    }
    let head = num;
    let tail = arr.slice(0, arr.length - 1)
    return take(head, tail)
}

문제10
//레퍼런스 보기
function and(arr) {
    if (arr.length === 0) {
        return true;
    } //빈배열이 마지막에 올 경우 답에 무조건 트루로 나올거라고 걱정했는데 가장 내부의 함수의 값이므로 상관없다.

    let head = arr[0]
    let tail = arr.slice(1)
    return Boolean(head * and(tail));
}

문제11
function or(arr) {
    if (arr.length === 0) {
        return false;
    }
    let head = arr[0]
    let tail = arr.slice(1);
    return head || or(tail)
}

문제12
function reverseArr(arr) {
    if (arr.length === 0) {
        return [];
    }
    let head = arr[arr.length - 1]
    let tail = arr.slice(0, arr.length - 1)
    return [head].concat(reverseArr(tail))
}

문제13
function findMatryoshka(matryoshka, size) {
    if (Object.keys(matryoshka).length === 0) {
        return false;
    }
    if (matryoshka.size === size) {
        return true;
    } else if (matryoshka.matryoshka) {
        return findMatryoshka(matryoshka.matryoshka, size)
    }
    return false;
}

문제14
function unpackGiftbox(giftBox, wish) {
    if (giftBox.length === 0) {
        return false;
    }
    for (let i = 0; i < giftBox.length; i++) {
        if (Array.isArray(giftBox[i])) {
            if (unpackGiftbox(giftBox[i], wish)) {
                return true;
            }
        } else if (giftBox[i] === wish) {
            return true;
        }
    }
    return false;
}

문제15
function flattenArr(arr) {
    let result = [];
    if (arr.length === 0) {
        return [];
    }
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result.push(...flattenArr(arr[i]))
        } else {
            result.push(arr[i])
        }
    }
    return result;
}

