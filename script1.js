const userinformations=[];
function addUser() {


    
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const marks = document.getElementById("marks").value;
if(name==null&&address==null&&marks==0)
{
    window.alert("fields are empty");
    return;
}

const newuser={
    name:name,
    address:address,
    marks:marks

};

userinformations.push(newuser);
console.log(userinformations);
}