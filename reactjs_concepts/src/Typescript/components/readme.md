<!-- typescript concepts -->

prop types: use type - to build applications
and interfaces to build libraries
type PersonListProps = {
  names: { 
         fname: string
         lname: string
     }[]
     or names : Name[]
}

type GreetProps = {
    name: string
    msgCount: number
    isLoggedIn : boolean
}
type StatusProps = {
    status: 'loading' | 'success' | 'error'
}
type HeadingProps = {
    // says that children prop is optional
    children? : string   => optional chaining operator
    // if children prop is a comp
    // children: React.ReactNode
}

type ButtonProps = {
    handleClick: (event : React.MouseEvent<HTMLButtonElement>, id: number) => void
}

<button onClick={(event) => props.handleClick(event, 1)}>Clcik</button>


type InputProps = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
or 
const HandleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {console.log(event)}

type ContainerProps = {
    <!-- for CSS styles  -->
    styles: React.CSSProperties
}


type Name = {
    fname: string
    lanme: string
}

type Person = {
    name : Name
}

type inference: based on the intial val paased in useState(initialVal) the type of the state is infered
useState<Person | null>(null) ==> if useState's type changes in the future
useState<Person>({} as Person) ==> useState will definitely have val and of type Person => type assertion

type CounterState ={ count: number}
type ActionType = {type: 
'increment' | 'decrement'

payload : number}
function reducer(state : CounterState, action: ActionType)

Discriminated unions ==> recomended for usereducer type UpdateAction = {
    type: 'increment' | 'decrement'
    payload: number
 }
 type UpdatResetActionAction = {
    type: 'reset'
 }
 type CounterAction = UpdateAction | ResetAction