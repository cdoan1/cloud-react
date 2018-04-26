import React from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import { removeArticle } from "../actions/index";

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
const ConnectedTiles = ({ articles, removeArticle }) => (
    <div>
        {articles.map(el => (
            <Paper style={style} zDepth={4} rounded={false} onClick={() => { console.log('paper', el.title) }} key={el.id}>
                <div>
                    <h3>{el.title}</h3>
                    <button label='Default' onClick={() => { removeArticle(el) }} className='mui-btn'>
                        remove
                    </button>
                </div>
            </Paper>
        ))}
    </div>
);

const mapStateToProps = state => {
    return { articles: state.articles };
};

const mapDispatchToProps = dispatch => {
    return {
        removeArticle: article => dispatch(removeArticle(article))
    };
};

const Tiles = connect(mapStateToProps, mapDispatchToProps)(ConnectedTiles);

export default Tiles;