export const ItemInfo = (props) => {
    return <div className = "ItemInfo">
        <p className = "company">{props.item.company.toUpperCase()}</p>
        <h1 className = "itemHeader">{props.item.name}</h1>
        <p className = "itemDescription">{props.item.description}</p>
        <div className = "itemCosts">
            <p className = "finalCost">{"$" + Number(props.item.cost*(1- props.item.discount)).toFixed(2)}</p>
            {props.item.discount!==0 && <p className = "discount">{props.item.discount*100 + "%"}</p>}
            {props.item.discount!==0 && <p className = "oldPrice">{"$" + Number(props.item.cost).toFixed(2)}</p>}
        </div>
    </div>
}