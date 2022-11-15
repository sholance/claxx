import * as React from "react";
import { Textarea } from "baseui/textarea";
import { SIZE } from "baseui/input";
import { Block } from "baseui/block";
import { FileUploader } from 'baseui/file-uploader';
import { Web3Storage } from 'web3.storage'
const CryptoJS = require("crypto-js");


export default function NewClass() {
    const [value, setValue] = React.useState("Hello");
    const [isUploading, setIsUploading] = React.useState(false);
    const timeoutId = React.useRef(null);
    const storageClient = new Web3Storage({ token: process.env.REACT_APP_WEB3_STORAGE_TOKEN })

    function reset() {
        setIsUploading(false);
        clearTimeout(timeoutId.current);
    }
    // startProgress is only illustrative. Use the progress info returned
    // from your upload endpoint. This example shows how the file-uploader operates
    // if there is no progress info available.
    function startProgress() {
        setIsUploading(true);
        timeoutId.current = setTimeout(reset, 4000);
    }
    return (
        <Block>
            <Textarea
                value={value}
                onChange={e => setValue(e.target.value)}
                size={SIZE.large}
                placeholder="Enter Students Names"
                clearable
                clearOnEscape
            />
            <FileUploader
                onCancel={reset}
                onDrop={(acceptedFiles, rejectedFiles) => {
                    // handle file upload...
                    startProgress();
                }}
                progressMessage={
                    isUploading ? `Uploading... hang tight.` : ''
                }
            />
        </Block>
    );
}