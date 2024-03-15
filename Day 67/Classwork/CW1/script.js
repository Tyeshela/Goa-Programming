let button = document.getElementById('switchDirection')

button.addEventListener('click', function() {
    var parent = document.getElementById('flexParent')

    if (parent.style.flexDirection === 'column') {
        parent.style.flexDirection = 'row';
    } else {
        parent.style.flexDirection = 'column';
    }
});