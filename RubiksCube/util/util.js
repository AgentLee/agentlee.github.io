//-----------------------------
// Rotation
//-----------------------------
function rotateX(m, angle)
{
  var cos = Math.cos(angle);
  var sin = Math.sin(angle);

  var mv1 = m[1];
  var mv5 = m[5];
  var mv9 = m[9];

  m[1] = cos * m[1] - sin * m[2];
  m[5] = cos * m[5] - sin * m[6];
  m[9] = cos * m[9] - sin * m[10];

  m[2]  = cos * m[2] + sin * mv1;
  m[6]  = cos * m[6] + sin * mv5;
  m[10] = cos * m[10] + sin * mv9;
}

function rotateY(m, angle)
{
  var cos = Math.cos(angle);
  var sin = Math.sin(angle);

  var mv0 = m[0];
  var mv4 = m[4];
  var mv8 = m[8];

  m[0] = cos * m[0] + sin * m[2];
  m[4] = cos * m[4] + sin * m[6];
  m[8] = cos * m[8] + sin * m[10];

  m[2]  = cos * m[2] - sin * mv0;
  m[6]  = cos * m[6] - sin * mv4;
  m[10] = cos * m[10] - sin * mv8;
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max)
{
  min = Math.ceil(min);
  max = Math.ceil(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
