$(document).ready(function() {
    $.ajax({
      url: 'languages.json',
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        constructTable(data);
      },
      error: function() {
        console.log('Error fetching data:', error);
      }
    });
  
    function constructTable(data) {
      var table = $('<table>').addClass('table');
  
      var headerRow = $('<tr>');
      headerRow.append($('<th>').text('Code'));
      headerRow.append($('<th>').text('Name'));
      table.append(headerRow);
  
      $.each(data, function(index, language) {
        var row = $('<tr>');
        row.append($('<td>').text(language.code));
        row.append($('<td>').text(language.name));
        table.append(row);
      });
  
      $('#tableContainer').append(table);
    }
  });
  