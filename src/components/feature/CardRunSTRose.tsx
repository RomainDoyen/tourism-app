import "./CardMap.css";
import { CardRunSTRoseProps } from "../../types/feature_types";

export default function CardRunSTRose({ onMapHover, highlightedItem }: CardRunSTRoseProps) {
  return (
    <svg version="1.1" id="Calque_31" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 3508 2480"
      style={{ enableBackground: "new 0 0 3508 2480" }}
      xmlSpace="preserve"
    >
      <g>
        <polygon
          className={highlightedItem === 0 ? 'highlighted' : ''}
          onMouseEnter={() => onMapHover(0)}
          points="2501,1575 2168,1705 1847,2358 2917,2463 3051,1776 2501,1575"
        />
        <polygon
          className={highlightedItem === 1 ? 'highlighted' : ''}
          onMouseEnter={() => onMapHover(1)}
          points="2501.1,1575.5 2414.5,1260.9 3280.4,899.2 3419,1308.1 3198.2,1378.9 3051,1776"
        />
        <polygon
          className={highlightedItem === 2 ? 'highlighted' : ''}
          onMouseEnter={() => onMapHover(2)}
          points="2834.5,521.8 2098.4,1025 2414.5,1257 3280.4,899.2 3224.2,741.9"
        />
        <polygon
          className={highlightedItem === 3 ? 'highlighted' : ''}
          onMouseEnter={() => onMapHover(3)}
          points="2098.4,1025 1795.3,1048.6 2449.1,427.4 2834.5,521.8"
        />
        <polygon
          className={highlightedItem === 4 ? 'highlighted' : ''}
          onMouseEnter={() => onMapHover(4)}
          points="1795.3,1048.6 1544.2,1080.1 1613.5,482.4 2120,105 2449.1,427.4"
        />
        <polygon
          className={highlightedItem === 5 ? 'highlighted' : ''}
          onMouseEnter={() => onMapHover(5)}
          points="305.8,1595.1 1249.7,1166.6 1544.2,1080.1 1812.6,1048.6 2098.4,1025 2414.5,1257 2501.1,1575.5 2167.7,1705.2 1847.3,2357.9 639.2,2287.1 111,2204.5 227.9,1776"
        />
      </g>
    </svg>
  );
}
