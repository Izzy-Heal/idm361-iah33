
const D20 = document.getElementById('d20');
const D12 = document.getElementById('d12');
const D10 = document.getElementById('d10');
const D8 = document.getElementById('d8');
const D6 = document.getElementById('d6');
const D4 = document.getElementById('d4');

const Pic = document.getElementById('di-pic');
const count = document.getElementById('num')
const turn = document.getElementById('txt')

D20.addEventListener('click', function (evt) {
    console.log('D20 button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    count.classList.add("twenty");
    count.classList.remove("six");
    count.classList.remove("eight");
    count.classList.remove("ten");
    count.classList.remove("twelve");
    count.classList.remove("four");
    count.classList.remove("centered");
    count.innerHTML = Math.floor(Math.random() * 20) + 1;
    Pic.src = 'd20.png';

  });

  D12.addEventListener('click', function (evt) {
    console.log('D12 button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    count.classList.add("twelve");
    count.classList.remove("twenty");
    count.classList.remove("six");
    count.classList.remove("eight");
    count.classList.remove("ten");
    count.classList.remove("four");
    count.classList.remove("centered");
    count.innerHTML = Math.floor(Math.random() * 12) + 1;
    Pic.src = 'd12.png';
  });
  D10.addEventListener('click', function (evt) {
    console.log('D10 button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    count.classList.remove("twelve");
    count.classList.remove("twenty");
    count.classList.remove("six");
    count.classList.remove("eight");
    count.classList.add("ten");
    count.classList.remove("four");
    count.classList.remove("centered");
    count.innerHTML = Math.floor(Math.random() * 10) + 1;
    Pic.src = 'd10.png';
  });
  D8.addEventListener('click', function (evt) {
    console.log('D8 button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    count.classList.remove("twelve");
    count.classList.remove("twenty");
    count.classList.remove("six");
    count.classList.add("eight");
    count.classList.remove("ten");
    count.classList.remove("four");
    count.classList.remove("centered");
    count.innerHTML = Math.floor(Math.random() * 8) + 1;
    Pic.src = 'd8.png';
  });
  D6.addEventListener('click', function (evt) {
    console.log('D6 button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    count.classList.remove("twelve");
    count.classList.remove("twenty");
    count.classList.add("six");
    count.classList.remove("eight");
    count.classList.remove("ten");
    count.classList.remove("four");
    count.classList.remove("centered");
    count.innerHTML = Math.floor(Math.random() * 6) + 1;
    Pic.src = 'd6.png';
  });
  D4.addEventListener('click', function (evt) {
    console.log('D4 button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    count.classList.remove("twelve");
    count.classList.remove("twenty");
    count.classList.remove("six");
    count.classList.remove("eight");
    count.classList.remove("ten");
    count.classList.add("four");
    count.classList.remove("centered");
    count.innerHTML = Math.floor(Math.random() * 4) + 1;
    Pic.src = 'd4.png';
  });
