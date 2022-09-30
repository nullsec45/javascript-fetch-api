const app=document.getElementById("app").innerHTML=`
<h1>Async Await Promise.</h1>
`;

async function dataFetch(){
    const res=await fetch("https://pie.dev/get/1");
    try{
        const json=await res.json();
        console.log(json);
    }catch{
        console.log("Gagal parsing anjing")
    }
}

dataFetch();