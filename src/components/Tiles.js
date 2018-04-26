import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';

const mapStateToProps = state => {
  return { articles: state.articles };
};

const style = {
    height: 150,
    width: 120,
    margin: 40,
    textAlign: 'center',
    display: 'inline-block',
};

const ConnectedTiles = ({ articles }) => (
    <div>
        {articles.map(el => (
            <Paper style={style} zDepth={4} rounded={false} onClick={() => { console.log('paper', el.title) }} key={el.id}>
                <div>
                    <h3>{el.title}</h3>
                    <button label='Default' onClick={() => { console.log('button', el.title) }} className='mui-btn'>
                        remove
                    </button>
                </div>
            </Paper>
        ))}
    </div>
);

const Tiles = connect(mapStateToProps)(ConnectedTiles);

export default Tiles;