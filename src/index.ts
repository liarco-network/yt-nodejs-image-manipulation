/**
 * This project was created for educational purposes only.
 * Use it at your own risk, under the terms of the MIT license which is packed
 * with the code in the LICENSE file.
 *
 * @author Marco Lipparini <developer@liarco.net>
 */

//import jimp from "jimp";
import jimp from "jimp-native";

const BACKGROUND_LAYER = "Background - Grey";
const BODY_LAYER_WHITE = "Body - White";
const BODY_LAYER_ZOMBIE = "Body - Zombie";
const HAT_LAYER_FULL = "Head - Black Bucket";
const HAT_LAYER_BACK = "Head - Black Bucket - Advanced - Back";
const HAT_LAYER_FRONT = "Head - Black Bucket - Advanced - Front";

const main = async () => {
  const background = await jimp.read(`${__dirname}/../data/${BACKGROUND_LAYER}.png`);

  const tokenImage = new jimp(
    600, 600,
    "transparent",
    (err) => {
      if (err) throw err;
    },
  );

  tokenImage.blit(background, 0, 0);

  tokenImage.write(`${__dirname}/../out/token.png`);
};

main();
