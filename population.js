var request5 = new XMLHttpRequest()
request5.open('GET', 'https://restcountries.com/v3.1/all' );
request5.send();
request5.onload=function()
{
    var c5=JSON.parse(this.response);
    const population2 = c5.reduce((acc,element)=>{
        return acc+element.population2;
    },0)
    console.log(population2);
}