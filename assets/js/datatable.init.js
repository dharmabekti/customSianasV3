// ===============================
$(document).ready(function () {
  const dataTableOptions = {
    destroy: true,
    language: {
      url: 'https://cdn.datatables.net/plug-ins/1.13.6/i18n/id.json',
    },
    pageLength: 10,
    lengthMenu: [
      [10, 20, 25, 50, 100, -1],
      [10, 20, 25, 50, 100, 'Semua'],
    ],
    ordering: true,
  };

  function initDataTable() {
    if (window.innerWidth >= 992) {
      $('#datatable').DataTable(dataTableOptions);
    }
  }

  // Initialize on document ready
  initDataTable();

  // Re-initialize on window resize to handle mobile to desktop switch
  $(window).resize(initDataTable);
});
