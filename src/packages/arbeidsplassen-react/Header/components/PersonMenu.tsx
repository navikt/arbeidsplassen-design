import MenuItem from "./MenuItem";
import type { Active } from "../types";

interface PersonMenuProps {
    active?: Active;
}

export default function PersonMenu({ active }: PersonMenuProps) {
    return (
        <ul>
            <li>
                <MenuItem href="/stillinger" active={active} id="ledige-stillinger">
                    Ledige stillinger
                </MenuItem>
            </li>
            <li>
                <MenuItem href="/ung" active={active} id="ung">
                    Ung
                </MenuItem>
            </li>
            <li className="arb-header-divider">
                <MenuItem href="/bedrift" id="for-bedrifter">
                    For bedrifter
                </MenuItem>
            </li>
        </ul>
    );
}
