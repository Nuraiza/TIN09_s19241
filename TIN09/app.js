const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
app.use(express.json()); // for json
   app.use(express.urlencoded({ extended: true }));
var dirname = "C:/Users/test/Desktop/Tin/Labs/Assignment9/TIN09_s19241/TIN09";


app.post('/calc', function(req,res){
 var theresult = calculate(req.body.number1, req.body.number2, req.body.operation);
     console.log("Server received request!")  ;
    res.json(theresult);
   console.log(theresult) ;
})
  
app.get('/calc', function(req,res){
      res.sendFile(path.join(dirname+'/form.html'));
    
})
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
})

function calculate(n1, n2, op){
    var res;
switch(op){
    case "+" : return res= n1+n2;  break;
        case "-": return res= n1-n2; break;
        case "*": return res= n1*n2; break;
    case "/": return res=n1/n2; break;
}

}