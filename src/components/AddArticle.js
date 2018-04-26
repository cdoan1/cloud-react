import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addArticle } from '../actions/index';

// this is a simple component
// that defines its own state
// this is a STATEFUL COMPONENT
//
// class ConnectedAddArticle extends Component {
//     render() {
//         return 
//             <div>
//                 <h1>Add a new article</h1>
//                 <button onClick={addArticle('a new article being added')}>+</button>
//             </div>;
//     }
// }

const ConnectedAddArticle = ({ article }) => (
    <div>
        <h1>Add a new article</h1>
        <button onClick={addArticle('a new article being added')}>+</button>
    </div>
)


const mapStateToProps = (state) => {
    return { articles: state.articles };
}

// connect
const AddArticle = connect(mapStateToProps)(ConnectedAddArticle);

export default AddArticle;