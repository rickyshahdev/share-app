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
      console.log(this.state);
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
    changeNewFestival = (event) => {
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
            <form onSubmit={this.createPost}>
            <div className="row">
             <div className="col-8">
             <label htmlFor="festival">Description</label>
                 <input onChange={this.changeNewTitle}  type="text" className="form-control"id="festival"/>
                 </div>
                <div className="col-3">
                <label htmlFor="image">Image</label>
                    <input onChange={this.changeNewImg} type="text" placeholder="Image link" className="form-control"id="image"/>
                </div>
                </div>
                <div className="row">
                  <div className="col-4">
                <input onChange={this.changeNewDate} type="date"id="date"  />
                   </div>
                   <div className="col-4">
            <label htmlFor="name">likes</label>
                <input onChange={this.changeNewLikes} type="number" placeholder="likes"id="name" />
                 </div>
                <input className="btn btn-primary"type="submit" value="Add Post" />
                </div>
            </form>

            <h2>List of Festival</h2>
    <ul>
        {
            this.state.blog.map(
                (post, index) => {
                    return <li key={index}>

                      <img src={post.img} alt=""/>  : {post.titles}<br/>
                      {post.date}<br/>
                      {post.likes}

                        <button value={post.id} onClick={this.deleteFestival}>DELETE</button>

                        <form id={post.id} onSubmit={this.updateFestival}>
                            <input onChange={this.changeUpdateImg} type="text" placeholder="Image link"/><br/>
                            <input onChange={this.changeUpdateTitles} type="text" placeholder="name"/><br/>
                            <input onChange={this.changeUpdateDate} type="date" /><br/>
                            <input onChange={this.changeUpdateLikes} type="number" placeholder="person name"/><br/>
                            <input type="submit" value="Update Post"/>
                        </form>
                    </li>
                }
            )
        }
    </ul>

        </div>
    }
}

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
)
