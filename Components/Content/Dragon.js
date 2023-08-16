import React, {useState , useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {FaArrowRight} from 'react-icons/fa'

const Dragon = () => {
const [dragons, setDragons] =useState([])


    const fetchDragons =async() =>{
        const resp = await fetch("https://api.spacexdata.com/v4/dragons");
        const data = await resp.json();
        setDragons(data)

    }
    useEffect(()=>{
        fetchDragons()
    },[])
  return (
    <div>
        {!dragons ? 'Loading' :<section>
        <h2 className='heading text-center mb-5'>Dragons</h2>
         
   <Container className='text-white py-5 px-4'>
        <Row className='m-3 ' sm={3} >
        {dragons.map(({id,  name, flickr_images,description})=>{
                return <Col key={id} className='articles m-3'>
                        <img src={flickr_images[0]} alt={name} height={500} className='w-100' />
                        <h3 className='text-white pt-4 mb-4'>{name}</h3>
                        <p className='text-white opacity-75'>{`${description.substring(0,180)}...`}</p>
                        <Link to='' className='btn btn-success'>Read More <FaArrowRight/></Link>
               
                </Col>
            })}
        </Row>
        <article>
           
        </article>
        </Container>
            </section>}
    </div>
  )
}

export default Dragon