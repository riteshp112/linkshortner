function goPython(){
            $.ajax({
              url: "MYSCRIPT.py",
             context: document.body
            }).done(function() {
             alert('finished python script');;
            });
        }
