import React from 'react'
import certificatesItems from '../../data/certificates.json';

export const CertificateItem = () => {
    return (
        <>
            {
                certificatesItems.map(item => (
                    <div className="resume-item">
                        <p ><em>{item.Title} ({item.Year}), {item.Place}</em></p>
                    </div>
                ))
            }
        </>
    )
}
