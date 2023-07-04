import { useEffect, useState } from "react"


function CLOCK (){
    const [data, setData] = useState(new Date());
    const [edad, setEdad] = useState(0);
    const name = "Martín"
    const apellido="San José"
    
    function modi(){
        setEdad(edad+1);
    }
    useEffect(() => {
        const timerID=setInterval(()=> tick(),1000);
        return () => clearInterval(timerID);
    }, []);
    const tick = () =>{
        setData(new Date());
        setEdad((preEdad)=>preEdad+1);

    }
    return(
        <div>
            <h2>
                la hora Actual: {
                    data.toLocaleTimeString()
                    }
            </h2>
                <h3>nombre:
                    {
                        name
                    }
                </h3> 
                <h3>apellido:
                    {
                        apellido
                    }
                </h3>
                    <h2>
                        Edad:
                        {
                            edad
                            
                        }
                    </h2>
                    <button onClick={modi}>
                        inic
                    </button>


                
            
        </div>
    )
}
export default CLOCK