let addButton = document.querySelector('.button');

const updateLSData = () => {

    const textAreaData = document.querySelectorAll('textarea');
    const notes = [];

    textAreaData.forEach((note) => {

        return notes.push(note.value);

    });

    localStorage.setItem('notes', JSON.stringify(notes));

};

let addNewNotes = (text = '') => {

    let note = document.createElement('div');
    note.classList.add('note');

    const htmlData = `
    
    <div class="block">

        <div class="icons my-2 mx-2">

            <button class="btn btn-success edit me-2"><i class="far fa-edit"></i></button>
            <button class="btn btn-danger delete"><i class="fas fa-trash-alt"></i></button>

        </div>

        <textarea class="${text ? 'hidden' : ''} form-control pt-5 fs-4 disabled" style="height: 220px;" ></textarea>
        
    </div>
        
    `;

    note.insertAdjacentHTML('afterbegin', htmlData);

    document.getElementById('body').appendChild(note);

    let editButton = note.querySelector('.edit');
    let deleteButton = note.querySelector('.delete');
    let textarea = note.querySelector('textarea');

    deleteButton.addEventListener('click', () => {

        note.remove();
        updateLSData();

    });

    textarea.value = text;

    editButton.addEventListener('click', () => {
        textarea.classList.toggle('enabled');
    });

    textarea.addEventListener('change', (event) => {
        updateLSData();
    });
};

const notes = JSON.parse(localStorage.getItem('notes'));

if (notes) {

    notes.forEach((note) => addNewNotes(note));

}
addButton.addEventListener('click', () => addNewNotes());