window.onload = function(){
    btnSubmit.onclick = function(){
        if(document.getElementById('id').value == ""){
            alert('User Id should be filled');
            return false;
        }
        if(document.getElementById('fname').value == ""){
            alert('First Name should be filled');
            return false;
        }
        if(document.getElementById('lname').value == ""){
            alert('Last Name should be filled');
            return false;
        }
        document.getElementById('frmUser').submit();
    };
    
}