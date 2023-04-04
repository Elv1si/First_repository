
function add1(elId){
    document.getElementById(elId).innerHTML ++
    if ( elId === "Like" )
        elId = "Unlike";
    else document.getElementById(elId).innerHTML --
        elId = "Like";
    


    
    
        

}
