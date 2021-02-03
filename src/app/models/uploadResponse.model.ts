import { IFileIdWithIntervalDTO } from "./fileIdWithInterval.model";
import { IWordWithCountDTO } from "./wordWithCount.model";

export interface IUploadResponse {
    fileIds: IFileIdWithIntervalDTO[];
    pairs: IWordWithCountDTO[];
}