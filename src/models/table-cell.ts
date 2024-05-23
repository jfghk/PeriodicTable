import { StringDecoder } from "string_decoder";

export interface PtTableInformationModel {
    orderNumber: number;
    sign: string;
    name: string;
    weight: string;
    valence: string;
    group: string;
    state: string;
    open: string;
    electronic: string;
    tMelt: string;
    tBoil: string;
}



export interface PtTablePosition {
    row: number;
    column: number;
}



export interface PtTableCellModel extends PtTableDataModel {
    active: boolean;
    selected: boolean;
}



export interface PtTableDataModel {
    information: PtTableInformationModel;
    position: PtTablePosition;
}