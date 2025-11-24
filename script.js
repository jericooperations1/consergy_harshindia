const scriptURL = "https://script.google.com/macros/s/AKfycbxoaAwaIUqKirT9TID03dDGdvOVIcnMOlknTJtSJfmtVyIVORE17Bzmlpy9pIAm35_w/exec"; 
document.getElementById("myForm").addEventListener("submit", e => {
    e.preventDefault();


    const formData = {
        name: e.target.name.value,
        phone: e.target.phone.value,
        email: e.target.email.value,
        city: e.target.city.value,
        company: e.target.company.value,
        designation: e.target.designation.value,
    };

    fetch(scriptURL, {
        method: "POST",
        mode:'no-cors',
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.text())
        .then(result => {
            alert("Data sent successfully!");
            e.target.reset();
        })
        .catch(error => alert("Error: " + error));
});