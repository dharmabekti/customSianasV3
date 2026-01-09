// ===================== BADGE =====================
function getBadgeStatus(s) {
  return (
    {
      'Naik Kelas': 'bg-success',
      'Tidak Naik Kelas': 'bg-warning',
      Lulus: 'bg-info',
      Stop: 'bg-danger',
    }[s] || 'bg-yellow'
  );
}

// ===============================
// Badge Class Functions
// ===============================
function getStatusClass(status) {
  switch (status) {
    case 'Aktif':
      return 'success';
    case 'Pending':
      return 'warning';
    case 'Dormant':
      return 'yellow';
    case 'Stop':
      return 'secondary';
    case 'Tidak Aktif':
      return 'danger';
    default:
      return 'secondary';
  }
}

function getBadgeClass(s) {
  return (
    {
      Aktif: 'bg-success',
      'Tidak Aktif': 'bg-danger',
      Pending: 'bg-warning',
      'Belum Diset': 'bg-secondary',
    }[s] || 'bg-secondary'
  );
}

function getStatusBadgeClass(status) {
  switch (status) {
    case 'Sudah Transfer':
    case 'Disetujui':
    case 'Selesai':
      return 'success';
    case 'Belum Ditransfer':
      return 'warning';
    case 'Menunggu':
      return 'secondary';
    case 'Butuh Verifikasi':
    case 'Diverifikasi':
      return 'info';
    case 'Ditolak':
      return 'danger';
    case '-':
      return 'dark';
    default:
      return 'yellow';
  }
}

function getFileBadgeClass(fileStatus) {
  return fileStatus === 'Ada' ? 'success' : 'secondary';
}
