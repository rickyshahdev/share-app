class Signin extends React.Component{


render = () => {
  return(
    <div className="container">
     <h4 className="text-center">Please Sign-in !! </h4>
    <div className="card bg-info">
     <div className="card-body">
    <form className="form-group" action="share.html" onSubmit={this.getPeople}>
      <input  className="form-control" required={true}type="text" placeholder="username"/><br/>
      <input  className="form-control"required={true} type="text" placeholder="password"/><br/>
      <input className="btn btn-dark"type="submit" value="Sign in"/>
    </form>
     </div>
    </div>
    </div>
  )
}

}

ReactDOM.render(
  <Signin />,
  document.querySelector('main')
);
