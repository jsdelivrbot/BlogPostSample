import React, {Component} from 'react';
import { connect} from 'react-redux';
import { fetchPost } from '../actions/index';
import {Link} from 'react-router-dom';
import { deletePost } from '../actions/index';

class PostShow extends Component{

    componentDidMount(){
        if(!this.props.post){
        const {id}=this.props.match.params;         
        this.props.fetchPost(id);
        }     
        
    }
    deletePost(){
        const {id}=this.props.match.params;  
        this.props.deletePost(id, ()=>{
            this.props.history.push('/');
        });
    }
    render(){
        const {post} =this.props;
        if(!post){
           return <div>Loading... </div>
        }
        return(
            <div> 
                <Link to="/" >Back to Home</Link>
                <button className="btn btn-danger pull-xs-right"
                onClick={this.deletePost.bind(this)}>Delete Post</button>
                <h3>{post.title}</h3>
                <h6> Category :{post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }

}

function mapStateToProps({posts},ownProps){
    return {post: posts[ownProps.match.params.id]}

}


export default connect (mapStateToProps, {fetchPost, deletePost})(PostShow);