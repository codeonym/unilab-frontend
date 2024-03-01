
"use client"
import React from 'react';
import { useSession} from "next-auth/react";

function Test(props) {
    const {data} = useSession()
    return (
        <div>
            welcome {JSON.stringify(data)}
        </div>
    );
}

export default Test;