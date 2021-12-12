window.onload = function(){
    btnSubmit.onclick = function(){
        if(document.getElementById('id').value == ""){
            alert('Product Id should be filled');
            return false;
        }
        if(document.getElementById('name').value == ""){
            alert('Name should be filled');
            return false;
        }
        if(document.getElementById('price').value == ""){
            alert('Price should be filled');
            return false;
        }
        if(document.getElementById('description').value == ""){
            alert('Description should be filled');
            return false;
        }
        document.getElementById('frmProduct').submit();
    };
    
}