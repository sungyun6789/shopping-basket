import React from 'react';
import '../App.js';
import ListBlock from '../style/ItemListStyle';
import DummyData from './dummy-data/DummyData';

export default function ItemList() {
    return (
        <>
            <ListBlock>
                <DummyData />
            </ListBlock>
        </>
    );
};

