import {
  Button,
  Box,
  AppBar,
  Toolbar,
  Typography,
  Checkbox,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Stack
} from "@mui/material";
import { green, purple } from "./colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: green[300],
      dark: green[500]
    },
    secondary: {
      main: purple[600],
      dark: purple[800]
    },
    primaryLight: {
      main: green[50],
      contrastText: "#616161"
    }
  }
});

export const AppTheme = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primaryLight">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Primary Light
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Stack gap={2} sx={{ p: 2 }} alignItems="flex-start">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Seondary
        </Button>
        <Box>
          <Checkbox defaultChecked />
          <Checkbox color="secondary" defaultChecked />
        </Box>
        <Stack direction="row">
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Primary</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel color="secondary" id="demo-radio-buttons-group-label">
              Secondary
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio color="secondary" />}
                label="Female"
              />
              <FormControlLabel
                value="male"
                control={<Radio color="secondary" />}
                label="Male"
              />
              <FormControlLabel
                value="other"
                control={<Radio color="secondary" />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}


