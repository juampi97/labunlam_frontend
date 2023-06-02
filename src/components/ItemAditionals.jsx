
import React from "react";
// Import hook react
import { useState } from "react";

const ItemsAditionals = (props) => {
  const [hdmiAditionalState, sethdmiAditionalState] = useState(false);
  const [vgaAditionalState, setvgaAditionalState] = useState(false);

  function handlehdmiAditionalStateChange() {
    sethdmiAditionalState(!hdmiAditionalState);
    props.enviarCheckbox(!hdmiAditionalState, vgaAditionalState);
  }

  function handlevgaAditionalStateChange() {
    setvgaAditionalState(!vgaAditionalState);
    props.enviarCheckbox(hdmiAditionalState, !vgaAditionalState);
  }

  if(props.hdmi === 0) {
    return (
        <div className="my-3 d-flex flex-column item_card_proyectores_aditionals">
          <p>El maletín incluye alimentación, cabla VGA y zapatilla multitoma.</p>
          <div className="">
            <label>
              <input
                type="checkbox"
                checked={vgaAditionalState}
                onChange={handlevgaAditionalStateChange}
                />
                <span className="ps-2">Zapatilla - OPCIONAL</span>
            </label>
          </div>
        </div>
      );
    }

  return (
    <div className="my-3 d-flex flex-column item_card_proyectores_aditionals">
      <p>El maletín incluye alimentación, cabla VGA y zapatilla multitoma.</p>
      <div>
        <label className="mb-2">
          <input
            type="checkbox"
            checked={hdmiAditionalState}
            onChange={handlehdmiAditionalStateChange}
            />
            <span className="ps-2">HDMI - OPCIONAL</span>
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={vgaAditionalState}
            onChange={handlevgaAditionalStateChange}
            />
            <span className="ps-2">Zapatilla - OPCIONAL</span>
        </label>
      </div>
    </div>
  );
};

export default ItemsAditionals;