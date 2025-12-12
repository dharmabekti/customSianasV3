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
