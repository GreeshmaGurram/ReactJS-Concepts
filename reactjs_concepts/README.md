npx => node package execute
react => library, declarative (just say react what to do and it will do it no need to say how to do)

exports/import => 2 types: default and named
hooks for functional components =>introduced in 2018 => v16.0 alpha

* props to a component is sent as an object. are immutable
eg: <Greet name="Gree">   
const Greet = (props) => { return (<h1>Hello {props.name}</h1>)}
class Greet extends Component{
    render(){
        return(
            <h1>Hello {this.props.name}</h1>
        )
    }
}

* state: managed within component

* can't add if else statments in JSX
* conditional rendering: 4 ways:
1. if/else: if (isLoggedIn) { <div>Welcome User</div>} else { <div>Welcome Guest</div>}

2. Element variables: let message 
if (isLoggedIn) { message = <div>Welcome User</div>} else { message = <div>Welcome Guest</div>} return <div>{message}</div>

<!-- can be used inside jsx -->
3. Ternary operator: return ( this.state.isLoggedIn ? <div>Welcome User</div> : <div>Welcome Guest</div>)

4. Short circuit operator: this.state.isLoggedIn && <div>Welcome user</div>

* Inline styling : const heading = {
    fontSize: '72px
, color: 'blue} <h1 style={heading}>Inline</h1>

* Lifecycle methods:
1. Mounting: comp created and inserted into dom => constructor(props), getDerivedStateFromProps(props, state), render(), componentDidMount()
2. Updating: comp re rendered due to changes in state or props => getDerivedStateFromProps(), shouldComponentUpdate(nextProps, nextState) - for performance optimization, render(), getSnapshotBeforeUpdate(prevProps, prevState), componentDidUpdate(prevProps, PrevStste, snapshot)
3. Unmounting: comp removed from dom => componentWillUnmount()
4. Error Handling => getDerivedStateFromError(error), componentDidCatch(error, info)

* Fragment: <> </> or <React.Fragment key={}> => groups many child components without adding extra node // only key prop can be used with fragment

* Regualr component vs Pure component ==> in class components
pure renders only once as shouldComponentUpdate method is executed or re rendered only when difference in that method but for reg this method is by default true Therefore performance boost using pure comps

* memo ===> pure components for functional Compoennts ==> export default React.memo(ComponentName)   => above react v16.6

* refs ==> to access DOM nodes directly in react

* portals : can render a element or comp outside the dom node ==> Event bubling => every component in the portal acts as a React child to any of the React DOM ancestors 

* error boundary: catch errors anywhere in the componnet tree and display a fallback ui ==> implement either of getDerivedStateFromError(Error)[used for rendering fallback ui after error is thrown] or componentDidCatch()[log error info] methods or both

* HOC: takes in comp as arg and returns a new comp
const NewComp/EnhancedComp = higherOrderComp(orgComp)

* render props: used to share functionality between components using props whose val is func

* React Context : share state among comps without passing as props through all the comp tree at every level  
Steps: 1. Create Context
2. Provide Context val
3. Consume context val

* hooks introduced from v16.8 => can use state in functional comps, no need of this keyword, related code is organzied and placed in one place
call hooks only on top level and nnot inside loops, conditions or nested functions

* useEffect ==> replacement for componentDidMount, componentDidUnmount, componentWillUnmount

* just for code
logMousePosition  = e =>{ this.setState({x: e.clientX, y: e.clientY})}
componentDidMount(){ window.addEventListener('mousemove', this.logMousePosition)}

* useReducer Hook : for state management , alternative for useState ==> for reducers
useReducer(reducer, initialState), newState = reducer(currentState, action) == [newState, dispatch]

* useState vs useReducer :
type of state = num, str, bool(use useState) obj, arr(use useReducer)
no of state transitions: 1/2 (useState)
related state transition: not related(use useState)
local state => useState, global state=> useReducer

* useCallback : improve performance issues ==> render only needed comps  => return memorized ver of callback func which only changes when dependency changes

* useRef Hooks : Enable access of dom elements directly in func comps, can also store any immutable val while its val doen't change and doesnt re render while change 

* <React.StrictMode>==> intentionally double invokes a comp in development but only once in production
* rendering in react ==> Render phase ==> Component code translated to React Elements
Commit phase ==> react elements to DOM nodes using react-dom package ==> diff in comps is found out by object.is method
 
in re render => comps flag themselves using useState or useReducer dispatch func i.e., say that they have updates so need to re render

Optimization techs: 
1. Child comp re renders every time the parent re renders even when there is no change in child comp. This is called unnecessary renders. To reduce re renders we either pass the child comp as children prop to parent or memoize use React.memo
But if the child comp already has a children prop, no need to wrap in React.memo coz children prop gives a new ref every time it re renders
