var flyerText = 
"<h2>Teach-In Event Flyer</h2>"+
"<p class='heatstroke-img-desc'>"+
"Penn's official Teach-In flyer. This was the first target in the hunt."
"</p>";

function changeImage(img)
{
    switch(img)
    {
        case 0:
            // Change image
            document.getElementById('mcpt-img').src = "../images/teachin/1.jpeg";
            // Change Text
            document.getElementById('mcpt-desc-txt').innerHTML = shadowMapText;
            break;
        case 1:
            // Change image
            document.getElementById('mcpt-img').src = "../images/teachin/2.jpg";
            document.getElementById('mcpt-desc-txt').innerHTML = gBufferText;
            break;
        case 2:
            // Change image
            document.getElementById('mcpt-img').src = "../images/teachin/3.jpg";
            document.getElementById('mcpt-desc-txt').innerHTML = volumePassText;
            break;
        case 3:
            // Change image
            document.getElementById('mcpt-img').src = "../images/teachin/4.jpg";
            document.getElementById('mcpt-desc-txt').innerHTML = finalShadeText;
            break;
        case 4:
            // Change image
            document.getElementById('mcpt-img').src = "../images/teachin/5.jpg";
            document.getElementById('mcpt-desc-txt').innerHTML = toneMapText;
            break;
        case 5:
            // Change image
            document.getElementById('mcpt-img').src = "../images/teachin/6.jpg";
            document.getElementById('mcpt-desc-txt').innerHTML = godraysText;
            break;
        case 6:
            // Change image
            document.getElementById('mcpt-img').src = "https://raw.githubusercontent.com/AgentLee/ScavengAR-Hunt/master/Images/Gameplay/ENIAC.PNG";
            document.getElementById('mcpt-desc-txt').innerHTML = godRaysText2;
            break;
        case 7:
            // Change image
            document.getElementById('mcpt-img').src = "https://raw.githubusercontent.com/AgentLee/ScavengAR-Hunt/master/Images/Gameplay/GRASP.PNG";
            document.getElementById('mcpt-desc-txt').innerHTML = heterogeneousText;
            break;
        case 8:
            // Change image
            document.getElementById('mcpt-img').src = "https://github.com/AgentLee/ScavengAR-Hunt/blob/master/Images/Gameplay/SIGLAB.PNG?raw=true";
            document.getElementById('mcpt-desc-txt').innerHTML = homogenousText;
            break;
        case 9:
            // Change image
            document.getElementById('mcpt-img').src = "https://github.com/AgentLee/ScavengAR-Hunt/blob/master/Images/Gameplay/Sophia.PNG?raw=true";
            document.getElementById('mcpt-desc-txt').innerHTML = gifText;
            break;
        case 10:
            // Change image
            document.getElementById('mcpt-img').src = "https://github.com/AgentLee/ScavengAR-Hunt/blob/master/Images/Gameplay/droneinvaders.PNG?raw=true";
            document.getElementById('mcpt-desc-txt').innerHTML = gifText;
            break;
        case 11:
            // Change image
            document.getElementById('mcpt-img').src = "https://raw.githubusercontent.com/AgentLee/ScavengAR-Hunt/master/Images/icon.png";
            document.getElementById('mcpt-desc-txt').innerHTML = gifText;
            break;
        default:
            break;
    }
    
    document.getElementById('mcpt-img').style.width = "550px";
    document.getElementById('mcpt-img').style.height = "300px";
}