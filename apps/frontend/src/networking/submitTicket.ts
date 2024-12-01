import axios from "axios";
import { TicketData } from "./type";
import { backendURL } from "../config";

export type Response = {
  validation: {
    validityFactor: number;
    descriptionOfAnalysis: string;
  };
};

export const submitTicket = async (data: TicketData): Promise<Response> => {
  try {
    const response = await axios.post(`${backendURL}/submitTicket`, data);

    return response.data;
  } catch (error: unknown) {
    console.error("Error posting data:", error);
    throw error;
  }
};
