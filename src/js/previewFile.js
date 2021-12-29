function previewFile(input) {
    var file = $("input[type=file]").get(0).files[0];

    if(file){
        var reader = new FileReader();

        reader.onload = function(){
            $("#preview").attr("src", reader.result);
            $("#preview").addClass('show');
            console.log($('#preview').attr('src'));
        }

        reader.readAsDataURL(file);

        
    }
}