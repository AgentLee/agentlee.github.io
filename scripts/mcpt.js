var cornellText = 
"<h2 style='text-align:center;'>Cornell Box</h2>"+
"<p class='heatstroke-img-desc'>"+
"Rendered with Full Lighting with variance reduction. <br>"+
"The infamous Cornell Box and all its glory."+
"</p>";

var stanfordText = 
"<h2>Stanford Dragon</h2>"+
"<p class='heatstroke-img-desc'>"+
"Rendered with Full Lighting with variance reduction.<br>" +
"Stanford Dragon with Matte Material" +
"</p>";

var goldText = 
"<h2>Golden Dragon</h2>"+
"<p class='heatstroke-img-desc'>"+
"Rendered with Full Lighting with variance reduction.<br>"+
"Stanford Dragon with Specular Material" +
"</p>";

var glassText = 
"<h2>Glass Dragon</h2>"+
"<p class='heatstroke-img-desc'>"+
"Rendered with Full Lighting Integrator with variance reduction.<br>"+
"Stanford Dragon with Transmissive Material (Refractive Index: 1.55) " +
"</p>";

var volumeText = 
"<h2>Lucy Underwater</h2>"+
"<p class='heatstroke-img-desc'>"+
"Volumetric rendering requires an extensive amount of ray marching. "+
"At each ray marched point, the transmissivity is calculated by " +
"conducting a second ray march towards the light."
"</p>";

var dragonsText = 
"<h2>Dragon Challenge</h2>"+
"<p class='heatstroke-img-desc'>"+
"Rendered with Full Lighting with variance reduction.<br>"+
"This features a texture and normal mapped floor and texture mapped sphere. "+
"The two dragons are simple Matte Materials."
"</p>";

var pokeballText = 
"<h2>Choose Your Starter</h2>"+
"<p class='heatstroke-img-desc'>"+
"Rendered with Full Lighting.<br>"+
"This features a rough mirror in the back and Pokeball textured spheres "+
"and a wooden textured table."+
"</p>";

var csgText = 
"<h2>Constructive Solid Geometry</h2>"+
"<p class='heatstroke-img-desc'>"+
"Rendered with Direct Lighting.<br>" +
"This image is the result of carving out a smaller sphere "+
"from the larger sphere. This was done with ray marching. "+
"For this particular CSG operation (difference), "+
"the pixel gets shaded only when the ray hits the larger sphere. "+
"If the ray hits both the smaller and larger spheres, we continue "+
"on with the ray march."+
"</p>";

var implicitText = 
"<h2>Implicit Surfaces</h2>"+
"<p class='heatstroke-img-desc'>"+
"Rendered with Direct Lighting and a Spotlight.<br>"+
"Implicit surfaces are rendered with ray marching. Each surface is modeled "+
"from a mathematical equation. If the (x,y,z) values from the ray solve the "+
"equation, then we hit the surface and gets shaded."+
"</p>";


function randomImage()
{
    let img = Math.floor(Math.random() * 9);
    changeImage(img); 
}

function changeImage(img)
{
    document.getElementById('mcpt-img').style.height = '400px';
    document.getElementById('mcpt-img').style.width = '400px';
    
    document.getElementById('mcpt-desc-txt').style.textAlign = 'left';

    switch(img)
    {
        case 0:
            // Change text
            document.getElementById('mcpt-desc-txt').innerHTML = cornellText;
            // Change image
            document.getElementById('mcpt-img').src = "../images/mcpt/variance/lowvar.png";
            document.getElementById('mcpt-raw-img').href = "../images/mcpt/variance/lowvar.png";
            break;
        case 1:
            // Change text
            document.getElementById('mcpt-desc-txt').innerHTML = stanfordText;
            // Change image
            document.getElementById('mcpt-img').src = "../images/mcpt/dragon-lambert-md.png";
            document.getElementById('mcpt-raw-img').href = "../images/mcpt/dragon-lambert-md.png";
            break;
        case 2:
            // Change text
            document.getElementById('mcpt-desc-txt').innerHTML = goldText;
            // Change image
            document.getElementById('mcpt-img').src = "../images/mcpt/dragon-gold-md.png";
            document.getElementById('mcpt-raw-img').href = "../images/mcpt/dragon-gold-md.png";
            break;
        case 3:
            // Change text
            document.getElementById('mcpt-desc-txt').innerHTML = glassText;
            // Change image
            document.getElementById('mcpt-img').src = "../images/mcpt/dragon-glass-md.png";
            document.getElementById('mcpt-raw-img').href = "../images/mcpt/dragon-glass-md.png";
            break;
        case 4:
            // Change text
            document.getElementById('mcpt-desc-txt').innerHTML = volumeText;
            // Change image
            document.getElementById('mcpt-img').src = "../images/mcpt/lucy-md.png";
            document.getElementById('mcpt-raw-img').href = "../images/mcpt/lucy-md.png";
            break;
        case 5:
            // Change text
            document.getElementById('mcpt-desc-txt').innerHTML =  dragonsText;
            // Change image
            document.getElementById('mcpt-img').src = "../images/mcpt/dragons-md.png";
            document.getElementById('mcpt-raw-img').href = "../images/mcpt/dragons-md.png";
            break;
        case 6:
            // Change text
            document.getElementById('mcpt-desc-txt').innerHTML = pokeballText;
            // Change image
            document.getElementById('mcpt-img').src = "../images/mcpt/pokeball-md.png";
            document.getElementById('mcpt-raw-img').href = "../images/mcpt/pokeball-md.png";
            break;
        case 7:
            // Change text
            document.getElementById('mcpt-desc-txt').innerHTML = csgText;
            // Change image
            document.getElementById('mcpt-img').src = "../images/mcpt/csg-md.png";
            document.getElementById('mcpt-raw-img').href = "../images/mcpt/csg-md.png";
            break;
        case 8:
            // Change text
            document.getElementById('mcpt-desc-txt').innerHTML = implicitText;
            // Change image
            document.getElementById('mcpt-img').src = "../images/mcpt/implicit-md.png";
            document.getElementById('mcpt-raw-img').href = "../images/mcpt/implicit-md.png";
            break;
        default:
            break;
    }
}