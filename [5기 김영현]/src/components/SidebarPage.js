import NewBtn from './NewBtn.js'

export default function SidebarPage({ $target, intialState }) {
    this.state = intialState

    this.createTreeView = (data) => {
        console.log('createTreeView', data)
        let str = ''
        for (const key in data) {
            if (data[key].documents.length > 0) {
                str += `<li class="dataList">📄 ${data[key].title}
                  <button class="addBtn">➕</button>
                  <button class="delBtn">🗑️</button>
                    <ul>${this.createTreeView(data[key].documents)}</ul>
                  </li>`
            } else {
                str += `<li class="dataList">📄 ${data[key].title}
                  <button class="addBtn">➕</button>
                  <button class="delBtn">🗑️</button>
                </li>`
            }
        }
        return str
    }

    const $page = document.createElement('div')
    $page.classList.add('listContainer')
    $page.innerHTML = `
        <ul>
            ${this.state
                .map(
                    (row) => `<li class="dataList">😐 ${row.title}
                <button class="addBtn">+</button>
                <button class="delBtn">-</button>
                </li>
                ${row.documents.length > 0 ? `<ul></ul>` : ''}

                `
                )
                .join('')}

        </ul>
    `
    $target.appendChild($page)
    const $newBtn = new NewBtn({ $target })
    $target.appendChild(NewBtn)
}
