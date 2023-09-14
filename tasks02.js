'use strict';


  const modifiedString = (string) => {
    const modifiedString =  string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    return modifiedString;
  };

  console.log(modifiedString('почему это так сложно'));