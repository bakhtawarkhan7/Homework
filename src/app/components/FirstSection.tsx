import react from 'react';

const FirstSection: React.FC = () => {
    return (
        <section className='flex flex-col md:flex-row items-center justify-between p-6 bg-white'>
            <div className='md:w-1/2 md:pr-4'>
            <h2 className='text-2xl font-bold mb-2'>IMPECCABLE CRAFTSMANSHIP AND FINESS</h2>
            <p className='text-gray-700 mb-4'>
            An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
            </p>
            <button className='bg-[#C5B299] text-white py-2 px-4 rounded hover:bg-[#a38e77]'>Explore Now</button>
            </div>
            <div className='mt-6 md:mt-0 md:w-1/2 md:pl-4'>
            <img
            src='/rs-layer-wrap ⏵ rs-layer.png'
            alt='Jewelry Picture'
            className='w-full md:w-[400px] h-auto rounded-md object-cover'                
            />
        </div>
       </section>
    );
};

export default FirstSection;