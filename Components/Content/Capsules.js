import React, {useState , useEffect} from 'react';
import { Row , Col, Container, Card} from 'react-bootstrap';


const Capsules = () => {
    const [capsules, setCapsules] = useState([]);

const fetchCaps = async() =>{
    const resp = await fetch("https://api.spacexdata.com/v4/capsules");
    const data = await resp.json()
    setCapsules(data)
    console.log()
}


useEffect(()=>{
    setTimeout(()=>{
fetchCaps()
    },2000)


},[])

  return (
   <>
   {!capsules ? 'Loading...' : <>
   
   <Container className='text-white py-5'>
        <h2 className='heading text-center mb-5'>Capsules</h2>
        <Row  sm={4} md={4}>
        {capsules.map(({id, type, status, serial, launches, last_update, land_landscape, water_landings, land_landings, reuse_count})=>{
                return <Col key={id} className='articles m-3'>
                    <h5>{type}, <span className='fs-5 opacity-75'>{serial}</span></h5>
                <ul>
                    <li className='mb-1'>{launches.length} launches</li>
                    <li className='mb-1'>{land_landings} land landings</li>
                    <li className='mb-1'>{water_landings} water landings</li>
                    <li className='mb-1'>Reused {reuse_count} times</li>
                    {status==='active'? <li className='text-success'>active</li>:<li className='text-danger'>Retired</li>}
                </ul>
                <p>{last_update}</p>
               
                </Col>
            })}
        </Row>
        <article>
           
        </article>
        </Container>
   </>}
   </>
  )
}

export default Capsules