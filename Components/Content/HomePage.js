import axios from 'axios';
import React, {useState, useEffect} from 'react';
import  {Container, Row, Col, FormSelect} from 'react-bootstrap';
const HomePage = () => {
    const [company, setCompany] = useState(null)
    const [value, setValue] = useState()

    const handleSearch =async (e) =>{
        e.preventDefault();
        const resp = await fetch(`https://api.spacexdata.com/v4/company?q=${value}`);
            const data = await resp.json()
            setCompany(data)
        
    }
  
    const handleReset =(e) =>{
        setCompany()
         }
   
    useEffect(()=>{
        const fetchCompany = async() =>{
          const resp =  await fetch("https://api.spacexdata.com/v4/company")
          const data = await resp.json()
          console.log(data)
          setCompany(data)
        }
        fetchCompany()
    },[]);

  

  return (
    <Container fluid className='home showcase'>
             <Container className='mt-5'>
            <form onSubmit={handleSearch}>
        <input type='search'
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        className='form-control shadow-none'/>
        <div className='btn-group'>
        <button className='btn btn-success mt-3' type='submit'>Search</button>
        <button className='btn btn-primary mt-3 mx-2' onClick={()=>handleReset()}>Reset</button>
        </div>
            </form>
        </Container>
        <div className='overlay'>
    <article>
        <h1 className='heading text-center mt-5'>All The SpaceX Data in one place</h1>
    </article>
           
        <article>
            {!company ? 'Loading...' : <>
            <Row className='m-2 mt-5 company'>
            <Col sm={4} md={4}>
            <article>
         <h2 className='mb-3 about'>About</h2>
          <ul className='text-sm opacity-75'>
                <li>{company.name} was founded by </li>
                <li>{company.founder} in the year</li>
                <li>{company.founded}.</li>
                <li>It has {company.employees} employees,</li>
                <li>{company.vehicles} vehicles,</li>
                <li>{company.launch_sites} launch sites,</li>
                <li>and {company.test_sites} test sites and </li>
              
                <li>its valued at {company.valuation.toLocaleString()}B</li>
            </ul> 
            </article>
            </Col>
            <Col>
            <h2 className='mb-3 about'>HeadQuarters</h2>
            <ul className='text-sm opacity-75'>
                <li>{company.headquarters.address}</li>
                <li>{company.headquarters.city}</li>
                <li>{company.headquarters.state}</li>
            </ul>
        
            </Col>
            <Col>
            <article>
         <h2 className='mb-3 about'> Useful Links</h2>
            <ul className='text-sm opacity-75'>
             <li><a href={company.links.website}> Website</a></li> 
                <li><a href={company.links.flickr}> Flickr</a></li>
                <li><a href={company.links.twitter}> Twitter</a></li>
                <li><a href={company.links.elon_twitter}>Elon Twitter </a></li> 
               
            </ul>
        </article>
            </Col>
            </Row>
        <p className='mx-4 text-center mt-3'>{company.summary}</p> 
            </> 
            }
             
        </article>
        </div>
       
    </Container>
  )
}

export default HomePage