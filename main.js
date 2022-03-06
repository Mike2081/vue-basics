const app = Vue.createApp ({ //we're putting all of our vue data/methods into app on line12 of index.html
    data: function() {
        return {
            product: 'Socks', //now product socks is a data item
            description: 'description: made with wool'
        }
    }
})
