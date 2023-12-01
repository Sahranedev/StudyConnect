import { Button } from '@/components/ui/button';
import soniaAvatar from '../../assets/sonia.jpg'
import { FaCalendarAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { ImPriceTag } from "react-icons/im";
import { FaBell } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";



const CardNextCourse = () => {
  return (
      <div className='flex justify-center'>
          <div className=' h-44 w-[21rem] bg-darkGrey rounded-xl'>
              <div className='flex ml-4 mt-2 gap-3'>
                  <img src={soniaAvatar} alt="" className='h-8 w-8 rounded-full' />
                  <p className='text-xl text-white'>JeSappelle Groot</p>
                  
              </div>
              <div className='flex mt-3 ml-4 gap-5'>
                  <div className='flex gap-2'>
                      <FaCalendarAlt size={20} color="white" />
                      <p className='text-sm text-white'>30/11</p>
                  </div>
                  <div className='flex gap-2'>
                      
                      <FaClock size={20} color="white" /> 
                      <p className='text-sm text-white '>14h-15h30</p>
                  </div>
                  <div className='flex gap-2'>
                      <ImPriceTag size={20} color="white" />
                      <p className='text-sm text-white'>Marketing</p>
                      
                  </div>
                  
              </div>
              <p className='text-white ml-4 mt-2 text-[12px]'>Titre du cours, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, ad.</p>
              <div className='mt-3 ml-4  flex  justify-between mr-4'>
                  
              <Button className=' bg-transparent text border border-white h-6 rounded-full'>
                  <div className='flex gap-2 items-center'>
                      
                  <FaBell size={12} color="white" />
                          <p className=' font-normal'>
                              
                          Être notifié
                          </p>
                  </div>
              </Button>
              <Button className='bg-white text-darkGrey border border-white h-6 rounded-full'>
                  <div className='flex gap-3 items-center'>
                      
                  
                          <p className='font-normal'>Inscrit</p>
                          <FaPlay size={12} />
                  </div>
              </Button>
              </div>
              
          </div>
      </div>
  )
}

export default CardNextCourse