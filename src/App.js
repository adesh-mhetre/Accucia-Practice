import React, { useContext, useReducer } from'react';
import './App.css';
// import HookCounterThree from './components/HookCounterThree';
// import HookCounterOne from './components/HookCounterOne';
// import HookMouse from './components/HookMouse';
// import  MouseContainer from './components/MouseContainer';
// import IntervalHookCounter from './components/IntervalHookCounter';
// import DataFetching from './components/DataFetching';
// import ComponentC from './components/UseContext/ComponentC';
// import CounterOne from './components/UseReducer/CounterOne';
// import CounterTwo from './components/UseReducer/CounterTwo';
// import CounterThree from './components/UseReducer/CounterThree';
// import CounterOne from './components/UseReducer/CounterOne';
// import DataFetchingOne from './components/UseReducer/DataFetchingOne';
// import DataFetchingTwo from './components/UseReducer/DataFetchingTwo';
// import ParentComponent from './components/CallBack/ParentComponent'
// import Counter from './components/useMemo/Counter';
// import FocusInput from './components/UseRef/FocusInput';
// import HookTimer from './components/UseRef/HookTimer';
// import DocTitleOne from './components/CustomHooks/DocTitleOne';
// import DocTitleTwo from './components/CustomHooks/DocTitleOne';
// import CounterOne from './components/CustomHooks/Custom Hook Two/CounterOne';
// import CounterTwo from './components/CustomHooks/Custom Hook Two/CounterTwo';
import UserForm from './components/CustomHooks/UseInput/UserForm';




// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

// export const CountContext = React.createContext();

// const initialSate = 0;
// const reducer = (state,action)=>{
//   switch(action){
//     case 'increment':
//       return state+1;
//     case 'decrement':
//       return state-1;
//     case 'reset':
//       return initialSate;
//     default:
//       return state;
//   }
// }

function App() {

  // const [count,dispatch]  = useReducer(reducer, initialSate);
  
  return (
    // // <div className="App">
    //   {/* <HookCounter/> */}
    //   {/* <HookCounterThree/> */}
    //   {/* <HookCounterOne/> */}
    //   {/* <MouseContainer/> */}
    //   {/* <HookMouse/> */}
    //   {/* <IntervalHookCounter/> */}
    //   {/* <DataFetching/> */}
    //   {/* <UserContext.Provider value={'Vishwas'}>
    //     <ChannelContext.Provider value={'ReactJS'}>
    //       <ComponentC/>
    //     </ChannelContext.Provider>
    //   </UserContext.Provider> */}

    //   {/* <CounterOne/> */}
    //   {/* <CounterTwo/> */}
    //     {/* <CounterThree/> */}
    //     // </div>

          // <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
          //   <div className="App">
          //   {count}
          //   <CounterOne /> 
          //   </div>
          // </CountContext.Provider>

          // <DataFetchingOne/>

          // <DataFetchingTwo/>

          <div className="App">
            {/* <ParentComponent/> */}
            {/* <Counter/> */}
            {/* <FocusInput/> */}
            {/* <HookTimer/> */}
            {/* <DocTitleOne/>
            <DocTitleTwo/> */}

            {/* <CounterOne/>
            <CounterTwo/> */}

          <UserForm/>
          </div>
  );
}

export default App;
