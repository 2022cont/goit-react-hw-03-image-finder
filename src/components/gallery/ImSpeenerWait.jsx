import React from 'react';
import BeatLoader from "react-spinners/BeatLoader";

export default function ImSpeenerWait() {
    return (
        <div>
            <BeatLoader
                size={10}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
            <h1>Please wait...</h1>
        </div>

    )
}