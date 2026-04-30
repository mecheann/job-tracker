import { JobApplication, Column } from "@/lib/models/models.types";
import JobApplicationCard from "./job-application-card";
import { FC } from "react";

interface Props {
  job: JobApplication;
  columns: Column[];
}
const SortableJobCard: FC<Props> = ({ job, columns }) => {
  return (
    <div>
      <JobApplicationCard job={job} columns={columns} />
    </div>
  );
};

export default SortableJobCard;
