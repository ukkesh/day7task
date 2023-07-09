var request1 = new XMLHttpRequest();
request1.open("GET", "https://restcountries.com/v3.1/all");
request1.send();
request1.onload = function(){
    var result1 =JSON.parse(request1.response);
    console.log(result1);
    var res1 = result1.foreach((element)=>(element.name , element.capital , element.flag));
    console.log(res1);
}
