import { skillsData } from "../types/FormTypes";
import { useFormData } from "./FormDataContext";
import { Form, Input, Typography, Button, Rate } from "antd";
import { ThunderboltOutlined } from '@ant-design/icons';

export default function SkillsForm() {
    const { formData, setFormData } = useFormData();

    function handleChange(index: number, event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        const updatedSkills = [...formData.skills];
        updatedSkills[index] = {
            ...updatedSkills[index],
            [name]: value,
        };
        setFormData({
            ...formData,
            skills: updatedSkills,
        });
    }

    function handleAddSkills() {
        setFormData({
            ...formData,
            skills: [...formData.skills,
            { skill: '', rating: 0 }
            ],
        });
    }

    function handleRemoveSkills(index: number) {
        const updatedSkills = [...formData.skills];
        updatedSkills.splice(index, 1);
        setFormData({
            ...formData,
            skills: updatedSkills,
        });
    }

    function handleRateChange(index: number, value: number) {
        const updatedSkills = [...formData.skills];
        updatedSkills[index] = {
            ...updatedSkills[index],
            rating: value,
        };
        setFormData({
            ...formData,
            skills: updatedSkills,
        });
    }

    return (
        <div className='bg-white p-3 m-5 w-5/6 rounded-md shadow-md'>
            <Typography.Title level={4}>
                Skills
            </Typography.Title>
            {formData.skills.map((skills: skillsData, index: number) => (
                <div key={index}>
                    <Form layout='vertical' className='pt-3'>
                        <div className="flex flex-row gap-5">
                            <div className="basis-2/4">
                                <Form.Item className="font-semibold" label="Skill">
                                    <Input
                                        value={skills.skill}
                                        onChange={(e) => handleChange(index, e)}
                                        name="skill"
                                        className="font-normal shadow-sm"
                                        placeholder="React"
                                    />
                                </Form.Item>
                            </div>
                            <div className="basis-2/4 flex items-center justify-center">
                                <Rate
                                    onChange={(value) => handleRateChange(index, value)}
                                    defaultValue={0}
                                    character={<ThunderboltOutlined />}
                                    style={{ color: 'rgb(59 130 246)' }}
                                />
                            </div>
                        </div>
                    </Form>
                    <div className='flex flex-row gap-3 justify-end'>
                        <Button onClick={() => handleRemoveSkills(index)}>Remove</Button>
                    </div>
                </div>
            ))}
            <Button type='primary' className="bg-blue-500" onClick={handleAddSkills}>
                Add Skill
            </Button>
        </div>
    )
}