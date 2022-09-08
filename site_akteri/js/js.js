function select_akter() {
    let lala = document.getElementById('my_akter').value
    console.log(lala)
    let img = document.getElementById('img')

    img.src = "img/" + lala + ".png"
}


