function iterativeLog(array) {
<<<<<<< HEAD
  array.forEach((element,index)=>{
    console.log(`${index}: ${element}`);
  });
};

function iterate(callback) {
  var array = ["pink","gold","baby blue"];
  array.forEach(callback);
  return array;
};

function doToArray(array, callback) {
  array.forEach(callback);
};
=======
  array.forEach((index,element)=>{
    console.log(`${element}: ${index}`);
  });
};
>>>>>>> 9b454b838802dbb65abe04d6b11ed42955d82942
