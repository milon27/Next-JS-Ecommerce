import { useEffect } from 'react';

const useScript = (url) => {
    
    useEffect(() => {
        const script = document.createElement('script');
        
        //<body>
//<script src="url" aync>
        //</body>

        script.src = url;
        script.async = true;

        document.body.appendChild(script);

        console.log("loading script , ", Math.random());

        return () => {
            document.body.removeChild(script);
        }

    }, [url]);
    
};

export default useScript;