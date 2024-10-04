export default function SidebarPage({ $target, intialState }) {
    this.state = intialState

    this.createTreeView = (data) => {
        let str = ''
        for (const row of data) {
            str += `<li class="dataList">😐 ${row.title}    
            <button class="addBtn">+</button>
            <button class="delBtn">-</button>
            </li>
            ${document.documents.length > 0 ? `<ul></ul>` : ''}
            `
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
                ${document.documents.length > 0 ? `<ul></ul>` : ''}

                `
                )
                .join('')}

        </ul>
    `
    $target.appendChild($page)
}
