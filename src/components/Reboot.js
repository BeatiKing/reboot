import { useState, useEffect } from "react";
import styles from './reboot.module.css';

function Reboot(){
    const [h1Text, setH1Text] = useState('wait...');
    const [btnRebootDisabled, setBtnRebootDisabled] = useState(false);

    useEffect(() => {
        const xhr = new XMLHttpRequest();
        xhr.open("get", 'https://jsonplaceholder.typicode.com/users/1');
        xhr.addEventListener('readystatechange', () => {
            if (xhr.readyState === 4){
                if(xhr.response && xhr.response.length >= 1){
                    setBtnRebootDisabled(true);
                    setH1Text('Internet Access');
                }else{
                    setH1Text('No Internet Access');
                    setBtnRebootDisabled(false);
                }
                // console.log(xhr.response.length);
            }
        });
        xhr.send();
    }, []);

    function handleBtnRebootClick(){
        // window.location = 'http://admin:admin@192.168.1.1/rebootinfo.cgi';
        console.log('Reboot clicked');
        setTimeout(() => window.history.back(), 5000);
    }


    return(
        <div className={styles.mainContainer}>
            <h1 className={styles.h1InternetStatus}>Status: {h1Text}</h1>
            <button className={styles.btnReset} onClick={handleBtnRebootClick} disabled={btnRebootDisabled}>Reboot</button>
            {/* <iframe src="http://admin:admin@192.168.1.1/rebootinfo.cgi" width=0 height=0></iframe> */}
        </div>
    );
}

export default Reboot;