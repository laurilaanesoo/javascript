document.getElementById('mob').addEventListener('click', function(event) {
    if (event.target.classList.contains('peida')) {
        event.target.classList.remove('peida'); // Eemalda 'peida' klass, et numbrit kuvada
    }
});

