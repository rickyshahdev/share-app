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
                // date:this.state.updateDate,
                name:this.state.updateName,
                gift:this.state.updateGift,
            }
        ).then(
            (response) => {
                this.setState({
                    occasion:response.data,
                    img: '',
                    festival:'',
                    // date:'',
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
        return <div>
            <h2>Create Person</h2>
            <form onSubmit={this.createFestival}>
                <input onChange={this.changeNewImg} type="text" placeholder="Image link" /><br/>
                <input onChange={this.changeNewFestival} type="text" placeholder="festival" /><br/>
                <input onChange={this.changeNewDate} type="date"  /><br/>
                <input onChange={this.changeNewName} type="text" placeholder="name" /><br/>
                <input onChange={this.changeNewGift} type="text" placeholder="gift" /><br/>
                <input type="submit" value="Create Festival" />
            </form>
            <h2>List of Festival</h2>
    <ul>
        {
            this.state.occasion.map(
                (family, index) => {
                    return <li key={index}>

                      <img src={family.img} alt=""/>  : {family.festival}<br/>
                      {family.date}<br/>
                      {family.name}{family.gift}

                        <button value={family.id} onClick={this.deleteFestival}>DELETE</button>

                        <form id={family.id} onSubmit={this.updatePerson}>
                            <input onChange={this.changeUpdatePersonName} type="text" placeholder="name"/><br/>
                            <input onChange={this.changeUpdatePersonAge} type="number" placeholder="age"/><br/>
                            <input type="submit" value="Update Person"/>
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
