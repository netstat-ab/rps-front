// import './App.css';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles'


const Container = styled('div')({
  textAlign: 'center',
})

function App() {
  return (
    <Container>
      <Typography variant='h1'>Rock Paper Scissors</Typography>
      <Typography variant='h2'>Incredible game:^)</Typography>
    </Container>
  );
}

export default App;
