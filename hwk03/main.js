
const D20 = document.getElementById('d20');
const D12 = document.getElementById('d12');
const D10 = document.getElementById('d10');
const D8 = document.getElementById('d8');
const D6 = document.getElementById('d6');
const D4 = document.getElementById('d4');

const Pic = document.getElementById('di-pic');

D20.addEventListener('click', function (evt) {
    console.log('D20 button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    Pic.src = 'd20.png';
  });

  D12.addEventListener('click', function (evt) {
    console.log('D12 button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    Pic.src = 'd12.png';
  });
  D10.addEventListener('click', function (evt) {
    console.log('D10 button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    Pic.src = 'd10.png';
  });
  D8.addEventListener('click', function (evt) {
    console.log('D8 button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    Pic.src = 'd8.png';
  });
  D6.addEventListener('click', function (evt) {
    console.log('D6 button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    Pic.src = 'd6.png';
  });
  D4.addEventListener('click', function (evt) {
    console.log('D4 button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    Pic.src = 'd4.png';
  });