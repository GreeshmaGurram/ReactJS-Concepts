import './App.css';
import ErrorBoundary from './concepts/ErrorBoundary/ErrorBoundary';
import Hero from './concepts/ErrorBoundary/Hero';
import ClickCounter from './concepts/HOC/ClickCounter';
import HoverCounter from './concepts/HOC/HoverCounter';
import MountingLifecyle from './concepts/Lifecyclemethods/MountingLifecyle';
import NameList from './concepts/ListRendering/NameList';
import ParentComponent from './concepts/MethodAsProp/ParentComponent';
import PortalDemo from './concepts/Portal/PortalDemo';
import FocusInput from './concepts/Refs/FocusInput';
import ForwardRefParent from './concepts/Refs/ForwardRefParent';
import RefsDemo from './concepts/Refs/RefsDemo';
import ClickCounterTwo from './concepts/RenderProps/ClickCounterTwo';
import HoverCounterTwo from './concepts/RenderProps/HoverCounterTwo';
import User from './concepts/RenderProps/User';
import EvenBind from './concepts/events/EventBind';
import OnClickEvent from './concepts/events/OnClickEvent';
import CCounter from './concepts/state/CCounter';
import ClassState from './concepts/state/classState';
import ComponentC from './concepts/ReactContext/ComponentC'
import { UsesrProvider } from './concepts/ReactContext/UserContext';
import PostsList from './concepts/HTTP/PostsList';
import PostAPIEx from './concepts/HTTP/PostAPIEx';
import FCounter from './concepts/Hooks/useStateHook/FCounter';
import FCounterWithPrevState from './concepts/Hooks/useStateHook/FCounterWithPrevState';
import FCounterWithObject from './concepts/Hooks/useStateHook/FCounterWithObject';
import FCounterWithArray from './concepts/Hooks/useStateHook/FCounterWithArray';
import FCounterUseEffect from './concepts/Hooks/useEffectHook/FCounterUseEffect';
import HookMouse from './concepts/Hooks/useEffectHook/HookMouse';
import MouseContainer from './concepts/Hooks/useEffectHook/MouseContainer';
import IntervalCounter from './concepts/Hooks/useEffectHook/IntervalCounter';
import DataFetch from './concepts/Hooks/useEffectHook/DataFetch';
import DataFetch2 from './concepts/Hooks/useEffectHook/DataFetch2';
import FComponentC from './concepts/Hooks/useContext/FComponentC';
import React, { useReducer } from 'react';
import ReducerCounter from './concepts/Hooks/useReducerHook/ReducerCounter';
import ReducerCounter2 from './concepts/Hooks/useReducerHook/ReducerCounter2';
import ReducerCounter3 from './concepts/Hooks/useReducerHook/ReducerCounter3';
import CompA from './concepts/Hooks/useContextAndUseReducer/CompA';
import CompB from './concepts/Hooks/useContextAndUseReducer/CompB';
import CompC from './concepts/Hooks/useContextAndUseReducer/CompC';
import DataFetchUsingUseReducer from './concepts/Hooks/useReducerHook/DataFetchUsingUseReducer';
import MainComp from './concepts/Hooks/useCallbackHook/MainComp';
import CounterwithUseMemo from './concepts/Hooks/useMemoHook/CounterwithUseMemo';
import UseRefHook from './concepts/Hooks/UseRefHook/UseRefHook';
import ClassTimere from './concepts/Hooks/UseRefHook/ClassTimere';
import FTimer from './concepts/Hooks/UseRefHook/FTimer';
import CustomDocTitleHook from './concepts/Hooks/CustomHooks/CustomDocTitleHook';
import CustomeCounter from './concepts/Hooks/CustomHooks/CustomeCounter';


// Context for func comps
export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

// useReducer + useContext

export const CountContext = React.createContext()
const initialState = 0
const reducer = (state, action) => {
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}


function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      {/* <ClassState/> */}
      {/* <CCounter/> */}
      {/* <OnClickEvent/> */}
      {/* <EvenBind/> */}
      {/* <ParentComponent/> */}
      {/* <MountingLifecyle/> */}
      {/* <RefsDemo/> */}
      {/* <FocusInput/> */}
      {/* <ForwardRefParent/> */}
      {/* <PortalDemo/> */}
      {/* <ErrorBoundary>
        <Hero heroName="Joker"/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="batman"/>
      </ErrorBoundary> */}
      {/* <NameList/> */}
      {/* <ClickCounter/>
      <HoverCounter/> */}
      {/* <ClickCounterTwo/>
      <HoverCounterTwo/> */}
      {/* <User render={(count, incrementCounter) => (
        <ClickCounterTwo count={count} incrementCounter={incrementCounter}/>
      )}/> */}
      {/* or */}
       {/* <User {(count, incrementCounter) => (
        <HoverCounterTwo count={count} incrementCounter={incrementCounter}/>
      )}/> */}
      {/* provider used to provide val for all the descending comps */}
      {/* <UsesrProvider value="G">
        <ComponentC/>
      </UsesrProvider> */}
      {/* <PostsList/> */}
      {/* <PostAPIEx/> */}
      {/* <FCounter/> */}
      {/* <FCounterWithPrevState/> */}
      {/* <FCounterWithObject/> */}
      {/* <FCounterWithArray/> */}
      {/* <FCounterUseEffect/> */}
      {/* <HookMouse/> */}
      {/* <MouseContainer/> */}
      {/* <IntervalCounter/> */}
      {/* <DataFetch/> */}
      {/* <DataFetch2/>  */}
     {/* <UserContext.Provider value={"G"}>
      <ChannelContext.Provider value={"code"}>
        <FComponentC/>
      </ChannelContext.Provider>
     </UserContext.Provider> */}
     {/* <ReducerCounter/> */}
     {/* <ReducerCounter2/> */}
     {/* <ReducerCounter3/> */}
     {/* <CountContext.Provider value={{countState: count, countDispatch : dispatch}}>
      <div>
        <CompA/>
        <CompB/>
        <CompC/>
      </div>
     </CountContext.Provider> */}
     {/* <DataFetchUsingUseReducer/> */}

     {/* <MainComp/> */}
     {/* <CounterwithUseMemo/> */}
     {/* <UseRefHook/> */}
     {/* <ClassTimere/> */}
     {/* <FTimer/> */}
     {/* <CustomDocTitleHook/> */}
     {/* <CustomeCounter/> */}
    </div>
  );
}

export default App;
