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
                date:this.state.newDate,
                likes:this.state.newLikes
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
    changeNewDate = (event) => {
        this.setState({
            newDate:event.target.value
        });
    }

    changeNewLikes = (event) => {
        this.setState({
            newLikes:event.target.value
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
                date:this.state.updateDate,
                likes:this.state.updateLikes
            }
        ).then(
            (response) => {
                this.setState({
                    blog:response.data,
                    img: '',
                    title:'',
                    date:'',
                    likes:''
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

    changeUpdatePost = (event) => {
        this.setState(
            {
                updatePost:event.target.value
            }
        )
    }
    changeUpdateDate= (event) => {
        this.setState(
            {
                updateDate:event.target.value
            }
        )
    }
    changeUpdateLikes= (event) => {
        this.setState(
            {
                updateLikes:event.target.value
            }
        )
    }


    render = () => {
        return <div className="container">
            <form className="form-group"onSubmit={this.createPost}>
            <textarea onChange={this.changeNewTitle}  type="text" className="form-control" placeholder="What's up??"/>
            <label htmlFor="image"></label>
            <input onChange={this.changeNewImg} type="text" placeholder="Image link" className="form-control"id="image"/><br/>
            <input onChange={this.changeNewDate}type="date"/>
            <input onChange={this.changeNewLikes}type="number" min='0'/>
            <input className="btn btn-primary btn-lg btn-block"type="submit" value="Add Post" id="button"/>
            </form>

    <div className="row">
        {
            this.state.blog.map(
                (post, index) => {
                    return <div className="col-8" key={index}>
                      <p>{post.title}</p>
                      <img className="d-flex justify-content-center"src={post.img} alt="" height="400" width="600"/>  : {post.titles}<br/>
                      {post.date}<br/>
                      <button type="button" className="btn btn-primary"onChange={this.changeNewLikes}>like</button>


        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
         Edit
        </button>
        <div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="modal-body">
              <form className="form-group"id={post.id} onSubmit={this.updateFestival}>
                  <input onChange={this.changeUpdateImg} type="text" placeholder="Image link"/><br/>
                  <input onChange={this.changeUpdateTitles} type="text" placeholder="name"/><br/>
                  <input onChange={this.changeUpdateDate} type="date" /><br/>
                  <input onChange={this.changeUpdateLikes} type="number" placeholder="likes"/><br/>
                  <input type="submit" value="Update Post"/>
              </form>
                  <button value={post.id} onClick={this.deletePost}>DELETE</button>
              </div>

            </div>
          </div>
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
