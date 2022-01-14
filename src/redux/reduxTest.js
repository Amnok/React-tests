function add(a,b,c) {
    return a+b+c;
}

function add2 (a) {
    return (b) => {
        return (c) => {
            return a+b+c;
        }
    }
}

add2(1)(2)(3);