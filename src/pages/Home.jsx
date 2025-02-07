import React from 'react'

const Home = () => {
  return (
    <>
      <div className='mt-12'>

        <div className='flex justify-items-center gap-60 px-18 '>
          <div className='h-12 w-30 bg-amber-400 px-7 py-3 rounded-md font-bold text-white'>Pending</div>
          <div className='h-12 w-30 bg-green-600 px-4 py-3 rounded-md font-bold text-white'>Successful</div>
          <div className='h-12 w-30 bg-red-600 px-9 py-3 rounded-md font-bold text-white'>Failed</div>
        </div>

        <div className='container mx-auto p-36 relative bottom-20 right-28'>
          <table className='w-full border-collapse border border-gray-300'>
            <thead>
              <tr className='bg-gray-200'>
                <th className='border border-gray-300 p-3'>Transaction No.</th>
                <th className='border border-gray-300 p-3'>Status</th>
                <th className='border border-gray-300 p-3'>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border border-gray-300 p-3 text-center'>001 TN</td>
                <td className='border border-gray-300 p-3 text-center'>Pending</td>
                <td className='border border-gray-300 p-3 text-center'>1/02/24</td>
              </tr>
              <tr>
                <td className='border border-gray-300 p-3 text-center'>002 TN</td>
                <td className='border border-gray-300 p-3 text-center'>Successful</td>
                <td className='border border-gray-300 p-3 text-center'>7/12/24</td>
              </tr>
              <tr>
                <td className='border border-gray-300 p-3 text-center'>003 TN</td>
                <td className='border border-gray-300 p-3 text-center'>Failed</td>
                <td className='border border-gray-300 p-3 text-center'>7/22/24</td>
              </tr>
              <tr>
                <td className='border border-gray-300 p-3 text-center'>004 TN</td>
                <td className='border border-gray-300 p-3 text-center'>Pending</td>
                <td className='border border-gray-300 p-3 text-center'>8/30/24</td>
              </tr>
              <tr>
                <td className='border border-gray-300 p-3 text-center'>005 TN</td>
                <td className='border border-gray-300 p-3 text-center'>Failed</td>
                <td className='border border-gray-300 p-3 text-center'>9/01/24</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* <h3>products</h3>
<button onClick={() => { navigate(-1) }}>Go Back</button>
{
product.map((p, index) => {
  console.log(p);
  <ProductCard key={index} product={p} />
})
} */}
      </div>
    </>
  )
}

export default Home