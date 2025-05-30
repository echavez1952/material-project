
import {
  Button,
  Box,
  AppBar,
  Toolbar,
  Typography,
  Checkbox,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Stack
} from "@mui/material";


export const AppTheme = () => {
  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Header
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Stack gap={2} sx={{ p: 2 }} alignItems="flex-start">
        <Button variant="contained">
          Button
        </Button>
        <Box>
          <Checkbox defaultChecked />
        </Box>
        <Stack direction="row">
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="optionA"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="optionA"
                control={<Radio />}
                label="Option A"
              />
              <FormControlLabel
                value="optionB"
                control={<Radio />}
                label="Option B"
              />
            </RadioGroup>
          </FormControl>
        </Stack>
      </Stack> 
    </Box>
  );
}



  