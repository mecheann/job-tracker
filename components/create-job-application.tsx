import { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
interface Props {
  columnId: string;
  boardId: string;
  //onCreated: () => void;
}

const CreateJobApplicationDialog: FC<Props> = ({
  columnId,
  boardId,
  //onCreated,
}) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button
          className="w-full mb-4 justify-start text-muted-foreground"
          variant="outline"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Application
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>Add Job Application</DialogHeader>
        <DialogDescription>Track a new job application</DialogDescription>
        <form className="space-y-4">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="company">Company*</Label>
                <Input id="company" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="position">Position*</Label>
                <Input id="position" required />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="salary">Salary</Label>
              <Input id="salary" placeholder="e.g. $100k - $150k"/>
            </div>
            <div className="space-y-2"></div>

            <div></div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateJobApplicationDialog;
