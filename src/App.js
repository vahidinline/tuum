import './App.css';
import Form from './components/Form';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const tuumTheme = createTheme({
  palette: {
    background: {
      default: '#A7D0D8',
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={tuumTheme}>
      <CssBaseline />
      <Form />
    </ThemeProvider>
  );
}

export default App;
