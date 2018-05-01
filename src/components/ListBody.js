import React from "react";
import './ListBody.scss'

export default class ListBody extends React.Component{

    removeItem(id){
        this.props.dispatch({type:'listData/fetchRemoveItem',payload:id});
    }

    render(){
        const list = this.props.list.list;
        console.log(list);
        return(
            <div>
                listBody
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