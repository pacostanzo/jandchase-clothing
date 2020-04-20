const INITIAL_STATE = {
    sections: [
        {
            title: 'hats',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            id: 1,
            linkUrl: 'shop/hats'
        },
        {
            title: 'jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 2,
            linkUrl: 'shop/jackets'
        },
        {
            title: 'sneakers',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3,
            linkUrl: 'shop/sneakers'
        },
        {
            title: 'womens',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'
        },
        {
            title: 'mens',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens'
        },
        {
            title: 'ungendered',
            imageUrl: 'https://images.squarespace-cdn.com/content/v1/57b1c6fdbe6594dc4a678df1/1551378076820-TJBUCCT9RC5BQC123F7S/ke17ZwdGBToddI8pDm48kFWxnDtCdRm2WA9rXcwtIYR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UcTSrQkGwCGRqSxozz07hWZrYGYYH8sg4qn8Lpf9k1pYMHPsat2_S1jaQY3SwdyaXg/gn3.jpg?format=1500w',
            id: 6,
            size: 'large',
            linkUrl: 'shop/ungendered'
        },
        {
            title: 'kids',
            imageUrl: 'https://peopledotcom.files.wordpress.com/2018/11/celine-dion-5.jpg?w=2606&h=1738',
            id: 7,
            size: "large",
            linkUrl: 'shop/kids'
        }
    ]
};

const directoryReducer = (state=INITIAL_STATE, action) =>{
    switch (action.type) {
        default:
            return state;
    }  
};

export default directoryReducer;