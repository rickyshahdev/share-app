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

        event.preventDefault();
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

            <form className="form-group"onSubmit={this.createPost}>
            <div className="row">
            <div className="col">
            <input onChange={this.changeNewTitle}  type="text" className="form-control" placeholder="Title"/>
            </div>
            <div className = "col">
            <input onChange={this.changeNewImg} type="text" placeholder="Image link" className="form-control"id="image"/><br/>
            </div>
            </div>
            <label htmlFor="desc">Description</label>
            <textarea onChange={this.changeNewDescription} type="text" placeholder="" className="form-control"id="desc"></textarea><br/>

            <div className="col">
            <input className="btn btn-primary btn-lg btn-block"type="submit" value="Add Post" id="button"/>
            </div>

            </form>

    <div className="row">
        {
            this.state.blog.map(
                (post, index) => {
                    return <div className="col-12 text-center" key={index}>
                      <p>{post.title}</p>
                      <img src={post.img} height="500" width="600"/><br/>
                      {post.description}<br/>


            <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Edit
 </button>
              <form className="form-group"id={post.id} onSubmit={this.updatePost}>
                  <input className="form-control" onChange={this.changeUpdateTitle} type="text" placeholder="title"/><br/>
                  <input className="form-control" onChange={this.changeUpdateDescription} type="text" placeholder="description"/><br/>
                  <input className="form-control"onChange={this.changeUpdateImg} type="text" placeholder="Image link"/><br/>
                  <input type="submit" className="btn btn-primary btn-lg btn-block" value="Update Post"/>
              </form>
                  <button className="btn btn-danger btn-lg btn-block"value={post.id} onClick={this.deletePost}>DELETE</button>
                </div>
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
