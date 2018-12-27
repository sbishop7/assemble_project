

  $(document).ready(function(){

    var html_str = "<p>Titles A-M</p><div class='container'><div class='row'>"

    $('#A-M').append(html_str);

    var url = "https://www.googleapis.com/books/v1/volumes?q=tech]";
        $.get(url, function(res) {
            // console.log(res.items[0]);
            for(var i=1;i<6;i++){
                var data = res.items[i]
                console.log(data.volumeInfo.title);
                html_str += '<div class="col-sm">';
                html_str += '<strong>' + res.items[i].volumeInfo.title + '</strong>';
                html_str += '</div>';
                // html_str += "<p>Words: " + res.words + "</p>";
                // html_str += "<p>Titles: "
                // for(var i=0; i<res.titles.length; i++){
                //     html_str += res.titles[i];
                //     if(res.titles[i+1] != null){
                //         html_str += ", ";
                //     }
                // }
                // html_str += "</p>";
            }   
        html_str += "</div>"
        $('#A-M').append(html_str);
    }, 'json');
    

});
