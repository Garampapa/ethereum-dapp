import './App.css';

function App() {
  return (
    <div div className="container">      
        <div className="container text-center" style={{width: 200}}>
          Balance:20 Ether
        </div>
  
         <div className="container text-center" align-middle>
           Account:00x00000000000000000000000
         </div>
      <div className="container d-flex justify-content-center">
      <button type="button" className="btn btn-primary mx-1">Connect to metamask</button>
      <button type="button" className="btn btn-secondary mx-1">Transfer</button>
      <button type="button" className="btn btn-success mx-1">Withdraw</button>
      </div>
    
    </div>
  );
}

export default App;
