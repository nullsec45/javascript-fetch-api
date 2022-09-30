const app=document.getElementById("app").innerHTML=`
<h1>Upload File.</h1>
`;

const form=document.getElementById("form");
const output=document.getElementById("output"); 

form.addEventListener("submit", function(e){
    e.preventDefault();

    output.innerHTML="Sending ...";
    const image=form.querySelector("[name='image']").files[0];
    
    send(image);
})

async function send(image){
    console.log(image)
    const formData=new FormData();
    formData.append("image", image)
    const res=await fetch("https://pie.dev/post",{
        method:"POST",
        body:formData
    });
    if (!res.ok) return (output.innerHTML="Gagal mengirim data!.");
    const result=await res.json(); 
    console.log(result);
    output.innerHTML=`<img src="${result.files.image}">`;
}