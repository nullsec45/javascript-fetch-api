
const app=document.getElementById("app").innerHTML=`
<h1>Handler Promise Rejection.</h1>
`;

// JIka error
fetch("https://pie.dev/get/1").then(function(res){
    if(!res.ok) return "error 1";
    return res.json();
}).then(function(res){
    console.log(res, " error 2");
}).catch(function(){
    console.log(`Error bang!`);
})

// Jika sukses

fetch("https://pie.dev/get").then(function(res){
    if(!res.ok) return "error 1";
    return res.json();
}).then(function(res){
    console.log(res);
}).catch(function(){
    console.log(`Error bang!`);
})