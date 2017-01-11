// on cache tout


  $(function() {
    $('#dataTile_3').click(function() {
      $('col-theme').first().show('slow', function showNextOne() {
        $(this).next('col-theme').show('slow', showNextOne);
      });    
    });
    $('#dataTile_4').click(function() {
      $('col-theme').first().hide('slow', function hideNextOne() {
        $(this).next('col-theme').hide('slow', hideNextOne);
      });    
    });
  });