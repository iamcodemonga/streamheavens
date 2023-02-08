import React from 'react'
import BeatLoader from 'react-spinners/BeatLoader'

const PageLoader = ({ loading }) => {

  return (
    <section className='w-100 vh-100 d-flex justify-content-center align-items-center'>
        <BeatLoader size={15} color={'#ff006e'} loading={loading} aria-label="Loading Spinner" data-testid="loader" />
    </section>
  )
}

export default PageLoader