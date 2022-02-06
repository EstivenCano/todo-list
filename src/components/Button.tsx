import { Button, ButtonProps } from "@mui/material";

const CustomButton = (props: ButtonProps) => {
  return (
    <Button
      {...props}
      variant='contained'
      size='large'
      sx={{
        textTransform: "none",
      }}
    />
  );
};

export default CustomButton;
