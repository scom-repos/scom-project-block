import { IFetchProjectBlockWidgetsResult } from "./interfaces";

const API_URL = "/api/embed/v0";
export async function fetchProjectBlockWidgets(blockGuid: string) {
    let result: IFetchProjectBlockWidgetsResult;
    try {
      let response = await fetch(`${API_URL}/projectBlockWidgets?projectBlockGuid=${blockGuid}`);
      result = await response.json();
    } catch (err) {
      console.error("[fetchProjectBlockWidgets] error: ", err);
    }
    return result;
}