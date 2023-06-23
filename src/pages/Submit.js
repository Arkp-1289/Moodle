import React, { useState } from 'react';

function Submit() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle file submission or further processing here
        if (selectedFile) {
            console.log('Selected file:', selectedFile);
            // You can perform additional operations like uploading the file
        }
    };

    return (
        <>
        <div className='box' style={{justifyContent:'center'}}>
            <h3 style={{ justifyContent: 'center' }}>Glad to See you here</h3>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Submit</button>
            </form>
            
        </div>
        </>
        
    );
}

export default Submit;

