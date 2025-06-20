import React from 'react'
import trust_value from '../../assets/images/webp/trust-value.webp'
import TagBox from '../common/TagBox'
import Heading from '../common/Heading'
import Icons from '../common/Icons'

const TrustValue = () => {
    return (
        <div className='bg_trust'>
            <div className='max-w-[1140px] mx-auto px-4 w-full xl:px-0 py-14 md:py-16 lg:py-[70px]]'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[47%_53%] gap-8 md:gap-2 items-center">
                    <div className=''>
                        <img src={trust_value} alt="featured_phone" className='max-w-[442px] w-full' />
                    </div>
                    <div className=''>
                        <TagBox white >Trust & Security</TagBox>
                        <Heading className={"py-4"} white left>TRUSTED bY THOUSANDS oF LEARNERS WORLDWIDE</Heading>
                        <p className='text-[#DBDBDB] flex gap-4 capitalize w-full text-base leading-150'>
                           Your learning data is safe with enterprise-grade encryption. We prioritize privacy and ensure a secure space for your sessions, mentor chats, and progress tracking.
                        </p>
                        <div className='mt-6 lg:mt-8 xl:mt-10 flex group cursor-pointer max-w-max'>
                            {/* <button className='bg-green relative cursor-pointer text-off-white rounded-[44px] font-semibold text-base leading-150 py-3.5 px-6'>
                                See How It Works
                                <span className='h-[52px] group-hover:w-full group-hover:translate-x-0 duration-300 absolute top-0 right-0 translate-x-8 w-[52px] bg-off-white rounded-full flex items-center justify-center'>
                                    <span className='w-0 group-hover:-me-5 scale-0 group-hover:scale-100 text-black duration-300 group-hover:w-full'>See How It Works</span>
                                    <Icons icon='arrow' />
                                </span>
                            </button> */}

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default TrustValue