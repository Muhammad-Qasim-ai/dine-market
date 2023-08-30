export const product = {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'id',
            title: 'Product Id',
            type: 'number'
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'category',
            title: 'Product Category',
            type: 'string'
        },
        {
            name: 'ref',
            title: 'Product ref',
            type: 'string'
        },
        {
            name: 'price',
            title: 'Product Price',
            type: 'number'
        },
        {
            name: 'image',
            title: 'Product Image',
            type: 'image'
        },
        {
            name: 'image2',
            title: 'Product Image 2',
            type: 'image'
        },
        {
            name: 'image3',
            title: 'Product Image 3',
            type: 'image'
        },
        {
            name: 'image4',
            title: 'Product Image 4',
            type: 'image'
        },
        {
            name: 'classification',
            title: 'Product Classification',
            type: 'reference',
            to: [{
                type: 'classification',
            }]
        },
        {
            name: 'quantity',
            title: 'Quantity',
            type: 'number'
        }
        
    ]
}
