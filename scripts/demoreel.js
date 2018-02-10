var winter2018Text = 
"<h2>2018 Demo Reel Breakdown</h2>"+
"<p class='heatstroke-img-desc'>"+
"1. Monte Carlo Path Tracer:<br>"+
"2. Heatstroke:<br>"+
"3. Stay Woke:<br>"+
"</p>";

var fall2017Text = 
"<h2>Fall 2017 Demo Reel Breakdown</h2>"+
"<p class='heatstroke-img-desc'>"+
"1. Monte Carlo Path Tracer:<br>"+
"2. Clustered Deferred Renderer:<br>"+
"3. Hand of God:<br>"+
"</p>";

var fall2016Text = 
"<h2>Fall 2016 Demo Reel Breakdown</h2>"+
"<p class='heatstroke-img-desc'>"+
"1. SteerLite Crowd Simulator:<br>"+
"2. 3D Modeling:<br>"+
"</p>";

function changeImage(img)
{
    switch(img)
    {
        case 0:
            // Change Text
            document.getElementById('demoreel').src = "https://player.vimeo.com/video/250289654";
            document.getElementById('mcpt-desc-txt').innerHTML = winter2018Text;
            break;
        case 1:
            document.getElementById('demoreel').src = "https://player.vimeo.com/video/243580093";
            document.getElementById('mcpt-desc-txt').innerHTML = fall2017Text;
            break;
        case 2:
            document.getElementById('demoreel').src = "https://player.vimeo.com/video/189623959";
            document.getElementById('mcpt-desc-txt').innerHTML = fall2016Text;
            break;
        default:
            break;
    }
}