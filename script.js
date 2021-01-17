//1. create a request variable
var request  = new XMLHttpRequest();
//2. create a connection
request.open('GET', 'https://restcountries.eu/rest/v2/all', true)
//3. send the connection
request.send();
//4. register a event listener. Once the data is ready, load the data
request.onload = function (){
    var data = JSON.parse(this.response);
   for(i=0;i<data.length;i++){
       console.log(data[i].name);
   }   
}