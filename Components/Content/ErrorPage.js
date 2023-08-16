import React from 'react'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <section className='errorPage'>
        <p>ErrorPage</p>
        <Link to='/' className='btn'>
    <button className='btn btn-primary'>Back Home</button>
        </Link>
    </section>
  )
  }

export default ErrorPage;