import React from 'react'
import hero_img from '../../assets/images/webp/hero-img.webp'
import flower from '../../assets/images/svg/flower-tag.svg'
import Icons from '../common/Icons'
import TagBox from '../common/TagBox'

const Hero = () => {
    return (
        <div className='max-w-[1140px] mx-auto px-4 w-full xl:px-0 py-8 md:py-10 lg:py-11'>
            <div className="grid md:grid-cols-[60%_40%] xl:grid-cols-[55%_45%] grid-cols-1 items-center">
                <div className='order-2 md:order-1 pt-10 md:pt-0'>
                    <TagBox white >100% TRUSTED PLATFORM</TagBox>
                    <h1 className='satoshi font-black text-white text-[40px] sm:text-[44px] py-3 lg:text-[52px] xl:text-[58px] leading-120'>LEARN FROM TOP MENTORS <span className='text-orange xl:block'>MASTER NEW SKILLS</span></h1>
                    <p className='text-[#dcdcdc] poppins leading-150 font-medium text-base lg:max-w-[640px] capitalize'>
                        Access expert-led courses and personalized mentorship—all in one trusted learning platform. Whether you're just starting or looking to upskill, Tomohi helps you grow smarter, faster.
                    </p>
                    {/* <div className='mt-6 lg:mt-8 xl:mt-10 flex group cursor-pointer max-w-max'>
                        <button className='bg-green relative cursor-pointer text-off-white rounded-[44px] font-semibold text-base leading-150 py-3.5 px-6'>
                            Get Started Free
                            <span className='h-[52px] group-hover:w-full group-hover:translate-x-0 duration-300 absolute top-0 right-0 translate-x-8 w-[52px] bg-off-white rounded-full flex items-center justify-center'>
                                <span className='w-0 group-hover:-me-5 scale-0 group-hover:scale-100 text-black duration-300 group-hover:w-full'>Get Started Free</span>
                                <Icons icon='arrow' />
                            </span>
                        </button>

                    </div> */}
                </div>
                <div className='flex justify-center md:justify-end md:order-2'>
                    <img src={hero_img} alt="hero_img" className='max-w-[440px] lg:max-w-[440px] md:max-w-[340px] w-full' />
                </div>
            </div>
        </div>
    )
}

export default Hero