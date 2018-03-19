var shadowMapText = 
"<h2>Shadow map</h2>"+
"<p class='heatstroke-img-desc'>"+
"We only implemented shadow mapping for directional lights. "+
"The scene gets rendered into a texture from the directional light's perspective. "+
"When it's time to render from the camera's perspective, "+
"each fragment is tested against the pixel in the shadow map "+
"to see if it's in shadow."
"</p>";

var gBufferText = 
"<h2>G-Buffer Pass</h2>"+
"<p class='heatstroke-img-desc'>"+
"This is also the same pass used in deferred rendering. "+
"Each visible fragment gets stored for each pixel to be shaded "+
"in the next stage. The positions, albedo, and normals are shown. "+
"</p>";

var volumePassText = 
"<h2>Volume Pass</h2>"+
"<p class='heatstroke-img-desc'>"+
"This is where our renderer spends most of its time. "+
"We represented our volume as a 3D texture that has random density values (for heterogeneous media). "+
"The texture gets upsampled from a low resolution, which makes our implementation efficient. "+
"Ray marching is done through the scene to compute the transmissivity and gets rendered to a texture."+
"</p>";

var finalShadeText = 
"<h2><i>Final</i> Shading</h2>"+
"<p class='heatstroke-img-desc'>"+
"Here is what the render looks like before post-processing. "+
"</p>";

var toneMapText = 
"<h2>Tone Mapping</h2>"+
"<p class='heatstroke-img-desc'>"+
"Tone mapping is a way to estimate the HDR from the previous pass. "+
"We implemented the Uncharted 2 Tone Mapping algorithm for our renderer "+
"</p>";

var gifText = 
"<h2>Heatstroke in Action</h2>"+
"<p class='heatstroke-img-desc'>"+
"</p>";

var godraysText = 
"<h2>God Rays</h2>"+
"<p class='heatstroke-img-desc'>"+
"Here you can see the god rays coming through the columns. "+
"</p>";

var godRaysText2 = 
"<h2>Spooky</h2>"+
"<p class='heatstroke-img-desc'>"+
"</p>";

var heterogeneousText = 
"<h2>Heterogeneous Volume</h2>"+
"<p class='heatstroke-img-desc'>"+
"Heterogeneous Volume means that everywhere in the volume "+
"has different density value. If you look closely at the God Rays, "+
"you can see the different splotches which exemplify a Heterogeneous Volume. "+
"</p>";

var homogenousText = 
"<h2>Homogenous Volume</h2>"+
"<p class='heatstroke-img-desc'>"+
"Homogenous Volume means that the density is the same everywhere in the volume. "+
"</p>";

function changeImage(img)
{
    switch(img)
    {
        case 0:
            // Change image
            document.getElementById('mcpt-img').src = "../images/heatstroke/shadow.png";
            // Change Text
            document.getElementById('mcpt-desc-txt').innerHTML = shadowMapText;
            break;
        case 1:
            // Change image
            document.getElementById('mcpt-img').src = "../images/heatstroke/gbuffer.png";
            document.getElementById('mcpt-desc-txt').innerHTML = gBufferText;
            break;
        case 2:
            // Change image
            document.getElementById('mcpt-img').src = "../images/heatstroke/volume.png";
            document.getElementById('mcpt-desc-txt').innerHTML = volumePassText;
            break;
        case 3:
            // Change image
            document.getElementById('mcpt-img').src = "../images/heatstroke/beforetone.png";
            document.getElementById('mcpt-desc-txt').innerHTML = finalShadeText;
            break;
        case 4:
            // Change image
            document.getElementById('mcpt-img').src = "../images/heatstroke/final.png";
            document.getElementById('mcpt-desc-txt').innerHTML = toneMapText;
            break;
        case 5:
            // Change image
            document.getElementById('mcpt-img').src = "../images/heatstroke/heatstroke.png";
            document.getElementById('mcpt-desc-txt').innerHTML = godraysText;
            break;
        case 6:
            // Change image
            document.getElementById('mcpt-img').src = "../images/heatstroke/goddrays.png";
            document.getElementById('mcpt-desc-txt').innerHTML = godRaysText2;
            break;
        case 7:
            // Change image
            document.getElementById('mcpt-img').src = "../images/heatstroke/heterogeneous.png";
            document.getElementById('mcpt-desc-txt').innerHTML = heterogeneousText;
            break;
        case 8:
            // Change image
            document.getElementById('mcpt-img').src = "../images/heatstroke/homogenous.png";
            document.getElementById('mcpt-desc-txt').innerHTML = homogenousText;
            break;
        case 9:
            // Change image
            document.getElementById('mcpt-img').src = "../images/heatstroke/demo.gif";
            document.getElementById('mcpt-desc-txt').innerHTML = gifText;
            break;
        default:
            break;
    }

    document.getElementById('mcpt-img').style.width = "550px";
    document.getElementById('mcpt-img').style.height = "300px";
}