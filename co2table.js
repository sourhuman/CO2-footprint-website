$(document).ready(function () {
  $('#co2Table').DataTable({
    ajax: 'daten.json',
    columns: [
      { data: 'Land',                  render: $.fn.dataTable.render.text() },
      { data: 'Unternehmen',           render: $.fn.dataTable.render.text() },
      { data: 'CO2-Emissionen (t)',    render: $.fn.dataTable.render.text() }
    ],
    responsive: true, 
    language: {
      url: '//cdn.datatables.net/plug-ins/1.13.6/i18n/de-DE.json'
    }
  });
});


