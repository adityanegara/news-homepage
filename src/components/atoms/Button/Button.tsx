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

const DEFAULT_COORDINATE = {
  x: -1,
  y: -1,
};

const Button = ({ children, onClick }: ContainerProps): JSX.Element => {
  const [coordinate, setCoordinate] = useState<Coordinate>(DEFAULT_COORDINATE);
  const [isRippling, setIsRippling] = useState<boolean>(false);

  const checkCoordinate = (x: number, y: number) => {
    return x !== DEFAULT_COORDINATE.x && y !== DEFAULT_COORDINATE.y
      ? true
      : false;
  };

  const stopRipple = async (time: number) => {
    await setTimeout(() => setIsRippling(false), time);
  };

  const resetCoordinate = () => {
    setCoordinate(DEFAULT_COORDINATE);
  };

  useEffect(() => {
    if (checkCoordinate(coordinate.x, coordinate.y)) {
      setIsRippling(true);
      stopRipple(1000);
    } else {
      setIsRippling(false);
    }
  }, [coordinate]);

  useEffect(() => {
    if (!isRippling) {
      resetCoordinate();
    }
  }, [isRippling]);

  const renderRipple = (
    isRippling: boolean,
    coordinateX: number,
    coordinateY: number
  ) => {
    return isRippling ? (
      <span
        className="ripple"
        style={{ left: coordinateX, top: coordinateY }}
      />
    ) : (
      ""
    );
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoordinate({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    onClick && onClick(e);
  };
  return (
    <button className="ripple-button" onClick={handleClick}>
      {renderRipple(isRippling, coordinate.x, coordinate.y)}
      <span className="content">{children}</span>
    </button>
  );
};

export default Button;
