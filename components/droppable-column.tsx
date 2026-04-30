import { Column } from "@/lib/models/models.types";
import { MoreVertical, Trash2 } from "lucide-react";
import CreateJobApplicationDialog from "./create-job-application";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { ColumnConfig } from "@/lib/models/column-config";
import { Button } from "./ui/button";
import SortableJobCard from "./sortable-job-card";
import { FC } from "react";

interface Props {
  boardId: string;
  column: Column;
  columnConfig: ColumnConfig;
  sortedColumns: Column[];
}
const DroppableColumn: FC<Props> = ({
  boardId,
  column,
  columnConfig,
  sortedColumns,
}) => {
  const sortedApplications =
    column.jobApplications?.sort((a, b) => a.order - b.order) || [];
  return (
    <Card className="min-w-[300px] shrink-0 shadow-md p-0 ">
      <CardHeader
        className={`${columnConfig.color} text-card rounded-t-lg pb-3 pt-3`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {columnConfig.icon}
            <CardTitle className="text-card font-semibold">
              {column.name}
            </CardTitle>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button
                size={"icon"}
                variant="ghost"
                className="h-6 w-6 text-card"
              >
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="text-destructive">
                <Trash2 className="mr-2 h-4 w-4" /> Delete Column
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="space-y-2 pt-4 bg-card min-h-[400px] rounded-b-lg">
        <CreateJobApplicationDialog columnId={column._id} boardId={boardId} />
        {sortedApplications.map((application) => (
          <SortableJobCard
            key={application._id}
            job={{
              ...application,
              columnId: application.columnId || column._id,
            }}
            columns={sortedColumns}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default DroppableColumn;
