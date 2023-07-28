import React, { useState, ChangeEvent } from "react";
import { Form, Input, Typography } from "antd";
import { BulbOutlined, BankOutlined } from "@ant-design/icons";
import { FormData } from '../app/page'

interface Props {
    parentFn: ParentFnType;
}
type ParentFnType = (data: FormData) => void

export default function EducationForm() {
    const [editableStr, setEditableStr] = useState('Education');
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        website: "",
        location: "",
        objective: "",
    });

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    return (
        <div className="bg-white p-3 m-5 w-5/6 rounded-md shadow-md">
            <Form layout="vertical" className="">
                <Typography.Title editable level={4}>
                    Education
                </Typography.Title>
                <div className="flex flex-row gap-5">
                    <div className="basis-2/3">
                <Form.Item className="font-semibold" label="School">
                    <Input
                        value={formData.name}
                        onChange={handleChange}
                        name="school"
                        className="font-normal shadow-sm"
                        placeholder="Cornell University"
                    />
                </Form.Item>
                    </div>
                    <div className="basis-1/3">
                        <Form.Item className="font-semibold" label="Date">
                            <Input
                                value={formData.phone}
                                onChange={handleChange}
                                name="phone"
                                className="font-normal shadow-sm"
                                placeholder="May 2000"
                            />
                        </Form.Item>
                    </div>
                </div>
                <div className="flex flex-row gap-5">
                    <div className="basis-2/3">
                        <Form.Item className="font-semibold" label="Degree & Major">
                            <Input
                                value={formData.website}
                                onChange={handleChange}
                                name="website"
                                className="font-normal shadow-sm"
                                placeholder="Bachelor of Science in Computer Engineering"
                            />
                        </Form.Item>
                    </div>
                    <div className="basis-1/3">
                        <Form.Item className="font-semibold" label="GPA">
                            <Input
                                value={formData.location}
                                onChange={handleChange}
                                name="location"
                                className="font-normal shadow-sm"
                                placeholder="3.81"
                            />
                        </Form.Item>
                    </div>
                </div>
                <Form.Item className="font-semibold" label="Additional Information (Optional)">
                    <Input
                        value={formData.name}
                        onChange={handleChange}
                        name="school"
                        className="font-normal shadow-sm"
                    />
                </Form.Item>
            </Form>
        </div>
    );
}