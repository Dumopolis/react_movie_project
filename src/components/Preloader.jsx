import Spinner from 'react-bootstrap/Spinner';

function Preloader() {
  return (
    <div className='preloader'>
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </div>
  );
}

export default Preloader;