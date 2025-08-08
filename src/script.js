function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function acelerar() {
    const canva = document.getElementById("canva");
    let carro = document.getElementById("carro");
    let esquerda = Number(carro.style.left || 0);

// Number(canva.clientWidth)
    for(let i = 0; i < (Number(canva.clientWidth)-200); i++){
        esquerda += 1;
        carro.style.left = esquerda + "px";
        await sleep(50);
    }
}
