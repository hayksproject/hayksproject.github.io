class Game{
    constructor(){
        this.width = 5;
        this.height = 5;
        this.board = document.getElementById('board');
        this.createBoard()
    }
    createBoard(){
        this.board.innerHTML = '';
        for(let i = 0; i < this.height; i++){
            this.board.innerHTML += `<div class="row">${this.newChild(i)}</div>`
        }
    }
    newChild(i){
        let htmlElm = '';
        for(let j = 0; j < this.width; j++){
            htmlElm += `<div class="block hideBlock" data-i="${i}" data-j="${j}"></div>`;
        }
        return htmlElm;
    }
}
// const game = new Game();
