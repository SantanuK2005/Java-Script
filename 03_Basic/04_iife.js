// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    console.log(`DB CONNECTED`);   
})();  // mostly problen i a (;) end

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
} )('santanu')

