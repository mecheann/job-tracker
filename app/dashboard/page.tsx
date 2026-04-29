import KanbanBoard from "@/components/kanban-board";
import { getSession } from "@/lib/auth/auth";
import dbConnect from "@/lib/db";
import { DEFAULT_BOARD_NAME } from "@/lib/init-user-board";
import { Board } from "@/lib/models";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const session = await getSession();

  if (!session?.user) {
    redirect("/log-in");
  }

  await dbConnect();

  const board = await Board.findOne({
    userId: session.user.id,
    name: DEFAULT_BOARD_NAME,
  }).populate("columns");


  return (
    <div>
      <div className="justify-center items-center p-8">
        <div className="flex flex-col items-start justify-start p-8">
          <h1 className="text-3xl font-bold">{board.name}</h1>
          <p className="text-muted-foreground">
            Track your job applications in one place.
          </p>
        </div>
        <KanbanBoard
          board={JSON.parse(JSON.stringify(board))}
          userId={session.user.id}
        />
      </div>
    </div>
  );
};

export default Dashboard;
