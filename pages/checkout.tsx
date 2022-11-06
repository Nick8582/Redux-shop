import { NextPage } from 'next'
import Link from 'next/link'

const Checkout: NextPage = () => {
	return (
		<>
			<h1 className='text-2xl'>Thanks for order!</h1>
			<Link href='/'>
				<a className='text-green-700'>Back to catalog</a>
			</Link>
		</>
	)
}

export default Checkout
