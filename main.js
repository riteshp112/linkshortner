function goPython(){
            $.ajax({
             source:"my.py",
             context:document.body
            }).done(function() {
             alert('finished python script');
            });
        }
