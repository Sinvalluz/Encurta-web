import type { RequestLinkType, ResponseLinkType } from "@/types/Link";
import axios, { type AxiosResponse } from "axios";

export async function postLink (requestLink: RequestLinkType) {
    try {
        return axios.post<ResponseLinkType, AxiosResponse<ResponseLinkType>, RequestLinkType>("http://localhost:8080/api/link", requestLink )
    } catch (error) {
        console.error(`Erro com a requisição HTTP: ${error}`)
    }
   
}