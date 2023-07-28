import React, { useState, ChangeEvent } from "react";
import { Form, Input } from "antd";
import { FormData } from '../app/page'

interface Props {
  parentFn: ParentFnType;
}
type ParentFnType = (data: FormData) => void

export default function BasicForm({ parentFn }: Props) {
  const [formData, setFormData] = useState<FormData>({
    name: "James Gordon",
    email: "info@info.com",
    phone: "(123) 456 789",
    website: "linkedin.com/u/jamesgordon",
    location: "Riga, Latvia",
    objective: "Software Developer",
  });

  parentFn(formData);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div className="bg-white m-5 w-5/6 rounded-md shadow-md">
      <Form layout="vertical" className="p-3">
        <Form.Item className="font-semibold" label="Name">
          <Input
            value={formData.name}
            onChange={handleChange}
            name="name"
            className="font-normal shadow-sm"
            placeholder="James Gordon"
          />
        </Form.Item>
        <Form.Item className="font-semibold" label="Objective">
          <Input
            value={formData.objective}
            onChange={handleChange}
            name="objective"
            className="font-normal"
            placeholder="Entrepreneur and educator obsessed with making education free for anyone"
          />
        </Form.Item>
        <div className="flex flex-row gap-5">
          <div className="basis-2/3">
            <Form.Item className="font-semibold" label="Email">
              <Input
                value={formData.email}
                onChange={handleChange}
                name="email"
                className="font-normal shadow-sm"
                placeholder="info@info.com"
              />
            </Form.Item>
          </div>
          <div className="basis-1/3">
            <Form.Item className="font-semibold" label="Phone">
              <Input
                value={formData.phone}
                onChange={handleChange}
                name="phone"
                className="font-normal shadow-sm"
                placeholder="(123) 456-7890"
              />
            </Form.Item>
          </div>
        </div>
        <div className="flex flex-row gap-5">
          <div className="basis-2/3">
            <Form.Item className="font-semibold" label="Website">
              <Input
                value={formData.website}
                onChange={handleChange}
                name="website"
                className="font-normal shadow-sm"
                placeholder="linkedin.com/company/codelex/"
              />
            </Form.Item>
          </div>
          <div className="basis-1/3">
            <Form.Item className="font-semibold" label="Location">
              <Input
                value={formData.location}
                onChange={handleChange}
                name="location"
                className="font-normal shadow-sm"
                placeholder="Riga, Latvia"
              />
            </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  );
}
