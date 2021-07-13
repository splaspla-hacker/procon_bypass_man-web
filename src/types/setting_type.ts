import { Button } from "./button";

type Flip = {
  [key in Button]? : {
   if_pressed: Array<Button>,
   force_neutral: Button,
  }
}

type Macro = {
  [key in Button]? : {
    if_pressed: Array<Button>,
  }
}

type Remap = {
  [key in Button]? : {
    to: Button,
  }
}

export type SettingType = {
  prefix_keys_for_changing_layer: Array<Button>;
  layers: {
    [key in layerKey]? : {
      flip: Flip,
      macro: Macro,
      remap: Remap,
    }
  }
}
