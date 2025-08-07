$(document).ready(function () {
  $('#co2Table').DataTable({
    ajax: 'daten.json',
    columns: [
      { data: 'Land' },
      { data: 'Unternehmen' },
      { data: 'CO2' }
    ],
    language: {
      url: '//cdn.datatables.net/plug-ins/1.13.6/i18n/de-DE.json'
    }
  });
});


