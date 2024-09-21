console.log("Hello from maps.ts");

let map = document.querySelector('.card-maps');
let paths = map?.querySelectorAll('.map__image polygon');
// let links = map?.querySelectorAll('.map__list li');

let pathArray = paths ? Array.from(paths) : [];

pathArray?.forEach(path => {
  path.addEventListener('mouseenter', function() {
    console.log("Salut", path);
  });
});