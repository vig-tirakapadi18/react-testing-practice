import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";

export const MuiMode = () => {
  const theme = useTheme();
  console.log(theme.palette.mode);
  return (
    <>
      <Typography
        component="h1"
        role="asdfg">{`${theme.palette.mode} mode`}</Typography>
    </>
  );
};
