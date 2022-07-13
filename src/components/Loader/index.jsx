import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loader() {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CircularProgress />
    </Box>
  );
}
