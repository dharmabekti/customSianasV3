// ===============================
// DataTable (Desktop)
// ===============================
$(document).ready(function () {
  if (window.innerWidth >= 992) {
    $('#datatable').DataTable({
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
    });
  }
});
