import "./CardMap.css";

interface CardRunSTRoseProps {
  onMapClick: (index: number) => void;
}

export default function CardRunSTRose({ onMapClick }: CardRunSTRoseProps) {
  return (
    <svg version="1.1" id="Calque_31" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 3508 2480" style="enable-background:new 0 0 3508 2480;" xmlSpace="preserve">
      <g>
        <polygon onMouseEnter={() => onMapClick(0)} points="686.5,222.5 764.5,304.5 851.5,328.5 941.5,384.5 986.5,528.5 935.5,546.5 845.5,808.5 344.5,777.5 
          222.5,756.5 249.5,649.5 267.5,601.5 485.5,492.5 554.5,469.5 569.5,318.5 	"/>
        <polygon onMouseEnter={() => onMapClick(1)} points="901.1,646.7C856,633,774,596,774,596l-77,33l-74.1,165.7L845,808L901.1,646.7z"/>
        <polygon onMouseEnter={() => onMapClick(2)} points="774,596 754,516 954,424 986,528 935,546 901,647 	"/>
        <polygon onMouseEnter={() => onMapClick(3)} points="851,328 681,456 754,515 954,424 941,384 	"/>
        <polygon onMouseEnter={() => onMapClick(4)} points="681,456 611,462 762,304 851,328 	"/>
        <polygon onMouseEnter={() => onMapClick(5)} points="611,462 553,470 569,318 686,222 762,304 	"/>
      </g>
    </svg>
  );
}

