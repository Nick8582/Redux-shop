import Image from 'next/image'
import {FC} from 'react'
import {useActions} from "../../../hooks/useActions";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {IProduct} from "../../../store/products/product.types";

const ProductItem: FC<{ product: IProduct }> = ({product}) => {
  const {addItem} = useActions()

  const {cart} = useTypedSelector(state => state)

  const isExistsInCart = cart.some(p => p.id === product.id)

  return (
    <div
      style={{width: '48%', backgroundColor: '#E5F0EA'}}
      className='rounded-xl mb-5 p-3 shadow-sm'
    >
      <div className='text-center'>
        <Image
          src={product.image}
          alt={product.title}
          width='100'
          height='143'
          className='rounded-xl'
        />
      </div>
      <div className='flex items-center justify-between mt-3'>
        <div className='text-green-900 font-medium text-sm overflow-hidden text-ellipsis whitespace-nowrap mr-5'>
          {product.title}
        </div>
        <div className='text-sm text-green-600'>${product.price}</div>
      </div>
      <button className='text-sm mt-3 bg-white rounded-xl w-3/4 mx-auto block p-1 hover:bg-green-200'
              onClick={() => !isExistsInCart && addItem(product)}>
        {isExistsInCart ? 'Добавлено в корзину' : 'Добавить в корзину'}
      </button>
    </div>
  )
}

export default ProductItem
