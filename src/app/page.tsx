'use client';
import GitHubButton from 'react-github-btn'
import BasicForm from "@/components/BasicForm";
import EducationForm from "@/components/EducationForm";
import { FormDataProvider } from "@/components/FormDataContext";
import PageCV from "@/components/PageCV";
import ProjectForm from "@/components/ProjectForm";
import SkillsForm from "@/components/SkillsForm";
import WorkForm from "@/components/WorkForm";
import { Button, Layout } from "antd";

export default function Home() {
  const { Header } = Layout;
  return (
    <main>
      <FormDataProvider>
        <Layout>
          <Header className="bg-white text-blue-500 shadow-sm flex flex-row">
            <h1 className="font-bold flex-grow">
              Resume Builder v.0002
            </h1>
            <div className="flex justify-end">
              <GitHubButton
                href="https://github.com/janisruduks/cv-generator"
                data-icon="octicon-star"
                aria-label="Star janisruduks/cv-generator on GitHub"
              >
                Star on github
              </GitHubButton>
            </div>
          </Header>
        </Layout>
        <div className="container mx-auto md:p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="overflow-y-auto h-screen">
              <BasicForm />
              <EducationForm />
              <WorkForm />
              <ProjectForm />
              <SkillsForm />
            </div>
            <div>
              <div className="md:p-2">
                <PageCV />
                <div className="m-3">
                  <Button
                    className='bg-blue-500'
                    type='primary'
                    href="/pdf"
                  >
                    Download PDF
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FormDataProvider>
    </main>
  );
}

