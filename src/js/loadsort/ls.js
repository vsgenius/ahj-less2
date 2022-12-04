class Loadsort {
    constructor(element,file) {
        this._element = element
        this._file = file
        this.buildtable()
    }
    buildtable () {
        console.log(this._file)
        for (let i = 0; i < file.length; i++) {
            const item = document.createElement('tr');
            console.log(item)
            // .classList.add('hole');
            // this._element.insertAdjacentElement('afterBegin',item)
        }
//         <tr data-id="25" data-title="Побег из Шоушенка" data-year="1994" data-imdb="9.30">
//   <td>#25</td>
//   <td>Побег из Шоушенка</td>
//   <td>(1994)</td>
//   <td>imdb: 9.30</td>
// </tr>
    }
    sort() {

    }
}