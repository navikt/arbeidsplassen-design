import MenuItem from "./MenuItem";
import type { Active } from "../types";

interface PersonMenuProps {
    active?: Active;
    showMuligheter?: boolean;
}

export default function PersonMenu({ active, showMuligheter }: PersonMenuProps) {
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
            <li>
                <MenuItem href="/sommerjobb" active={active} id="sommerjobb">
                    Sommerjobben {new Date().getFullYear()} ☀️
                </MenuItem>
            </li>

            {showMuligheter && (
                <li>
                    <MenuItem href="/muligheter" active={active} id="muligheter">
                        Reserverte stillinger
                    </MenuItem>
                </li>
            )}
            <li className="arb-header-divider">
                <MenuItem href="/bedrift" id="for-bedrifter">
                    For bedrifter
                </MenuItem>
            </li>
        </ul>
    );
}
