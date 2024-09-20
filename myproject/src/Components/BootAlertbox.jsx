
function BootAlertbox() {
  const handleAlert = () => {
    alert('Alert closed!');
  };

  return (
    <>
      <div className="text-center text-primary mt-3 h2">BootAlertbox</div>

      <div className='alert alert-primary ms-2 me-2 alert-dismissible show fade'>
        <h4 className="alert-heading">HTML</h4>
        <p>HTML is a structured language  
          <button 
            className="btn-close" 
            data-bs-dismiss="alert" 
            onClick={handleAlert}
          ></button>
        </p>
        <a href="" className="alert-link">Read More...</a>
      </div>
    </>
  );
}

export default BootAlertbox;
