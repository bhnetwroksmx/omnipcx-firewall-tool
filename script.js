
function generarMatriz() {

    let sipPort = document.getElementById("sip").value;
    let reglas = [];

    reglas.push(["OmniPCX","SBC AudioCodes","SIP","TCP/UDP",sipPort]);
    reglas.push(["OmniPCX","SBC AudioCodes","RTP","UDP","10000-20000"]);

    if(document.getElementById("ipdesktop").checked){
        reglas.push(["IP Desktop Softphone","OmniPCX","SIP","TCP",sipPort]);
        reglas.push(["IP Desktop Softphone","OmniPCX","RTP","UDP","10000-20000"]);
        reglas.push(["IP Desktop Softphone","OmniPCX","HTTPS","TCP","443"]);
    }

    if(document.getElementById("sipphones").checked){
        reglas.push(["Teléfono SIP","OmniPCX","SIP","UDP/TCP",sipPort]);
        reglas.push(["Teléfono SIP","OmniPCX","RTP","UDP","10000-20000"]);
        reglas.push(["Teléfono SIP","DHCP","DHCP","UDP","67-68"]);
        reglas.push(["Teléfono SIP","DNS","DNS","UDP/TCP","53"]);
    }

    if(document.getElementById("softphones").checked){
        reglas.push(["Softphone SIP","OmniPCX","SIP","UDP/TCP",sipPort]);
        reglas.push(["Softphone SIP","OmniPCX","RTP","UDP","10000-20000"]);
        reglas.push(["Softphone SIP","DNS","DNS","UDP/TCP","53"]);
    }

    if(document.getElementById("teams").checked){
        reglas.push(["Teams","SBC AudioCodes","SIP TLS","TCP","5061"]);
        reglas.push(["Teams","SBC AudioCodes","Media","UDP","3478-3481"]);
    }

    let html = `<table class="table table-bordered">
    <thead>
    <tr><th>Origen</th><th>Destino</th><th>Servicio</th><th>Protocolo</th><th>Puerto</th></tr>
    </thead><tbody>`;

    reglas.forEach(r=>{
        html += `<tr>
        <td>${r[0]}</td>
        <td>${r[1]}</td>
        <td>${r[2]}</td>
        <td>${r[3]}</td>
        <td>${r[4]}</td>
        </tr>`;
    });

    html += "</tbody></table>";
    document.getElementById("resultado").innerHTML = html;
}
