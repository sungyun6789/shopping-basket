import React from 'react';
import { Route } from 'react-router-dom';
import Basket from './Basket';
import ItemList from './ItemList';
import TemplateBloak from '../style/TemplateStyle';

const Template = () => {
    return (
        <div>
            <TemplateBloak>
                <Route exact path="/" component={ItemList} />
                <Route path="/basket" component={Basket} />
            </TemplateBloak>
        </div>
    )
};

export default Template;