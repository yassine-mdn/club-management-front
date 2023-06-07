import { useEffect, useState } from 'react';

const useCountdown = (targetDate) => {
    const countDownDate = new Date(targetDate).getTime();

    const [countDown, setCountDown] = useState(
        countDownDate - new Date().getTime()
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown(countDownDate - new Date().getTime());
        }, 1000);

        return () => clearInterval(interval);
    }, [countDownDate]);


    return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {

    function minTwoDigits(n) {
        return (n < 10 ? '0' : '') + n;
    }

    // calculate time left
    const days = minTwoDigits(Math.floor(countDown / (1000 * 60 * 60 * 24)));
    const hours = minTwoDigits( Math.floor(
        (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    ));
    const minutes = minTwoDigits(Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60)));
    const seconds = minTwoDigits(Math.floor((countDown % (1000 * 60)) / 1000));

    return [days, hours, minutes, seconds];
};

export { useCountdown };