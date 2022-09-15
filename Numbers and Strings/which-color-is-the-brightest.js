console.log('which-color-is-the-brightest')

function brightest(colors){
  let numberArr = [];
  let resultIndex = null;

  function getR(r) {
    let arr = r.split('', 2);
    let str = arr.join('');
    let num = parseInt(str, 16);
    console.log(' get R -- ', arr, str, num);
    return num;
  }

  function getG(g) {
    let arr1 = g.split('');
    arr1.shift();
    arr1.shift();
    let str1 = arr1.join('');
    let arr = str1.split('', 2);
    let str = arr.join('');
    let num = parseInt(str, 16);
    // console.log(' get G -1- ', arr1, str1, num);
    console.log(' get G -- ', arr, str, num);
    return num;
  }

  function getB(b) {
    let arr1 = b.split('');
    arr1.shift();
    arr1.shift();
    arr1.shift();
    arr1.shift();
    let str1 = arr1.join('');
    let arr = str1.split('', 2);
    let str = arr.join('');
    let num = parseInt(str, 16);
    // console.log(' get B -1- ', arr1, str1, num);
    console.log(' get B -- ', arr, str, num);
    return num;
  }

  function getBrightValue(r,g,b) {
    console.log('getBrightValue -- ', r, g, b, 0.2126*r + 0.7152*g + 0.0722*b);
    return 0.2126*r + 0.7152*g + 0.0722*b;
  }
  

  for (let i = 0; i < colors.length; i++) {
    let arr = colors[i].split('');
    arr.shift();
    let strArr = arr.join('');
    console.log(' Arr-join-- ', strArr);

    let R = getR(strArr);
    let G = getG(strArr);
    let B = getB(strArr);

    let brightValue = getBrightValue(R, G, B);
    
    numberArr.push(brightValue);
    console.log(' --- ', R, G, B, brightValue);
  }

  let getMaxArr = () => {
    let max = null;
    for (let i = 0; i < numberArr.length; i++) {
        if (numberArr[i] > max) {
            max = numberArr[i];
            resultIndex = i;
        }
    }
    return max;
  };

  console.log('colors -- ', colors);
  console.log(' num arr -- ', numberArr);
  console.log(' get MAX ARR -- ', getMaxArr());
  console.log(' result Index -', resultIndex)
  console.log('result -1- ', colors[resultIndex]);
  return colors[resultIndex];
}

console.log('result -- ', brightest(['#00FF00', '#FFFF00']));


// let A = 10;
//   let B = 11;
//   let C = 12;
//   let D = 13;
//   let E = 14;
//   let F = 15;

//   let xx = {
//     A : 10,
//     F : 15
//   }