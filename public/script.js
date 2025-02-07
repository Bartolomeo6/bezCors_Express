document.getElementById("formularz").addEventListener('submit', function(event){
    event.preventDefault();

    const imieLudzia = document.getElementById("imie").value;
    const adresPoczty = document.getElementById("email").value;

    const daneFormularza = {imieLudzia, adresPoczty};

    alert(imieLudzia);

    try{
        const response = fetch('/app/data', {
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(daneFormularza)
        }).then(response=>response.json()).then(data=>{
            console.log(data);
        })
    
        const dane = response.json();
        document.getElementById('odpowiedz').innerText = JSON.stringify(dane, null, 2);
    } catch(error){
        console.error("Błąd: ",error);
    }

    

    //alert('boiiiiiiiiiii');
})