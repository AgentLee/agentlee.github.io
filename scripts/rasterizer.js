var milktruckText = 
"<h2>Cesium Milktruck</h2>"+
"<p class='heatstroke-img-desc'>"+
"</p>";

var duckTextureText = 
"<h2>Textured Duck</h2>"+
"<p class='heatstroke-img-desc'>"+
"</p>";

var duckDiffuseText = 
"<h2>Diffuse Duck</h2>"+
"<p class='heatstroke-img-desc'>"+
"</p>";

var duckLineText = 
"<h2>Line Duck</h2>"+
"<p class='heatstroke-img-desc'>"+
"</p>";

var duckPointText = 
"<h2>Point Duck</h2>"+
"<p class='heatstroke-img-desc'>"+
"</p>";

var textureText = 
"<h2>Texturing</h2>"+
"<p class='heatstroke-img-desc'>"+
"</p>";

function changeImage(img)
{
    // document.getElementById('juxt').style.visibility = hidden;
    switch(img)
    {
        case 0:
            // Change image
            document.getElementById('mcpt-img').src = "../images/rasterizer/milktruck.gif";
            // Change Text
            document.getElementById('mcpt-desc-txt').innerHTML = milktruckText;
            break;
        case 1:
            // Change image
            document.getElementById('mcpt-img').src = "../images/rasterizer/tex.png";
            document.getElementById('mcpt-desc-txt').innerHTML = duckTextureText;
            break;
        case 2:
            // Change image
            document.getElementById('mcpt-img').src = "../images/rasterizer/diff.png";
            document.getElementById('mcpt-desc-txt').innerHTML = duckDiffuseText;
            break;
        case 3:
            // Change image
            document.getElementById('mcpt-img').src = "../images/rasterizer/line.png";
            document.getElementById('mcpt-desc-txt').innerHTML = duckLineText;
            break;
        case 4:
            // Change image
            document.getElementById('mcpt-img').src = "../images/rasterizer/point.png";
            document.getElementById('mcpt-desc-txt').innerHTML = duckPointText;
            break;
        default:
            break;
    }
}