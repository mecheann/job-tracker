"use client";

import { Board, Column } from "@/lib/models/models.types";
import {
  Award,
  Calendar,
  CheckCircle2,
  Mic,
  MoreVertical,
  Trash2,
  XCircle,
} from "lucide-react";
import { FC, ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import CreateJobApplicationDialog from "./create-job-application";

interface KanbanBoardProps {
  board: Board;
  userId: string;
}

interface ColumnConfig {
  color: string;
  icon: ReactNode;
}

const COLUMN_CONFIG: Array<ColumnConfig> = [
  { color: "bg-blue-500", icon: <Calendar className="h-4 w-4" /> },
  { color: "bg-purple-500", icon: <CheckCircle2 className="h-4 w-4" /> },
  { color: "bg-amber-500", icon: <Mic className="h-4 w-4" /> },
  { color: "bg-green-500", icon: <Award className="h-4 w-4" /> },
  { color: "bg-red-500", icon: <XCircle className="h-4 w-4" /> },
];

const DropableColumn = ({
  boardId,
  column,
  columnConfig,
}: {
  boardId: string;
  column: Column;
  columnConfig: ColumnConfig;
}) => {
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
      </CardContent>
    </Card>
  );
};

const KanbanBoard: FC<KanbanBoardProps> = ({ board, userId }) => {
  const columns = board.columns;
  return (
    <>
      <div>
        <div className="flex flex-row gap-2">
          {columns.map((column, key) => {
            const config = COLUMN_CONFIG[key] || {
              color: "bg-muted-foreground",
              icon: <Calendar className="h-4 w-4" />,
            };
            return (
              <DropableColumn
                key={column._id}
                boardId={board._id}
                column={column}
                columnConfig={config}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default KanbanBoard;
