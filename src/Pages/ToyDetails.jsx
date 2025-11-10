import React, { use } from 'react';
import { useParams } from 'react-router';

const ToyDetails = () => {
    const {id} = useParams();
    return (
        <div>
            {id}
        </div>
    );
};

export default ToyDetails;