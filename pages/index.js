import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import Saeed  from '../public/Musafer.png'
import design from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'
import web1 from '../public/web1.png'
import web2 from '../public/web2.png'
import web3 from '../public/web3.png'
import web4 from '../public/web4.png'
import web5 from '../public/web5.png'
import web6 from '../public/web6.png'
import { useState } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Saeed Musafer Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/saeed.ico" />
      </Head>

      <main className='bg-white text-black px-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-white'>
        <section className = 'min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons to-black'>developedbysaeed</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl ' />
              </li>
              <li>
                <a 
                className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'
                href="#">Resume</a>
              </li>

            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl '>Saeed Musafer</h2>
            <h3 className='text-2xl py-2 md:text-3xl'>Developer and designer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-400'>
              Freelancer providing services for programming and desing content
              needs. Join me down and let's get cracking!
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillGithub />
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
            <Image src={Saeed} layout='fill' objectFit='cover' />
          </div>
        </section>
         {/* section2 Starts here..! */}
        <section>
          <div>
            <h3 className='text-3xl py-1'>Services I offer</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-400'>
              Since the beginning of my journey as a freelance designer and developer,
               I've done remote work for <span className='text-teal-500'> agencies</span> that developed projects for 
               <span className='text-teal-500'> startups </span>
               I have also collaborated with many designers and developers within my network in order to create digital products for both businesses
               and consumer use.
            </p>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-400'>
              I offer from a wide range of services, including brand design, 
              programming and teaching.
            </p>
          </div>
          <div className='lg:flex gap-10 dark:text-gray-900'>
            <div className='text-center mx-auto shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image src={design} width={100} height={100} className='mx-auto' />
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'>
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Illustrator</p>
              <p className='text-gray-800 py-1'>Figma</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image src={consulting} width={100} height={100} className='mx-auto'/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'>
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Illustrator</p>
              <p className='text-gray-800 py-1'>Figma</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image src={code} width={100} height={100} className='mx-auto'/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'>
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Illustrator</p>
              <p className='text-gray-800 py-1'>Figma</p>
            </div>
          </div>
        </section>
        {/* End of section2 */}
        {/* section3 Starts here..! */}
        <section>
          <div>
          <h3 className='text-3xl py-1'>Portfolio</h3>
          <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-400'>
              Since the beginning of my journey as a freelance designer and developer,
               I've done remote work for <span className='text-teal-500'> agencies</span> that developed projects for 
               <span className='text-teal-500'> startups </span>
               I have also collaborated with many designers and developers within my network in order to create digital products for both businesses
               and consumer use.
            </p>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-400'>
              I offer from a wide range of services, including brand design, 
              programming and teaching.
            </p>
          </div>

          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <a href="https://roydad.af/"><div><Image src={web1} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/></div></a>
            </div>
            <div className='basis-1/3 flex-1'>
              <a href="https://www.arg.org.af/"><div><Image src={web2} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/></div></a>
            </div>
            <div className='basis-1/3 flex-1'>
              <a href="https://contactgroup.af/"><div><Image src={web3} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/></div></a>
            </div>
            <div className='basis-1/3 flex-1'>
              <a href="https://contactgroup.af/"><div><Image src={web4} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/></div></a>
            </div>
            <div className='basis-1/3 flex-1'>
              <a href="https://www.contactgroup.af"><div><Image src={web5} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/></div></a>
            </div>
            <div className='basis-1/3 flex-1'>
              <a href="https://www.arg.org.af/"><div><Image src={web6} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/></div></a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
