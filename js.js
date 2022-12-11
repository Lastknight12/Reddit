    let code = document.getElementById("code");
    let abs = document.getElementById("ans")
    abs.style.display = "none"
    code.addEventListener("input", chek)

    function chek () {
        if(this.value == "114534797") {
            alert("ok")
            abs.style.display = "block"
        }
    }
