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
            name: 'classification',
            title: 'Product Classification',
            type: 'reference',
            to: [{
                type: 'classification',
            }]
        }
        
    ]
}
