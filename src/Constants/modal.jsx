import React from "react";

import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import DialogContent from "@mui/material/DialogContent";
import { CgClose } from "react-icons/cg";



const Modal =(props) => {
  const {children, onClose, ...rest } = props;

  return (
    <Dialog
      onClose={onClose}
      maxWidth={false}
      PaperProps={{
        sx: {
          width: { xs: "100%", md: "478px", lg: "570px", xl: "624px" },
          borderRadius: "10px"
        }
      }}
      {...rest}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start"
        }}
      >
        <IconButton onClick={onClose} sx={{ py: 0, width:'100%' }}>
          <div className="w-full">
            <div>
              <CgClose className="ml-auto"/>
            </div>
          </div>
        </IconButton>
      </DialogTitle>

      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default Modal;
