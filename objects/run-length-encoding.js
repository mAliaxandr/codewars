var runLengthEncoding = function(str){
    let arr = str.split('');
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let itemArr = [1, arr[i]]
        if (arr[i] == arr[i - 1]) {
            result[result.length - 1][0] = result[result.length - 1][0] + 1;
        } else {
            result.push(itemArr);
        }   
    }
    console.log('arr -- ', arr);
    return result;
  }

  console.log('result -- ', runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb"));