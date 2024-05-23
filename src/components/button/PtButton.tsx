import { Button } from "@mui/material";
import React, { memo, FC } from "react";

type PtButtonProps = {text:string;
    count:number;
}

const PtButton: FC<PtButtonProps> = ({text, count}) => {
    console.log(text)
    return <Button>{text} {count}</Button>;
};

export default memo(PtButton);