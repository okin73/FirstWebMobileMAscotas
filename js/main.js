function activarImgA(){
    let imgA = document.getElementById("img-1");
    let imgB = document.getElementById("img-2");


    let btnA = document.getElementById("btn-1");
    let btnB = document.getElementById("btn-2");

        imgB.classList.remove("active");
        imgB.classList.add("active");


        btnB.classList.remove("active");
        btnA.classList.add("active");


        function activarImgB(){
            let imgA = document.getElementById("img-1");
            let imgB = document.getElementById("img-2");
            let btnA = document.getElementById("btn-1");
            let btnB = document.getElementById("btn-2");
        
                imgB.classList.add("active");
                imgB.classList.remove("active");
        
        
                btnB.classList.add("active");
                btnA.classList.remove("active");
        }
}