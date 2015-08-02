var imglobal="./img/img01.jpg";
function imglobalnw(argu)
{
var image = argu.src;
imglobal=image;
}
function nuevaimg(argu)
{
document.getElementById("imagen1").src=argu;
}
function restore()
{
document.getElementById("imagen1").src=imglobal;
}
function cambiarimg(img)
{
var image = img.src;
nuevaimg(image);
}