import React from 'react';
import {connect} from 'dva';
import './IndexPage.scss'
import ListBody from '../components/ListBody'

class IndexPage extends React.Component{


    render(){
        return (
            <div>
                <ListBody {...this.props}/>

                <ul className={'li'}>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>

        )
    }
}

function mapState(state) {
    return{list:state.listData}
}

export default connect(mapState)(IndexPage)