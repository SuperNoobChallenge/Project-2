export default function EditorPage({ $target }) {
    const $page = document.createElement('div')
    $page.className = 'editorPage'
    $page.innerHTML = `
        <input placeholder="제목 없음" class="editorTitle"/>
    <textarea placeholder="내용 없음" class="editorContent"></textarea>
    `
    $target.appendChild($page)
}
