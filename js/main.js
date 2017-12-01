(function(){
    console.log("IIFE");
    document.addEventListener("load", function(evt){
        console.log("Load event fired");
    });
})();