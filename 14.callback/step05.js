
let g = 0;

function setGWith100() {
    console.log('setGWith100 started');

    setTimeout(() => {
        g = 100        
    }, 1000);

    console.log('setGWtih100 ended');

    return g;
}

const result = setGWith100();

console.log(result);
console.log(g);