/*ini javascript*/


function formValidation() {
    let name= document.getElementById('input-name').value;
    console.log(name);

    //pengecekan nama
    if (name == '') {
        alert('Maaf anda belum mengisi nama');
    }   else {
        alert('Sukses mengisi nama');
    }
}


let indexSlide = 1;
showSlide(1);

function nextSlide(n) {
    showSlide(indexSlide +=n);
}

function showSlide(n) {
    let listImage = document.getElementsByClassName('main-content-banner');
    console.log(listImage);

    if (n > listImage.length) indexSlide = 1;

    let index = 0;
    while (index < listImage.length){
        listImage[index].style.display = 'none';
        index ++;
    }

    listImage[indexSlide-1].style.display = 'block';
}

setInterval(() => nextSlide(1), 3000);