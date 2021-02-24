class Login extends React.Component{


render = () => {
  return(
    <div className="container">
     <h4 className="text-center">Please Register here</h4>
    <div className="card bg-info">
     <div className="card-body">
    <form className="form-group" action="index.html">
      <input  className="form-control" required={true}type="text" placeholder="username"/><br/>
      <input  className="form-control"required={true} type="password" placeholder="password"/><br/>
      <input className="btn btn-dark"type="submit" value="Sign up"/>
    </form>

     </div>
    </div>
    <h4>Back to <a href="index.html">Sign-in</a></h4>
    </div>
  )
}

}

ReactDOM.render(
  <Login />,
  document.querySelector('main')
);
