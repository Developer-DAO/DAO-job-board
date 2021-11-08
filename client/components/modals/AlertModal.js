
export default function AlertModal({ removeAlert, alerts}) {

  return (
    <div>
     {alerts !== null &&
     alerts.length > 0 &&
     alerts.map(alert =>(

      <div key={alert.id}>
        <div className='backdrop' onClick={removeAlert}></div>

        <div className='alert'>
          <div className={`alert-${alert.alertType}`}>
           <header>{alert.msg}</header>
           <button onClick={removeAlert}>Okay</button>
         </div>
        </div>

      </div>
    ))}
  </div>
  )
};
