import dynamic from "next/dynamic";

import ProjectFormSkeleton from "./loading";

const ProjectForm = dynamic(
  () => import("@/app/issues/_components/IssueForm"),
  {
    ssr: false,
    loading: () => <ProjectFormSkeleton />,
  }
);

const NewProjectPage = () => {
  return <ProjectForm />;
};

export default NewProjectPage;
