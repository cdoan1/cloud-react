import React from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import { removeArticle } from '../actions/index';
import ExampleButton from './ExampleButton';
import remove from 'material-ui/svg-icons/content/remove';

const style = {
    height: 150,
    width: 120,
    margin: 40,
    textAlign: 'center',
    display: 'inline-block',
};

// **NOTE** previously, I was doing onClick={ this.props.removeArticle(el) }
// but this is wrong because I have already mapped the dispatch to props
// and can access props as removeArticles(el)
// because the fat arrow maintains this
//
// 2. example of passing function to child component
const ConnectedTiles = ({ articles, removeArticle }) => (
    <div>
        {articles.map(el => (
            <Paper style={style} zDepth={4} rounded={false} onClick={() => { console.log('paper', el.title) }} key={el.id}>
                <div>
                    <h3>{el.title}</h3>
                    {/* <button label='Default' onClick={() => { removeArticle(el) }} className='mui-btn'>
                        remove
                    </button> */}
                    <ExampleButton handler={() => {removeArticle(el)}} />
                </div>
            </Paper>
        ))}
    </div>
);

// const mapStateToProps = state => {
//     return { articles: state.articles };
// };

const mapStateToProps = state => {
    return state.articles;
};

const mapDispatchToProps = dispatch => {
    return {
        removeArticle: article => dispatch(removeArticle(article))
    };
};

// connect is a curried function! connect()()
const Tiles = connect(mapStateToProps, mapDispatchToProps)(ConnectedTiles);

export default Tiles;