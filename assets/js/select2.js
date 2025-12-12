document.addEventListener('DOMContentLoaded', function () {
  // Cek apakah Select2 tersedia
  if (typeof $.fn.select2 === 'undefined') {
    console.warn('Select2 tidak ditemukan. Abaikan jika memang tidak digunakan di halaman ini.');
    return; // hentikan script agar tidak error
  }

  // Select2 untuk elemen di halaman biasa (bukan modal)
  $('.select2:not(.inside-modal)').select2({
    width: '100%',
  });

  // Event ketika modal Bootstrap ditampilkan
  $('.modal').on('shown.bs.modal', function () {
    const modal = $(this);

    // Tambahkan class 'inside-modal' agar tidak diinisialisasi ganda
    modal.find('.select2').addClass('inside-modal');

    // Terapkan Select2 untuk select di dalam modal
    modal.find('.select2').each(function () {
      $(this).select2({
        width: '100%',
        dropdownParent: modal.length ? modal : $(document.body),
      });
    });
  });
});
