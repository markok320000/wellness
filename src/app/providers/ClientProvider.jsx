'use client';

import React from 'react';

const ClientProvider = ({
                            children
                        }) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default ClientProvider;