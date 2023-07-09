var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var result =JSON.parse(request.response);
    console.log(result);
    var cur[];
    for(i=0;i<result.length;i++){
        if(result[i].currencies[0].code=="USD")
        {
            console.log("name:", data[i].name,"==>",data[i].currencies[0].code);
        }
    }