// import { Component } from "react";


// export default class Student extends Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             miqdor: 0,
//             pul:0,
//             miqdor1: 0,
//             pul1:0,
//             miqdor2: 0,
//             pul2:0,
//         }
//     }
//     render(){
//         const minus = () => {
//             if(this.state.miqdor > 1){
//             this.setState({miqdor:this.state.miqdor -1})
//             this.setState({pul:this.state.pul - 1000})
//         }
//     }

//         const plus = () => {
//             this.setState({miqdor:this.state.miqdor +1})
//             this.setState({pul:this.state.pul +1000})
//     }


//     const minus1 = () => {
//         if(this.state.miqdor1 > 1){
//         this.setState({miqdor1:this.state.miqdor1 -1})
//         this.setState({pul1:this.state.pul1 - 2000})
//     }
// }

//     const plus1 = () => {
//         this.setState({miqdor1:this.state.miqdor1 +1})
//         this.setState({pul1:this.state.pul1 +2000})
// }

// const minus2 = () => {
//     if(this.state.miqdor2 > 1){
//     this.setState({miqdor2:this.state.miqdor2 -1})
//     this.setState({pul2:this.state.pul2 - 3000})
// }
// }

// const plus2 = () => {
//     this.setState({miqdor2:this.state.miqdor2 +1})
//     this.setState({pul2:this.state.pul2 +3000})
// }

//         return (
//             <div>
//             <div style={{color:'black'}}>
//                 <button onClick={minus}>-</button>
//                 {this.state.miqdor}
//                 <button onClick={plus}>+</button>
//                 {this.state.pul}
//             </div>
//             <div style={{color:'black'}}>
//             <button onClick={minus1}>-</button>
//             {this.state.miqdor1}
//             <button onClick={plus1}>+</button>
//             {this.state.pul1}
//         </div>
//         <div style={{color:'black'}}>
//             <button onClick={minus2}>-</button>
//             {this.state.miqdor2}
//             <button onClick={plus2}>+</button>
//             {this.state.pul2}
//         </div>
//         {this.state.pul + this.state.pul1 + this.state.pul2}
//         </div>
//         )
//     }
// }





