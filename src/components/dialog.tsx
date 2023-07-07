'use client'
import { isYearRecord } from "@/types/validate";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import React, { useState } from "react";

type DataMigrateDialogProps = {
    modalOpen: boolean,
    handleOpen: () => void,
    handleClose: () => void,
    current_data: YearRecord,
    overwriteRecordFunc: (new_record: YearRecord) => void
}

export const DataMigrateDialog: React.FC<DataMigrateDialogProps> = ({modalOpen, handleOpen, handleClose, current_data, overwriteRecordFunc}) => {
    const [exportImport, setExportImport] = useState('');
    const [sixDigitCode, setSixDigitCode] = useState('');

    // Function to handle exporting data
    const handleExport = async () => {
        try {
            const response = await fetch('https://kv.peterxcli.workers.dev', {
                method: 'Post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data: JSON.stringify(current_data) }),  // Replace records with your actual data
            });

            const data = await response.json();
            setSixDigitCode(data.key);
            alert('Data exported. Enter Code on another device.\nCode: ' + data.key + '. \nThis code will only be valid for 2 hours.');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // Function to handle importing data
    const handleImport = async (key: string) => {
        try {
            const response = await fetch(`https://kv.peterxcli.workers.dev/${key}`);
            const data = await response.json();
            const new_record = JSON.parse(data.data);
            if (isYearRecord(new_record)) {
                overwriteRecordFunc(new_record);
                alert('Data imported.');
            } else {
                alert('the data fetch from the key has broken.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('The six-digit key does not exist or has expired.');
        }
    };
    return (
        <>
            <Dialog open={modalOpen} onClose={handleClose}>
                <DialogTitle>Choose an action</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Choose to export or import your data.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => { setExportImport('export'); handleExport(); handleClose(); }}>Export</Button>
                    <Button onClick={() => { setExportImport('import'); handleOpen(); }}>Import</Button>
                </DialogActions>
            </Dialog>

            {exportImport === 'import' &&
                <Dialog open={modalOpen} onClose={handleClose}>
                    <DialogTitle>Enter your six-digit code</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Six-digit code"
                            type="text"
                            onChange={(e) => setSixDigitCode(e.target.value)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => { handleImport(sixDigitCode); handleClose(); }}>Import</Button>
                    </DialogActions>
                </Dialog>
            }
        </>
    );
}