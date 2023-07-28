'use client';
import BasicForm from "@/components/BasicForm";
import EducationForm from "@/components/EducationForm";
import { PageCV } from "@/components/PageCV";
import { Button, Layout, Row, Col } from "antd";
import { useState } from "react";

export interface FormData {
  name: string;
  email: string;
  phone: string;
  website: string;
  location: string;
  objective: string;
}


export default function Home() {
  const { Header } = Layout;

  const [data, setData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    website: "",
    location: "",
    objective: "",
  });

  const parentFn = (formData: FormData) => {
    setData(formData);
  }

  return (
    <main>
      <Layout>
        <Header className="bg-white text-black shadow-sm">
          <h1 className="font-bold">Resume Builder v.0001</h1>
        </Header>
      </Layout>
      <div className="container mx-auto p-4">
        <Row>
          <Col span={12} className="">
            <BasicForm parentFn={parentFn} />
            <EducationForm />
          </Col>
          <Col span={12}>
            <div className="m-3">
              <Button className="bg-white">
                <a href="/api/pdf" download="generated_pdf.pdf" className="downloadBtn">Download PDF</a>
              </Button>
            </div>
            <div className="m-3">
              <PageCV {...data} />
            </div>
          </Col>
        </Row>
      </div>
    </main>
  )
}
