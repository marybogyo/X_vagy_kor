class Kocka{
    constructor(SzuloElem){
        this.SzuloElem = SzuloElem;
        this.SzuloElem.on("click", 
            () => {this.SzovegValt()});
    }

    SzovegValt(){
        let szam = Math.random()*100;
        let kattint = "";
        if (szam <= 50){
            kattint = "X";
        }else{kattint = "O"};
        console.log(kattint);
        this.SzuloElem.text(kattint);
    }

}
export default Kocka;