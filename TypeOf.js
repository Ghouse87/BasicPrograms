function doSomething(value) {
    if(typeof(value) === 'string') {
      console.log('value is a string')
    } else if(typeof(value) === 'number') {
      console.log('value is a number');
    }else if(typeof(value) === 'object') {
      console.log('value is a object');
    }
  }
  doSomething("string");
  doSomething(123);
  doSomething({key: "value"});