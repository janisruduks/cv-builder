import { EducationData } from '@/components/FormTypes';
import { useFormData } from './FormDataContext';
import { Form, Input, Typography, Button } from "antd";

export default function EducationForm() {
    const { formData, setFormData } = useFormData();

    function handleChange(
        index: number,
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        const { name, value } = event.target;
        const updatedEducation = [...formData.education];
        updatedEducation[index] = {
            ...updatedEducation[index],
            [name]: value,
        };
        setFormData({
            ...formData,
            education: updatedEducation,
        });
    }

    function handleAddEducation() {
        setFormData({
            ...formData,
            education: [...formData.education,
            { school: '', date: '', degree: '', description: '' }
            ],
        });
    }

    function handleRemoveEducation(index: number) {
        const updatedEducation = [...formData.education];
        updatedEducation.splice(index, 1);
        setFormData({
            ...formData,
            education: updatedEducation,
        });
    }

    return (
        <div className="bg-white p-3 m-5 w-5/6 rounded-md shadow-md">
            <Typography.Title level={4}>
                Education
            </Typography.Title>
            {formData.education.map((edu: EducationData, index: number) => (
                <div key={index}>
                    <Form layout="vertical" className="pt-3">
                        <div className="flex flex-row gap-5">
                            <div className="basis-2/3">
                                <Form.Item className="font-semibold" label="School">
                                    <Input
                                        value={edu.school}
                                        onChange={(e) => handleChange(index, e)}
                                        name="school"
                                        className="font-normal shadow-sm"
                                        placeholder="Cornell University"
                                    />
                                </Form.Item>
                            </div>
                            <div className="basis-1/3">
                                <Form.Item className="font-semibold" label="Date">
                                    <Input
                                        value={edu.date}
                                        onChange={(e) => handleChange(index, e)}
                                        name="date"
                                        className="font-normal shadow-sm"
                                        placeholder="May 2000"
                                    />
                                </Form.Item>
                            </div>
                        </div>
                        <Form.Item className="font-semibold" label="Degree & Major">
                            <Input
                                value={edu.degree}
                                onChange={(e) => handleChange(index, e)}
                                name="degree"
                                className="font-normal shadow-sm"
                                placeholder="Bachelor of Science in Computer Engineering"
                            />
                        </Form.Item>
                        <Form.Item className="font-semibold" label="Additional Information (Optional)">
                            <Input.TextArea
                                value={edu.description}
                                onChange={(e) => handleChange(index, e)}
                                name="description"
                                className="font-normal shadow-sm"
                            />
                        </Form.Item>
                    </Form>
                    <div className='flex flex-row gap-3 justify-end'>
                        <Button onClick={() => handleRemoveEducation(index)}>Remove</Button>
                    </div>
                </div>
            ))}
            <Button type='primary' className="bg-blue-500" onClick={handleAddEducation}>
                Add Education
            </Button>
        </div>
    );
}