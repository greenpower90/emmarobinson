export const mainPicture = [{
  src: 'Images/1.jpg'
},{
  src: 'Images/2.jpg'
},{
  src: 'Images/3.jpg'
},{
  src: 'Images/4.jpg'
},{
  src: 'Images/5.jpg'
},{
  src: 'Images/6.jpg'
},{
  src: 'Images/7.jpg'
},{
  src: 'Images/8.jpg'
},{
  src: 'Images/9.jpg'
},{
  src: 'Images/10.jpg'
},{
  src: 'Images/11.jpg'
},{
  src: 'Images/12.jpg'
},{
  src: 'Images/13.jpg'
},{
  src: 'Images/14.jpg'
}
];

export function loadRandomMainPicture(){

  let images = mainPicture;
  console.log(mainPicture);
  let randomImageIndex = Math.floor(Math.random() * images.length)

  console.log(`celkem fotek ${images.length}`);
  console.log(`náhodné číslo na výběr fotky ${randomImageIndex}`);
  console.log(`zdroj fotky na náhodném indexu: ${images[randomImageIndex].src}`)
  
  document.getElementsByTagName('main-picture')[0].style.backgroundImage = `url(${images[randomImageIndex].src})`;
  document.getElementsByTagName('main-picture')[0].style.backgroundRepeat = "no-repeat";
  document.getElementsByTagName('main-picture')[0].style.backgroundSize = "100%";
  //NACHYSTÁNO - document.getElementById('pokus').innerHTML = `<img src=${images[randomImageIndex].src} >`
};