import React from 'react'
import certificatesItems from '../../data/certificates.json';

export const CertificateItem = () => {
    return (
        <>
            {
                certificatesItems.map(item => (
                    <div className="resume-item">
                        
                        <h6 className="fw-bold">{item.Title} ({item.Year})</h6>
                        <p ><em>{item.Place}</em></p>
                    </div>
                ))
            }
        </>
    )
}
