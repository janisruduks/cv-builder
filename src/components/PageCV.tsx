import React from 'react';
import { MailOutlined, PhoneOutlined, LinkOutlined, GlobalOutlined } from '@ant-design/icons';


export const PageCV = ({ name, email, phone, website, objective, location }: any) => {
    return (
        <div className="bg-white p-4 h-screen border-black border-4">
            <h1 className="text-2xl font-bold">{name}</h1>
            <p className='font-semibold mb-4'>{objective}</p>
            <div className="flex items-center mb-2">
                <MailOutlined className="mr-2" />
                <p>{email}</p>
            </div>
            <div className="flex items-center mb-2">
                <PhoneOutlined className="mr-2" />
                <p>{phone}</p>
            </div>
            <div className="flex items-center mb-2">
                <LinkOutlined className="mr-2" />
                <p>{website}</p>
            </div>
            <div className='flex items-center'>
                <GlobalOutlined className='mr-2' />
                <p>{location}</p>
            </div>
        </div>
    );
};

