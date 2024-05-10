$(document).ready(function() {
    $.ajax({
      url: 'https://ipapi.co/json/',
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        displayIPInformation(data);
      },
      error: function() {
        // Handle error if any
        console.log('Error fetching IP information');
      }
    });
  
    function displayIPInformation(data) {
      var table = $('<table>').addClass('ip-info-table');
  
      $.each(data, function(key, value) {
          var row = $('<tr>');
          row.append($('<td>').text(key.replace(/_/g, ' ')));
          row.append($('<td>').text(value));
          table.append(row);
      });
  
      $('#ipInfoContainer').append(table);
    }
  });
  