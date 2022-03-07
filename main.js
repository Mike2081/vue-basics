const app = Vue.createApp ({ //we're putting all of our vue data/methods into app on line12 of index.html
    data: function() {
        return {
            product: 'Socks', //now product socks is a data item
            image: './assets/images/socks_blue.jpg',
            description: 'description: made with 100% wool',
            url: 'youtube.com',
            inventory: 9,
        }
    }
})
