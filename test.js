let urlString = 
"https://www.example.com/login.php?a=GeeksforGeeks&b=500&c=Hello Geeks";
let paramString = urlString.split('?');
let queryString = new URLSearchParams(paramString);

function test(req,res){ (queryString.entries()) 
   console.log("Key is: " + pair[0]);
   console.log("Value is: " + pair[1]);
};
test();
