import axios from 'axios';
import React, {useState , useEffect} from 'react';
import { Container,Row, Col, FormSelect, Pagination } from 'react-bootstrap';

const Core = () => {
    const [core, setCore] = useState([]);
    const [sortValue, setSortValue] = useState()

    const fetchCores = async(start,end, increase) =>{
        const resp = await fetch(`https://api.spacexdata.com/v4/cores?_start=${start}&_end=${end}`);
        const data = await resp.json()
        setCore(data)
        console.log()
    }
    useEffect(()=>{ 
fetchCores(0.4,0)
    },[]);

    const sortOptions = ['reused_count','launches','asds_landings', 'rtls_landings' ]
    const handleSort = async(e)=>{
        let value = e.target.value
        setSortValue(value)
        const resp = await fetch(`https://api.spacexdata.com/v4/company?q_sort=${value}&_order=asc`);
        const data = await resp.json()
        setCore(data)
        setSortValue('')
    }
   


  return (
    <div>
   
      {!core ? 'Loading' :<section>
        <h2 className='heading text-center mb-5'>Cores</h2>
         
   <Container className='text-white py-5 px-4'>
        <Row className='' sm={4} md={4}>
        {core.map(({id,  status, serial, launches, last_update,  asds_landings,  rtls_landings, reuse_count})=>{
                return <Col key={id} className='articles m-3'>
                    <h5> <span className='fs-5 opacity-75'>{serial}</span></h5>
                <ul>
                    <li className='mb-1'>Reused {reuse_count} times</li>
                    <li className='mb-1'>{launches.length} launches</li>
                    <li className='mb-1'>{asds_landings} ASDS landings</li>
                    <li className='mb-1'>{rtls_landings} RTLS landings</li>
                    {status==='active'? <li className='text-success text-capitalize'>active</li>:<li className='text-danger text-capitalize'>{status}</li>}
                </ul>
                <p className='mt-5 opacity-75'>{last_update}</p>
               
                </Col>
            })}
        </Row>
       
        <Row>
            <Col>
            <h4>Sort by:</h4>
            <FormSelect value={sortValue} onChange={handleSort}>
                <option>Select</option>
                {sortOptions.map((item, index)=>{
                    return <option value={item} key={index}>{item}</option>
                })}
            </FormSelect>
            </Col>
            <Col>
            <h6>Filter by status:</h6>
            </Col>
        </Row>
        </Container>
            </section>} 
    </div>
  )
}

export default Core