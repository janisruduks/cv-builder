import { WorkData } from './FormTypes';
import { useFormData } from './FormDataContext';
import { Form, Input, Typography, Button } from "antd";


export default function WorkForm() {
    const { formData, setFormData } = useFormData();

    function handleChange(index: number, event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        const updatedWork = [...formData.work];
        updatedWork[index] = {
            ...updatedWork[index],
            [name]: value,
        };
        setFormData({
            ...formData,
            work: updatedWork,
        });
    }

    function handleAddWork() {
        setFormData({
            ...formData,
            work: [...formData.work,
            { company: '', date: '', jobTitle: '', description: '' }
            ],
        });
    }

    function handleRemoveWork(index: number) {
        const updatedWork = [...formData.work];
        updatedWork.splice(index, 1);
        setFormData({
            ...formData,
            work: updatedWork,
        });
    }

    return (
        <div className='bg-white p-3 m-5 w-5/6 rounded-md shadow-md'>
            <Typography.Title level={4}>
                Work Experience
            </Typography.Title>
            {formData.work.map((work: WorkData, index: number) => (
                <div key={index}>
                    <Form layout='vertical' className='pt-3'>
                        <div className="flex flex-row gap-5">
                            <div className="basis-2/3">
                                <Form.Item className="font-semibold" label="Job Title">
                                    <Input
                                        value={work.jobTitle}
                                        onChange={(e) => handleChange(index, e)}
                                        name="jobTitle"
                                        className="font-normal shadow-sm"
                                        placeholder="Software Developer"
                                    />
                                </Form.Item>
                            </div>
                            <div className="basis-1/3">
                                <Form.Item className="font-semibold" label="Company">
                                    <Input
                                        value={work.company}
                                        onChange={(e) => handleChange(index, e)}
                                        name="company"
                                        className="font-normal shadow-sm"
                                        placeholder="Codelex"
                                    />
                                </Form.Item>
                            </div>
                        </div>
                        <div className="flex flex-row gap-5">
                            <div className="basis-2/3">
                                <Form.Item className="font-semibold" label="Description">
                                    <Input.TextArea
                                        value={work.description}
                                        onChange={(e) => handleChange(index, e)}
                                        name="description"
                                        className="font-normal shadow-sm"
                                        placeholder="Description of my feats and accomplishments"
                                    />
                                </Form.Item>
                            </div>
                            <div className="basis-1/3">
                                <Form.Item className="font-semibold" label="Date">
                                    <Input
                                        value={work.date}
                                        onChange={(e) => handleChange(index, e)}
                                        name="date"
                                        className="font-normal shadow-sm"
                                        placeholder="May 2021 - June 2022"
                                    />
                                </Form.Item>
                            </div>
                        </div>
                    </Form>
                    <div className='flex flex-row gap-3 justify-end'>
                        <Button onClick={() => handleRemoveWork(index)}>Remove</Button>
                    </div>
                </div>
            ))}
            <Button type='primary' className="bg-blue-500" onClick={handleAddWork}>
                Add Work Experience
            </Button>
        </div>
    )
}