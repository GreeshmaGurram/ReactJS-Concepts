React hooks:
1. useState() => object syntax to update a state independent of prevState Ex: setName('V')
callback syntax to update a state dependent on the prevState Ex: setCount(prevCount => prevCount + 1)
Synt: const [count, setCount] = useState(0)
for objects Ex: setName({...name, firstName: e.target.value}) => in class comps, setState() will merge the states and update the only provided state but useState hook in 
functional comps doesn't merge the state.

2.useEffect() => works same as componentDidMount(), componentDidUpdate() & componentWillUnmount() together
==> useEffect() hook is run after every update in state or prop if dependencies are not specified
