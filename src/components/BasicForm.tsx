import { Form, Input } from "antd";
import { useFormData } from "./FormDataContext";

export default function BasicForm() {
  const { formData, setFormData } = useFormData();

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      information: {
        ...prevFormData.information,
        [name]: value,
      },
    }));
  }

  return (
    <div className="bg-white m-5 w-5/6 rounded-md shadow-md">
      <Form layout="vertical" className="p-3">
        <Form.Item className="font-semibold" label="Name">
          <Input
            value={formData.information.name}
            onChange={handleChange}
            name="name"
            className="font-normal shadow-sm"
            placeholder="James Gordon"
          />
        </Form.Item>
        <Form.Item className="font-semibold" label="Objective">
          <Input
            value={formData.information.objective}
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
                value={formData.information.email}
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
                value={formData.information.phone}
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
                value={formData.information.website}
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
                value={formData.information.location}
                onChange={handleChange}
                name="location"
                className="font-normal shadow-sm"
                placeholder="Riga, Latvia"
              />
            </Form.Item>
          </div>
        </div>
        <Form.Item className="font-semibold" label="About me">
          <Input.TextArea
            value={formData.information.description}
            onChange={handleChange}
            name="description"
            className="font-normal shadow-sm"
            placeholder="As an enthusiastic and dedicated professional with a passion for ...."
          />
        </Form.Item>
      </Form>
    </div>
  );
}