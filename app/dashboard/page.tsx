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
  }).lean();

  console.log(board);

  return (
    <div>
      <div className="min-h-screen flex items-start justify-start p-8">
        <h1 className="text-3xl font-bold">{board?.name}</h1>
      </div>
    </div>
  );
};

export default Dashboard;
