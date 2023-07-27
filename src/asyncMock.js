const products = [
    {
        id: '1',
        name: 'Iphone 12',
        price: '1000',
        category: 'celular',
        img: 'https://files.cults3d.com/uploaders/21885916/illustration-file/e8afe4f6-f999-40d1-9181-400e772c7181/Capture.png',
        stock: '25',
        descripcion: 'Descripcion Iphone 12'
    },
    {
        id: '2',
        name: 'Iphone 14',
        price: '1500',
        category: 'celular',
        img: 'https://elcomercio.pe/resizer/JZAOrcFwjNm3V6YABr-5cxs8Rqk=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/XWGGFVY2FRACNGOOPHU3IHCJLY.jpg',
        stock: '15',
        descripcion: 'Descripcion Iphone 14'
    },
    {
        id: '3',
        name: 'Samsumg',
        price: '1600',
        category: 'celular',
        img: 'https://s1.eestatic.com/2019/02/12/elandroidelibre/el_androide_libre_375725490_181833584_800x698.jpg',
        stock: '20',
        descripcion: 'Descripcion Samsumg'
    },
        
]
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) =>{
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}