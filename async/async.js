async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("I am inside!"),5000    
      )
    });
    try {
      let result = await promise; // wait the promise
      console.log(result)
    } catch (error) {
      console.error(error)
    }
    //console.log(result)
    console.log("I am outside!")
  }
  
  f();