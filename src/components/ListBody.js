import React from "react";
import './ListBody.scss'
import {connect} from 'dva'
import myContext from '@/components/myContext'


 class ListBody extends React.Component{

    removeItem(id){
        this.props.dispatch({type:'listData/fetchRemoveItem',payload:id});
    }

    render(){
        console.log(this.props);
        const list = this.props.list;
        return(
            <div>
                listBody

                context

                <myContext.Consumer>
                    {
                        ({testState})=>(
                            <div>
                                {testState}
                            </div>
                        )
                    }
                </myContext.Consumer>

                <ul className={'ul'}>
                    {list.map((item,index)=>(
                        <li key={index} onClick={this.removeItem.bind(this,item.id)}>
                            {item.id} and {index}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default connect((state)=>{
    return state.listData
})(ListBody)
