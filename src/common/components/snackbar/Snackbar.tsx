import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, {AlertColor, AlertProps} from '@mui/material/Alert';
import {useFormStore} from "../../../store/formStore";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars(props: {severity: AlertColor, text: string}) {
    const [open, setOpen] = React.useState(true);
    const setStatus = useFormStore(state => state.setStatus)

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
        setStatus(null)
    };

    return (
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={props.severity} sx={ props.severity !== 'error' ? {backgroundColor: '#a75fe7'} : {}}>
                {props.text}
            </Alert>
        </Snackbar>
        /* <Alert severity="error">This is an error message!</Alert>
         <Alert severity="warning">This is a warning message!</Alert>
         <Alert severity="info">This is an information message!</Alert>*/
    );
}
