import { styled } from "@mui/material/styles";
import type { FC } from "react";
import { TextField as MuiTextField, TextFieldProps } from "@mui/material";

const CustomTextField = styled(MuiTextField)(({ theme }) => ({
  "& label.Mui-focused": {
    color: theme.palette.primary.main,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: theme.palette.primary.dark,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.primary.dark,
    },
    "&:hover fieldset": {
      borderColor: theme.palette.primary.light,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
    },
  },
}));

const TextField: FC<TextFieldProps> = ({ ...props }) => (
  <CustomTextField
    {...props}
    InputLabelProps={{
      shrink: true,
      style: {
        color: "#fff",
      },
    }}
    InputProps={{
      style: {
        color: "#fff",
      },
    }}
  />
);

export default TextField;
