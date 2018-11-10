import React from 'react'
import Link from 'gatsby-link'
import Layout from '../layouts/index'

// Icons
import { IconContext } from 'react-icons';
import { MdChevronRight } from 'react-icons/md';

const IndexPage = () => {
  return (
    <Layout>
      <div className='section blog px-0 h-100 shadow-light-hover shadow-right'>
        <Link to='/blog' className='section-link no-underline d-block h-100 position-relative d-flex align-items-center'>
            <div className='overlay h-100 w-100 position-absolute'></div>

            <div className='content ml-auto mr-5 text-center position-relative'>
                <h2 className='name'>Blog</h2>
                <p className='description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, repudiandae molestiae, obcaecati, rem provident quis quae veritatis ut enim labore ipsum voluptatum sapiente totam alias officiis similique voluptas culpa error.</p>
                <span className="section-icon material-icons text-center">
                  <IconContext.Provider value={{ className: 'icon', style: { verticalAlign: 'text-bottom' }}}>
                    <MdChevronRight/>
                  </IconContext.Provider>
                </span>
            </div>
        </Link>
      </div>
  

      <div className='section portfolio px-0 h-100 shadow-light-hover shadow-left'>
        <Link to='/about' className='section-link no-underline d-block h-100 position-relative d-flex align-items-center'>
            <div className='overlay h-100 w-100 position-absolute'></div>

            <div className='content mr-auto ml-5 text-center position-relative'>
                <h2 className='name'>Portfolio</h2>
                <p className='description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, repudiandae molestiae, obcaecati, rem provident quis quae veritatis ut enim labore ipsum voluptatum sapiente totam alias officiis similique voluptas culpa error.</p>
                <span className="section-icon material-icons text-center">
                  <IconContext.Provider value={{ className: 'icon', style: { verticalAlign: 'text-bottom' }}}>
                    <MdChevronRight/>
                  </IconContext.Provider>
                </span>
            </div>
        </Link>
      </div>
    </Layout>
  )
}

export default IndexPage
