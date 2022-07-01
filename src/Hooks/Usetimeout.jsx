
import { useEffect,useState } from 'react';

const Usetimeout = () => {
    const [ready, setready] = useState(false);
    useEffect(()=>
    {
        const id=setTimeout(()=>
        {
           setready(true);
        },5000);
        return ()=>
        {
            clearTimeout(id);
        }
        
    },[])
    return ready;
}

export default Usetimeout