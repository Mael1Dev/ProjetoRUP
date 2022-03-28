import { ReactNode } from "react";

type Props = {
    header: string
    children?: ReactNode
}

export default function Tabela({header, children}:Props){
    return(
        <table>
            <thead>
            <tr>
                <th>
                    <span> {header} </span>
                </th>
            </tr>
            </thead>
            {children}
        </table>
    );
}