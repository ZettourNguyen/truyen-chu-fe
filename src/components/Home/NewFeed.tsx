import { categories, newsFeedData } from '@/constant'
import React, { useState } from 'react'
import NewsFeedCard from '../Card/FeedCard'
import ContactForm from './ContactForm'
import { Pagination } from '@mantine/core';
const borderTab = 'border-b-[3px] border-b-solid border-b-sky_blue_light '

function NewFeed() {
    const [tab, setTab] = useState(0)
    return (
        <div className="flex py-10 lg:flex-row xs:flex-col-reverse">
            <div className='lg:w-2/3 xs:w-full'>
                <div className='flex border-b-[1px] border-b-[#e1e1e1] border-b-solid text-theme_color'>
                    <p
                        className={`
                        cursor-pointer text-sm
                        font-semibold px-2 py-2 ${tab == 0 ? borderTab : 'text-gray_text'}
                        relative top-[1px]
                        
                        `}
                        onClick={() => setTab(0)}
                    >
                        VỪA LÊN CHƯƠNG
                    </p>
                    <p
                        className={`
                        cursor-pointer text-sm
                        
                        font-semibold px-2 py-2 ${tab == 1 ? borderTab : 'text-gray_text'}
                        relative top-[1px]
                        `}
                        onClick={() => setTab(1)}
                    >
                        TRUYỆN XEM NHIỀU TRONG TUẦN
                    </p>

                </div>
                <div className='pb-10'>
                    {
                        newsFeedData.map((item: any, index: number) => (
                            <NewsFeedCard item={item} key={index.toString()} />
                        ))
                    }
                    {/* <Pagination
                        total={20}
                        size="xl"
                        siblings={3}
                        styles={(theme) => ({
                            control: {
                                '&[data-active]': {
                                    background: '#2fb5fa',
                                    border: 0,
                                },

                            },
                        })}
                    /> */}
                </div>

            </div>
            <div className='lg:w-1/3 lg:sticky xs:w-full top-[0] self-start pl-4 sm:border-l-2 sm:border-[#f0f1f2]'>
                <p className='text-base text-gray_text font-semibold mt-5'>BẢNG XẾP HẠNG LƯỢT THÍCH</p>
                <div className="flex flex-wrap gap-x-2 gap-y-2 mt-5">

                    {/* // change it */}
                    {categories.map((category: string, index: number) => (
                        <p
                            className='
                            text-[15px] py-2 px-4 border-[1px] 
                            text-gray_text
                            rounded-full
                            cursor-pointer
                            border-solid border-[#e1e1e1]'
                            key={index.toString()}
                        >
                            {category}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NewFeed