import React,{Component} from 'react';
import {connect} from 'react-redux';
import {getAnswer} from '../actions/index';
import {postQuestion} from '../actions/index';
import _, { every, isEmpty } from 'lodash';

class ChatBot extends Component{
    constructor(props){
        super(props);
        this.renderConversation=this.renderConversation.bind(this);

    }


    renderConversation(){
        console.log("calling renderConversation",this.props.conversation);
        
        const {conversation} =this.props;
        
        if(!conversation){
            return <li>Loading ...</li>            
        }  
            return(
                <li className="list-group-item" key={_.random}>
                {conversation.question }             
                               
                </li>
            )     

    }
    onPost(){
       
        this.props.postQuestion("Question");
        this.props.getAnswer("Answer");        
    }
    render(){
       console.log("in Render >>",this.props.conversation)
        return(
            <div>
                <div>
                <ul className="list-group">
                {this.renderConversation()}                
                </ul> 
                </div>
                <div>
                    <button className="btn btn-primary" 
                    onClick={this.onPost.bind(this)}> Post Question
                    </button>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state);
    console.log("conversation >>",state.conversation);
    return {conversation:state.conversation}
}

export default connect(mapStateToProps,{getAnswer,postQuestion})(ChatBot);