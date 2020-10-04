import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';


export default function FormDialog(props) {
    return (
        <div>
            <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
                <DialogContent>
                <Typography variant="body2" gutterBottom>
                    {props.messageContent}
                </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose}>
                        Cancelar
                    </Button>
                    <Button onClick={props.handleConfirm}>
                        Confirmar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
  );
}
