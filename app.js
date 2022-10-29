// let formKuNode = document.getElementById(formKu)

// let fnameNode = document.getElementById("fname");

// let lnameNode = document.getElementById("lname");

// let emailNode = document.getElementById("email");

// let passwordNode = document.getElementById("password");

// let vpasswordNode = document.getElementById("vpassword");

// const diProses = (e) => {

//     // ==== Untuk Validasi Username ==== //
//     let fnameError="";

//     if (fnameNode.value.trim() === ""){
//         fnameError ="Nama Harus Di Isi !"
//     }
//     else if ()
// }

function validasi (){
    var x = document.forms["formKu"]["fname"].value;
    if (x == null || x == ""){
        alert("Nama Depan Tidak Boleh Kosong !");
        return false;
    }

    var x = document.forms["formKu"]["lname"].value;
    if (x == null || x == "") {
        alert("Nama Belakang Tidak Boleh Kosong !")
        return false;
    }

    var x = document.forms["formKu"]["email"].value;
    if (x == null || x == "") {
        alert("Email Tidak Boleh Kosong !")
        return false;
    }

    var x = document.forms["formKu"]["password"].value;
    if (x == null || x == "") {
        alert("Password Tidak Boleh Kosong !")
        return false;
    }

    var x = document.forms ["formKu"]["vpassword"].value
    if (x == null || x == "") {
        alert("Password Tidak Boleh Kosong !")
    }
}

