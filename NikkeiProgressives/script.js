  $(document).ready(function(){

    var nav-icon = document.getElementById('nav-icon');
    var UL = document.getElementById('UL');

    $('#nav-icon').click(function(){

        if (nav-icon.alt == 'on') {
            nav-icon.style.backgroundColor = 'rgb(255,255,255)';
            $('#UL').slideToggle()
            nav-icon.alt = 'off';
        } else {
            nav-icon.style.backgroundColor = 'rgb(150,150,150)';
            $('#UL').slideToggle()
            nav-icon.alt = 'on';
        }
        
    })
  })
