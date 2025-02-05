import { useState } from 'react';
import {
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Box,
  Chip,
} from '@mui/material';
import { DevicesOther, Laptop, Smartphone, TabletMac } from '@mui/icons-material';

// Demo verisi - gerçek uygulamada API'den gelecek
const createData = (id, date, device, browser, location, duration) => ({
  id,
  date,
  device,
  browser,
  location,
  duration,
});

const rows = [
  createData(1, '2024-03-10 14:30', 'Desktop', 'Chrome', 'İstanbul, TR', '5m 30s'),
  createData(2, '2024-03-10 14:25', 'Mobile', 'Safari', 'Ankara, TR', '2m 15s'),
  createData(3, '2024-03-10 14:20', 'Tablet', 'Firefox', 'İzmir, TR', '8m 45s'),
  createData(4, '2024-03-10 14:15', 'Desktop', 'Edge', 'Bursa, TR', '3m 20s'),
  createData(5, '2024-03-10 14:10', 'Mobile', 'Chrome', 'Antalya, TR', '1m 55s'),
  createData(6, '2024-03-10 14:05', 'Desktop', 'Opera', 'Adana, TR', '4m 10s'),
  createData(7, '2024-03-10 14:00', 'Tablet', 'Safari', 'Eskişehir, TR', '6m 25s'),
  createData(8, '2024-03-10 13:55', 'Mobile', 'Chrome', 'Konya, TR', '2m 40s'),
];

const getDeviceIcon = (device) => {
  switch (device.toLowerCase()) {
    case 'desktop':
      return <Laptop />;
    case 'mobile':
      return <Smartphone />;
    case 'tablet':
      return <TabletMac />;
    default:
      return <DevicesOther />;
  }
};

const RecentVisitors = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper
      sx={{
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      }}
    >
      <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
        Son Ziyaretçiler
      </Typography>

      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="recent visitors table">
          <TableHead>
            <TableRow>
              <TableCell>Tarih</TableCell>
              <TableCell>Cihaz</TableCell>
              <TableCell>Tarayıcı</TableCell>
              <TableCell>Konum</TableCell>
              <TableCell>Süre</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.date}
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      {getDeviceIcon(row.device)}
                      <Typography variant="body2">{row.device}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={row.browser}
                      size="small"
                      sx={{
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'dark'
                            ? 'rgba(255,255,255,0.1)'
                            : 'rgba(0,0,0,0.08)',
                      }}
                    />
                  </TableCell>
                  <TableCell>{row.location}</TableCell>
                  <TableCell>{row.duration}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default RecentVisitors; 