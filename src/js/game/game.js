class Game {
    constructor(element,count) {
        this._element = element;
        this.addHoles(count)
        this.startMove(count)
    }
    addHoles(count) {
        for (let i = 0; i < count*count; i++) {
            const item = document.createElement('div');
            item.classList.add('hole');
            this._element.insertAdjacentElement('afterBegin',item)
        }

    }
    startMove(count) {
        setInterval(() =>{
            const number = Math.round(Math.random() * count*count)
            const items = document.querySelectorAll('.hole')
            const goblin = document.querySelector('.goblin')
            if (goblin !== null) {
                goblin.classList.remove('goblin')
            }
            items[number].classList.add('goblin')
        },800)
    }
}