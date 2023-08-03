import React from 'react';
import { MailOutlined, PhoneOutlined, LinkOutlined, GlobalOutlined, ThunderboltOutlined } from '@ant-design/icons';
import { useFormData } from './FormDataContext';


export default function PageCV() {
  const { formData } = useFormData();
  return (
    <div className="bg-white md:h-screen md:text-sm md:scale-100 text-xs">
      <div className='items-center flex flex-col'>
        <h1 className="text-4xl font-bold">
          {formData.information.name}
        </h1>
        <hr className='w-1/2 border border-black' />
        <h1 className='mb-4 text-xl'>
          {formData.information.objective}
        </h1>
      </div>
      <div className='flex items-center justify-center'>
        <div className="flex gap-2 items-center font-light text-xs md:text-md sm:scale-100 flex-wrap justify-center">
          <div className='flex gap-1 items-center'>
            <MailOutlined />
            <div>{formData.information.email}</div>
          </div>
          <div className='flex gap-1 items-center'>
            <PhoneOutlined />
            <div>{formData.information.phone}</div>
          </div>
          <div className='flex gap-1 items-center'>
            <LinkOutlined />
            <div>{formData.information.website}</div>
          </div>
          <div className='flex gap-1 items-center'>
            <GlobalOutlined />
            <div>{formData.information.location}</div>
          </div>
        </div>
      </div>
      <div className="text-center pr-12 pl-12 pt-4">
        <div>{formData.information.description}</div>
      </div>
      <div className='mr-8 ml-8 mt-3'>
        <div className='flex flex-row gap-2 p-3 items-center'>
          <div className='w-12 h-2 bg-black rounded-lg' />
          <h2 className='font-bold'>EDUCATION</h2>
        </div>
        {formData.education.map((edu, index) => (
          <div className='ml-4 mb-4 flex' key={index}>
            <div className='basis-5/6'>
              <h1 className='font-semibold'>{edu.school}</h1>
              <div>{edu.degree}</div>
              <div className='font-light whitespace-pre-wrap break-words'>{edu.description}</div>
            </div>
            <div className='basis-1/6 flex items-center'>
              <div className="font-light whitespace-nowrap">{edu.date}</div>
            </div>
          </div>
        ))}
        <div className='flex flex-row gap-2 p-3 items-center'>
          <div className='w-12 h-2 bg-black rounded-lg' />
          <h2 className='font-bold'>WORK EXPERIENCE</h2>
        </div>
        {formData.work.map((work, index) => (
          <div className='ml-4 mb-4 flex' key={index}>
            <div className='basis-5/6'>
              <h1 className='font-semibold'>{work.company}</h1>
              <div>{work.jobTitle}</div>
              <div className='font-light whitespace-pre-wrap break-words'>{work.description}</div>
            </div>
            <div className='basis-1/6 flex items-center'>
              <div className="font-light whitespace-nowrap">{work.date}</div>
            </div>
          </div>
        ))}
        <div className='flex flex-row gap-2 p-3 items-center'>
          <div className='w-12 h-2 bg-black rounded-lg' />
          <h2 className='font-bold'>PROJECTS</h2>
        </div>
        {formData.project.map((project, index) => (
          <div className='ml-4 mb-4 flex' key={index}>
            <div className='basis-5/6'>
              <h1 className='font-semibold'>{project.name}</h1>
              <div className='font-light whitespace-pre-wrap break-words'>{project.description}</div>
            </div>
            <div className='basis-1/6 flex items-center'>
              <a href={project.link} className="font-light whitespace-nowrap flex items-center">
                <LinkOutlined style={{ fontSize: 10 }} />
                project link
              </a>
            </div>
          </div>
        ))}
        <div className='flex flex-row gap-2 p-3 items-center'>
          <div className='w-12 h-2 bg-black rounded-lg' />
          <h2 className='font-bold'>SKILLS</h2>
        </div>
        <div className='flex flex-wrap'>
          {formData.skills.map((skills, index) => (
            <div className='ml-4 mb-4 flex gap-2' key={index}>
              <h1 className='font-semibold'>{skills.skill}</h1>
              <h1>
                {Array.from({ length: skills.rating }, (_, i) => (
                  <ThunderboltOutlined key={i} />
                ))}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

