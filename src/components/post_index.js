import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index'
import {Link} from 'react-router-dom';
import _, { every, isEmpty } from 'lodash';

class PostIndex extends Component{
    componentDidMount(){
       
        this.props.fetchPosts();     

    }
    renderPosts(posts){
        if(every(this.props.posts, isEmpty)){
            return console.log(" Posts >", this.props.posts);
        }
        return _.map(posts, post=>{
            return(
                <li className="list-group-item" key={post.id}>
                <Link to={`/post/${post.id}`}>
                {post.title}
                </Link>
                </li>
            );
        });
    }
    render(){      
        return(
            <div>
                <div className="text-xs-right">
                <Link to="/post/new" className="btn btn-primary"> Add New Post
                </Link>            
                 </div>
                <h3>Posts</h3>
                <ul className="list-group">
                {this.renderPosts(this.props.posts)}                
                </ul>                
                
           </div>
        );
    }
}

function mapStateToProps(state){
    return {posts: state.posts};
}


export default connect(mapStateToProps, {fetchPosts})(PostIndex);