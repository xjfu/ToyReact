import {ToyReact, Component} from "./ToyReact.js"


class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: null,
        };
    }
    
    render() {
        return (
            <button className="square" onClick={()=>this.setState({value: 'X'})}>
                {this.state.value? this.state.value:""}
                </button>
        );
    }
}
class Board extends Component {
    renderSquare(i) {
        return <Square value={i}/>;
    }
    render() {
        const status = 'Next player: X';
    
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
                </div>
                <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
                </div>
                <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
                </div>
            </div>
        );
    }
    
}
  
let a = <Board/>


ToyReact.render(
    a,
    document.body
)
// document.body.appendChild(a)


// var a = ToyReact.createElement("div", {
//     name: "a",
//     id: "ida"
//   }, ToyReact.createElement("span", null, "child"), ToyReact.createElement("span", null), ToyReact.createElement("span", null));
//   document.body.appendChild(a); // var a = _ToyReact_js__WEBPACK_IMPORTED_MODULE_0__["ToyReact"].createElement("div", {
    