import React, { useEffect, useState } from "react";

const Clock = () => {
    const [time, setTime] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setTime(date.toLocaleTimeString()); //
        }, 1000)
    }, []);

    return (
        <div className="clockContainer">{time}</div>
    );
};

export default Clock;