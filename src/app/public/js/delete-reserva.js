const reservaElem = document.querySelector('#item-reserva');
reservaElem.addEventListener('click', event => {
    const clicked = event.target;
    console.log('clicked', clicked);
    
    if(clicked.dataset.type === 'delete') {
        document.location.reload(true);
        const reserva_id = clicked.dataset.ref;
        fetch(`http://localhost:3000/admin/reservas/${reserva_id}`, { method: 'DELETE' })
            .then(result => {
                const tr = clicked.closest(`#reserva_${reserva_id}`);
                tr.remove(result);
            })
            .catch(err => console.error(err));
    }
});