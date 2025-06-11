import { useState } from "react";

export const Task2 = () => {
  const [img, setImg] = useState<string>("");

  const getImg = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    if (data) {
      setImg(data.message);
    }
  };

  return (
    <>
      <h1>Получение случайной картинки</h1>
      <button onClick={getImg}>Получить картинку</button>
      {img && (
        <img
          style={{ width: "200px", height: "200px" }}
          src={img}
          alt="Пока картинка не получена"
        />
      )}
    </>
  );
};
