import React from 'react';
import '../App.js';
import ListBlock from '../style/ItemListStyle';
import DummyData from './dummy-data/DummyData';

const ItemList = () => {
    return (
        <>
            <ListBlock>
                <DummyData />
            </ListBlock>
        </>
    );
};

export default ItemList;