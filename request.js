function GetToken() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            Console.log(this.responseText);

            var response = JSON.parse(this.responseText);
            document.getElementById("myPopup").innerHTML = response.refresh_token;
            PopUp();
        }
    };

    var code, client_id, client_secret; 
    
    code = document.getElementById("code").value;
    client_id = document.getElementById("clientId").value;
    client_secret = document.getElementById("clientSecret").value;
    console.log(code);
    console.log(client_id);
    console.log(client_secret);
    xhttp.open("POST", "https://accounts.zoho.com/oauth/v2/token", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("code=" + code
        + "&client_id=" + client_id
        + "&client_secret=" + client_secret
        + "&redirect_uri=https://algorithmwiz.github.io/" +
        + "&grant_type=authorization_code");
}

function CallbackHandler() {
    var queryString = window.location.search;
    console.log(queryString);
    var urlParams = new URLSearchParams(queryString);
    var code = urlParams.get("code");
    document.getElementById("code").value = value;
}

function PopUp() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}