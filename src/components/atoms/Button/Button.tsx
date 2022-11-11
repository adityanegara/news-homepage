import { useState, useEffect, MouseEvent } from "react";
import "./Button.css";

interface ContainerProps {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface Coordinate {
  x: number;
  y: number;
}

const Button = ({ children, onClick }: ContainerProps): JSX.Element => {
  const [coordinate, setCoordinate] = useState<Coordinate>({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = useState<boolean>(false);

  useEffect(() => {
    if (coordinate.x !== -1 && coordinate.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 300);
    } else {
      setIsRippling(false);
    }
  }, [coordinate]);

  useEffect(() => {
    if (!isRippling) {
      setCoordinate({ x: -1, y: -1 });
    }
  }, [isRippling]);

  return (
    <button
      className="ripple-button"
      onClick={(e: MouseEvent<HTMLButtonElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setCoordinate({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        onClick && onClick(e);
      }}
    >
      {isRippling ? (
        <span
          className="ripple"
          style={{
            left: coordinate.x,
            top: coordinate.y,
          }}
        />
      ) : (
        ""
      )}
      <span className="content">{children}</span>
    </button>
  );
};

export default Button;
