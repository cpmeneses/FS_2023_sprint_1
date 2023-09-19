var expresion = "";

function pressBotonNumero(argNum) {
    expresion += argNum;
    setScreen(expresion);
}

function pressBotonIgual() {
    expresion = eval(expresion);
    setScreen(expresion);
}

function pressButtonClear() {
    expresion = "";
    setScreen(expresion);
}

function setScreen(screen_string) {
    document.getElementById('pantalla').innerHTML = screen_string;
}

