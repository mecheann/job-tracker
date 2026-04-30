import { Column, JobApplication } from "@/lib/models/models.types";
import { FC } from "react";
import { Card, CardContent } from "./ui/card";
import { ExternalLink, MoreVertical, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

interface Props {
  job: JobApplication;
  columns: Column[];
}
const JobApplicationCard: FC<Props> = ({ job, columns }) => {
  return (
    <>
      <Card className="cursor-pointer transition-shadow hover:shadow-accent">
        <CardContent className="p-4">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm mb-1">{job.position}</h3>
              <p className="text-xs text-muted-foreground mb-2">
                {job.company}
              </p>
              {job.description && (
                <p className="text-xs text-muted-foreground mb-2 line-clamp-1">
                  {job.description}
                </p>
              )}
              {job.tags && job.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-2">
                  {job.tags.map((tag, key) => (
                    <span
                      key={key}
                      className="px-2 py-0.5 text-xs rounded-full bg-accent-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              {job.jobUrl && (
                <a
                  className=""
                  target="_blank"
                  href={job.jobUrl}
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="" />
                </a>
              )}
              <DropdownMenu>
                <DropdownMenuTrigger className="">
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="">
                  {columns.length > 1 && (
                    <>
                      {columns
                        .filter((col) => col._id !== job.columnId)
                        .map((column, key) => (
                          <DropdownMenuItem key={key} className="">
                            Move to {column.name}
                          </DropdownMenuItem>
                        ))}
                    </>
                  )}
                  <DropdownMenuItem className="text-destructive">
                    <Trash2 className="" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default JobApplicationCard;
