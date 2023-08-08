import { projectData } from '../types/FormTypes';
import { useFormData } from './FormDataContext';
import { Form, Input, Typography } from "antd";
import { PlusCircleTwoTone, MinusCircleTwoTone } from '@ant-design/icons';

export default function ProjectForm() {
    const { formData, setFormData } = useFormData();

    function handleChange(
        index: number,
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        const { name, value } = event.target;
        const updatedProject = [...formData.project];
        updatedProject[index] = {
            ...updatedProject[index],
            [name]: value,
        };
        setFormData({
            ...formData,
            project: updatedProject,
        });
    }

    function handleAddProject() {
        setFormData({
            ...formData,
            project: [...formData.project,
            { name: '', description: '', link: '' }
            ],
        });
    }

    function handleRemoveProject(index: number) {
        const updatedProject = [...formData.project];
        updatedProject.splice(index, 1);
        setFormData({
            ...formData,
            project: updatedProject,
        });
    }

    return (
        <div className='bg-white p-3 m-5 w-5/6 rounded-md shadow-md'>
            <Typography.Title level={4}>
                Projects
            </Typography.Title>
            {formData.project.map((project: projectData, index: number) => (
                <div key={index}>
                    <div className='flex flex-row gap-3 justify-end'>
                        <MinusCircleTwoTone size={32} onClick={() => handleRemoveProject(index)} />
                        <PlusCircleTwoTone onClick={handleAddProject} />
                    </div>
                    <Form layout='vertical' className='pt-3'>
                        <div className="flex flex-row gap-5">
                            <div className="basis-2/4">
                                <Form.Item className="font-semibold" label="Project name">
                                    <Input
                                        value={project.name}
                                        onChange={(e) => handleChange(index, e)}
                                        name="name"
                                        className="font-normal shadow-sm"
                                        placeholder="CV Generator"
                                    />
                                </Form.Item>
                            </div>
                            <div className="basis-2/4">
                                <Form.Item className="font-semibold" label="Link">
                                    <Input
                                        value={project.link}
                                        onChange={(e) => handleChange(index, e)}
                                        name="link"
                                        className="font-normal shadow-sm"
                                        placeholder="github.com/codelex/cv-generator"
                                    />
                                </Form.Item>
                            </div>
                        </div>
                        <div>
                            <Form.Item className="font-semibold" label="Description">
                                <Input.TextArea
                                    value={project.description}
                                    onChange={(e) => handleChange(index, e)}
                                    name="description"
                                    className="font-normal shadow-sm"
                                    placeholder="Created most complex and 🔥blazingly🔥 fast CV generator"
                                />
                            </Form.Item>
                        </div>
                    </Form>
                </div>
            ))}
        </div>
    )
}