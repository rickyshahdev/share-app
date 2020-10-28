class App extends React.Component {
    state = {
        occasion:[]
    }

    componentDidMount = () => {
        axios.get('/festival').then(
            (response) => {
                this.setState({
                    occasion:response.data
                })
            }
        )
    }

    createFestival = (event) => {
      console.log(this.state);
        event.preventDefault();
        axios.post(
            '/festival',
            {
                img:this.state.newImg,
                festival:this.state.newFestival,
                date:this.state.newDate,
                name:this.state.newName,
                gift:this.state.newGift
            }
        ).then(
            (response) => {
                this.setState({
                  occasion:response.data
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
            newFestival:event.target.value
        });
    }
    changeNewDate = (event) => {
        this.setState({
            newDate:event.target.value
        });
    }

    changeNewName = (event) => {
        this.setState({
            newName:event.target.value
        });
    }
    changeNewGift = (event) => {
        this.setState({
            newGift:event.target.value
        });
    }

    deleteFestival = (event) => {
        axios.delete('/festival/' + event.target.value).then(
            (response) => {
                this.setState({
                    occasion:response.data
                })
            }
        )

    }

    updateFestival = (event) => {
        event.preventDefault();
        const id = event.target.getAttribute('id');
        axios.put(
            '/festival/' + id,
            {
                img:this.state.updateImg,
                festival:this.state.updateFestival,
                date:this.state.updateDate,
                name:this.state.updateName,
                gift:this.state.updateGift,
            }
        ).then(
            (response) => {
                this.setState({
                    occasion:response.data,
                    img: '',
                    festival:'',
                    date:'',
                    name:'',
                    gift:''
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

    changeUpdateFestival = (event) => {
        this.setState(
            {
                updateFestival:event.target.value
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
    changeUpdateName= (event) => {
        this.setState(
            {
                updateName:event.target.value
            }
        )
    }
    changeUpdateGift= (event) => {
        this.setState(
            {
                updateGift:event.target.value
            }
        )
    }

    render = () => {
        return <div className="container">

            <h2>Create Person</h2>

<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Create festival
</button>


<div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Create Festivals</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <form onSubmit={this.createFestival}>
      <div className="form-group">
      <label htmlFor="image">Image</label>
          <input onChange={this.changeNewImg} required="true" type="text" placeholder="Image link" className="form-control"id="image"/>
      <label htmlFor="festival">Festival</label>
          <input onChange={this.changeNewFestival} required="true"type="text" placeholder="festival"className="form-control"id="festival"/>
      <label htmlFor="festival">Date</label>
          <input onChange={this.changeNewDate} type="date"className="form-control"id="date"  />
      <label htmlFor="name">Name</label>
          <input onChange={this.changeNewName} type="text" placeholder="name"className="form-control"id="name" />
            <label htmlFor="gift">Gift</label>
          <input onChange={this.changeNewGift} type="text" placeholder="gift" className="form-control"id="gift"/><br/>
          <input className="btn btn-primary"type="submit" value="Create Festival" />
          </div>
      </form>
      </div>
    </div>
  </div>
</div>

            <h2>List of Festival</h2>
    <ul>
        {
            this.state.occasion.map(
                (celebrate, index) => {
                    return <li key={index}>

                      <img src={celebrate.img} alt=""/>  : {celebrate.festival}<br/>
                      {celebrate.date}<br/>
                      {celebrate.name}{celebrate.gift}

                        <button value={celebrate.id} onClick={this.deleteFestival}>DELETE</button>

                        <form id={celebrate.id} onSubmit={this.updateFestival}>
                            <input onChange={this.changeUpdateImg} type="text" placeholder="Image link"/><br/>
                            <input onChange={this.changeUpdateFestival} type="text" placeholder="name"/><br/>
                            <input onChange={this.changeUpdateDate} type="date" /><br/>
                            <input onChange={this.changeUpdateName} type="text" placeholder="person name"/><br/>
                            <input onChange={this.changeUpdateGift} type="text" placeholder="gift"/><br/>
                            <input type="submit" value="Update Event"/>
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
