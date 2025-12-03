// ===============================
$(document).ready(function () {
  const dataTableOptions = {
    destroy: true,
    responsive: true,
    language: {
      url: 'https://cdn.datatables.net/plug-ins/1.13.6/i18n/id.json',
      paginate: {
        previous: '<<',
        next: '>>',
      },
      info: 'Menampilkan _START_ sampai _END_ dari _TOTAL_ data',
    },
    autowidth: false,
    pageLength: 10,
    lengthMenu: [
      [10, 20, 25, 50, 100, -1],
      [10, 20, 25, 50, 100, 'Semua'],
    ],
    ordering: true,
  };

  // Daftar ID datatable yang ingin diinit
  const tableIDs = ['#datatable', '#datatable2', '#datatable3'];

  // Simpan instance masing-masing tabel
  const tableInstances = {};

  function initAllDataTables() {
    tableIDs.forEach(id => {
      if ($.fn.DataTable.isDataTable(id)) {
        $(id).DataTable().destroy();
      }

      const dt = $(id).DataTable(dataTableOptions);

      // Full width fix
      $(id).css('width', '100%');
      $(id).parent().css('width', '100%');

      tableInstances[id] = dt;
    });
  }

  // Init saat halaman siap
  initAllDataTables();

  // Update responsif jika layar berubah
  $(window).on('resize orientationchange', function () {
    Object.values(tableInstances).forEach(dt => {
      dt.responsive.recalc();
      dt.columns.adjust().draw(false);
    });
  });
});
