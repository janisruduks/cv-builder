'use client';
import { FormFields } from "@/components/FormIntro";
import { PageCV } from "@/components/PageCV";
import { PDFViewer, PDFDownloadLink, Page } from '@react-pdf/renderer';
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
            <FormFields parentFn={parentFn} />
          </Col>
          <Col span={12}>
            <div className="m-3">
              <PDFDownloadLink document={<PageCV name={data.name} email={data.email} phone={data.phone} />} fileName="somename.pdf">
                {({ blob, url, loading, error }) =>
                  loading ? 'Loading document...' : <Button className="bg-white">Download now!</Button> 
                }
              </PDFDownloadLink>
            </div>
            <div style={{ height: '100vh', flexGrow: 1 }}>
              <PDFViewer showToolbar={false} style={{ width: '100%', height: '100%' }}>
                <PageCV name={data.name} email={data.email} phone={data.phone} />
              </PDFViewer>
            </div>
          </Col>
        </Row>
      </div>
    </main>
  )
}
