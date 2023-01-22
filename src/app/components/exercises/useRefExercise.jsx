import React, { useRef, useState } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const [isClicked, setIsClicked] = useState(false);

    const block = useRef(null);

    const handleClick = () => {
        let height, width, innerHTML;
        if (!isClicked) {
            height = "150px";
            width = "80px";
            innerHTML = "<small>Text</small>";
        } else {
            height = "40px";
            width = "60px";
            innerHTML = "<small>Блок</small>";
        }

        block.current.style.height = height;
        block.current.style.width = width;
        block.current.innerHTML = innerHTML;

        setIsClicked((prevState) => !prevState);
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                ref={block}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small>Блок</small>
            </div>
            <button className="btn btn-primary mt-2" onClick={handleClick}>
                Изменить блок
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
