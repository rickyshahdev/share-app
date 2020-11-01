class App extends React.Component {
    state = {
        blog:[]
    }

    componentDidMount = () => {
        axios.get('/blog').then(
            (response) => {
                this.setState({
                    blog:response.data
                })
            }
        )
    }

    createPost = (event) => {

        // event.preventDefault();
        axios.post(
            '/blog',
            {
                img:this.state.newImg,
                title:this.state.newTitle,
                description: this.state.newDescription
            }
        ).then(
            (response) => {
                this.setState({
                  blog:response.data
                })
            }
        )
    }

    changeNewImg = (event) => {
        this.setState({
            newImg:event.target.value
        });
    }
    changeNewTitle = (event) => {
        this.setState({
            newTitle:event.target.value
        });
    }
    changeNewDescription = (event) => {
        this.setState({
            newDescription:event.target.value
        });
    }

    deletePost = (event) => {
        axios.delete('/blog/' + event.target.value).then(
            (response) => {
                this.setState({
                    blog:response.data
                })
            }
        )

    }

    updatePost = (event) => {
        event.preventDefault();
        const id = event.target.getAttribute('id');
        axios.put(
            '/blog/' + id,
            {
                img:this.state.updateImg,
                title:this.state.updateTitle,
                description:this.state.updateDescription
            }
        ).then(
            (response) => {
                this.setState({
                    blog:response.data,
                    img: '',
                    title:'',
                    description:''
                })
            }
        )
    }

    changeUpdateImg = (event) => {
        this.setState(
            {
                updateImg:event.target.value
            }
        )
    }

    changeUpdateTitle = (event) => {
        this.setState(
            {
                updateTitle:event.target.value
            }
        )
    }
    changeUpdateDescription = (event) => {
        this.setState(
            {
                updateDescription:event.target.value
            }
        )
    }



    render = () => {
        return <div className="container">
        <div className="card bg-info" >

            <div className="card-body">
            <form className="form-group"onSubmit={this.createPost}>
              <div className="row">
              <div className="col">
              <input onChange={this.changeNewTitle}  required={true} type="text" className="form-control" placeholder="Title"/>
              </div>
              <div className = "col">
              <input onChange={this.changeNewImg} required={true} type="text" placeholder="Image link" className="form-control"id="image"/><br/>
              </div>
              </div>
              <textarea onChange={this.changeNewDescription} type="text" placeholder="" className="form-control text-area"id="desc" placeholder="Description"></textarea><br/>

              <div className="col">
              <input className="btn btn-primary btn-lg btn-block"type="submit" value="Add Post" id="button"/>
              </div>
            </form>
            </div>
          </div>
    <div className="row">
        {
            this.state.blog.map(
                (post, index) => {
                    return <div className="col-12 text-center card bg-white mt-3" key={index}>

                    <div className="dropdown text-right">
                    <button className="btn btn-secondary dropdown-toggle " type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    </button>
                       <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
                      <form className="form-group px-4 py-3"id={post.id} onSubmit={this.updatePost}>
                          <input className="form-control" required={true} onChange={this.changeUpdateTitle} type="text" placeholder="title"/><br/>
                          <textarea className="form-control text-area" onChange={this.changeUpdateDescription} type="text" placeholder="description"></textarea><br/>
                          <input className="form-control"onChange={this.changeUpdateImg} required={true} type="text" placeholder="Image link"/><br/>
                          <input type="submit" className="btn btn-primary btn-lg btn-block" value="Update Post"/>
                          <button className="btn btn-danger btn-block "value={post.id} onClick={this.deletePost}>DELETE</button>
                      </form>

                          </div>
                        </div>
                      <img className="image"src={post.img}  /><br/>
                      <h5 className="card-title font-italic">{post.title}</h5>
                      <p>{post.description}</p><br/>



                </div>
                }
            )
        }
    </div>

        </div>
    }
}

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
)
