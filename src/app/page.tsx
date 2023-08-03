'use client';
import BasicForm from "@/components/BasicForm";
import EducationForm from "@/components/EducationForm";
import PageCV from "@/components/PageCV";
import ProjectForm from "@/components/ProjectForm";
import SkillsForm from "@/components/SkillsForm";
import WorkForm from "@/components/WorkForm";
import GitHubButton from 'react-github-btn'
import Link from "next/link";
import Image from 'next/image'
import { FormDataProvider } from "@/components/FormDataContext";
import { Button, Layout } from "antd";

export default function Home() {
  const { Header } = Layout;
  return (
    <main>
      <FormDataProvider>
        <Layout>
          <Header className="bg-white text-blue-500 shadow-sm flex flex-row">
            <Link href="/" className="font-bold">
              <div className='md:flex-row md:flex flex flex-row'>
                <div>
                <Image width='64' height="64" alt='logo' src='/logo.png' />
                </div>
                CV Builder
              </div>
            </Link>
            <div className="flex flex-grow justify-end">
              <GitHubButton
                href="https://github.com/janisruduks/cv-generator"
                data-icon="octicon-star"
                aria-label="Star janisruduks/cv-generator on GitHub"
              >
                Star on GitHub
              </GitHubButton>
            </div>
          </Header>
        </Layout>
        <div className="container mx-auto md:p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:overflow-y-auto md:h-screen">
              <BasicForm />
              <EducationForm />
              <WorkForm />
              <ProjectForm />
              <SkillsForm />
            </div>
            <div>
              <div className="md:p-2 scale-90">
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

