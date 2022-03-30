class Piezas {
    nombrePiezas;
    color;
    x;
    y;
    pos;
    text; 

    constructor (nombrePiezas, color, x, y) {
        this.nombrePiezas = nombrePiezas;
        this.color = color;
        this.x = x;
        this.y = y;
        this.pos = x.toString()+y.toString();
        this.text = "<p>" + nombrePiezas + "</p>";
    }

    set setXValue(xValue) {
        this.x = xValue;
    }

    set setYValue(yValue) {
        this.y = yValue;
    }

    set setPos(pos) {
        this.pos = pos;
    }

    get getXValue(){
        return this.x;
    }

    get getYValue() {
        return this.y;
    }

    get getColor() {
        return this.color;
    }

    get getPos() {
        return this.pos;
    }

}