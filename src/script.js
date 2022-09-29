
const app=document.getElementById("app").innerHTML=`
<h1>Belajar Javascript Fetch API</h1>
`;
fetch("https://pie.dev/get").then(function(res){
    if(res.ok === false){
         throw new Error("Request gagal");
    }
    return res.json();
}).then(function(res){
    console.log(res);
});

// fetch("https://pie.dev/get",{
//     method:"POST",
//     "headers" :{
//         Authentication:"Bearer asdasdsa",
//         "Content-Type":"application/json"
//     },
//     body:JSON.stringify({
//         name:"Fajar",
//         age:19
//     })
// }).then(function(res){
//     if(res.ok === false){
//          throw new Error("Request gagal");
//     }
//     return res.json();
// }).then(function(res){
//     console.log(res);
// }); 


fetch("https://pie.dev/post",{
    method:"POST",
    "headers" :{
        Authentication:"Bearer asdasdsa",
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        name:"Fajar",
        age:19
    })
}).then(function(res){
    if(res.ok === false){
         throw new Error("Request gagal");
    }
    return res.json();
}).then(function(res){
    console.log(res);
}); 