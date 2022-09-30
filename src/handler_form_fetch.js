const app=document.getElementById("app").innerHTML=`
<h1>Handler Form Fetch.</h1>
`;

const form=document.getElementById("form");
const output=document.getElementById("output"); 
form.addEventListener("submit", function(e){
    e.preventDefault();

    output.innerHTML="Sending ...";
    const name=form.querySelector("[name='name']").value;
    send({name});
})

async function send(data){
    const res=await fetch("https://pie.dev/post",{
        method:"POST",
        body:JSON.stringify(data)
    })
    if (!res.ok) return (output.innerHTML="Gagal mengirim data!.");
    const result=await res.json();
    output.innerHTML=`Nama anda : ${result.json.name}`;

    console.log(res);
}