function goPython(){
            $.ajax({
              url: "my.py",
             context: document.body
            }).done(function() {
             alert('finished python script');
            });
        }
