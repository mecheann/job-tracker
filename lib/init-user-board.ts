import { create } from "domain";
import dbConnect from "./db";
import { Board, Column } from "./models";
import { createDecipheriv } from "crypto";

const DEFAULT_COLUMNS = [
  { name: "Wishlist", order: 0 },
  { name: "Applied", order: 1 },
  { name: "Interview", order: 2 },
  { name: "Offer", order: 3 },
  { name: "Rejected", order: 4 },
];

const DEFAULT_BOARD_NAME = "Default Board";
export const initUserBoard = async (userId: string) => {
  //Create a default board for the user
  try {
    //Connect to the database
    await dbConnect();
    //Check if board already exists for the user
    const existingBoard = await Board.findOne({
      userId,
      name: DEFAULT_BOARD_NAME,
    });

    if (existingBoard) {
      console.log("Board already exists for user:", userId);
      return existingBoard;
    }

    // Create a default board
    const board = await Board.create({
      name: DEFAULT_BOARD_NAME,
      userId,
      columns: [],
      createdBy: userId,
      updatedBy: userId,
    });

    // Create default columns for the board
    const columns = await Promise.all(
      DEFAULT_COLUMNS.map((col) =>
        Column.create({
          name: col.name,
          order: col.order,
          boardId: board._id,
          jobApplications: [],
          createdBy: userId,
          updatedBy: userId,
        }),
      ),
    );

    board.columns = columns.map((col) => col._id);

    await board.save();
    return board;
  } catch (error) {
    console.error("Error initializing user board:", error);
    throw error;
  }
};
