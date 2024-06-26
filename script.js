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
let lenMenuHome = 0;
let coin = +localStorage.getItem('coinTeleBot') || 0;
const balance = document.getElementById('balanceTicket');
const data = [{
    complated : +localStorage.getItem('teleToChannel') > 1,
    text: "Follow Channel",
    ticketLength: 100,
    linkText : 'Follow',
    onClickF : function(node) {
        let countDo = localStorage.getItem('teleToChannel');
        if(!countDo){
            localStorage.setItem('teleToChannel', '1');
            return;
        }
        if(+countDo >= 1){
            coin += 100;
            updateCoin()
            if(node){
                node.onclick = () => false;
                node.classList.add('hide')
                document.getElementById(`complated${node.dataset.len}`).classList.remove('hide');
            }
            data[0].complated = true;
        }
        localStorage.setItem('teleToChannel', String(++countDo));
    },
    link: "https://t.me/haykProject"
}]
function updateCoin(){
    balance.innerHTML = coin;
    localStorage.setItem('coinTeleBot', coin);
}
updateCoin();
let node;

function addCard({complated, text,ticketLength, linkText, onClickF, link = '#'}){
    const homeMenu = document.getElementById('menuHome');
    const id = `do${lenMenuHome}`;
    homeMenu.innerHTML += `<div class="card flex">
                    <div class="margin full">
                        <div class="flex align between">
                            <p>${text}</p>
                            <div class="flex align marginMin">
                                <p>+${ticketLength}</p>
                                <i class="fa-solid fa-ticket"></i>
                            </div>
                        </div>
                        <div class="textCenter">
                            <a href="${link}" target="_blank" class="button ${complated ? 'hide' : ''}" id="${id}" data-len='${lenMenuHome}'>${linkText}</a>
                            <p class="button ${!complated ? 'hide' : ''} grey" id="complated${lenMenuHome}">Completed</p>
                        </div>
                    </div>
                </div>`;
    node = document.getElementById(id);
    node.onclick = () => onClickF(node);
}
for(let i = 0; i < data.length; i++){
    const elm = data[i];
    addCard(elm)
}
// const game = new Game();
