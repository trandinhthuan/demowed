import React,{useState} from 'react'
import { ProductsData } from '../../data/ProductsData';
import './ProductsManage.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const ProductsManage = (props) => {
  const {productsData,setProductsData} = props;
    const[name,setName] =  useState('');
    const[price,setPrice] =  useState('');
    const[image,setImage] =  useState('');
    const[type,setType] =  useState('');;
    const [product,setProduct] = useState({
        id : '',
        type: '',
        name : '',
        serial : 'AMOT001-7',
        brand : '',
        color : ['gray','white','golden'],
        url : '',
        options : [{
            ram : '8GB',
            info: [{
                rom: "256GB",
                price: '',
            }]
        }],
        image: ['']
});
        const handleChange = (event) => {
            const { name, value } = event.target;
            setProduct({ ...product, [name]: value });
          };
        const handleEdit = (event) => {
            event.preventDefault();
            setProductsData(prev => prev.filter(it => it.id !== product.id))
            setProductsData(prev => [...prev,product])
        }

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const productData = {
            id : productsData.length,
            type: type,
            name : name,
            serial : 'AMOT001-7',
            brand : 'Apple',
            color : ['gray','white','golden'],
            url : '',
            options : [{
                ram : '8GB',
                info: [{
                    rom: "256GB",
                    price: price,
                }]
            }],
            image: [image]
        };
        setProductsData(prev => [...prev,productData])
        console.log(productsData)
    }
    const handleDelete = (id) => {
        setProductsData(prev => prev.filter(e => e.id !== id))
    }
  
  return (
    <div className='container'>
    <Form onSubmit={handleSubmit}>
      <Col className="sm">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Tên Sản Phẩm</Form.Label>
          <Form.Control value={name} type="text" placeholder="nhập tên sản phẩm" onChange={(e) => setName(e.target.value)}/>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Loại Sản Phẩm</Form.Label>
          <Form.Control value={type} type="text" placeholder="nhập loại sản phẩm" onChange={(e) => setType(e.target.value)}/>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Giá Sản Phẩm</Form.Label>
          <Form.Control value={price} type="number" placeholder="nhập giá sản phẩm" onChange={(e) => setPrice(e.target.value)}/>
        </Form.Group>
      <Form.Group controlId="formFileSm" className="mb-3">
        <Form.Label>Hình Ảnh Sản Phẩm</Form.Label>
        <Form.Control value={image} type="text" size="sm" onChange={(e) => setImage(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Col>
    </Form>
    </div>
  )

    // <div className='add_products'>
    //     <form onSubmit={handleSubmit}>
    //       <h1>Thêm Sản Phẩm Mới</h1>
    //   <label>
    //     Name:
    //     <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    //   </label>
    //   <label>
    //     Type:
    //     <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
    //   </label>
    //   <label>
    //     Brand:
    //     <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} />
    //   </label>
    //   <label>
    //     image:
    //     <textarea value={image} onChange={(e) => setImage(e.target.value)} />
    //   </label>
    //   <label>
    //     Price:
    //     <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
    //   </label>
    //   <button type="submit">Add Product</button>
    // </form>
    // </div>
    // <div className='delete_products'>
    //   <h1>Xoá, Sửa Sản Phẩm</h1>
    //     <ul className='list_item'>
    //         {products.map(il => {
    //             return(
    //                 <li>
    //                     <img src="" alt="" />
    //                     <h5>{il.name}</h5>
    //                     <button onClick={() => handleDelete(il.id)}>Xoá Sản Phẩm</button>
    //                     <div className="edit_form">
    //                       <h6>Sửa Thông Tin</h6>
    //        <form onSubmit={handleEdit}>
    //           <label>
    //             ID:
    //             <input type="text" name='id' value={product.id} onChange={handleChange} placeholder={il.id}/>
    //           </label>
    //           <label>
    //             Name:
    //             <input type="text" name='name' value={product.name} onChange={handleChange} placeholder={il.name}/>
    //           </label>
    //           <label>
    //             Type:
    //             <input type="text" name='type' value={product.type} onChange={handleChange} placeholder={il.type}/>
    //           </label>
    //           <label>
    //             Brand:
    //             <input type="text" name='brand' value={product.brand} onChange={handleChange} placeholder={il.brand}/>
    //           </label>
    //           <label>
    //             image:
    //             <textarea value={product.image} name='image' onChange={handleChange} placeholder='link ảnh'/>
    //           </label>
    //           <label>
    //             Price:
    //             <input type="number" name='price' value={product.price} onChange={handleChange} placeholder={il.options[0].info[0].price}/>
    //           </label>
    //           <button type="submit">Confirm</button>
    //       </form>
    //   </div>    
    //                 </li>
    //             )
    //         })}
    //     </ul>
        
    // </div>
    // {/* <div className='edit_products'>
    // <ul className='list_item'>
    //         {products.map(il => {
    //             return(
    //                 <li>
    //                     <img src="" alt="" />
    //                     <h5>{il.name}</h5>
    //                     <button onClick={() => openEditForm(il.id)}>Sửa Thông Tin</button>
    //                 </li>
    //             )
    //         })}
    //     </ul>
    // </div> */}
}

export default ProductsManage