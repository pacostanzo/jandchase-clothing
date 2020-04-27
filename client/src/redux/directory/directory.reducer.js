const INITIAL_STATE = {
    sections: [
        {
            title: 'hats',
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/janchase-clothing.appspot.com/o/homepage%2Fhats.jpeg?alt=media&token=def2d6d1-92d6-4827-af76-613a691f3991',
            id: 1,
            linkUrl: 'shop/hats'
        },
        {
            title: 'jackets',
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/janchase-clothing.appspot.com/o/homepage%2Fjackets.jpeg?alt=media&token=91d678ee-288b-4d44-88ee-67d28e446542',
            id: 2,
            linkUrl: 'shop/jackets'
        },
        {
            title: 'sneakers',
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/janchase-clothing.appspot.com/o/homepage%2Fsneakers.jpeg?alt=media&token=435cc76a-11ff-4f05-9460-9631a86df937',
            id: 3,
            linkUrl: 'shop/sneakers'
        },
        {
            title: 'womens',
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/janchase-clothing.appspot.com/o/homepage%2Fwomens.jpeg?alt=media&token=c17a3fd6-4098-4401-af65-57cba9f7c9e2',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'
        },
        {
            title: 'mens',
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/janchase-clothing.appspot.com/o/homepage%2Fmen.jpeg?alt=media&token=5ebdf588-527a-4f04-b5be-bb5783055210',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens'
        },
        {
            title: 'ungendered',
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/janchase-clothing.appspot.com/o/homepage%2Fungendered.jpeg?alt=media&token=40bb96f6-6da4-4a79-bbc7-bbbcb40c3655',
            id: 6,
            size: 'large',
            linkUrl: 'shop/ungendered'
        },
        {
            title: 'kids',
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/janchase-clothing.appspot.com/o/homepage%2Fkids.jpeg?alt=media&token=0a58cd40-a6c3-4295-a11c-4380754de5c2',
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