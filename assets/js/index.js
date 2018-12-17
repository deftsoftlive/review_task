// Get elements
var row = document.getElementById("row");
var heading = document.getElementById("heading");
var strapline = document.getElementById("strapline");

// Fonts array
var fonts = ['Droid-Sans','Arvo','Corben','Lobster','Droid-Serif','Raleway','Goudy-Bookletter-1911','Abril-Fatface','Yanone-Kaffeesatz','Hammersmith-One','Lato','PT-Sans-Narrow','Open-Sans','Open-Sans-Condensed','Old-Standard-TT','Merriweather','Montserrat','Roboto','Titillium-Web','Karla','Oswald','Glegoo','Vollkorn','Courgette','Abel','Sniglet','Ubuntu','PT-Sans','PT-Serif','PT-Mono','Times-New-Roman','Tahoma','Trebuchet','Verdana','Palatino','Impact','Helvetica','Myriad-Pro','Georgia','Futura','Courier-New','Arial'];

// Randomise styles
var randHeading = 'letter-gothic-std, sans-serif';
var randStrapline = 'letter-gothic-std, sans-serif';
var randTextColor = '#000000';

// Apply random styles
row.style.color = randTextColor;

heading.setAttribute("class", randHeading);
strapline.setAttribute("class", randStrapline);
