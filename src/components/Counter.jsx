import React, { Component } from 'react';

class Counter  extends Component {
    state = {
        count: 0
    };
    styles=
    {
        fontSize: 30,
        fontWeight:'bold'
    };
    render(){
    
     
        return( 
         <div >

          <span  className={this.getbadgeClasses()}>{this.formatCount()}</span>
          <button style={this.styles} className='btn btn-secondary btn-sm p-2'>increment</button>
         </div>
        );
    }
    getbadgeClasses() {
        let Classes = "badge m-2 badge-";
        Classes += this.state.count === 0 ? "waring" : "primary";
        return Classes
    }

    formatCount(){
        const {count} =this.state;
        return count === 0 ? 'zero' : count ;

    }
}
 
export default  Counter;