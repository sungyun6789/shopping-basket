import Item from './Item.json';

const List = () => {
    const item = { Item };
    return (
        <div className="item-container">
            <div className="item-detail">
                <div className="item-detail-header" style={{ backgroundImage: `url(${item.imageUrl})` }}>
                </div>
                <div className="item-detail-body">
                    <p className="item-detail-name">{item.name}</p>
                    <p className="item-detail-age">{item.age}살입니다.</p>
                    {
                        pathname === '/' ? (
                            <button className="item-delete-button" onClick={() => clickAddButton(item)}>장바구니에 추가</button>
                        ) : (
                                <div className="item-detail-bottom">
                                    <p>{item.count}마리</p>
                                </div>
                            )
                    }
                </div>
            </div>
        </div >
    );
};

export default List;