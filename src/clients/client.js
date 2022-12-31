const { Component } = require("react");

class Client extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            response: []
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => this.setState({
                response: data
            }));
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    
    componentDidCatch(error, info) {
        console.log(error)
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        const { response } = this.state;
        const list = response.map((value, idx) => (
            (idx % 23) === 0 ? 
                <div key={value.id} id={value.id}>
                <h4>{value.title} :: {value.body}</h4>
                </div> : null
        ));
        return (
            <div>
                It is {this.state.date.toLocaleTimeString()}
                {list}
            </div>
        );
    }
}

export default Client