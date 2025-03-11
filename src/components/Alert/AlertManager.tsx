import React from "react";
import { Alert, Snackbar } from "@mui/material";

let showAlertCallback: (
  message: string,
  severity: "error" | "warning" | "info" | "success"
) => void;

export const showAlert = (
  message: string,
  severity: "error" | "warning" | "info" | "success"
) => {
  if (showAlertCallback) {
    showAlertCallback(message, severity);
  }
};

export const AlertComponent = () => {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [severity, setSeverity] = React.useState<
    "error" | "warning" | "info" | "success"
  >("error");

  React.useEffect(() => {
    showAlertCallback = (
      message: string,
      severity: "error" | "warning" | "info" | "success"
    ) => {
      setMessage(message);
      setSeverity(severity);
      setOpen(true);
    };
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};
