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
    pageLength: 10,
    lengthMenu: [
      [10, 20, 25, 50, 100, -1],
      [10, 20, 25, 50, 100, 'Semua'],
    ],
    ordering: true,
    initComplete: function () {
      // $('.dataTables_length, .dataTables_filter').wrapAll('<div class="dt-top"></div>');
    }
  };

  function initDataTable() {
    $('#datatable').DataTable(dataTableOptions);
  }

  // Initialize on document ready
  initDataTable();
});
