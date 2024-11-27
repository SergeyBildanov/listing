type Args = {
    items?: Array<ListItem>,
}

export type ListItem = {
    listing_id?: number,
    url: string,
    MainImage: {
        "url_570xN": string,
        [key: string]: any;
    },
    title: string,
    currency_code: string,
    price: string,
    quantity: number,
    [key: string]: any;
}

export default function Listing({ items = [] }: Args) {
    return (
        <div className="item-list">
            {
                items.map((item) => {
                    const image: string = item.MainImage["url_570xN"];
                    return (
                        <div className="item" key={item.listing_id}>
                            <div className="item-image">
                                <a href={item.url}>
                                    <img src={image} />
                                </a>
                            </div>
                            <div className="item-details">
                                <p className="item-title">{item.title}</p>
                                <p className="item-price">{`${(item.currency_code === "USD") ? `$${item.price}` : (item.currency_code === "EUR" ? `€${item.price}` : `${item.price} ${item.currency_code}`)}`}</p>
                                <p className="item-quantity level-medium">{`${item.quantity} left`}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}