// Import Swiper React components
import Image from 'next/image';

const EmploymentHistory = () => {

    return (
        <div className='min-h-screen mx-5'>
            <h3 className="text-xl mb-10">Companies I've collaborated with</h3>
            <div className='flex flex-col md:flex-row justify-between items-center'>
                <Image src={'/companies/apex-mobiletech.png'} width={100} height={100} objectFit={'contain'} />
                <Image src={'/companies/hong-leong-bank.png'} width={200} height={100} objectFit={'contain'} />
                <Image src={'/companies/ahsay.png'} width={100} height={100} objectFit={'contain'} />
                <Image src={'/companies/manulife.png'} width={200} height={100} objectFit={'contain'} />
            </div>

        </div>
    );
};

export default EmploymentHistory;