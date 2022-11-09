import React, { useEffect, useState } from "react";
import { getTemperaments } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";

export default function DogsCreate() {
  const dispatch = useDispatch();
  const temperamentsDB = useSelector((state) => state.temperaments);
  console.log(temperamentsDB);
  let [input, setInput] = useState({
    name: "",
    minHeight: "",
    maxHeight: "",
    minWeight: "",
    maxWeight: "",
    life_span: "",
    breed_group: "",
    origin: "",
    img: "",
    temperaments: [],
  });

  let handleOnChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  return (
    <>
      <div>Create Dog</div>
      <br />
      <form>
        <div>
          <label>Name</label>
          <input
            type={"text"}
            value={input.name}
            name={"name"}
            placeholder={"Enter a name"}
            onChange={handleOnChange}
          />
          <label>Origen</label>
          <input
            type={"text"}
            value={input.origin}
            name={"origin"}
            placeholder={"Enter a Country"}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label>Height</label>
          <br />
          <input
            type={"number"}
            value={input.minHeight}
            name={"minHeight"}
            onChange={handleOnChange}
          />
          <input
            type={"number"}
            value={input.maxHeight}
            name={"maxHeight"}
            onChange={handleOnChange}
          />
          <br />
          <label>Weight</label>
          <br />
          <input
            type={"number"}
            value={input.minWeight}
            name={"minWeight"}
            onChange={handleOnChange}
          />
          <input
            type={"number"}
            value={input.maxWeight}
            name={"maxWeight"}
            onChange={handleOnChange}
          />
          <br />
          <label>Life Span</label>
          <br />
          <input
            type={"number"}
            value={input.life_span}
            name={"life_span"}
            onChange={handleOnChange}
          />
          <br />
          <label>breed_group</label>
          <br />
          <input
            type={"text"}
            value={input.breed_group}
            name={"breed_group"}
            placeholder={"Enter a Breed"}
            onChange={handleOnChange}
          />
          <br />
          <label>Imagen</label>
          <br />
          <input
            type={"file"}
            accept={"image/*"}
            value={input.img}
            name={"img"}
            onChange={handleOnChange}
          />
          <br />
          <label>temperaments</label>
          <br />
          <select>
            {temperamentsDB &&
              temperamentsDB.map((t) => {
                return <option value={t.name}>{t.name}</option>;
              })}
          </select>
        </div>
        <input type={"submit"} value={"SubmitDog"} />
      </form>
    </>
  );
}
