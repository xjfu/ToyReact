import {ToyReact, Component} from "./ToyReact.js"

class MyComponent extends Component{
    render() {
        return <div><span>hello world</span>
        <div>
            {this.children}
        </div>
        </div>
    }
    
}
let a = <MyComponent name="a" id="ida">
    <span>123</span>
</MyComponent>

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
    