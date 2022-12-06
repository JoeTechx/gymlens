import { Link } from 'react-router-dom'; 

import './NotFound.css'

const NotFound = () => {
  return (
    <section>
      <div className='container notfound__container'>
        <p>I don't understand where you are going</p>
        <h2>This Page is not Found</h2>
          <Link to="/" className="btn">Go Home!!</Link>
      </div>
    </section>
  )
}

export default NotFound